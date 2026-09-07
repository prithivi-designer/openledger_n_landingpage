import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const AGENT_PIPELINES = [
  {
    name: 'DeFi Autonomous Yield Optimizer',
    type: 'Financial Agent',
    status: 'ACTIVE • RUNNING',
    statusColor: '#10B981',
    description:
      'Continuously monitors on-chain liquidity pools, gas spreads, and lending rates. Executes rebalancing with cryptographic zero-knowledge proof of execution.',
    tools: ['Web3 RPC', 'Uniswap v3 Router', 'Aave v3 Core', 'zk-Proof Generator'],
    executionCount: '1,842 triggers completed',
  },
  {
    name: 'Smart Contract Bytecode Auditor',
    type: 'Security Agent',
    status: 'STANDBY • LISTENING',
    statusColor: '#60A5FA',
    description:
      'Performs automated formal verification and reentrancy analysis on EVM bytecode before transaction execution, protecting vaults from zero-day exploits.',
    tools: ['Slither Engine', 'Mythril Core', 'EVM Disassembler', 'DeepSeek R1 Verifier'],
    executionCount: '49 vulnerabilities flagged',
  },
  {
    name: 'Autonomous Crypto Research Synthesizer',
    type: 'Intelligence Agent',
    status: 'ACTIVE • CRON HOURLY',
    statusColor: '#F59E0B',
    description:
      'Aggregates governance proposals, GitHub commits, discord announcements, and token unlocks into high-conviction executive briefs delivered to your memory vault.',
    tools: ['GitHub GraphQL', 'Snapshot API', 'Discord Webhooks', 'Claude 3.5 Summarizer'],
    executionCount: '24 briefs synthesized today',
  },
];

export default function BuildForAgentsView() {
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
              Autonomous Agent Orchestration
            </Typography>
            <Chip
              label="VERIFIABLE EXECUTION"
              size="small"
              sx={{
                backgroundColor: 'rgba(245, 158, 11, 0.14)',
                color: '#FBBF24',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.04em',
                height: 22,
              }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.88rem' }}>
            Build, test, and deploy sovereign agents equipped with webhooks, smart contract calls, and verifiable logs.
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
            <PrecisionManufacturingRoundedIcon sx={{ fontSize: 16, color: '#FBBF24' }} />
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.78rem', fontWeight: 600 }}>
              3 Active Pipelines
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Agents List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
        {AGENT_PIPELINES.map((agent, idx) => (
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
                <TerminalRoundedIcon sx={{ fontSize: 22, color: agent.statusColor }} />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 0.5 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.96rem' }}
                  >
                    {agent.name}
                  </Typography>
                  <Chip
                    label={agent.type}
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
                  {agent.description}
                </Typography>

                {/* Tool Pills */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 0.8 }}>
                  {agent.tools.map((tool, i) => (
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
                      {tool}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <CheckCircleOutlineRoundedIcon sx={{ fontSize: 14, color: '#10B981' }} />
                  <Typography
                    variant="caption"
                    sx={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.74rem' }}
                  >
                    {agent.executionCount}
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
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${agent.statusColor}44`,
                  color: agent.statusColor,
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  whiteSpace: 'nowrap',
                }}
              >
                {agent.status}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
