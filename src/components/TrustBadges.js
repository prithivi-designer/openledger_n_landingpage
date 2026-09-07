import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function TrustBadges() {
  return (
    <Box
      id="hero-trust-badges"
      sx={{
        textAlign: 'center',
        mt: 'auto',
        pt: { xs: 2, md: 3 },
        pb: { xs: 2.5, md: 3.5 },
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(15, 23, 42, 0.78)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '999px',
          px: { xs: 3, sm: 4.5 },
          py: 1.1,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'rgba(255, 255, 255, 0.65)',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            mb: 0.5,
          }}
        >
          Built by engineers from
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 2.5, sm: 4 },
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Product Sans", "Inter", sans-serif',
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Google
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: 13 }}>
              {[3, 6, 9, 13, 9, 6, 3].map((h, i) => (
                <Box
                  key={i}
                  sx={{
                    width: '2px',
                    height: h,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: '1px',
                  }}
                />
              ))}
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '0.88rem', md: '0.98rem' },
                fontWeight: 800,
                letterSpacing: '0.06em',
                color: '#FFFFFF',
              }}
            >
              CISCO
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: '0.98rem', md: '1.1rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Adobe
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
