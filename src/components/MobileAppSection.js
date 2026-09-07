import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  { icon: '⚡', title: 'Instant AI, Anywhere', desc: 'Full multi-model power in your pocket — no switching, no waiting.' },
  { icon: '🔒', title: 'Stays Private', desc: 'Your conversations never leave your device. End-to-end encrypted by default.' },
  { icon: '🧠', title: 'Memory That Travels', desc: 'Your context, notes and history sync seamlessly across all your devices.' },
  { icon: '🤖', title: 'Agent on the Go', desc: 'Trigger autonomous workflows from your phone — even while offline.' },
];

function AppScreenContent({ compact = false }) {
  const s = compact ? 0.7 : 1;
  return (
    <Box sx={{ width: '100%', height: '100%', background: '#0A0C10', display: 'flex', flexDirection: 'column', p: compact ? 1 : 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: compact ? 0.8 : 1.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <Box sx={{ width: compact ? 18 : 26, height: compact ? 18 : 26, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: compact ? 9 : 13 }}>🐙</Box>
          <Box sx={{ color: '#fff', fontSize: compact ? 8 : 11, fontWeight: 600 }}>OpenLedger</Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.4 }}>
          {['#ff5f57','#ffbd2e','#28ca41'].map(c => <Box key={c} sx={{ width: compact ? 5 : 8, height: compact ? 5 : 8, borderRadius: '50%', background: c }} />)}
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.8, overflow: 'hidden' }}>
        <Box sx={{ alignSelf: 'flex-end', background: '#1e40af', color: '#fff', borderRadius: '12px 12px 3px 12px', px: 1.2, py: 0.6, fontSize: compact ? 7 : 10, maxWidth: '80%' }}>Summarize my Q3 reports</Box>
        <Box sx={{ alignSelf: 'flex-start', background: '#1c1f26', color: 'rgba(255,255,255,0.9)', borderRadius: '12px 12px 12px 3px', px: 1.2, py: 0.6, fontSize: compact ? 7 : 10, maxWidth: '85%', border: '1px solid rgba(255,255,255,0.08)' }}>
          <Box sx={{ color: 'rgba(100,180,255,0.9)', fontSize: compact ? 6 : 9, mb: 0.4 }}>✦ Claude 3.5 Sonnet</Box>
          Q3 revenue up 34% YoY. Key drivers: enterprise expansion...
        </Box>
        <Box sx={{ alignSelf: 'flex-start', display: 'flex', gap: 0.4, flexWrap: 'wrap' }}>
          {['GPT-4o','Gemini','Claude'].map(m => <Box key={m} sx={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: 'rgba(167,139,250,0.9)', borderRadius: 20, px: 0.7, py: 0.2, fontSize: compact ? 6 : 8 }}>{m}</Box>)}
        </Box>
      </Box>
      <Box sx={{ mt: 0.8, background: '#1c1f26', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)', px: 1.2, py: 0.6, display: 'flex', alignItems: 'center', gap: 0.8 }}>
        <Box sx={{ flex: 1, color: 'rgba(255,255,255,0.3)', fontSize: compact ? 7 : 9 }}>Ask anything...</Box>
        <Box sx={{ width: compact ? 14 : 18, height: compact ? 14 : 18, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: compact ? 7 : 10 }}>↑</Box>
      </Box>
    </Box>
  );
}

export default function MobileAppSection() {
  const sectionRef = React.useRef(null);
  const pinRef = React.useRef(null);
  const macLidRef = React.useRef(null);
  const macScreenRef = React.useRef(null);
  const laptopWrapRef = React.useRef(null);
  const tabletWrapRef = React.useRef(null);
  const phoneWrapRef = React.useRef(null);
  const phase3Ref = React.useRef(null);
  const handRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const bgOverlayRef = React.useRef(null);
  const topBadgeRef = React.useRef(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinRef.current,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Initial states
      gsap.set(macLidRef.current, { rotateX: -88, transformOrigin: 'bottom center' });
      gsap.set(macScreenRef.current, { opacity: 0 });
      gsap.set(laptopWrapRef.current, { opacity: 0, scale: 0.85, y: 60 });
      gsap.set(tabletWrapRef.current, { opacity: 0, scale: 0.85, y: 20 });
      gsap.set(phoneWrapRef.current, { opacity: 0, scale: 0.85 });
      gsap.set(bgOverlayRef.current, { opacity: 0 });
      gsap.set(phase3Ref.current, { opacity: 0 });
      gsap.set(handRef.current, { y: 150, opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0, y: 50 });

      // Phase 1: MacBook opens (t=0..1.5)
      tl.to(laptopWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power3.out', duration: 0.8 }, 0);
      tl.to(macLidRef.current, { rotateX: 0, ease: 'power2.inOut', duration: 1.1 }, 0.1);
      tl.to(macScreenRef.current, { opacity: 1, ease: 'power2.in', duration: 0.5 }, 0.8);

      // Phase 2a: Laptop → Tablet (t=1.6..2.5)
      tl.to(laptopWrapRef.current, { opacity: 0, scale: 0.88, y: -30, ease: 'power2.inOut', duration: 0.55 }, 1.6);
      tl.to(tabletWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power2.out', duration: 0.6 }, 1.9);

      // Phase 2b: Tablet → Phone (t=2.6..3.4)
      tl.to(tabletWrapRef.current, { opacity: 0, scale: 0.88, y: -30, ease: 'power2.inOut', duration: 0.5 }, 2.6);
      tl.to(phoneWrapRef.current, { opacity: 1, scale: 1, ease: 'power2.out', duration: 0.55 }, 2.9);

      // Phase 3: Background fade light (t=3.5..5.2)
      tl.to(bgOverlayRef.current, { opacity: 1, ease: 'power2.inOut', duration: 0.8 }, 3.5);
      tl.to(topBadgeRef.current, { opacity: 0, duration: 0.3 }, 3.5);
      tl.to(phoneWrapRef.current, { opacity: 0, y: -40, ease: 'power2.in', duration: 0.45 }, 3.6);
      tl.to(phase3Ref.current, { opacity: 1, ease: 'none', duration: 0.05 }, 3.9);
      tl.to(handRef.current, { y: 0, opacity: 1, ease: 'power3.out', duration: 1.1 }, 4.0);
      tl.to(contentRef.current, { opacity: 1, y: 0, ease: 'power3.out', duration: 0.9 }, 4.2);
      tl.set({}, {}, 5.5);

      return () => { if (tl.scrollTrigger) tl.scrollTrigger.kill(); tl.kill(); };
    });
    return () => mm.revert();
  }, []);

  return (
    <Box ref={sectionRef} id="mobile-app" sx={{ position: 'relative', minHeight: { xs: 'auto', md: '580vh' }, background: '#0A0C10' }}>
      <Box ref={pinRef} sx={{ position: { xs: 'relative', md: 'sticky' }, top: 0, height: { xs: 'auto', md: '100vh' }, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Dark background */}
        <Box sx={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #0f1624 0%, #0A0C10 100%)', zIndex: 0 }} />

        {/* Light overlay */}
        <Box ref={bgOverlayRef} sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #f8faff 0%, #eef2ff 40%, #f0f9ff 100%)', zIndex: 1, pointerEvents: 'none' }} />

        {/* Top badge */}
        <Box ref={topBadgeRef} sx={{ position: 'absolute', top: '5vh', left: '50%', transform: 'translateX(-50%)', zIndex: 4, textAlign: 'center' }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8, px: 1.6, py: 0.6, borderRadius: 9999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)' }}>
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#7c3aed', boxShadow: '0 0 10px #7c3aed', animation: 'pulse 2s infinite' }} />
            <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em' }}>Your AI. Every Screen.</Typography>
          </Box>
        </Box>

        {/* Device mockups layer (phases 1 & 2) */}
        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>

          {/* MacBook */}
          <Box ref={laptopWrapRef} sx={{ position: 'absolute', width: { md: '68vw', lg: '58vw' }, maxWidth: 820 }}>
            <Box sx={{ perspective: '900px' }}>
              <Box ref={macLidRef} sx={{
                width: '100%', paddingTop: '60%', position: 'relative',
                background: 'linear-gradient(145deg, #2d2d2d 0%, #1c1c1c 100%)',
                borderRadius: '12px 12px 0 0',
                border: '2px solid rgba(255,255,255,0.07)',
                borderBottom: 'none',
                overflow: 'hidden',
              }}>
                <Box sx={{ position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)', width: 7, height: 7, borderRadius: '50%', background: '#2a2a2a', border: '1px solid #3a3a3a' }} />
                <Box ref={macScreenRef} sx={{ position: 'absolute', inset: '18px 20px 12px', borderRadius: 1.5, overflow: 'hidden', background: '#0A0C10' }}>
                  <AppScreenContent />
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: '100%', height: 20, background: 'linear-gradient(180deg, #2c2c2c 0%, #222 100%)', borderRadius: '0 0 6px 6px', border: '2px solid rgba(255,255,255,0.06)', borderTop: '1px solid #383838', position: 'relative', '&::after': { content: '""', position: 'absolute', bottom: -4, left: '25%', width: '50%', height: 4, background: '#1a1a1a', borderRadius: '0 0 8px 8px' } }} />
          </Box>

          {/* Tablet */}
          <Box ref={tabletWrapRef} sx={{ position: 'absolute', width: { md: '38vw', lg: '32vw' }, maxWidth: 460, aspectRatio: '3/4', borderRadius: '22px', background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)', border: '3px solid rgba(255,255,255,0.07)', boxShadow: '0 30px 80px rgba(0,0,0,0.7)', p: '14px 10px', boxSizing: 'border-box', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: 7, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, borderRadius: '50%', background: '#444' }} />
            <Box sx={{ position: 'absolute', right: -4, top: 70, width: 4, height: 45, borderRadius: 2, background: '#2a2a2a' }} />
            <Box sx={{ width: '100%', height: '100%', borderRadius: '11px', background: '#0A0C10', overflow: 'hidden' }}>
              <AppScreenContent compact />
            </Box>
          </Box>

          {/* Phone */}
          <Box ref={phoneWrapRef} sx={{ position: 'absolute', width: { md: '20vw', lg: '17vw' }, maxWidth: 280, aspectRatio: '9/19.5', borderRadius: '40px', background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%)', border: '3px solid rgba(255,255,255,0.07)', boxShadow: '0 40px 100px rgba(0,0,0,0.7)', p: '12px 8px', boxSizing: 'border-box' }}>
            <Box sx={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 65, height: 20, borderRadius: 10, background: '#080808', zIndex: 2 }} />
            <Box sx={{ position: 'absolute', right: -4, top: 80, width: 3, height: 45, borderRadius: 2, background: '#2a2a2a' }} />
            <Box sx={{ position: 'absolute', left: -4, top: 70, width: 3, height: 32, borderRadius: 2, background: '#2a2a2a' }} />
            <Box sx={{ position: 'absolute', left: -4, top: 110, width: 3, height: 52, borderRadius: 2, background: '#2a2a2a' }} />
            <Box sx={{ width: '100%', height: '100%', borderRadius: '32px', background: '#0A0C10', overflow: 'hidden' }}>
              <AppScreenContent compact />
            </Box>
          </Box>
        </Box>

        {/* Phase 3: Light mode — Hand + Content */}
        <Box ref={phase3Ref} sx={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, gap: { xs: 4, md: 6 }, width: '100%' }}>

              {/* Text content */}
              <Box ref={contentRef} sx={{ flex: 1, py: { xs: 6, md: 0 } }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.8, px: 1.6, py: 0.55, borderRadius: 9999, background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.18)', mb: 2.5 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }} />
                  <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#2563eb', letterSpacing: '0.05em' }}>Now on iOS & Android</Typography>
                </Box>

                <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.7rem', lg: '3.2rem' }, lineHeight: 1.1, letterSpacing: '-0.03em', mb: 2, color: '#0A0C10' }}>
                  Your AI.{' '}
                  <Box component="span" sx={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Every Screen.
                  </Box>
                </Typography>

                <Typography sx={{ color: 'rgba(10,12,16,0.58)', fontSize: { xs: '0.95rem', md: '1.02rem' }, lineHeight: 1.7, maxWidth: 450, mb: 4 }}>
                  The full power of OpenLedger — multi-model routing, private compute,
                  and persistent memory — now fits in your pocket.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.8, mb: 4.5 }}>
                  {FEATURES.map(f => (
                    <Box key={f.title} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start', p: 1.8, borderRadius: 2.5, background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(59,130,246,0.1)', backdropFilter: 'blur(12px)', transition: 'box-shadow 0.2s, transform 0.2s', '&:hover': { boxShadow: '0 4px 24px rgba(59,130,246,0.13)', transform: 'translateY(-2px)' } }}>
                      <Box sx={{ fontSize: '1.1rem', mt: 0.1 }}>{f.icon}</Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: '#0A0C10', mb: 0.25 }}>{f.title}</Typography>
                        <Typography sx={{ fontSize: '0.78rem', color: 'rgba(10,12,16,0.52)', lineHeight: 1.5 }}>{f.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button variant="contained" sx={{ background: '#0A0C10', color: '#fff', borderRadius: 9999, px: 3, py: 1.2, fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', '&:hover': { background: '#1a1d24', transform: 'translateY(-1px)' } }}>
                    🍎&nbsp; Download for iOS
                  </Button>
                  <Button variant="outlined" sx={{ borderColor: 'rgba(10,12,16,0.2)', color: '#0A0C10', borderRadius: 9999, px: 3, py: 1.2, fontSize: '0.9rem', fontWeight: 600, textTransform: 'none', '&:hover': { background: 'rgba(10,12,16,0.05)', borderColor: 'rgba(10,12,16,0.4)' } }}>
                    🤖&nbsp; Get on Android
                  </Button>
                </Box>
              </Box>

              {/* Hand holding phone */}
              <Box sx={{ flex: '0 0 auto', width: { md: '40%', lg: '38%' }, maxWidth: 460, position: 'relative', display: { xs: 'none', md: 'flex' }, alignItems: 'flex-end', justifyContent: 'center', height: '90vh', overflow: 'hidden' }}>
                <Box ref={handRef} component="img" src="/images/hand_holding_phone.jpg" alt="OpenLedger mobile app" sx={{ width: '100%', maxHeight: '90vh', objectFit: 'contain', objectPosition: 'bottom center', display: 'block', filter: 'drop-shadow(0 40px 80px rgba(59,130,246,0.14))' }} />
              </Box>
            </Box>
          </Container>
        </Box>

      </Box>
      <style jsx global>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </Box>
  );
}
