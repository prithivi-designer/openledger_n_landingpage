import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const MEMORY_NODES = [
  {
    title: 'Developer Engineering Context',
    vectors: '682 embeddings',
    tags: ['React 19', 'Solidity', 'Next.js SSR', 'ZK-Proofs'],
    lastUpdated: '12 mins ago',
    similarity: '99.4% recall',
  },
  {
    title: 'Financial Model & Tokenomics',
    vectors: '418 embeddings',
    tags: ['DeFi Yield', 'Liquidity Pools', 'Staking APR'],
    lastUpdated: '1 hour ago',
    similarity: '98.8% recall',
  },
  {
    title: 'Personal Writing Style & Tone',
    vectors: '320 embeddings',
    tags: ['Concise', 'Technical', 'No Jargon', 'Bullet Points'],
    lastUpdated: 'Yesterday',
    similarity: '99.7% recall',
  },
];

export default function PortableMemoryView() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Header */}
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
              Decentralized Portable Memory
            </Typography>
            <Chip
              label="USER-OWNED VECTORS"
              size="small"
              sx={{
                backgroundColor: 'rgba(168, 85, 247, 0.14)',
                color: '#C084FC',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
                height: 22,
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.88rem' }}>
            Your knowledge graph travels with you across Claude, ChatGPT, and DeepSeek with client-side encryption.
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
            <HubRoundedIcon sx={{ fontSize: 16, color: '#C084FC' }} />
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.78rem', fontWeight: 600 }}>
              1,420 Active Vectors
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Memory Nodes List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
        {MEMORY_NODES.map((node, idx) => (
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
                <StorageRoundedIcon sx={{ fontSize: 22, color: '#C084FC' }} />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 0.5 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.96rem' }}
                  >
                    {node.title}
                  </Typography>
                  <Chip
                    label={node.vectors}
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

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 0.8 }}>
                  {node.tags.map((t, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 1,
                        py: 0.2,
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.65)',
                        fontSize: '0.72rem',
                      }}
                    >
                      #{t}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <CheckCircleOutlineRoundedIcon sx={{ fontSize: 14, color: '#10B981' }} />
                  <Typography
                    variant="caption"
                    sx={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.74rem' }}
                  >
                    Synced {node.lastUpdated} • Client-encrypted
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
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  color: '#C084FC',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {node.similarity}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
