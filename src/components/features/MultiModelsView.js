import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';

const MODELS_DATA = [
  {
    id: 'claude-3-5',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    iconSrc: '/Models/Claude.svg',
    tagline: 'Best-in-class reasoning, complex coding & mathematical deduction',
    benchmark: '93.7% HumanEval',
    latency: '340ms TTFT',
    throughput: '98 tok/s',
    highlight: 'Recommended for code',
  },
  {
    id: 'chatgpt-4o',
    name: 'ChatGPT 4o',
    provider: 'OpenAI',
    iconSrc: '/Models/Chatgpt.svg',
    tagline: 'Omni multimodal vision, conversational intelligence & creative analysis',
    benchmark: '88.7% MMLU',
    latency: '290ms TTFT',
    throughput: '112 tok/s',
    highlight: 'Multimodal leader',
  },
  {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'DeepSeek',
    iconSrc: '/Models/DeepSeek.svg',
    tagline: 'Open-weights deep reasoning engine with verifiable chain-of-thought',
    benchmark: '90.8% MATH-500',
    latency: '410ms TTFT',
    throughput: '85 tok/s',
    highlight: 'Math & Logic',
  },
  {
    id: 'llama-3-3',
    name: 'Llama 3.3 70B',
    provider: 'Meta',
    iconSrc: '/Models/Llama.svg',
    tagline: 'Decentralized sovereign weights with zero corporate gatekeeping',
    benchmark: '86.4% GSM8K',
    latency: '260ms TTFT',
    throughput: '124 tok/s',
    highlight: 'Decentralized',
  },
];

export default function MultiModelsView() {
  const [selectedModel, setSelectedModel] = React.useState(MODELS_DATA[0]);

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
              Unified Multi-Model Routing
            </Typography>
            <Chip
              label="11+ LEADING MODELS"
              size="small"
              sx={{
                backgroundColor: 'rgba(59, 130, 246, 0.14)',
                color: '#60A5FA',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
                height: 22,
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.88rem' }}>
            Switch or parallelize prompts across OpenAI, Anthropic, DeepSeek, and Meta with one unified context.
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
            <BoltRoundedIcon sx={{ fontSize: 16, color: '#F59E0B' }} />
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.78rem', fontWeight: 600 }}>
              Smart Auto-Routing
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Model Cards Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 1.8,
        }}
      >
        {MODELS_DATA.map((m) => {
          const isSelected = selectedModel.id === m.id;
          return (
            <Box
              key={m.id}
              onClick={() => setSelectedModel(m)}
              sx={{
                p: 2.2,
                borderRadius: '12px',
                backgroundColor: isSelected
                  ? 'rgba(255, 255, 255, 0.07)'
                  : 'rgba(255, 255, 255, 0.03)',
                border: isSelected
                  ? '1px solid rgba(255, 255, 255, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isSelected ? '0 4px 20px rgba(0, 0, 0, 0.4)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={m.iconSrc}
                        alt={m.name}
                        style={{
                          width: 20,
                          height: 20,
                          objectFit: 'contain',
                          filter: 'brightness(0) invert(1)',
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.94rem' }}>
                        {m.name}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.72rem' }}>
                        {m.provider}
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label={m.highlight}
                    size="small"
                    sx={{
                      backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.66rem',
                      fontWeight: 600,
                      height: 22,
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.62)',
                    fontSize: '0.82rem',
                    lineHeight: 1.45,
                    minHeight: 38,
                  }}
                >
                  {m.tagline}
                </Typography>
              </Box>

              {/* Benchmarks row */}
              <Box
                sx={{
                  pt: 1.2,
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.74rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <span>{m.benchmark}</span>
                <span>{m.latency}</span>
                <span style={{ color: '#10B981', fontWeight: 600 }}>{m.throughput}</span>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
