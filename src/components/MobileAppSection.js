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
  {
    icon: '⚡',
    title: 'Multi-Model in Your Pocket',
    desc: 'Instant access to Claude 3.5, GPT-4o, and Gemini with one-tap model routing.',
  },
  {
    icon: '🔒',
    title: 'Device-Native Privacy',
    desc: 'End-to-end encrypted storage. Your mobile chats never train third-party models.',
  },
  {
    icon: '🧠',
    title: 'Cross-Device Memory',
    desc: 'Pick up on iOS or Android exactly where you paused on your desktop workspace.',
  },
  {
    icon: '🤖',
    title: 'Autonomous Mobile Agents',
    desc: 'Run background research, code audits, and alerts right from push notifications.',
  },
];

/* -------------------------------------------------------------------------- */
/* 1. DESKTOP PRODUCT SCREEN (Reference 1 style)                               */
/* -------------------------------------------------------------------------- */
function DesktopProductScreen() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: '#07090E',
        color: '#E2E8F0',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Inter", -apple-system, sans-serif',
        userSelect: 'none',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* macOS Window Titlebar */}
      <Box
        sx={{
          height: 32,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(180deg, #161A22 0%, #0E1218 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.8,
          flexShrink: 0,
        }}
      >
        {/* macOS Traffic Lights */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56', boxShadow: '0 0 6px rgba(255,95,86,0.5)' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', boxShadow: '0 0 6px rgba(255,189,46,0.5)' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F', boxShadow: '0 0 6px rgba(39,201,63,0.5)' }} />
        </Box>

        {/* Title & Path */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 14, height: 14, borderRadius: 3, background: 'linear-gradient(135deg, #7C3AED, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>🐙</Box>
          <Typography sx={{ fontSize: '0.74rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em' }}>
            OpenLedger Studio — Multi-Model Reasoning Canvas
          </Typography>
        </Box>

        {/* Status badges */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, px: 0.9, py: 0.2, borderRadius: 999, background: 'rgba(39,201,63,0.12)', border: '1px solid rgba(39,201,63,0.3)' }}>
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#27C93F' }} />
            <Typography sx={{ fontSize: '0.62rem', color: '#4ADE80', fontWeight: 600 }}>4 Models Live</Typography>
          </Box>
          <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>1,480 tok/s</Typography>
        </Box>
      </Box>

      {/* Main Workspace Body */}
      <Box sx={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Left Sidebar */}
        <Box
          sx={{
            width: 140,
            borderRight: '1px solid rgba(255,255,255,0.06)',
            background: 'rgba(12, 16, 23, 0.7)',
            p: 1.2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.2,
            flexShrink: 0,
          }}
        >
          <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', px: 0.5 }}>
            Active Models
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.6 }}>
            {[
              { name: 'Claude 3.5 Sonnet', color: '#D97706', active: true },
              { name: 'GPT-4o Omniverse', color: '#10B981', active: true },
              { name: 'Gemini 1.5 Pro', color: '#3B82F6', active: false },
              { name: 'DeepSeek V3', color: '#8B5CF6', active: false },
            ].map((m) => (
              <Box
                key={m.name}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  px: 0.8,
                  py: 0.5,
                  borderRadius: 1.5,
                  background: m.active ? 'rgba(255,255,255,0.07)' : 'transparent',
                  border: m.active ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: m.color }} />
                <Typography sx={{ fontSize: '0.68rem', fontWeight: m.active ? 600 : 400, color: m.active ? '#fff' : 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {m.name}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 'auto', pt: 1, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <Typography sx={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.35)' }}>
              🔒 Zero-Knowledge Enclave
            </Typography>
          </Box>
        </Box>

        {/* Center / Right Multi-Model Comparison Canvas */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 1.8, gap: 1.4, overflow: 'hidden', background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(59,130,246,0.06) 0%, transparent 80%)' }}>
          {/* User Prompt Bubble */}
          <Box sx={{ alignSelf: 'flex-end', maxWidth: '75%', background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)', borderRadius: '14px 14px 2px 14px', px: 1.6, py: 0.8, boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>
            <Typography sx={{ fontSize: '0.78rem', color: '#fff', fontWeight: 500 }}>
              Compare cryptographic consensus across ZK-rollups and generate Rust verification logic.
            </Typography>
          </Box>

          {/* Dual Parallel Responses Grid */}
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.4, flex: 1, minHeight: 0 }}>
            {/* Claude 3.5 Output Card */}
            <Box sx={{ background: 'rgba(18,22,30,0.85)', border: '1px solid rgba(217,119,6,0.3)', borderRadius: 2.5, p: 1.4, display: 'flex', flexDirection: 'column', gap: 0.8, overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#D97706' }} />
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: '#FBBF24' }}>Claude 3.5 Sonnet</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>220ms · 99.4% confidence</Typography>
              </Box>
              <Box sx={{ background: 'rgba(0,0,0,0.4)', borderRadius: 1.5, p: 1, border: '1px solid rgba(255,255,255,0.04)', flex: 1, overflow: 'hidden' }}>
                <Typography sx={{ fontFamily: 'monospace', fontSize: '0.62rem', color: '#93C5FD', lineHeight: 1.5 }}>
                  {`pub fn verify_zk_proof(proof: &[u8], vk: &VerifyingKey) -> bool {\n  let snark = SnarkVerifier::new(vk);\n  snark.verify_batch(proof).is_ok()\n}`}
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.75)', mt: 0.8, lineHeight: 1.4 }}>
                  Batch verification reduces on-chain gas overhead by ~42% compared to sequential SNARK proofs.
                </Typography>
              </Box>
            </Box>

            {/* GPT-4o Output Card */}
            <Box sx={{ background: 'rgba(18,22,30,0.85)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 2.5, p: 1.4, display: 'flex', flexDirection: 'column', gap: 0.8, overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981' }} />
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: '#34D399' }}>GPT-4o Omniverse</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>180ms · Synthesis Match</Typography>
              </Box>
              <Box sx={{ background: 'rgba(0,0,0,0.4)', borderRadius: 1.5, p: 1, border: '1px solid rgba(255,255,255,0.04)', flex: 1, overflow: 'hidden' }}>
                <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.45 }}>
                  Consensus synthesis confirmed. Security guarantees remain identical across both Groth16 and Plonk proving systems.
                </Typography>
                <Box sx={{ display: 'flex', gap: 0.6, mt: 1 }}>
                  <Box sx={{ px: 0.8, py: 0.2, borderRadius: 1, background: 'rgba(16,185,129,0.15)', color: '#6EE7B7', fontSize: '0.58rem', fontWeight: 600 }}>3.4x Faster</Box>
                  <Box sx={{ px: 0.8, py: 0.2, borderRadius: 1, background: 'rgba(59,130,246,0.15)', color: '#93C5FD', fontSize: '0.58rem', fontWeight: 600 }}>Gas Efficient</Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bottom Prompt Bar */}
          <Box sx={{ background: 'rgba(22,27,34,0.9)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)', p: '8px 12px', display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ flex: 1, color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem' }}>
              Query Claude 3.5 + GPT-4o concurrently...
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {['GPT-4o', 'Claude', 'Gemini'].map((m) => (
                <Box key={m} sx={{ px: 0.6, py: 0.15, borderRadius: 1, background: 'rgba(255,255,255,0.08)', fontSize: '0.58rem', color: 'rgba(255,255,255,0.6)' }}>
                  {m}
                </Box>
              ))}
            </Box>
            <Box sx={{ width: 22, height: 22, borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.7rem' }}>
              ↑
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Screen Glare Overlay */}
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(255,255,255,0.01) 100%)', pointerEvents: 'none' }} />
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. TABLET PRODUCT SCREEN                                                   */
/* -------------------------------------------------------------------------- */
function TabletProductScreen() {
  return (
    <Box sx={{ width: '100%', height: '100%', background: '#090C12', color: '#E2E8F0', display: 'flex', flexDirection: 'column', p: 1.4, userSelect: 'none', overflow: 'hidden' }}>
      {/* Tablet Status Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>9:41 AM · OpenLedger Pro</Typography>
        <Box sx={{ display: 'flex', gap: 0.6, alignItems: 'center' }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
          <Typography sx={{ fontSize: '0.6rem', color: '#34D399', fontWeight: 600 }}>Connected</Typography>
        </Box>
      </Box>

      {/* Tablet Chat View */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, py: 1.2, overflow: 'hidden' }}>
        <Box sx={{ alignSelf: 'flex-end', background: '#2563EB', color: '#fff', borderRadius: '12px 12px 2px 12px', px: 1.2, py: 0.6, fontSize: '0.7rem', maxWidth: '85%' }}>
          Compare token throughput across models
        </Box>
        <Box sx={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '12px 12px 12px 2px', p: 1.2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, mb: 0.5 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B' }} />
            <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, color: '#FCD34D' }}>Claude 3.5 Sonnet</Typography>
          </Box>
          <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>
            Benchmark complete. OpenLedger dynamic router delivered 3.2x lower latency with zero degradation.
          </Typography>
        </Box>
      </Box>

      {/* Input */}
      <Box sx={{ background: '#141820', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)', px: 1, py: 0.6, display: 'flex', alignItems: 'center', gap: 0.8 }}>
        <Box sx={{ flex: 1, color: 'rgba(255,255,255,0.3)', fontSize: '0.68rem' }}>Ask OpenLedger...</Box>
        <Box sx={{ width: 18, height: 18, borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.6rem' }}>↑</Box>
      </Box>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. MOBILE APP SCREEN (Single column chat)                                  */
/* -------------------------------------------------------------------------- */
function MobileAppScreen() {
  return (
    <Box sx={{ width: '100%', height: '100%', background: '#090C12', color: '#fff', display: 'flex', flexDirection: 'column', p: 1.2, userSelect: 'none', overflow: 'hidden' }}>
      {/* Mobile Top Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1, pt: 1.2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
          <Box sx={{ width: 18, height: 18, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9 }}>🐙</Box>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700 }}>OpenLedger</Typography>
        </Box>
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B981' }} />
      </Box>

      {/* Model Selector Pills */}
      <Box sx={{ display: 'flex', gap: 0.4, mb: 1 }}>
        {['Nova AI', 'GPT-4o', 'Claude'].map((m, i) => (
          <Box key={m} sx={{ flex: 1, textAlign: 'center', py: 0.4, borderRadius: 1.5, background: i === 0 ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.04)', border: i === 0 ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.06)', fontSize: '0.6rem', fontWeight: i === 0 ? 600 : 400, color: i === 0 ? '#60A5FA' : 'rgba(255,255,255,0.6)' }}>
            {m}
          </Box>
        ))}
      </Box>

      {/* Chat Stream */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.8, overflow: 'hidden' }}>
        <Box sx={{ alignSelf: 'flex-end', background: '#2563EB', color: '#fff', borderRadius: '10px 10px 2px 10px', px: 1, py: 0.5, fontSize: '0.65rem', maxWidth: '85%' }}>
          Compare smartphone camera specs
        </Box>
        <Box sx={{ alignSelf: 'flex-start', background: '#131822', border: '1px solid rgba(59,130,246,0.25)', borderRadius: '10px 10px 10px 2px', p: 1, maxWidth: '92%' }}>
          <Typography sx={{ fontSize: '0.62rem', color: '#93C5FD', fontWeight: 600, mb: 0.2 }}>✦ Nova Multi-Model</Typography>
          <Typography sx={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.35 }}>
            Flagship computational sensors focus on per-pixel photon gathering and on-device neural ISP processing.
          </Typography>
        </Box>
      </Box>

      {/* Input */}
      <Box sx={{ background: '#131822', borderRadius: 999, border: '1px solid rgba(255,255,255,0.12)', px: 1, py: 0.5, display: 'flex', alignItems: 'center', gap: 0.6, mt: 0.8 }}>
        <Box sx={{ flex: 1, color: 'rgba(255,255,255,0.4)', fontSize: '0.62rem' }}>Message OpenLedger...</Box>
        <Box sx={{ width: 16, height: 16, borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.6rem' }}>↑</Box>
      </Box>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN EXPORT: MobileAppSection                                              */
/* -------------------------------------------------------------------------- */
export default function MobileAppSection() {
  const sectionRef = React.useRef(null);
  const pinRef = React.useRef(null);
  const macLidRef = React.useRef(null);
  const macScreenRef = React.useRef(null);
  const macBaseRef = React.useRef(null);
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
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Inform header about light phase when self.progress >= 0.72
            if (sectionRef.current) {
              const isLight = self.progress >= 0.72;
              sectionRef.current.setAttribute('data-light-phase', isLight ? 'true' : 'false');
              window.dispatchEvent(new Event('scroll'));
            }
          },
        },
      });

      // Initial States
      gsap.set(macLidRef.current, { rotateX: -76, transformOrigin: 'bottom center', transformStyle: 'preserve-3d' });
      gsap.set(macScreenRef.current, { opacity: 0.1 });
      gsap.set(laptopWrapRef.current, { opacity: 0, scale: 0.88, y: 50 });
      gsap.set(macBaseRef.current, { opacity: 1, y: 0 });
      gsap.set(tabletWrapRef.current, { opacity: 0, scale: 0.85, y: 30 });
      gsap.set(phoneWrapRef.current, { opacity: 0, scale: 0.85, y: 20 });
      gsap.set(bgOverlayRef.current, { opacity: 0 });
      gsap.set(phase3Ref.current, { opacity: 0 });
      gsap.set(handRef.current, { y: 160, opacity: 0 });
      gsap.set(contentRef.current, { opacity: 0, x: -40 });

      // PHASE 1: MacBook in dark background opens upright (Reference 1 style)
      // t = 0 -> 1.4
      tl.to(laptopWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power3.out', duration: 0.8 }, 0);
      tl.to(macLidRef.current, { rotateX: 0, ease: 'power2.inOut', duration: 1.2 }, 0.1);
      tl.to(macScreenRef.current, { opacity: 1, ease: 'power2.in', duration: 0.6 }, 0.7);
      // Dwell on open MacBook
      tl.to({}, { duration: 0.5 }, 1.4);

      // PHASE 2a: Screen size changes -> Laptop morphs to Tablet
      // t = 1.9 -> 2.9
      tl.to(macBaseRef.current, { opacity: 0, y: 30, ease: 'power2.in', duration: 0.5 }, 1.9);
      tl.to(laptopWrapRef.current, { opacity: 0, scale: 0.85, ease: 'power2.inOut', duration: 0.6 }, 1.9);
      tl.to(tabletWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power3.out', duration: 0.6 }, 2.2);
      // Dwell on Tablet
      tl.to({}, { duration: 0.4 }, 2.8);

      // PHASE 2b: Tablet morphs to Mobile Phone
      // t = 3.2 -> 4.1
      tl.to(tabletWrapRef.current, { opacity: 0, scale: 0.88, ease: 'power2.inOut', duration: 0.5 }, 3.2);
      tl.to(phoneWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power3.out', duration: 0.55 }, 3.5);
      // Dwell on Mobile Mockup
      tl.to({}, { duration: 0.4 }, 4.0);

      // PHASE 3: Background turns LIGHT + Hand holding mobile rises + Content animates in
      // t = 4.4 -> 5.8
      tl.to(bgOverlayRef.current, { opacity: 1, ease: 'power2.inOut', duration: 0.8 }, 4.4);
      tl.to(topBadgeRef.current, { opacity: 0, duration: 0.3 }, 4.4);
      tl.to(phoneWrapRef.current, { opacity: 0, scale: 0.95, ease: 'power2.in', duration: 0.4 }, 4.5);
      tl.to(phase3Ref.current, { opacity: 1, ease: 'none', duration: 0.1 }, 4.7);
      tl.to(handRef.current, { y: 0, opacity: 1, ease: 'power3.out', duration: 1.1 }, 4.8);
      tl.to(contentRef.current, { opacity: 1, x: 0, ease: 'power3.out', duration: 0.9 }, 5.0);

      // End plateau
      tl.set({}, {}, 6.0);

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      id="mobile-app"
      data-light-phase="false"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '560vh' },
        background: '#0A0C10',
        transition: 'background 0.3s ease',
      }}
    >
      <Box
        ref={pinRef}
        sx={{
          position: { xs: 'relative', md: 'sticky' },
          top: 0,
          height: { xs: 'auto', md: '100vh' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* 1. Deep Dark Background (Phases 1 & 2) */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 90% 70% at 50% 40%, #0c111c 0%, #06080d 100%)',
            zIndex: 0,
          }}
        />

        {/* 2. Luminous Light Overlay (Phase 3) */}
        <Box
          ref={bgOverlayRef}
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(120% 120% at 50% 10%, #FFFFFF 0%, #F8FAFC 45%, #EFF6FF 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          {/* Subtle decorative ambient blobs in light mode */}
          <Box
            sx={{
              position: 'absolute',
              top: '15%',
              right: '10%',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '5%',
              width: 450,
              height: 450,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </Box>

        {/* Top Floating Badge (Phases 1 & 2) */}
        <Box
          ref={topBadgeRef}
          sx={{
            position: 'absolute',
            top: { xs: '3vh', md: '5vh' },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4,
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.9,
              px: 1.8,
              py: 0.65,
              borderRadius: 9999,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#7C3AED',
                boxShadow: '0 0 10px #7C3AED',
              }}
            />
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.05em',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Desktop to Mobile · Synchronized AI
            </Typography>
          </Box>
        </Box>

        {/* ================================================================== */}
        {/* HARDWARE MOCKUPS LAYER (Phases 1 & 2)                              */}
        {/* ================================================================== */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          {/* 1. REALISTIC MACBOOK PRO (Reference 1 style) */}
          <Box
            ref={laptopWrapRef}
            sx={{
              position: 'absolute',
              width: { md: '72vw', lg: '62vw' },
              maxWidth: 880,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* 3D Perspective container for screen lid */}
            <Box sx={{ width: '100%', perspective: '1200px' }}>
              <Box
                ref={macLidRef}
                sx={{
                  width: '100%',
                  paddingTop: '62.5%', // 16:10 aspect ratio
                  position: 'relative',
                  background: 'linear-gradient(180deg, #1C1E24 0%, #0F1116 100%)',
                  borderRadius: '16px 16px 0 0',
                  border: '2.5px solid rgba(255,255,255,0.1)',
                  borderBottom: 'none',
                  boxShadow: '0 -10px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15)',
                  overflow: 'hidden',
                }}
              >
                {/* Camera Notch / Lens */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 72,
                    height: 12,
                    borderRadius: '0 0 8px 8px',
                    background: '#07090E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                  }}
                >
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: '#1A202C',
                      border: '1px solid #2D3748',
                    }}
                  />
                </Box>

                {/* Inside Screen Content */}
                <Box
                  ref={macScreenRef}
                  sx={{
                    position: 'absolute',
                    inset: '12px 14px 4px 14px',
                    borderRadius: '10px 10px 0 0',
                    overflow: 'hidden',
                    background: '#07090E',
                  }}
                >
                  <DesktopProductScreen />
                </Box>
              </Box>
            </Box>

            {/* MacBook Base (Keyboard Chassis + Notch) */}
            <Box
              ref={macBaseRef}
              sx={{
                width: '104%',
                height: 16,
                background: 'linear-gradient(180deg, #2D3039 0%, #1A1C22 50%, #121418 100%)',
                borderRadius: '0 0 14px 14px',
                border: '1.5px solid rgba(255,255,255,0.12)',
                borderTop: '1px solid #3F4452',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.2)',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              {/* Front Thumb Scoop Notch */}
              <Box
                sx={{
                  width: 90,
                  height: 4,
                  background: '#0D0E12',
                  borderRadius: '0 0 6px 6px',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
                }}
              />
              {/* Left & Right Rubber Feet */}
              <Box sx={{ position: 'absolute', bottom: -3, left: '12%', width: 28, height: 3, background: '#090A0D', borderRadius: '0 0 3px 3px' }} />
              <Box sx={{ position: 'absolute', bottom: -3, right: '12%', width: 28, height: 3, background: '#090A0D', borderRadius: '0 0 3px 3px' }} />
            </Box>
          </Box>

          {/* 2. TABLET MOCKUP (iPad Pro style) */}
          <Box
            ref={tabletWrapRef}
            sx={{
              position: 'absolute',
              width: { md: '36vw', lg: '30vw' },
              maxWidth: 440,
              aspectRatio: '3/4',
              borderRadius: '26px',
              background: 'linear-gradient(145deg, #252830 0%, #15171E 100%)',
              border: '3px solid rgba(255,255,255,0.12)',
              boxShadow: '0 30px 90px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.2)',
              p: '14px 12px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            {/* Tablet Front Camera */}
            <Box
              sx={{
                position: 'absolute',
                top: 6,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#0D0E12',
                border: '1px solid #2D3748',
              }}
            />
            {/* Tablet Screen */}
            <Box sx={{ width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden' }}>
              <TabletProductScreen />
            </Box>
          </Box>

          {/* 3. SMARTPHONE MOCKUP (iPhone 16 Pro style) */}
          <Box
            ref={phoneWrapRef}
            sx={{
              position: 'absolute',
              width: { md: '20vw', lg: '17vw' },
              maxWidth: 270,
              aspectRatio: '9/19.2',
              borderRadius: '44px',
              background: 'linear-gradient(145deg, #252830 0%, #121419 100%)',
              border: '3px solid rgba(255,255,255,0.14)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.85), inset 0 1px 2px rgba(255,255,255,0.25)',
              p: '12px 9px',
              boxSizing: 'border-box',
            }}
          >
            {/* Dynamic Island */}
            <Box
              sx={{
                position: 'absolute',
                top: 13,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 68,
                height: 18,
                borderRadius: 10,
                background: '#000',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 1,
              }}
            >
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#111', border: '1px solid #222' }} />
              <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: '#0F2C59' }} />
            </Box>
            {/* Mobile Screen */}
            <Box sx={{ width: '100%', height: '100%', borderRadius: '34px', overflow: 'hidden' }}>
              <MobileAppScreen />
            </Box>
          </Box>
        </Box>

        {/* ================================================================== */}
        {/* PHASE 3: LIGHT BACKGROUND SHOWCASE (Hand Holding Phone + Content)  */}
        {/* ================================================================== */}
        <Box
          ref={phase3Ref}
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'center' },
                justifyContent: 'space-between',
                gap: { xs: 4, md: 5, lg: 8 },
                width: '100%',
              }}
            >
              {/* Left Column: Catchy Tagline & Content */}
              <Box
                ref={contentRef}
                sx={{
                  flex: 1,
                  maxWidth: { xs: '100%', md: 580 },
                  py: { xs: 4, md: 0 },
                  zIndex: 2,
                }}
              >
                {/* Catchy Pill Badge */}
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.9,
                    px: 1.8,
                    py: 0.6,
                    borderRadius: 9999,
                    background: 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid rgba(37, 99, 235, 0.22)',
                    mb: 2.5,
                  }}
                >
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#2563EB', boxShadow: '0 0 8px #2563EB' }} />
                  <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: '#1D4ED8', letterSpacing: '0.06em' }}>
                    ✦ POCKET SUPERINTELLIGENCE
                  </Typography>
                </Box>

                {/* Catchy Main Headline */}
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 850,
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem', lg: '3.8rem' },
                    lineHeight: 1.06,
                    letterSpacing: '-0.035em',
                    color: '#0F172A',
                    mb: 2,
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  Desk to Pocket.{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                    }}
                  >
                    Zero Compromise.
                  </Box>
                </Typography>

                {/* Subtitle */}
                <Typography
                  sx={{
                    color: '#475569',
                    fontSize: { xs: '0.98rem', md: '1.08rem' },
                    lineHeight: 1.65,
                    maxWidth: 520,
                    mb: 4,
                  }}
                >
                  All your frontier models, autonomous agents, and persistent memory — now
                  frictionlessly synchronized in your pocket. Built for thinkers who never stop.
                </Typography>

                {/* 4 Feature Highlights Grid */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 1.6,
                    mb: 4,
                  }}
                >
                  {FEATURES.map((f) => (
                    <Box
                      key={f.title}
                      sx={{
                        p: 1.8,
                        borderRadius: 2.5,
                        background: 'rgba(255,255,255,0.85)',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 10px 28px rgba(37, 99, 235, 0.1)',
                          borderColor: 'rgba(37, 99, 235, 0.3)',
                        },
                      }}
                    >
                      <Box sx={{ fontSize: '1.2rem', mb: 0.8 }}>{f.icon}</Box>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.88rem', color: '#0F172A', mb: 0.3 }}>
                        {f.title}
                      </Typography>
                      <Typography sx={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.45 }}>
                        {f.desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Store Download CTAs */}
                <Box sx={{ display: 'flex', gap: 1.8, alignItems: 'center', flexWrap: 'wrap', mb: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      background: '#0F172A',
                      color: '#FFFFFF',
                      borderRadius: 9999,
                      px: 3.2,
                      py: 1.25,
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: '0 6px 20px rgba(15, 23, 42, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      '&:hover': {
                        background: '#1E293B',
                        transform: 'translateY(-1px)',
                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.3)',
                      },
                    }}
                  >
                    <Box component="span" sx={{ fontSize: '1.1rem', lineHeight: 1 }}></Box>
                    Download on App Store
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(15, 23, 42, 0.2)',
                      color: '#0F172A',
                      borderRadius: 9999,
                      px: 3,
                      py: 1.25,
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      background: 'rgba(255,255,255,0.6)',
                      '&:hover': {
                        background: '#FFFFFF',
                        borderColor: '#0F172A',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    <Box component="span" sx={{ fontSize: '1.05rem', lineHeight: 1 }}>▶</Box>
                    Get on Google Play
                  </Button>
                </Box>

                {/* Social Proof Badge */}
                <Typography sx={{ fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <Box component="span" sx={{ color: '#F59E0B', fontSize: '0.9rem' }}>★★★★★</Box>
                  <Box component="span" sx={{ fontWeight: 600, color: '#0F172A' }}>4.9/5</Box>
                  rated by 12,000+ early access testers
                </Typography>
              </Box>

              {/* Right Column: Transparent Hand Holding Smartphone */}
              <Box
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '100%', md: '45%', lg: '42%' },
                  maxWidth: 500,
                  height: { xs: '50vh', md: '88vh' },
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  overflow: 'visible',
                }}
              >
                {/* Soft backdrop glow behind phone */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 340,
                    height: 340,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.06) 50%, transparent 70%)',
                    filter: 'blur(30px)',
                    zIndex: 0,
                  }}
                />

                {/* Hand Image (Transparent Alpha PNG) */}
                <Box
                  ref={handRef}
                  component="img"
                  src="/images/openledger_mobile_hand.png"
                  alt="OpenLedger Mobile App in Hand"
                  sx={{
                    width: '100%',
                    maxHeight: '86vh',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    display: 'block',
                    zIndex: 1,
                    filter: 'drop-shadow(0 35px 70px rgba(15, 23, 42, 0.22))',
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
