import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useThemeMode } from '@/context/ThemeContext';

const NAV_ITEMS = [
  {
    label: 'Product',
    hasDropdown: true,
    links: [
      { name: 'AI Studio', desc: 'Multi-model reasoning & generation interface' },
      { name: 'Model Router', desc: 'Zero-latency dynamic model routing engine' },
      { name: 'Verifiable Inference', desc: 'Cryptographically proven on-chain AI' },
      { name: 'Developer APIs', desc: 'Python & TypeScript SDK integration' },
    ],
  },
  {
    label: 'Solutions',
    hasDropdown: true,
    links: [
      { name: 'For Developers', desc: 'Build with leading LLMs and frontier models' },
      { name: 'For Enterprises', desc: 'Private data isolation and custom fine-tuning' },
      { name: 'Web3 & Agents', desc: 'Autonomous on-chain agent workflows' },
      { name: 'AI Research', desc: 'Reproducible multi-model benchmarking' },
    ],
  },
  {
    label: 'Company',
    hasDropdown: true,
    links: [
      { name: 'About Us', desc: 'Our mission to build open, verifiable AI' },
      { name: 'Blog', desc: 'Technical papers, updates, and releases' },
      { name: 'Careers', desc: 'Join our team of engineers & researchers' },
      { name: 'Brand Kit', desc: 'Official logos, assets, and media guidelines' },
    ],
  },
  {
    label: 'Resources',
    hasDropdown: true,
    links: [
      { name: 'Documentation', desc: 'Comprehensive API & platform documentation' },
      { name: 'GitHub', desc: 'Open-source tools, examples, and SDKs' },
      { name: 'Research Papers', desc: 'Verifiable AI consensus and benchmarks' },
      { name: 'Community Discord', desc: 'Join 50k+ creators, builders, and developers' },
    ],
  },
  {
    label: 'Pricing',
    hasDropdown: false,
    href: '#pricing',
  },
];

export default function Header() {
  const { isDark, toggleTheme } = useThemeMode();
  const [showNavComponents, setShowNavComponents] = React.useState(false);
  const [isDarkSection, setIsDarkSection] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [waitlistOpen, setWaitlistOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const dropdownTimeoutRef = React.useRef(null);

  const effectiveIsDark = isDark && isDarkSection;

  React.useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById('core-features');
      const mobileSection = document.getElementById('mobile-app');
      let isLightPhase = false;
      if (mobileSection) {
        const mRect = mobileSection.getBoundingClientRect();
        if (mRect.top <= 80 && mRect.bottom >= 80) {
          isLightPhase = mobileSection.getAttribute('data-light-phase') === 'true';
        }
      }

      if (secondSection) {
        const rect = secondSection.getBoundingClientRect();
        // Show nav components and switch dark contrast after hitting the second section
        const isPastHero = rect.top <= 80;
        setShowNavComponents(isPastHero);
        setIsDarkSection(isPastHero && !isLightPhase);
        if (!isPastHero) {
          setMobileOpen(false);
        }
      } else {
        const isPastHero = window.scrollY > 600;
        setShowNavComponents(isPastHero);
        setIsDarkSection(isPastHero && !isLightPhase);
        if (!isPastHero) {
          setMobileOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleMouseEnter = (label) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleTryClick = () => {
    window.open('https://ais.openledger.xyz/chat', '_blank', 'noopener,noreferrer');
  };

  const handleWaitlistOpen = () => {
    setWaitlistOpen(true);
    setIsSubmitted(false);
    setEmail('');
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          height: { xs: 58, md: 66 },
          backgroundColor: 'transparent',
          borderBottom: 'none',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2, sm: 4, md: 6 },
          pointerEvents: 'none',
          transition: 'all 0.25s ease',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1240,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'auto',
          }}
        >
          {/* Left: OpenLedger Logo */}
          <Box
            sx={{
              flex: { xs: 'none', md: 1 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Box
              component="a"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'opacity 0.2s ease',
                '&:hover': { opacity: 0.85 },
              }}
            >
              <img
                src="/Open%20Ledegr%20Full%20Black.svg"
                alt="OpenLedger"
                style={{
                  height: 28,
                  width: 'auto',
                  display: 'block',
                  filter: effectiveIsDark ? 'brightness(0) invert(1)' : 'none',
                  transition: 'filter 0.3s ease',
                }}
              />
            </Box>
          </Box>

          {/* Center: Navigation Links (Product ⌵, Solutions ⌵, Company ⌵, Resources ⌵, Pricing) */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { md: 2.5, lg: 3.5 },
              opacity: showNavComponents ? 1 : 0,
              pointerEvents: showNavComponents ? 'auto' : 'none',
              transform: showNavComponents ? 'translateY(0)' : 'translateY(-6px)',
              transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Box
                key={item.label}
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                sx={{ position: 'relative' }}
              >
                <Button
                  onClick={() => {
                    if (item.hasDropdown) {
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    } else {
                      handleWaitlistOpen();
                    }
                  }}
                  endIcon={
                    item.hasDropdown ? (
                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: '15px !important',
                          ml: -0.4,
                          color: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                          transition: 'transform 0.2s ease, color 0.25s ease',
                          transform: activeDropdown === item.label ? 'rotate(180deg)' : 'none',
                        }}
                      />
                    ) : null
                  }
                  sx={{
                    color: effectiveIsDark
                      ? 'rgba(255, 255, 255, 0.85)'
                      : 'rgba(15, 23, 42, 0.85)',
                    fontSize: '0.92rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    p: 0.5,
                    minWidth: 'auto',
                    letterSpacing: '-0.01em',
                    fontFamily: '"Inter", -apple-system, sans-serif',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: effectiveIsDark ? '#FFFFFF' : '#000000',
                    },
                  }}
                >
                  {item.label}
                </Button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <Box
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      pt: 1.2,
                      zIndex: 1400,
                    }}
                  >
                    <Box
                      sx={{
                        width: 280,
                        p: 1.2,
                        borderRadius: '16px',
                        backgroundColor: effectiveIsDark ? 'rgba(18, 22, 30, 0.96)' : 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: effectiveIsDark ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.09)',
                        boxShadow: '0 20px 48px -10px rgba(0, 0, 0, 0.25)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5,
                      }}
                    >
                      {item.links.map((link) => (
                        <Box
                          key={link.name}
                          component="button"
                          onClick={() => {
                            setActiveDropdown(null);
                            handleTryClick();
                          }}
                          sx={{
                            display: 'block',
                            width: '100%',
                            textAlign: 'left',
                            p: 1,
                            borderRadius: '10px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            '&:hover': {
                              backgroundColor: effectiveIsDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.05)',
                            },
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600,
                              color: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                              fontSize: '0.86rem',
                            }}
                          >
                            {link.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: effectiveIsDark ? 'rgba(255, 255, 255, 0.6)' : '#64748B',
                              fontSize: '0.74rem',
                              display: 'block',
                              lineHeight: 1.3,
                              mt: 0.3,
                            }}
                          >
                            {link.desc}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          {/* Right: Actions & Theme Toggle */}
          <Box
            sx={{
              flex: { xs: 'none', md: 1 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: { xs: 0.8, sm: 1.2 },
            }}
          >
            {/* Try Openchat & Join the waitlist (Desktop / Tablet) - slide in when scrolled */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: { xs: 0.8, sm: 1.2 },
                opacity: showNavComponents ? 1 : 0,
                pointerEvents: showNavComponents ? 'auto' : 'none',
                transform: showNavComponents ? 'translateY(0)' : 'translateY(-6px)',
                transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Try Openchat Pill Button */}
              <Button
                onClick={handleTryClick}
                sx={{
                  borderRadius: '999px',
                  py: { xs: 0.6, sm: 0.75 },
                  px: { xs: 1.5, sm: 2.2 },
                  fontSize: { xs: '0.82rem', sm: '0.88rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  color: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                  backgroundColor: effectiveIsDark
                    ? 'rgba(255, 255, 255, 0.12)'
                    : 'rgba(0, 0, 0, 0.06)',
                  border: effectiveIsDark
                    ? '1px solid rgba(255, 255, 255, 0.16)'
                    : '1px solid rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease',
                  fontFamily: '"Inter", -apple-system, sans-serif',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: effectiveIsDark
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Try Openchat
              </Button>

              {/* Join the waitlist Pill Button */}
              <Button
                onClick={handleWaitlistOpen}
                sx={{
                  borderRadius: '999px',
                  py: { xs: 0.6, sm: 0.75 },
                  px: { xs: 1.6, sm: 2.4 },
                  fontSize: { xs: '0.82rem', sm: '0.88rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  color: effectiveIsDark ? '#000000' : '#FFFFFF',
                  backgroundColor: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                  boxShadow: effectiveIsDark
                    ? '0 2px 10px rgba(255, 255, 255, 0.2)'
                    : '0 2px 10px rgba(0, 0, 0, 0.18)',
                  transition: 'all 0.2s ease',
                  fontFamily: '"Inter", -apple-system, sans-serif',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: effectiveIsDark
                      ? 'rgba(255, 255, 255, 0.9)'
                      : '#1E293B',
                    transform: 'translateY(-1px)',
                    boxShadow: effectiveIsDark
                      ? '0 4px 16px rgba(255, 255, 255, 0.3)'
                      : '0 4px 16px rgba(0, 0, 0, 0.25)',
                  },
                }}
              >
                Join the waitlist
              </Button>
            </Box>

            {/* Theme Toggle Button - Always Accessible & Interactive */}
            <Tooltip title={isDark ? 'Switch to light theme' : 'Switch to dark theme'} arrow>
              <IconButton
                onClick={toggleTheme}
                aria-label="Toggle theme mode"
                sx={{
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  borderRadius: '50%',
                  color: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                  backgroundColor: effectiveIsDark
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)',
                  border: effectiveIsDark
                    ? '1px solid rgba(255, 255, 255, 0.18)'
                    : '1px solid rgba(0, 0, 0, 0.09)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.22s ease',
                  '&:hover': {
                    backgroundColor: effectiveIsDark
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.1)',
                    transform: 'scale(1.08)',
                  },
                }}
              >
                {isDark ? (
                  <LightModeOutlinedIcon sx={{ fontSize: { xs: 19, sm: 21 } }} />
                ) : (
                  <DarkModeOutlinedIcon sx={{ fontSize: { xs: 19, sm: 21 } }} />
                )}
              </IconButton>
            </Tooltip>

            {/* Mobile Hamburger Toggle */}
            <IconButton
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                p: 0.6,
                ml: 0.2,
                transition: 'color 0.25s ease',
              }}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Mobile Navigation Dropdown Overlay */}
      {mobileOpen && (
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'fixed',
            top: 58,
            left: 0,
            right: 0,
            backgroundColor: effectiveIsDark
              ? 'rgba(10, 12, 16, 0.98)'
              : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(28px)',
            borderBottom: effectiveIsDark
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
            px: 3,
            py: 2.5,
            zIndex: 1290,
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.18)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
            {NAV_ITEMS.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href || '#'}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  handleWaitlistOpen();
                }}
                sx={{
                  color: effectiveIsDark ? 'rgba(255, 255, 255, 0.9)' : '#0F172A',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  py: 0.5,
                  fontFamily: '"Inter", -apple-system, sans-serif',
                }}
              >
                {item.label}
              </Box>
            ))}

            {/* Try Openchat */}
            <Box
              component="a"
              onClick={() => {
                setMobileOpen(false);
                handleTryClick();
              }}
              sx={{
                color: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                py: 0.5,
                cursor: 'pointer',
                borderTop: effectiveIsDark
                  ? '1px solid rgba(255, 255, 255, 0.08)'
                  : '1px solid rgba(0, 0, 0, 0.08)',
                pt: 1.5,
                fontFamily: '"Inter", -apple-system, sans-serif',
              }}
            >
              Try Openchat →
            </Box>

            {/* Theme Toggle in Mobile Drawer */}
            <Box
              onClick={toggleTheme}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 0.5,
                cursor: 'pointer',
                borderTop: effectiveIsDark
                  ? '1px solid rgba(255, 255, 255, 0.08)'
                  : '1px solid rgba(0, 0, 0, 0.08)',
                pt: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: effectiveIsDark ? '#FFFFFF' : '#0F172A',
                  fontSize: '0.96rem',
                  fontWeight: 600,
                  fontFamily: '"Inter", -apple-system, sans-serif',
                }}
              >
                Theme ({isDark ? 'Dark Mode' : 'Light Mode'})
              </Typography>
              <IconButton size="small" sx={{ color: effectiveIsDark ? '#FFFFFF' : '#0F172A' }}>
                {isDark ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}

      {/* Join the Waitlist Modal */}
      <Dialog
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '20px',
            backgroundColor: 'rgba(15, 18, 24, 0.96)',
            backdropFilter: 'blur(32px)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            p: 1.5,
            color: '#FFFFFF',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton size="small" onClick={() => setWaitlistOpen(false)} sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <DialogContent sx={{ pt: 0, pb: 3, px: 2.5, textAlign: 'center' }}>
          {isSubmitted ? (
            <Box sx={{ py: 3 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 54, color: '#10B981', mb: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                You're on the list!
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.5 }}>
                Thanks for joining. We'll send your private access pass to <strong>{email}</strong> shortly.
              </Typography>
            </Box>
          ) : (
            <Box component="form" onSubmit={handleWaitlistSubmit}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.2, mb: 2 }}>
                <img
                  src="/Open%20Ledegr%20Full%20Black.svg"
                  alt="OpenLedger"
                  style={{ height: 26, width: 'auto', filter: 'brightness(0) invert(1)' }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#FFFFFF' }}>
                Join the Waitlist
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 3, fontSize: '0.88rem', lineHeight: 1.4 }}>
                Be among the first to experience verifiable, multi-model AI inference on OpenLedger Studio.
              </Typography>

              <TextField
                fullWidth
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                size="small"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                    '&.Mui-focused fieldset': { borderColor: '#3B82F6' },
                  },
                }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  py: 1.2,
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Request Early Access
              </Button>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
