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
    title: 'Instant Model Execution',
    desc: 'Pay-as-you-go compute for Claude 3.5, GPT-4o, and Gemini with auto-routing.',
  },
  {
    icon: '💳',
    title: 'Virtual Compute Card',
    desc: 'Spendable ledger balance backed by zero-knowledge encrypted on-chain reserves.',
  },
  {
    icon: '🔄',
    title: 'Cross-Device Sync',
    desc: 'Your balances, subscriptions, and conversational contexts sync seamlessly.',
  },
  {
    icon: '🪙',
    title: 'Cashback & Yield Rewards',
    desc: 'Earn compute credits and staking rewards on every model inference and transaction.',
  },
];

/* -------------------------------------------------------------------------- */
/* 1. EXACT SPENDABLE APP SCREEN (User Reference)                              */
/* -------------------------------------------------------------------------- */
function SpendableAppScreen() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        background: '#EBECEF',
        color: '#0F172A',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
        userSelect: 'none',
        overflow: 'hidden',
        position: 'relative',
        p: { xs: '8px 10px 6px', md: '10px 14px 8px' },
        boxSizing: 'border-box',
      }}
    >
      {/* Top Bar: Profile Avatar 'M' & Time / Status */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 0.2, mb: 1 }}>
        <Box
          sx={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: '#FFFFFF',
            border: '1px solid rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.74rem',
            fontWeight: 700,
            color: '#1E293B',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          M
        </Box>
        <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(0,0,0,0.45)' }}>
          10:32
        </Typography>
      </Box>

      {/* Spendable Balance Heading */}
      <Box sx={{ textAlign: 'center', mb: 1 }}>
        <Typography sx={{ fontSize: '0.66rem', color: '#64748B', fontWeight: 500, mb: 0.1 }}>
          Spendable
        </Typography>
        <Typography sx={{ fontSize: '1.75rem', fontWeight: 750, letterSpacing: '-0.035em', color: '#0F172A', lineHeight: 1.1 }}>
          $9,076.56
        </Typography>

        {/* Sub-Pill: Total Balance */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            background: 'rgba(255,255,255,0.85)',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: 999,
            px: 0.9,
            py: 0.2,
            mt: 0.5,
            boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
          }}
        >
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }} />
          <Typography sx={{ fontSize: '0.62rem', fontWeight: 500, color: '#475569' }}>
            $19,176.56
          </Typography>
          <Typography sx={{ fontSize: '0.55rem', color: '#94A3B8' }}>↺</Typography>
        </Box>
      </Box>

      {/* Dual Button: Add funds (Black) & Send (Light) */}
      <Box
        sx={{
          display: 'flex',
          gap: 0.6,
          background: 'rgba(255,255,255,0.7)',
          p: '3px',
          borderRadius: 999,
          border: '1px solid rgba(0,0,0,0.05)',
          mb: 1.2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: '#181A20',
            color: '#FFFFFF',
            borderRadius: 999,
            py: 0.55,
            textAlign: 'center',
            fontSize: '0.7rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.12)',
          }}
        >
          Add funds
        </Box>
        <Box
          sx={{
            flex: 1,
            background: 'transparent',
            color: '#1E293B',
            borderRadius: 999,
            py: 0.55,
            textAlign: 'center',
            fontSize: '0.7rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Send
        </Box>
      </Box>

      {/* Floating Dark Virtual Card */}
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1.7 / 1',
          background: 'linear-gradient(145deg, #242830 0%, #171A21 55%, #0F1116 100%)',
          borderRadius: 2.8,
          p: 1.2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#FFFFFF',
          position: 'relative',
          boxShadow: '0 8px 20px -3px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.08)',
          mb: 1.2,
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '60%',
            height: '100%',
            background: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          },
        }}
      >
        {/* Card Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.35)',
              borderRightColor: 'transparent',
              transform: 'rotate(-45deg)',
            }}
          />
          <Typography sx={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>
            OPENLEDGER
          </Typography>
        </Box>

        {/* Card Bottom */}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '-0.01em' }}>
              $1,337.19
            </Typography>
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
          </Box>
          <Typography sx={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em' }}>
            •••• 2312 &gt;
          </Typography>
        </Box>
      </Box>

      {/* Activity / Transactions List */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.8, overflow: 'hidden' }}>
        {/* Uber */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.9 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: '#000000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.52rem',
                fontWeight: 700,
              }}
            >
              Uber
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.68rem', fontWeight: 600, color: '#0F172A', lineHeight: 1.2 }}>
                Uber
              </Typography>
              <Typography sx={{ fontSize: '0.55rem', color: '#94A3B8' }}>
                Today 13:27
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#0F172A', lineHeight: 1.2 }}>
              -$35.19
            </Typography>
            <Typography sx={{ fontSize: '0.55rem', fontWeight: 600, color: '#2563EB' }}>
              +$1.42 🪙
            </Typography>
          </Box>
        </Box>

        {/* Claude */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.9 }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: '#D97706',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
              }}
            >
              ✳
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.68rem', fontWeight: 600, color: '#0F172A', lineHeight: 1.2 }}>
                Claude
              </Typography>
              <Typography sx={{ fontSize: '0.55rem', color: '#94A3B8' }}>
                05 Dec 10:07
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, color: '#0F172A', lineHeight: 1.2 }}>
              -$22.59
            </Typography>
            <Typography sx={{ fontSize: '0.55rem', fontWeight: 600, color: '#2563EB' }}>
              +$1.02 🪙
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Bottom Navigation Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          pt: 0.6,
          borderTop: '1px solid rgba(0,0,0,0.06)',
          mt: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.15 }}>
          <Typography sx={{ fontSize: '0.75rem' }}>🏠</Typography>
          <Typography sx={{ fontSize: '0.52rem', fontWeight: 700, color: '#0F172A' }}>Home</Typography>
          <Box sx={{ width: 12, height: 2, background: '#0F172A', borderRadius: 1 }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.15 }}>
          <Typography sx={{ fontSize: '0.75rem', color: '#94A3B8' }}>🪙</Typography>
          <Typography sx={{ fontSize: '0.52rem', color: '#94A3B8' }}>Earn</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.15 }}>
          <Typography sx={{ fontSize: '0.75rem', color: '#94A3B8' }}>📊</Typography>
          <Typography sx={{ fontSize: '0.52rem', color: '#94A3B8' }}>Stats</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.15 }}>
          <Typography sx={{ fontSize: '0.75rem', color: '#94A3B8' }}>⚙️</Typography>
          <Typography sx={{ fontSize: '0.52rem', color: '#94A3B8' }}>Tier</Typography>
        </Box>
      </Box>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. TABLET PRODUCT SCREEN (Adapted Ledger Dashboard)                         */
/* -------------------------------------------------------------------------- */
function TabletLedgerScreen() {
  return (
    <Box sx={{ width: '100%', height: '100%', background: '#EBECEF', color: '#0F172A', display: 'flex', flexDirection: 'column', p: 1.6, userSelect: 'none', overflow: 'hidden' }}>
      {/* Top Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <Box sx={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.74rem', fontWeight: 700 }}>M</Box>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700 }}>OpenLedger Account</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.6, alignItems: 'center' }}>
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
          <Typography sx={{ fontSize: '0.62rem', color: '#059669', fontWeight: 600 }}>Active Enclave</Typography>
        </Box>
      </Box>

      {/* Dual Column Layout */}
      <Box sx={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 1.4, py: 1.2, overflow: 'hidden' }}>
        {/* Left: Spendable & Card */}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <Typography sx={{ fontSize: '0.65rem', color: '#64748B', fontWeight: 500 }}>Spendable</Typography>
            <Typography sx={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.1 }}>$9,076.56</Typography>
            <Typography sx={{ fontSize: '0.65rem', color: '#64748B', mt: 0.4 }}>Total Balance: $19,176.56 ↺</Typography>
          </Box>
          <Box sx={{ aspectRatio: '1.7 / 1', background: 'linear-gradient(145deg, #242830 0%, #121419 100%)', borderRadius: 2.5, p: 1.2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
            <Typography sx={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.5)' }}>OPENLEDGER CARD</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 700 }}>$1,337.19 🟢</Typography>
              <Typography sx={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.7)' }}>•••• 2312 &gt;</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right: Activity */}
        <Box sx={{ background: '#fff', borderRadius: 2, p: 1.2, border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 0.8 }}>
          <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, color: '#0F172A' }}>Recent Activity</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600 }}>Uber</Typography>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600 }}>-$35.19</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600 }}>Claude 3.5 Sonnet</Typography>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600 }}>-$22.59</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600 }}>GPT-4o Omniverse</Typography>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 600 }}>-$14.20</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. DESKTOP PRODUCT SCREEN (Reference 1 style)                               */
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56', boxShadow: '0 0 6px rgba(255,95,86,0.5)' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E', boxShadow: '0 0 6px rgba(255,189,46,0.5)' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F', boxShadow: '0 0 6px rgba(39,201,63,0.5)' }} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 14, height: 14, borderRadius: 3, background: 'linear-gradient(135deg, #7C3AED, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 }}>🐙</Box>
          <Typography sx={{ fontSize: '0.74rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em' }}>
            OpenLedger Studio — Multi-Model Reasoning Canvas
          </Typography>
        </Box>

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
        </Box>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 1.8, gap: 1.4, overflow: 'hidden' }}>
          <Box sx={{ alignSelf: 'flex-end', maxWidth: '75%', background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)', borderRadius: '14px 14px 2px 14px', px: 1.6, py: 0.8, boxShadow: '0 4px 16px rgba(37,99,235,0.3)' }}>
            <Typography sx={{ fontSize: '0.78rem', color: '#fff', fontWeight: 500 }}>
              Compare cryptographic consensus across ZK-rollups and generate Rust verification logic.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.4, flex: 1, minHeight: 0 }}>
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
              </Box>
            </Box>

            <Box sx={{ background: 'rgba(18,22,30,0.85)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 2.5, p: 1.4, display: 'flex', flexDirection: 'column', gap: 0.8, overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                  <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981' }} />
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: '#34D399' }}>GPT-4o Omniverse</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)' }}>180ms · Match</Typography>
              </Box>
              <Box sx={{ background: 'rgba(0,0,0,0.4)', borderRadius: 1.5, p: 1, border: '1px solid rgba(255,255,255,0.04)', flex: 1, overflow: 'hidden' }}>
                <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.45 }}>
                  Batch verification confirmed. Security guarantees remain identical across Groth16 and Plonk.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
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
            if (sectionRef.current) {
              const isLight = self.progress >= 0.7;
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

      // PHASE 1: MacBook in dark background opens upright (Reference 1)
      tl.to(laptopWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power3.out', duration: 0.8 }, 0);
      tl.to(macLidRef.current, { rotateX: 0, ease: 'power2.inOut', duration: 1.2 }, 0.1);
      tl.to(macScreenRef.current, { opacity: 1, ease: 'power2.in', duration: 0.6 }, 0.7);
      tl.to({}, { duration: 0.5 }, 1.4);

      // PHASE 2a: Screen size changes -> Laptop morphs to Tablet
      tl.to(macBaseRef.current, { opacity: 0, y: 30, ease: 'power2.in', duration: 0.5 }, 1.9);
      tl.to(laptopWrapRef.current, { opacity: 0, scale: 0.85, ease: 'power2.inOut', duration: 0.6 }, 1.9);
      tl.to(tabletWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power3.out', duration: 0.6 }, 2.2);
      tl.to({}, { duration: 0.4 }, 2.8);

      // PHASE 2b: Tablet morphs to Mobile Phone
      tl.to(tabletWrapRef.current, { opacity: 0, scale: 0.88, ease: 'power2.inOut', duration: 0.5 }, 3.2);
      tl.to(phoneWrapRef.current, { opacity: 1, scale: 1, y: 0, ease: 'power3.out', duration: 0.55 }, 3.5);
      tl.to({}, { duration: 0.4 }, 4.0);

      // PHASE 3: Background turns LIGHT + Hand holding mobile rises + Content animates in
      tl.to(bgOverlayRef.current, { opacity: 1, ease: 'power2.inOut', duration: 0.8 }, 4.4);
      tl.to(topBadgeRef.current, { opacity: 0, duration: 0.3 }, 4.4);
      tl.to(phoneWrapRef.current, { opacity: 0, scale: 0.95, ease: 'power2.in', duration: 0.4 }, 4.5);
      tl.to(phase3Ref.current, { opacity: 1, ease: 'none', duration: 0.1 }, 4.7);
      tl.to(handRef.current, { y: 0, opacity: 1, ease: 'power3.out', duration: 1.1 }, 4.8);
      tl.to(contentRef.current, { opacity: 1, x: 0, ease: 'power3.out', duration: 0.9 }, 5.0);

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
        {/* Dark Background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 90% 70% at 50% 40%, #0c111c 0%, #06080d 100%)',
            zIndex: 0,
          }}
        />

        {/* Light Overlay (Phase 3) */}
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

        {/* Top Floating Badge */}
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
            <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#7C3AED', boxShadow: '0 0 10px #7C3AED' }} />
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em' }}>
              Desktop to Mobile · Synchronized AI & Global Ledger
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
          {/* 1. REALISTIC MACBOOK PRO */}
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
            <Box sx={{ width: '100%', perspective: '1200px' }}>
              <Box
                ref={macLidRef}
                sx={{
                  width: '100%',
                  paddingTop: '62.5%',
                  position: 'relative',
                  background: 'linear-gradient(180deg, #1C1E24 0%, #0F1116 100%)',
                  borderRadius: '16px 16px 0 0',
                  border: '2.5px solid rgba(255,255,255,0.1)',
                  borderBottom: 'none',
                  boxShadow: '0 -10px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.15)',
                  overflow: 'hidden',
                }}
              >
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
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: '#1A202C', border: '1px solid #2D3748' }} />
                </Box>
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

            <Box
              ref={macBaseRef}
              sx={{
                width: '104%',
                height: 16,
                background: 'linear-gradient(180deg, #2D3039 0%, #1A1C22 50%, #121418 100%)',
                borderRadius: '0 0 14px 14px',
                border: '1.5px solid rgba(255,255,255,0.12)',
                borderTop: '1px solid #3F4452',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: 90, height: 4, background: '#0D0E12', borderRadius: '0 0 6px 6px' }} />
              <Box sx={{ position: 'absolute', bottom: -3, left: '12%', width: 28, height: 3, background: '#090A0D', borderRadius: '0 0 3px 3px' }} />
              <Box sx={{ position: 'absolute', bottom: -3, right: '12%', width: 28, height: 3, background: '#090A0D', borderRadius: '0 0 3px 3px' }} />
            </Box>
          </Box>

          {/* 2. TABLET MOCKUP */}
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
              boxShadow: '0 30px 90px rgba(0,0,0,0.8)',
              p: '14px 12px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ position: 'absolute', top: 6, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, borderRadius: '50%', background: '#0D0E12', border: '1px solid #2D3748' }} />
            <Box sx={{ width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden' }}>
              <TabletLedgerScreen />
            </Box>
          </Box>

          {/* 3. PHONE MOCKUP (Showing User's Exact App Screen) */}
          <Box
            ref={phoneWrapRef}
            sx={{
              position: 'absolute',
              width: { md: '21vw', lg: '18vw' },
              maxWidth: 290,
              aspectRatio: '9/19.2',
              borderRadius: '44px',
              background: 'linear-gradient(145deg, #252830 0%, #121419 100%)',
              border: '3px solid rgba(255,255,255,0.14)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.85)',
              p: '12px 9px',
              boxSizing: 'border-box',
            }}
          >
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
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#111' }} />
              <Box sx={{ width: 4, height: 4, borderRadius: '50%', background: '#0F2C59' }} />
            </Box>
            <Box sx={{ width: '100%', height: '100%', borderRadius: '34px', overflow: 'hidden' }}>
              <SpendableAppScreen />
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
                  maxWidth: { xs: '100%', md: 560 },
                  pt: { xs: 4, md: 8 },
                  pb: { xs: 4, md: 0 },
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
                    ✦ ONE ACCOUNT FOR GLOBAL INTELLIGENCE
                  </Typography>
                </Box>

                {/* Catchy Main Headline (Matching User's "One account for global money" vibe) */}
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
                  One account for{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                    }}
                  >
                    global money & AI.
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
                  Spend, run frontier models, and manage decentralized compute from a single
                  unified ledger. Zero switching friction, zero compromise.
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

                {/* Download CTAs & QR Code Badge */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
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
                    Download for iOS
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
                    Get on Android
                  </Button>

                  {/* QR Code Quick Badge */}
                  <Box
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      alignItems: 'center',
                      gap: 1.2,
                      p: '6px 12px 6px 8px',
                      borderRadius: 2,
                      background: '#FFFFFF',
                      border: '1px solid rgba(0,0,0,0.08)',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                    }}
                  >
                    {/* SVG QR Code */}
                    <Box
                      component="svg"
                      viewBox="0 0 24 24"
                      sx={{ width: 34, height: 34, fill: '#0F172A' }}
                    >
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4-2h2v4h-2v-4zm2 6h4v2h-4v-2zm2-4h2v2h-2v-2zm-4 4h2v2h-2v-2zm0-6h2v2h-2v-2zm-3-3h2v2h-2v-2zm0-4h2v2h-2V7zm-2 2h2v2h-2V9z" />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>
                        Scan to Install
                      </Typography>
                      <Typography sx={{ fontSize: '0.58rem', color: '#64748B' }}>
                        iOS 17+ & Android 14+
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Right Column: Hand Holding Smartphone with exact SpendableAppScreen */}
              <Box
                ref={handRef}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '100%', md: '46%', lg: '42%' },
                  maxWidth: 480,
                  height: { xs: '50vh', md: '88vh' },
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
              >
                {/* Ambient glow behind hand */}
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
                    filter: 'blur(35px)',
                    zIndex: 0,
                  }}
                />

                {/* Hand Image container */}
                <Box sx={{ position: 'relative', width: '100%', maxHeight: '86vh' }}>
                  <Box
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

                  {/* Overlay Exact App Screen onto Phone Display */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '33.1%',
                      top: '21.7%',
                      width: '33.8%',
                      height: '53.6%',
                      borderRadius: '26px',
                      overflow: 'hidden',
                      zIndex: 2,
                      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.15)',
                    }}
                  >
                    <SpendableAppScreen />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
