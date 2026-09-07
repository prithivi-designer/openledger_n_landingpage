import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Examples', href: '#examples' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      id="hero-navbar"
      sx={{
        backgroundColor: 'rgba(10, 12, 16, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 76 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Brand Logo */}
          <Box
            component="a"
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'radial-gradient(circle, #8B5CF6 0%, #6366F1 50%, #3B82F6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(139, 92, 246, 0.65)',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 0 6px #FFFFFF',
                }}
              />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                letterSpacing: '-0.02em',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                color: '#FFFFFF',
              }}
            >
              OpenLedger
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#FFFFFF',
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          {/* Desktop Right CTA */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              variant="contained"
              href="https://ais.openledger.xyz/chat"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: '999px',
                px: 2.8,
                py: 0.9,
                fontSize: '0.88rem',
                fontWeight: 500,
                backgroundColor: 'rgba(28, 30, 36, 0.85)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(45, 48, 56, 0.95)',
                  borderColor: 'rgba(255, 255, 255, 0.28)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open drawer"
              sx={{
                color: '#FFFFFF',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: 2,
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            top: { xs: 64, md: 76 },
            backgroundColor: 'rgba(12, 14, 18, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            px: 2,
            py: 2,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  py: 1.5,
                  borderRadius: 1.5,
                  color: 'rgba(255, 255, 255, 0.85)',
                  '&:hover': { color: '#FFFFFF', backgroundColor: 'rgba(255, 255, 255, 0.06)' },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 1.5 }}>
            <Button
              fullWidth
              variant="contained"
              href="https://ais.openledger.xyz/chat"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: '999px',
                py: 1.2,
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#E2E8F0' },
              }}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
