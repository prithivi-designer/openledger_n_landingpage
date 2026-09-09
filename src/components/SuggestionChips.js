import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import CodeIcon from '@mui/icons-material/Code';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const CHIPS_DATA = [
  {
    label: 'Weather',
    icon: WbSunnyOutlinedIcon,
    samplePrompt: 'What is the current global weather outlook and temperature trends this week?',
  },
  {
    label: 'Code',
    icon: CodeIcon,
    samplePrompt: 'Write a performant React custom hook for debouncing search input in Next.js.',
  },
  {
    label: 'Write',
    icon: EditOutlinedIcon,
    samplePrompt: 'Draft an engaging product launch announcement for an autonomous multi-model AI assistant.',
  },
  {
    label: 'Analyze',
    icon: BarChartOutlinedIcon,
    samplePrompt: 'Analyze recent breakthroughs in decentralized machine learning and on-chain intelligence.',
  },
  {
    label: 'Brainstorm',
    icon: LightbulbOutlinedIcon,
    samplePrompt: 'Brainstorm 5 creative ideas for community-driven AI agent workflows.',
  },
];

export default function SuggestionChips({ onSelectPrompt }) {
  return (
    <Box
      id="hero-suggestion-chips"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 1, sm: 1.5 },
        mt: 2.5,
        width: '100%',
        maxWidth: 740,
        mx: 'auto',
      }}
    >
      {CHIPS_DATA.map((chip) => {
        const IconComponent = chip.icon;
        return (
          <Button
            key={chip.label}
            onClick={() => onSelectPrompt(chip.samplePrompt)}
            startIcon={
              <IconComponent
                sx={{
                  fontSize: '17px !important',
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'color 0.2s ease',
                }}
              />
            }
            sx={{
              borderRadius: '9999px',
              py: 0.8,
              px: 2.2,
              fontSize: '0.88rem',
              fontWeight: 500,
              textTransform: 'none',
              color: 'rgba(255, 255, 255, 0.9)',
              backgroundColor: 'rgba(20, 24, 30, 0.52)',
              backdropFilter: 'blur(8px) saturate(180%)',
              WebkitBackdropFilter: 'blur(8px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3), inset 0 1.5px 1.5px rgba(255, 255, 255, 0.2)',
              transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
              '&:hover': {
                background: 'linear-gradient(180deg, rgba(255, 102, 0, 0.18) 0%, rgba(255, 255, 255, 0.08) 100%)',
                borderColor: 'rgba(255, 102, 0, 0.45)',
                color: '#ff6600',
                backdropFilter: 'blur(16px) saturate(200%)',
                WebkitBackdropFilter: 'blur(16px) saturate(200%)',
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1.5px 2px rgba(255, 255, 255, 0.45), inset 0 0 0 0.5px rgba(255, 102, 0, 0.3)',
                '& .MuiButton-startIcon svg': {
                  color: '#ff6600',
                },
              },
              '&:active': {
                transform: 'scale(0.93)',
              },
            }}
          >
            {chip.label}
          </Button>
        );
      })}
    </Box>
  );
}
