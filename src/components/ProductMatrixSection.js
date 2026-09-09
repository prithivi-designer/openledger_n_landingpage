import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import { useThemeMode } from '@/context/ThemeContext';

// Icons
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const OPTIONS = [
  {
    id: 'chat',
    title: 'Chat',
    icon: ChatBubbleOutlineRoundedIcon,
    image: '/images/chat_feature_bg.jpg',
    overlayEyebrow: 'CONVERSATIONAL INTELLIGENCE',
    overlayTitle: 'Contextual dialogue\nwithout boundaries.',
  },
  {
    id: 'agent',
    title: 'Agent',
    icon: SmartToyOutlinedIcon,
    image: '/images/agent_feature_bg.jpg',
    overlayEyebrow: 'AUTONOMOUS EXECUTION',
    overlayTitle: 'Intelligent reconciliation\nand proactive action.',
  },
  {
    id: 'build',
    title: 'Build',
    icon: CodeRoundedIcon,
    image: '/images/build_feature_bg.jpg',
    overlayEyebrow: 'CUSTOM INTEGRATIONS',
    overlayTitle: 'Create and deploy models\nseamlessly.',
  },
  {
    id: 'imagine',
    title: 'Imagine',
    icon: ImageOutlinedIcon,
    image: '/images/imagine_feature_bg.jpg',
    overlayEyebrow: 'VISUAL GENERATION',
    overlayTitle: 'State-of-the-art multi-modal\ncreative synthesis.',
  },
  {
    id: 'voice',
    title: 'Voice',
    icon: MicNoneOutlinedIcon,
    image: '/images/voice_feature_bg.jpg',
    overlayEyebrow: 'AUDIO SYNTHESIS',
    overlayTitle: 'Low-latency speech\nand acoustic reasoning.',
  },
];

const GlassCard = ({ children, sx = {}, borderRadius = 24, ...props }) => {
  const { isDark } = useThemeMode();
  return (
    <Box
      sx={{
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.09)' : '1px solid rgba(0, 0, 0, 0.06)',
        boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.3)' : '0 10px 40px rgba(0,0,0,0.05)',
        borderRadius: `${borderRadius}px`,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default function ProductMatrixSection() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const activeTab = OPTIONS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % OPTIONS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + OPTIONS.length) % OPTIONS.length);
  };

  return (
    <Box
      component="section"
      id="ecosystem"
      sx={{
        backgroundColor: 'var(--bg-section)',
        color: 'var(--text-primary)',
        py: { xs: 4, md: 6 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        fontFamily: '"Inter", "Roboto", sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Soft background glow for glass effect enhancement */}
      <Box sx={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(100,150,255,0.03) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Top Header Row */}
        <Grid container spacing={3} sx={{ mb: { xs: 3, md: 4 } }}>
          <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                BUILT
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--text-heading)', mb: 2 }}>
              Built to handle<br/>
              <Box component="span" sx={{ color: 'var(--text-secondary)', display: 'inline-block' }}>
                complexity
              </Box>
            </Typography>
            <Typography sx={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '500px', lineHeight: 1.6 }}>
              A unified platform to build, govern, and scale enterprise AI agents — securely and effortlessly.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={5} sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
             <GlassCard sx={{ maxWidth: '240px', p: 2.5 }}>
                <Box sx={{ width: 28, height: 28, borderRadius: '6px', backgroundColor: 'var(--bg-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                  <LockOutlinedIcon sx={{ fontSize: '1rem', color: '#3B82F6' }} />
                </Box>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-heading)', mb: 0.5 }}>Uncensored Access</Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Text, image, video, audio, code and search all in one place without restrictive guardrails.</Typography>
             </GlassCard>
             <GlassCard sx={{ maxWidth: '240px', p: 2.5 }}>
                <Box sx={{ width: 28, height: 28, borderRadius: '6px', backgroundColor: 'var(--bg-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1.5 }}>
                  <SecurityOutlinedIcon sx={{ fontSize: '1rem', color: '#3B82F6' }} />
                </Box>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-heading)', mb: 0.5 }}>Total Privacy</Typography>
                <Typography sx={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Interact securely and anonymously without compromising your enterprise data or identity.</Typography>
             </GlassCard>
          </Grid>
        </Grid>

        {/* Main Content Grid */}
        <Grid container spacing={3} alignItems="stretch" sx={{ flexGrow: 1 }}>
          
          {/* Left Sidebar */}
          <Grid item xs={12} md={3} sx={{ display: 'flex' }}>
            <GlassCard sx={{ width: '100%', display: 'flex', flexDirection: 'column', p: { xs: 2, md: 3 }, borderRadius: '32px' }}>
              
              <Typography sx={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, px: 1, mb: 4 }}>
                The fastest way to build, govern, and scale enterprise AI agents.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: 1 }}>
                {OPTIONS.map((opt, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <Box
                      key={opt.id}
                      onClick={() => setActiveIdx(idx)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 2,
                        borderRadius: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: isActive ? 'var(--bg-pill)' : 'transparent',
                        '&:hover': { backgroundColor: isActive ? 'var(--bg-pill)' : 'var(--bg-card-hover)' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <opt.icon sx={{ fontSize: '1.2rem', color: isActive ? 'var(--text-heading)' : 'var(--text-secondary)' }} />
                        <Typography sx={{ fontSize: '1rem', fontWeight: isActive ? 500 : 400, color: isActive ? 'var(--text-heading)' : 'var(--text-secondary)' }}>
                          {opt.title}
                        </Typography>
                      </Box>
                      <ChevronRightRoundedIcon sx={{ fontSize: '1.1rem', color: 'var(--text-secondary)', opacity: isActive ? 1 : 0.4 }} />
                    </Box>
                  );
                })}
              </Box>

              <Box component="button" sx={{ 
                mt: 4, width: '100%', py: 2, px: 3, 
                borderRadius: '30px', 
                backgroundColor: 'var(--text-heading)', 
                color: 'var(--bg-section)', 
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                border: 'none', cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(0.98)' }
              }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600 }}>Explore Platform</Typography>
                <ArrowForwardRoundedIcon sx={{ fontSize: '1.2rem' }} />
              </Box>
            </GlassCard>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={9} sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            
            {/* Image Display */}
            <Box sx={{ position: 'relative', flexGrow: 1, minHeight: { xs: '300px', md: '350px' }, borderRadius: '32px', overflow: 'hidden', backgroundColor: '#000' }}>
              {OPTIONS.map((opt, idx) => (
                <Box
                  key={opt.id}
                  sx={{
                    position: 'absolute', inset: 0,
                    opacity: activeIdx === idx ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                    pointerEvents: activeIdx === idx ? 'auto' : 'none'
                  }}
                >
                  <Box component="img" src={opt.image} sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  
                  {/* Text Overlays */}
                  <Box sx={{ position: 'absolute', top: { xs: 32, md: 48 }, left: { xs: 32, md: 48 } }}>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                      {opt.overlayEyebrow}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 500, lineHeight: 1.2, color: '#fff', whiteSpace: 'pre-line' }}>
                      {opt.overlayTitle}
                    </Typography>
                  </Box>

                  <Box sx={{ position: 'absolute', bottom: { xs: 32, md: 48 }, left: { xs: 32, md: 48 } }}>
                    <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                      Real-time processing.<br/>Enterprise ready.
                    </Typography>
                  </Box>
                </Box>
              ))}

              {/* Pagination Controls */}
              <GlassCard sx={{ position: 'absolute', bottom: { xs: 24, md: 40 }, right: { xs: 24, md: 40 }, display: 'flex', alignItems: 'center', gap: 2, p: 1, borderRadius: '30px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Box onClick={handlePrev} sx={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' } }}>
                  <KeyboardArrowLeftRoundedIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
                </Box>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff', letterSpacing: '0.1em' }}>
                  {activeIdx + 1} / {OPTIONS.length}
                </Typography>
                <Box onClick={handleNext} sx={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' } }}>
                  <KeyboardArrowRightRoundedIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
                </Box>
              </GlassCard>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
