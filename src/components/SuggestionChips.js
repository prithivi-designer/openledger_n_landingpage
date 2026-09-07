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
                  color: 'rgba(255, 255, 255, 0.65)',
                  transition: 'color 0.2s ease',
                }}
              />
            }
            sx={{
              borderRadius: '999px',
              py: 0.8,
              px: 2,
              fontSize: '0.88rem',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.85)',
              backgroundColor: 'rgba(22, 25, 32, 0.65)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              '&:hover': {
                backgroundColor: 'rgba(38, 43, 54, 0.85)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.45)',
                '& .MuiButton-startIcon svg': {
                  color: '#FFFFFF',
                },
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
