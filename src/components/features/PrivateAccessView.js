import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const SECURITY_CARDS = [
  {
    icon: <ShieldOutlinedIcon sx={{ fontSize: 22, color: '#10B981' }} />,
    title: 'Hardware-Isolated TEE Enclaves',
    badge: 'Hardware Verified',
    description:
      'All inferences execute inside confidential hardware enclaves (AMD SEV-SNP & Intel TDX). Neither cloud providers nor node operators can inspect prompt memory or weights.',
    meta: 'Enclave Status: Active • Cryptographic Attestation Validated',
    metrics: 'Memory Isolation: 100%',
  },
  {
    icon: <VpnKeyOutlinedIcon sx={{ fontSize: 22, color: '#F59E0B' }} />,
    title: 'Client-Side Ephemeral Key Sharding',
    badge: 'Zero Knowledge',
    description:
      'Sessions are protected by client-side asymmetric key pairs. Keys are regenerated dynamically per prompt and instantly wiped from volatile RAM upon response stream completion.',
    meta: 'Cipher: ChaCha20-Poly1305 • Zero State Persistence',
    metrics: 'Auto-Shred: <12ms',
  },
  {
    icon: <LockOutlinedIcon sx={{ fontSize: 22, color: '#3B82F6' }} />,
    title: 'Non-Custodial Anonymous Access',
    badge: 'No Account Needed',
    description:
      'No email, no phone number, no KYC. Connect anonymously via Web3 cryptographic signatures or use instant guest sessions with complete telemetry isolation.',
    meta: 'Identity Protocol: EIP-4361 • IP Anonymization Layer',
    metrics: 'Personal Data Retained: 0 Bytes',
  },
];

export default function PrivateAccessView() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Header Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: 1.5,
          pb: 1.5,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 0.5 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                letterSpacing: '-0.02em',
              }}
            >
              Zero-Knowledge Private Enclave
            </Typography>
            <Chip
              label="E2E ENCRYPTED"
              size="small"
              sx={{
                backgroundColor: 'rgba(16, 185, 129, 0.14)',
                color: '#10B981',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
                height: 22,
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.88rem' }}>
            Military-grade confidentiality with verifiable hardware attestation and zero prompt logging.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.8,
              px: 1.2,
              py: 0.5,
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 8px #10B981',
              }}
            />
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.78rem', fontWeight: 600 }}>
              TEE Enclave Verified
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Cards List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
        {SECURITY_CARDS.map((card, idx) => (
          <Box
            key={idx}
            sx={{
              p: { xs: 2, sm: 2.2 },
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.16)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.8, flex: 1 }}>
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  mt: 0.2,
                }}
              >
                {card.icon}
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 0.4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.98rem' }}
                  >
                    {card.title}
                  </Typography>
                  <Chip
                    label={card.badge}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      color: 'rgba(255, 255, 255, 0.75)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      height: 20,
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.58)',
                    fontSize: '0.84rem',
                    lineHeight: 1.5,
                    mb: 0.8,
                  }}
                >
                  {card.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <CheckCircleOutlineRoundedIcon sx={{ fontSize: 14, color: '#10B981' }} />
                  <Typography
                    variant="caption"
                    sx={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.74rem' }}
                  >
                    {card.meta}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                alignSelf: { xs: 'flex-start', sm: 'center' },
                pl: { xs: 7, sm: 0 },
                textAlign: { sm: 'right' },
              }}
            >
              <Box
                sx={{
                  px: 1.2,
                  py: 0.4,
                  borderRadius: '6px',
                  backgroundColor: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#10B981',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {card.metrics}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
