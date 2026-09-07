import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  window.ScrollTrigger = ScrollTrigger;
}

const TABS = [
  {
    id: 'private',
    label: 'Private access',
    imageSrc: '/images/Privacy.jpg',
  },
  {
    id: 'multimodel',
    label: 'Multi models Access',
    imageSrc: '/images/multimodel.jpg',
  },
  {
    id: 'memory',
    label: 'Portable Memory',
    imageSrc: '/images/Portable%20memory.jpg',
  },
  {
    id: 'agents',
    label: 'Build for agents',
    imageSrc: '/images/Build%20for%20agents.jpg',
  },
];

export default function CoreFeaturesSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  const sectionRef = React.useRef(null);
  const pinContainerRef = React.useRef(null);
  const imageContainerRef = React.useRef(null);
  const tabBarRef = React.useRef(null);
  const pillRef = React.useRef(null);
  const imageRefs = React.useRef([]);
  const scrollTriggerRef = React.useRef(null);
  const lastActiveTabRef = React.useRef(0);
  const isClickingRef = React.useRef(false);

  // Helper to get exact horizontal offset of each tab button relative to tab 0
  const getTabPositions = React.useCallback(() => {
    if (typeof document === 'undefined') return [0, 0, 0, 0];
    const b0 = document.getElementById('tab-btn-0');
    const b1 = document.getElementById('tab-btn-1');
    const b2 = document.getElementById('tab-btn-2');
    const b3 = document.getElementById('tab-btn-3');
    if (!b0 || !b1 || !b2 || !b3) {
      const w = tabBarRef.current ? (tabBarRef.current.offsetWidth - 10) / 4 : 0;
      return [0, w, w * 2, w * 3];
    }
    const x0 = b0.offsetLeft;
    return [
      0,
      b1.offsetLeft - x0,
      b2.offsetLeft - x0,
      b3.offsetLeft - x0,
    ];
  }, []);

  // Initialize GSAP ScrollTrigger with ease-in-out transitions and resting dwell plateaus
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let mm = gsap.matchMedia();

    mm.add('(min-width: 900px)', () => {
      // Ensure pill width perfectly matches the first tab button
      const b0 = document.getElementById('tab-btn-0');
      if (b0 && pillRef.current) {
        pillRef.current.style.width = `${b0.offsetWidth}px`;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinContainerRef.current,
          scrub: 0.85, // Smooth responsive scrub with gentle momentum
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: function () {
          if (isClickingRef.current) return;
          const p = this.progress();
          // Update active tab label highlight based on transition midpoints
          let idx = 0;
          if (p >= 0.789) {
            idx = 3;
          } else if (p >= 0.500) {
            idx = 2;
          } else if (p >= 0.210) {
            idx = 1;
          } else {
            idx = 0;
          }
          if (idx !== lastActiveTabRef.current) {
            lastActiveTabRef.current = idx;
            setActiveTab(idx);
          }
        },
      });

      const imgs = imageRefs.current;
      if (imgs[0]) gsap.set(imgs[0], { opacity: 1, scale: 1 });
      if (imgs[1]) gsap.set(imgs[1], { opacity: 0, scale: 0.98 });
      if (imgs[2]) gsap.set(imgs[2], { opacity: 0, scale: 0.98 });
      if (imgs[3]) gsap.set(imgs[3], { opacity: 0, scale: 0.98 });
      if (pillRef.current) gsap.set(pillRef.current, { x: 0 });

      // Staged Timeline with Resting Dwell Plateaus & Ease-In-Out Traveling:
      // Tab 0 Dwell: t = 0.00 -> 0.50 (Pill stopped at Tab 0)
      // Step 0 -> Step 1 Travel: t = 0.50 -> 1.10 (power2.inOut ease)
      tl.fromTo(
        pillRef.current,
        { x: () => getTabPositions()[0] },
        {
          x: () => getTabPositions()[1],
          ease: 'power2.inOut',
          duration: 0.6,
          immediateRender: false,
        },
        0.5
      );
      if (imgs[0] && imgs[1]) {
        tl.to(imgs[0], { opacity: 0, scale: 1.025, ease: 'power2.inOut', duration: 0.6 }, 0.5);
        tl.to(imgs[1], { opacity: 1, scale: 1, ease: 'power2.inOut', duration: 0.6 }, 0.5);
      }

      // Tab 1 Dwell: t = 1.10 -> 1.60 (Pill stopped at Tab 1)
      // Step 1 -> Step 2 Travel: t = 1.60 -> 2.20 (power2.inOut ease)
      tl.fromTo(
        pillRef.current,
        { x: () => getTabPositions()[1] },
        {
          x: () => getTabPositions()[2],
          ease: 'power2.inOut',
          duration: 0.6,
          immediateRender: false,
        },
        1.6
      );
      if (imgs[1] && imgs[2]) {
        tl.to(imgs[1], { opacity: 0, scale: 1.025, ease: 'power2.inOut', duration: 0.6 }, 1.6);
        tl.to(imgs[2], { opacity: 1, scale: 1, ease: 'power2.inOut', duration: 0.6 }, 1.6);
      }

      // Tab 2 Dwell: t = 2.20 -> 2.70 (Pill stopped at Tab 2)
      // Step 2 -> Step 3 Travel: t = 2.70 -> 3.30 (power2.inOut ease)
      tl.fromTo(
        pillRef.current,
        { x: () => getTabPositions()[2] },
        {
          x: () => getTabPositions()[3],
          ease: 'power2.inOut',
          duration: 0.6,
          immediateRender: false,
        },
        2.7
      );
      if (imgs[2] && imgs[3]) {
        tl.to(imgs[2], { opacity: 0, scale: 1.025, ease: 'power2.inOut', duration: 0.6 }, 2.7);
        tl.to(imgs[3], { opacity: 1, scale: 1, ease: 'power2.inOut', duration: 0.6 }, 2.7);
      }

      // Tab 3 Dwell: t = 3.30 -> 3.80 (Pill stopped at Tab 3)
      tl.set({}, {}, 3.8);

      scrollTriggerRef.current = tl.scrollTrigger;

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
        scrollTriggerRef.current = null;
        if (pillRef.current) gsap.set(pillRef.current, { clearProps: 'transform,x' });
      };
    });

    return () => mm.revert();
  }, [getTabPositions]);

  // Mobile smooth fallback for pill and images
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 900) {
      if (pillRef.current && tabBarRef.current) {
        const positions = getTabPositions();
        gsap.to(pillRef.current, {
          x: positions[activeTab] || 0,
          duration: 0.35,
          ease: 'power2.out',
        });
      }
      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        gsap.to(img, {
          opacity: i === activeTab ? 1 : 0,
          scale: i === activeTab ? 1 : 0.98,
          duration: 0.45,
          ease: 'power2.out',
        });
      });
    }
  }, [activeTab, getTabPositions]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    lastActiveTabRef.current = index;
    if (!scrollTriggerRef.current) return;

    isClickingRef.current = true;
    const trigger = scrollTriggerRef.current;
    const scrollDistance = trigger.end - trigger.start;

    // Target the center of each tab's dwell plateau
    const TAB_DWELL_PROGRESS = [
      0.0,
      1.35 / 3.8, // 0.3553 (center of Tab 1 dwell)
      2.45 / 3.8, // 0.6447 (center of Tab 2 dwell)
      1.0,        // 1.0000 (Tab 3 dwell)
    ];
    const targetScroll = trigger.start + TAB_DWELL_PROGRESS[index] * scrollDistance;

    if (window.lenis) {
      window.lenis.scrollTo(targetScroll, {
        duration: 0.9,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        onComplete: () => {
          isClickingRef.current = false;
        },
      });
    } else {
      gsap.to(window, {
        scrollTo: { y: targetScroll, autoKill: false },
        duration: 0.9,
        ease: 'power2.out',
        onComplete: () => {
          isClickingRef.current = false;
        },
      });
    }
  };

  return (
    <Box
      ref={sectionRef}
      id="core-features"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '330vh' },
        backgroundColor: 'var(--bg-section)',
        color: 'var(--text-primary)',
      }}
    >
      {/* Pinned Viewport Container - Perfectly fits within 100vh */}
      <Box
        ref={pinContainerRef}
        sx={{
          position: { xs: 'relative', md: 'sticky' },
          top: 0,
          height: { xs: 'auto', md: '100vh' },
          maxHeight: { md: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: { xs: 6, md: 3 },
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          {/* Top Pill Badge */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1.8 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.9,
                px: 1.5,
                py: 0.5,
                borderRadius: '9999px',
                backgroundColor: 'var(--bg-pill)',
                border: '1px solid var(--border-subtle)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: '#9CA3AF',
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                }}
              >
                Core Features
              </Typography>
            </Box>
          </Box>

          {/* Two-Column Header */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-start' },
              justifyContent: 'space-between',
              gap: { xs: 2, md: 4 },
              mb: { xs: 2.5, md: 3.5 },
            }}
          >
            {/* Headline with two-tone line break matching reference */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.9rem', sm: '2.5rem', md: '2.85rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                maxWidth: 620,
              }}
            >
              <Box component="span" sx={{ color: 'var(--text-heading)', display: 'block' }}>
                One platform to run right
              </Box>
              <Box component="span" sx={{ color: 'var(--text-secondary)', display: 'block' }}>
                your entire AI workflow.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-secondary)',
                fontSize: { xs: '0.92rem', md: '0.98rem' },
                lineHeight: 1.6,
                maxWidth: 420,
                pt: { md: 0.8 },
              }}
            >
              OpenLedger unifies private compute, multi-model routing, portable vector memory,
              and autonomous agents into one space, so you stop switching between tools and start building.
            </Typography>
          </Box>

          {/* Full-Width Tab Bar with Smooth Sliding Active Pill Indicator */}
          <Box
            sx={{
              width: '100%',
              mb: { xs: 2.5, md: 3 },
            }}
          >
            <Box
              ref={tabBarRef}
              sx={{
                position: 'relative',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                p: '5px',
                borderRadius: '9999px',
                backgroundColor: 'var(--bg-pill)',
                border: '1px solid var(--border-subtle)',
                backdropFilter: 'blur(16px)',
                boxSizing: 'border-box',
              }}
            >
              {/* Smooth Gliding Active Pill with Continuous Easing */}
              <Box
                ref={pillRef}
                sx={{
                  position: 'absolute',
                  top: '5px',
                  bottom: '5px',
                  left: '5px',
                  width: 'calc((100% - 10px) / 4)',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-normal)',
                  boxShadow: 'var(--shadow-card)',
                  willChange: 'transform',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                {/* Subtle top glow highlight on active pill */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '20%',
                    right: '20%',
                    height: '1.5px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    borderRadius: '9999px',
                  }}
                />
              </Box>

              {TABS.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <Box
                    key={tab.id}
                    id={`tab-btn-${idx}`}
                    onClick={() => handleTabClick(idx)}
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      py: { xs: 0.9, md: 1.1 },
                      px: { xs: 0.5, sm: 1.5 },
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      userSelect: 'none',
                      textAlign: 'center',
                      color: isActive ? 'var(--text-heading)' : 'var(--text-secondary)',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: { xs: '0.78rem', sm: '0.88rem', md: '0.94rem' },
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      transition: 'color 0.28s ease',
                      '&:hover': {
                        color: 'var(--text-heading)',
                      },
                    }}
                  >
                    {tab.label}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* User Artwork Display Area - Fluid, Silky Crossfading */}
          <Box
            ref={imageContainerRef}
            sx={{
              position: 'relative',
              width: '100%',
              borderRadius: { xs: '16px', md: '22px' },
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              backgroundColor: 'var(--bg-section)',
              aspectRatio: '16 / 9',
              maxHeight: { xs: '350px', sm: '460px', md: '57.5vh' },
            }}
          >
            {TABS.map((tab, idx) => (
              <Box
                key={tab.id}
                ref={(el) => (imageRefs.current[idx] = el)}
                component="img"
                src={tab.imageSrc}
                alt={tab.label}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  opacity: idx === 0 ? 1 : 0,
                  transform: idx === 0 ? 'scale(1)' : 'scale(0.98)',
                  willChange: 'opacity, transform',
                  pointerEvents: activeTab === idx ? 'auto' : 'none',
                  display: 'block',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
