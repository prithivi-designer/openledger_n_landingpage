import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GsapNoiseOverlay from './GsapNoiseOverlay';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const CARD_STROKE = 'var(--border-subtle)';
const CARD_STROKE_HOVER = 'var(--border-strong)';
const CARD_BG = 'var(--bg-card)';

// Larger, cinematic card sizing matching DeepMind reference
const CARD_WIDTH = { xs: '320px', sm: '370px', md: '410px', lg: '420px' };
const CARD_HEIGHT = { xs: '560px', sm: '590px', md: 'min(620px, 64vh)', lg: '620px' };
const CARD_GAP = { xs: 2.5, sm: 3.5, md: 4.5 }; // 20px, 28px, 36px

const IMAGINE_ASSETS = [
  { id: 'portrait', label: 'Portrait', src: '/images/imagine_portrait.jpg' },
  { id: 'magazine', label: 'Editorial', src: '/images/imagine_magazine.jpg' },
  { id: 'sneaker', label: 'Product', src: '/images/imagine_sneaker.jpg' },
];

export default function ProductMatrixSection() {
  const sectionRef = React.useRef(null);
  const pinContainerRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const scrollTriggerRef = React.useRef(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [imagineIndex, setImagineIndex] = React.useState(0);
  const [leftOffset, setLeftOffset] = React.useState(null);

  // Measure exact pixel offset where the title starts so card 1 aligns identically
  const updateOffset = React.useCallback(() => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      setLeftOffset(rect.left);
    }
  }, []);

  // Check scroll position to update arrow states on mobile touch
  const checkScroll = React.useCallback(() => {
    if (!trackRef.current || (typeof window !== 'undefined' && window.innerWidth >= 900)) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  // Set up GSAP ScrollTrigger with GPU-composited x translation for silky 60/120fps motion
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let mm = gsap.matchMedia();

    mm.add('(min-width: 900px)', () => {
      const getDistance = () => {
        if (!trackRef.current) return 0;
        return trackRef.current.scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(trackRef.current, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinContainerRef.current,
          scrub: 1.2, // Velvety, smooth easing with natural inertia
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setCanScrollLeft(self.progress > 0.02);
            setCanScrollRight(self.progress < 0.96);
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger;

      return () => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
        scrollTriggerRef.current = null;
        if (trackRef.current) {
          gsap.set(trackRef.current, { clearProps: 'transform,x' });
        }
      };
    });

    return () => mm.revert();
  }, []);

  // Window resize & layout tracking
  React.useEffect(() => {
    updateOffset();
    checkScroll();

    const rafId = requestAnimationFrame(updateOffset);
    const handleResize = () => {
      updateOffset();
      checkScroll();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    const el = trackRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
    }

    let ro;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      ro = new ResizeObserver(() => {
        updateOffset();
        checkScroll();
        ScrollTrigger.refresh();
      });
      ro.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (el) el.removeEventListener('scroll', checkScroll);
      if (ro) ro.disconnect();
    };
  }, [checkScroll, updateOffset]);

  // Handle trackpad horizontal gestures during pin
  const handleWheel = React.useCallback((e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 4) {
      if (scrollTriggerRef.current && scrollTriggerRef.current.isActive) {
        if (window.lenis) {
          window.lenis.scrollTo(window.lenis.scroll + e.deltaX * 1.5, {
            duration: 0.4,
          });
        } else {
          window.scrollBy({ top: e.deltaX, behavior: 'auto' });
        }
      }
    }
  }, []);

  const handleScroll = (direction) => {
    if (!trackRef.current) return;
    const firstCard = trackRef.current.children[0];
    const cardWidth = firstCard ? firstCard.offsetWidth : 420;
    const computedGap =
      parseFloat(window.getComputedStyle(trackRef.current).gap) || 36;
    const scrollAmount = cardWidth + computedGap;

    const trigger = scrollTriggerRef.current;
    if (trigger && typeof window !== 'undefined' && trigger.isActive) {
      const scrollDistance = trigger.end - trigger.start;
      const maxScroll = trackRef.current.scrollWidth - window.innerWidth;

      if (maxScroll > 0) {
        const stepRatio = scrollAmount / maxScroll;
        const currentProgress = trigger.progress;
        const targetProgress =
          direction === 'left'
            ? Math.max(0, currentProgress - stepRatio)
            : Math.min(1, currentProgress + stepRatio);

        const targetY = trigger.start + targetProgress * scrollDistance;

        if (window.lenis) {
          window.lenis.scrollTo(targetY, {
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          gsap.to(window, {
            scrollTo: { y: targetY, autoKill: false },
            duration: 0.8,
            ease: 'power2.out',
          });
        }
        return;
      }
    }

    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="ecosystem"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '340vh' },
        backgroundColor: 'var(--bg-section)',
        color: 'var(--text-primary)',
      }}
    >
      {/* Pinned Viewport Container - Centered within 100vh on desktop while scrolling */}
      <Box
        ref={pinContainerRef}
        onWheel={handleWheel}
        sx={{
          position: { xs: 'relative', md: 'sticky' },
          top: 0,
          height: { xs: 'auto', md: '100vh' },
          maxHeight: { md: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 6, md: 2 },
          overflow: 'hidden',
          boxSizing: 'border-box',
          backgroundColor: 'var(--bg-section)',
        }}
      >
        {/* GSAP-Powered Film-Grain Noise Animation Layer */}
        <GsapNoiseOverlay opacity={0.055} fps={24} />

        {/* Ambient background lighting */}
        <Box
          data-ambient-blur="true"
          sx={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: '350px', md: '900px' },
            height: { xs: '350px', md: '500px' },
            background:
              'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.01) 50%, transparent 75%)',
            filter: 'blur(100px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* SECTION HEADER (Aligned with other sections using standard Container maxWidth="lg") */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            px: { xs: 2.5, sm: 3, md: 4 },
            mb: { xs: 2.5, md: 3 },
          }}
        >
          <Typography
            ref={titleRef}
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' },
              fontWeight: 500,
              letterSpacing: '-0.025em',
              color: 'var(--text-heading)',
              display: 'inline-block',
            }}
          >
            OpenLedger Ecosystem
          </Typography>
        </Container>

        {/* CAROUSEL HORIZONTAL WRAPPER (Hides overflow on desktop for GPU transform) */}
        <Box
          sx={{
            width: '100%',
            overflow: { xs: 'visible', md: 'hidden' },
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box
            ref={trackRef}
            id="ecosystem-cards-track"
            sx={{
              display: 'flex',
              gap: CARD_GAP,
              width: { xs: '100%', md: 'max-content' },
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              py: 2,
              pl:
                leftOffset !== null
                  ? `${leftOffset}px`
                  : {
                      xs: '20px',
                      sm: '24px',
                      md: '32px',
                      lg: 'max(32px, calc((100% - 1200px) / 2 + 32px))',
                    },
              pr: { xs: '20px', sm: '24px', md: '48px', lg: '64px' },
              overflowX: { xs: 'auto', md: 'visible' },
              scrollSnapType: { xs: 'x mandatory', md: 'none' },
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
        {/* ------------------------------------------------------------- */}
        {/* CARD 1: CHAT                                                  */}
        {/* ------------------------------------------------------------- */}
        <Box
          sx={{
            flex: '0 0 auto',
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            backgroundColor: CARD_BG,
            border: `1px solid ${CARD_STROKE}`,
            borderRadius: '26px',
            p: { xs: 2.5, sm: 3, md: 3.5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            scrollSnapAlign: 'start',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                borderColor: CARD_STROKE_HOVER,
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.65), 0 0 24px rgba(255, 255, 255, 0.03)',
              },
            }}
          >
            {/* Top Text Header */}
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-heading)',
                  letterSpacing: '-0.015em',
                  mb: 0.6,
                }}
              >
                Chat
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.845rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                }}
              >
                Conversational intelligence and multi-turn contextual dialogue
              </Typography>
            </Box>

            {/* Chat Flow UI Placeholder */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 1.3,
                my: 1,
              }}
            >
              {/* User Bubble 1 */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box
                  sx={{
                    maxWidth: '85%',
                    backgroundColor: 'var(--chat-user-bg)',
                    border: '1px solid var(--chat-user-border)',
                    borderRadius: '16px',
                    px: 1.8,
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.78rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.4,
                    }}
                  >
                    Explain quantum entanglement simply
                  </Typography>
                </Box>
              </Box>

              {/* Bot Bubble 1 */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box
                  sx={{
                    maxWidth: '92%',
                    backgroundColor: 'var(--chat-bot-bg)',
                    border: '1px solid var(--chat-bot-border)',
                    borderRadius: '16px',
                    px: 1.8,
                    py: 1.2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    Two particles become linked — measuring one instantly determines the other,
                    regardless of distance.
                  </Typography>
                </Box>
              </Box>

              {/* User Bubble 2 */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Box
                  sx={{
                    maxWidth: '80%',
                    backgroundColor: 'var(--chat-user-bg)',
                    border: '1px solid var(--chat-user-border)',
                    borderRadius: '16px',
                    px: 1.8,
                    py: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.78rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.4,
                    }}
                  >
                    Why is the sky blue?
                  </Typography>
                </Box>
              </Box>

              {/* Bot Bubble 2 */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Box
                  sx={{
                    maxWidth: '92%',
                    backgroundColor: 'var(--chat-bot-bg)',
                    border: '1px solid var(--chat-bot-border)',
                    borderRadius: '16px',
                    px: 1.8,
                    py: 1.2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    Shorter blue wavelengths scatter more off air molecules than longer red ones.
                  </Typography>
                </Box>
              </Box>

              {/* Faded peek */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', opacity: 0.35 }}>
                <Box
                  sx={{
                    maxWidth: '80%',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    px: 1.8,
                    py: 0.8,
                  }}
                >
                  <Typography sx={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                    How do black holes form?
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Bottom Learn More Pill Button */}
            <Box sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '0.8125rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 2.5,
                  py: 0.7,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.14)',
                    borderColor: 'rgba(255, 255, 255, 0.28)',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          {/* ------------------------------------------------------------- */}
          {/* CARD 2: BUILD                                                 */}
          {/* ------------------------------------------------------------- */}
          <Box
            sx={{
              flex: '0 0 auto',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              backgroundColor: CARD_BG,
              border: `1px solid ${CARD_STROKE}`,
              borderRadius: '26px',
              p: { xs: 2.5, sm: 3, md: 3.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              scrollSnapAlign: 'start',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                borderColor: CARD_STROKE_HOVER,
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.65), 0 0 24px rgba(255, 255, 255, 0.03)',
              },
            }}
          >
            {/* Top Text Header */}
            <Box sx={{ mb: 1.5 }}>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-heading)',
                  letterSpacing: '-0.015em',
                  mb: 0.6,
                }}
              >
                Build
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.845rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                }}
              >
                CLI code synthesis, automated debugging, and live route patching
              </Typography>
            </Box>

            {/* macOS Terminal Window UI Placeholder */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                p: 1.6,
                my: 1,
              }}
            >
              {/* Terminal Window Bar */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  pb: 1,
                  mb: 1,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.7 }}>
                  <Box
                    sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF5F56' }}
                  />
                  <Box
                    sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FFBD2E' }}
                  />
                  <Box
                    sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#27C93F' }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: '0.7rem',
                    color: 'rgba(255, 255, 255, 0.45)',
                  }}
                >
                  projects/main
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: '0.68rem',
                    color: 'rgba(255, 255, 255, 0.45)',
                  }}
                >
                  16.15%
                </Typography>
              </Box>

              {/* Code Snippet & CLI Trace */}
              <Box
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '0.73rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.6,
                }}
              >
                <Box sx={{ color: '#F3F4F6' }}>
                  <Box component="span" sx={{ color: '#38BDF8', mr: 0.8 }}>
                    ›
                  </Box>
                  Add rate limiting to all API routes.
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', pl: 1 }}>
                  ⋮ Thinking...
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.6, color: 'rgba(255,255,255,0.65)', pl: 1 }}>
                  <Box component="span" sx={{ color: '#10B981' }}>
                    ▶
                  </Box>
                  <Box component="span" sx={{ color: '#38BDF8' }}>
                    grep
                  </Box>
                  <span>"rateLimit" src/</span>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'rgba(255,255,255,0.5)',
                    pl: 1,
                  }}
                >
                  <span>| Scan handlers</span>
                  <Box
                    component="span"
                    sx={{ color: '#34D399', backgroundColor: 'rgba(52,211,153,0.1)', px: 0.5, borderRadius: '3px' }}
                  >
                    [done]
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.6, color: 'rgba(255,255,255,0.45)', pl: 1 }}>
                  <Box component="span" sx={{ color: '#C084FC' }}>
                    ✦
                  </Box>
                  <span>Edit src/api/routes.ts</span>
                </Box>
                {/* Diff box */}
                <Box
                  sx={{
                    backgroundColor: 'rgba(34, 197, 94, 0.12)',
                    color: '#4ADE80',
                    px: 0.8,
                    py: 0.4,
                    borderRadius: '4px',
                    borderLeft: '2px solid #22C55E',
                    mt: 0.4,
                  }}
                >
                  16 await rateLimit(req, &#123; max: 100 &#125;);
                </Box>
              </Box>
            </Box>

            {/* Bottom Learn More Pill Button */}
            <Box sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '0.8125rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 2.5,
                  py: 0.7,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.14)',
                    borderColor: 'rgba(255, 255, 255, 0.28)',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          {/* ------------------------------------------------------------- */}
          {/* CARD 3: AGENT (Explicitly "Agent" instead of "Bot")           */}
          {/* ------------------------------------------------------------- */}
          <Box
            sx={{
              flex: '0 0 auto',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              backgroundColor: CARD_BG,
              border: '1px solid rgba(255, 255, 255, 0.35)', // Active highlight card matching Gemini Omni
              borderRadius: '26px',
              p: { xs: 2.5, sm: 3, md: 3.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.55), 0 0 20px rgba(255, 255, 255, 0.02)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              scrollSnapAlign: 'start',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.45)',
                transform: 'translateY(-4px)',
                boxShadow: '0 24px 54px rgba(0, 0, 0, 0.75), 0 0 28px rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            {/* Top Text Header */}
            <Box sx={{ mb: 1.5 }}>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-heading)',
                  letterSpacing: '-0.015em',
                  mb: 0.6,
                }}
              >
                Agent
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.845rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                }}
              >
                Autonomous routine execution, intelligent reconciliation, and proactive action
              </Typography>
            </Box>

            {/* Autonomous Agent Routine UI Placeholder */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 1.8,
                my: 1,
              }}
            >
              {/* Top fade snippet */}
              <Box sx={{ display: 'flex', justifyContent: 'center', opacity: 0.25 }}>
                <Box
                  sx={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)',
                    borderRadius: '14px',
                    px: 2.5,
                    py: 0.4,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <Typography sx={{ fontSize: '0.74rem', color: '#FFFFFF' }}>me?</Typography>
                </Box>
              </Box>

              {/* Agent Conversation Bubble */}
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.72)',
                    lineHeight: 1.55,
                  }}
                >
                  i'll match every charge to a receipt and file the report. anything that doesn't
                  line up, i ask instead of guessing.
                </Typography>
              </Box>

              {/* Routine Tag */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.7,
                    px: 1.6,
                    py: 0.5,
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.035)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                  }}
                >
                  <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.45)' }}>
                    Created routine
                  </Typography>
                  <AccessTimeIcon sx={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.55)' }} />
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                    }}
                  >
                    Month-end close
                  </Typography>
                </Box>
              </Box>

              {/* Orange Agent Avatar & Status */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4, pl: 0.5 }}>
                {/* Orange Avatar Circle */}
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF7A30 0%, #F15424 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 14px rgba(241, 84, 36, 0.35)',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: '2.5px', alignItems: 'center' }}>
                    <Box
                      sx={{ width: 2, height: 6, borderRadius: '1.5px', backgroundColor: '#1E0E05' }}
                    />
                    <Box
                      sx={{ width: 2, height: 6, borderRadius: '1.5px', backgroundColor: '#1E0E05' }}
                    />
                  </Box>
                </Box>

                {/* Status */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.55)' }}>
                    Exploring
                  </Typography>
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      backgroundColor: '#FF7A30',
                      boxShadow: '0 0 8px #FF7A30',
                      animation: 'pulseDot 2s infinite ease-in-out',
                      '@keyframes pulseDot': {
                        '0%, 100%': { opacity: 0.4, transform: 'scale(0.8)' },
                        '50%': { opacity: 1, transform: 'scale(1.2)' },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Bottom Learn More Pill Button */}
            <Box sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '0.8125rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 2.5,
                  py: 0.7,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.14)',
                    borderColor: 'rgba(255, 255, 255, 0.28)',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          {/* ------------------------------------------------------------- */}
          {/* CARD 4: IMAGINE (Full un-cut media matching DeepMind Card 3 & 4)*/}
          {/* ------------------------------------------------------------- */}
          <Box
            sx={{
              flex: '0 0 auto',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              backgroundColor: CARD_BG,
              border: `1px solid ${CARD_STROKE}`,
              borderRadius: '26px',
              p: { xs: 2.5, sm: 3, md: 3.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              scrollSnapAlign: 'start',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                borderColor: CARD_STROKE_HOVER,
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.65), 0 0 24px rgba(255, 255, 255, 0.03)',
                '& .full-bg-img': { transform: 'scale(1.04)' },
              },
            }}
          >
            {/* Full-bleed background image - zero cuts */}
            <Box
              component="img"
              className="full-bg-img"
              src={IMAGINE_ASSETS[imagineIndex].src}
              alt={IMAGINE_ASSETS[imagineIndex].label}
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                zIndex: 0,
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
              }}
            />

            {/* Gradient protection overlay for typography & button legibility */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(7, 8, 11, 0.88) 0%, rgba(7, 8, 11, 0.2) 35%, rgba(7, 8, 11, 0.25) 60%, rgba(7, 8, 11, 0.88) 100%)',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />

            {/* Top Text Header & Asset Switcher */}
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  letterSpacing: '-0.015em',
                  mb: 0.6,
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                Imagine
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.845rem',
                  color: 'rgba(255, 255, 255, 0.82)',
                  lineHeight: 1.45,
                  mb: 1.5,
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                State-of-the-art visual generation and multi-modal creative synthesis
              </Typography>

              {/* Asset Selector Pills - Switch between Portrait, Editorial & Product without any cuts */}
              <Box sx={{ display: 'flex', gap: 0.8 }}>
                {IMAGINE_ASSETS.map((asset, idx) => (
                  <Box
                    key={asset.id}
                    onClick={() => setImagineIndex(idx)}
                    sx={{
                      px: 1.4,
                      py: 0.4,
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)',
                      backgroundColor:
                        imagineIndex === idx
                          ? 'rgba(255, 255, 255, 0.25)'
                          : 'rgba(0, 0, 0, 0.45)',
                      border: `1px solid ${
                        imagineIndex === idx
                          ? 'rgba(255, 255, 255, 0.4)'
                          : 'rgba(255, 255, 255, 0.12)'
                      }`,
                      color: imagineIndex === idx ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    {asset.label}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Bottom Learn More Pill Button */}
            <Box sx={{ position: 'relative', zIndex: 2, pt: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#FFFFFF',
                  fontSize: '0.8125rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 2.5,
                  py: 0.7,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.22)',
                    borderColor: 'rgba(255, 255, 255, 0.45)',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          {/* ------------------------------------------------------------- */}
          {/* CARD 5: VOICE                                                 */}
          {/* ------------------------------------------------------------- */}
          <Box
            sx={{
              flex: '0 0 auto',
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              backgroundColor: CARD_BG,
              border: `1px solid ${CARD_STROKE}`,
              borderRadius: '26px',
              p: { xs: 2.5, sm: 3, md: 3.5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              scrollSnapAlign: 'start',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                borderColor: CARD_STROKE_HOVER,
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 48px rgba(0, 0, 0, 0.65), 0 0 24px rgba(255, 255, 255, 0.03)',
                '& .voice-orb-thumb': {
                  transform: 'scale(1.05) rotate(4deg)',
                },
              },
            }}
          >
            {/* Top Text Header */}
            <Box sx={{ mb: 1.5 }}>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-heading)',
                  letterSpacing: '-0.015em',
                  mb: 0.6,
                }}
              >
                Voice
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.845rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                }}
              >
                Low-latency conversational speech, acoustic nuances, and voice reasoning
              </Typography>
            </Box>

            {/* Center Iridescent 3D Voice Orb UI Placeholder */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                my: 1,
              }}
            >
              {/* Violet / Blue Backlight Aura */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(168, 85, 247, 0.24) 0%, rgba(59, 130, 246, 0.14) 45%, transparent 70%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                }}
              />

              {/* Orb Image */}
              <Box
                component="img"
                className="voice-orb-thumb"
                src="/images/voice_orb.jpg"
                alt="3D Voice AI Chromatic Orb"
                sx={{
                  width: { xs: '200px', sm: '230px', md: '250px' },
                  height: { xs: '200px', sm: '230px', md: '250px' },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  boxShadow:
                    '0 0 36px rgba(168, 85, 247, 0.28), 0 10px 30px rgba(0, 0, 0, 0.85)',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
            </Box>

            {/* Bottom Learn More Pill Button */}
            <Box sx={{ pt: 2, borderTop: '1px solid var(--border-subtle)' }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '9999px',
                  backgroundColor: 'var(--bg-pill)',
                  border: '1px solid var(--border-normal)',
                  color: 'var(--text-heading)',
                  fontSize: '0.8125rem',
                  textTransform: 'none',
                  fontWeight: 500,
                  px: 2.5,
                  py: 0.7,
                  '&:hover': {
                    backgroundColor: 'var(--bg-card-hover)',
                    borderColor: 'var(--border-strong)',
                  },
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ========================================================================= */}
      {/* BOTTOM NAVIGATION ARROWS [ < ] [ > ] (Aligned with page margins)          */}
      {/* ========================================================================= */}
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2.5, sm: 3, md: 4 },
          mt: { xs: 2, md: 2.5 },
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          {/* Previous Arrow */}
          <IconButton
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous card"
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: 'var(--bg-pill)',
              border: '1px solid var(--border-normal)',
              color: 'var(--text-heading)',
              transition: 'all 0.2s ease',
              opacity: canScrollLeft ? 1 : 0.35,
              cursor: canScrollLeft ? 'pointer' : 'default',
              '&:hover': {
                backgroundColor: canScrollLeft
                  ? 'var(--bg-card-hover)'
                  : 'var(--bg-pill)',
                borderColor: canScrollLeft ? 'var(--border-strong)' : 'var(--border-normal)',
                transform: canScrollLeft ? 'translateX(-2px)' : 'none',
              },
            }}
          >
            <ArrowBackIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>

          {/* Next Arrow */}
          <IconButton
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Next card"
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: 'var(--bg-pill)',
              border: '1px solid var(--border-normal)',
              color: 'var(--text-heading)',
              transition: 'all 0.2s ease',
              opacity: canScrollRight ? 1 : 0.35,
              cursor: canScrollRight ? 'pointer' : 'default',
              '&:hover': {
                backgroundColor: canScrollRight
                  ? 'var(--bg-card-hover)'
                  : 'var(--bg-pill)',
                borderColor: canScrollRight ? 'var(--border-strong)' : 'var(--border-normal)',
                transform: canScrollRight ? 'translateX(2px)' : 'none',
              },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  </Box>
  );
}
