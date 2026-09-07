import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShieldIcon from '@mui/icons-material/Shield';
import BoltIcon from '@mui/icons-material/Bolt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

// Consistent stroke color matching reference Image 1
const STROKE_COLOR = 'var(--border-subtle)';
const INNER_STROKE = 'var(--border-normal)';

// 3 Council Mode points with unique natural scenery backgrounds
const COUNCIL_POINTS = [
  {
    id: 'strengths',
    title: 'Different models, different strengths',
    icon: AutoAwesomeIcon,
    bgImage: '/images/scenery_alpine.jpg',
    description:
      'Claude excels at nuanced prose, system architecture, and deep analysis. GPT-4o delivers structured logic, precision, and production-grade code. Gemini provides real-time web grounding and massive 2M-token context. Querying them simultaneously in Council Mode unlocks the peak superpower of each.',
    bullets: [
      'Tailored outputs matched to each model’s verified benchmark strengths',
      'Unified multi-model prompt execution without switching between tabs',
      'Nuanced prose, structured code, and live web grounding in one view',
    ],
    learnMoreLink: '#supported-models',
  },
  {
    id: 'blindspots',
    title: 'Catch blind spots',
    icon: ShieldIcon,
    bgImage: '/images/scenery_cliffs.jpg',
    description:
      'A solitary model can hallucinate, make subtle logic errors, or miss domain-specific edge cases with complete confidence. When multiple models agree, you can trust the verdict with certainty. When they disagree, Council Mode highlights the exact delta so you know where to look closer.',
    bullets: [
      'Automated consensus detection flags hallucinations before deployment',
      'Multi-engine peer review cross-verifies logic, security, and edge cases',
      'High-risk blind spots surfaced before code or decisions reach production',
    ],
    learnMoreLink: '#supported-models',
  },
  {
    id: 'speed',
    title: 'Better answers, faster decisions',
    icon: BoltIcon,
    bgImage: '/images/scenery_lake.jpg',
    description:
      'Stop spending hours writing back-and-forth prompt revisions with a single model. Council Mode streams answers from Claude, GPT-4o, and Gemini concurrently in parallel. Review divergent takes in under 1.5 seconds, compare side-by-side, and immediately deploy the winning response.',
    bullets: [
      'Sub-1.5s parallel streaming delivered concurrently to your screen',
      'Side-by-side comparative inspection across clarity, depth, and speed',
      'Pick the winning response instantly or merge insights with 1 click',
    ],
    learnMoreLink: '#supported-models',
  },
];

export default function WhyAskMultipleModelsSection() {
  const [activeTab, setActiveTab] = React.useState(0);

  const toggleTab = (index) => {
    setActiveTab((prev) => (prev === index ? -1 : index));
  };

  const previewTab = activeTab >= 0 ? activeTab : 0;

  return (
    <Box
      component="section"
      id="why-multiple-models"
      sx={{
        position: 'relative',
        backgroundColor: 'var(--bg-section)',
        color: 'var(--text-primary)',
        height: { xs: 'auto', md: '100vh' },
        maxHeight: { md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 6, md: 2 },
        px: { xs: 2, sm: 3 },
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Background ambient lighting */}
      <Box
        data-ambient-blur="true"
        sx={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '300px', md: '650px' },
          height: { xs: '300px', md: '450px' },
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.015) 45%, transparent 75%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 1.5, sm: 3 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* ================= SECTION HEADER ================= */}
        <Box sx={{ textAlign: 'center', mb: { xs: 2.5, md: 2 } }}>
          {/* Tag Pill Badge: Council Mode */}
          <Box sx={{ display: 'inline-flex', alignItems: 'center', mb: 0.8 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.9,
                px: 1.6,
                py: 0.4,
                borderRadius: '9999px',
                backgroundColor: 'var(--bg-pill)',
                border: `1px solid ${STROKE_COLOR}`,
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: 'var(--text-heading)',
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Council Mode
              </Typography>
            </Box>
          </Box>

          {/* Heading - Inter font matching previous sections */}
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.3rem' },
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--text-heading)',
              mb: 0.5,
            }}
          >
            Why ask multiple models?
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: '0.84rem', md: '0.9rem' },
              color: 'var(--text-secondary)',
              lineHeight: 1.45,
              maxWidth: '620px',
              mx: 'auto',
              fontWeight: 400,
            }}
          >
            Every AI model has different strengths, training data, and reasoning patterns.
            Get the full picture by hearing from more than one model.
          </Typography>
        </Box>

        {/* ================= 2x2 GRID (LAYOUT & STROKES MATCHING IMAGE 1) ================= */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 2, md: 2.2 },
            alignItems: 'stretch',
          }}
        >
          {/* ================= TOP-LEFT: UNIFIED ACCORDION CARD (MATCHING IMAGE 1) ================= */}
          <Box
            sx={{
              borderRadius: '22px',
              backgroundColor: 'var(--bg-card)',
              border: `1px solid ${STROKE_COLOR}`,
              boxShadow: 'var(--shadow-card)',
              p: { xs: 1.8, sm: 2 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 1.2,
              minHeight: { xs: 'auto', md: '300px' },
              boxSizing: 'border-box',
            }}
          >
            {COUNCIL_POINTS.map((point, index) => {
              const isExpanded = activeTab === index;
              const IconComp = point.icon;

              return (
                <Box
                  key={point.id}
                  sx={{
                    borderRadius: '14px',
                    backgroundColor: isExpanded
                      ? 'var(--bg-card-hover)'
                      : 'var(--bg-pill)',
                    border: `1px solid ${isExpanded ? INNER_STROKE : STROKE_COLOR}`,
                    transition: 'all 0.25s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      borderColor: INNER_STROKE,
                      backgroundColor: 'var(--bg-card-hover)',
                    },
                  }}
                >
                  {/* Header Row (Click to toggle) */}
                  <Box
                    onClick={() => toggleTab(index)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      p: { xs: 1.3, sm: 1.5 },
                      cursor: 'pointer',
                      userSelect: 'none',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      {/* Icon */}
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: '9px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: isExpanded
                            ? 'var(--bg-pill)'
                            : 'transparent',
                          border: `1px solid ${isExpanded ? INNER_STROKE : STROKE_COLOR}`,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <IconComp sx={{ fontSize: 17, color: 'var(--text-heading)' }} />
                      </Box>

                      {/* Title */}
                      <Typography
                        sx={{
                          fontSize: { xs: '0.86rem', sm: '0.92rem' },
                          fontWeight: 600,
                          color: 'var(--text-heading)',
                          letterSpacing: '-0.01em',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {point.title}
                      </Typography>
                    </Box>

                    {/* Plus / Minus Indicator */}
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--bg-pill)',
                        border: `1px solid ${STROKE_COLOR}`,
                        color: 'var(--text-heading)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {isExpanded ? (
                        <RemoveIcon sx={{ fontSize: 14 }} />
                      ) : (
                        <AddIcon sx={{ fontSize: 14 }} />
                      )}
                    </Box>
                  </Box>

                  {/* Expanded Body Content */}
                  {isExpanded && (
                    <Box
                      sx={{
                        px: { xs: 1.5, sm: 1.8 },
                        pb: { xs: 1.6, sm: 1.8 },
                        pt: 0,
                      }}
                    >
                      {/* Description */}
                      <Typography
                        sx={{
                          fontSize: '0.78rem',
                          lineHeight: 1.45,
                          color: 'var(--text-secondary)',
                          mb: 1.2,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {point.description}
                      </Typography>

                      {/* Bullet Points with Checkmarks */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.7, mb: 1.4 }}>
                        {point.bullets.map((bullet, bIdx) => (
                          <Box
                            key={bIdx}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 15,
                                height: 15,
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'var(--bg-pill)',
                                border: `1px solid ${INNER_STROKE}`,
                                flexShrink: 0,
                              }}
                            >
                              <CheckIcon sx={{ fontSize: 11, color: 'var(--text-heading)' }} />
                            </Box>
                            <Typography
                              sx={{
                                fontSize: '0.74rem',
                                lineHeight: 1.35,
                                color: 'var(--text-secondary)',
                                fontWeight: 450,
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              {bullet}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Learn More Button */}
                      <Button
                        variant="outlined"
                        href={point.learnMoreLink}
                        endIcon={<ArrowForwardIcon sx={{ fontSize: '13px !important' }} />}
                        sx={{
                          borderRadius: '9999px',
                          textTransform: 'none',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          py: 0.4,
                          px: 1.8,
                          color: 'var(--text-heading)',
                          borderColor: INNER_STROKE,
                          backgroundColor: 'var(--bg-pill)',
                          backdropFilter: 'blur(8px)',
                          fontFamily: "'Inter', sans-serif",
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            backgroundColor: 'var(--bg-card-hover)',
                            borderColor: 'var(--border-strong)',
                            transform: 'translateX(3px)',
                          },
                        }}
                      >
                        Learn more
                      </Button>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>

          {/* ================= TOP-RIGHT: DYNAMIC SCENERY CARD ================= */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: '22px',
              minHeight: { xs: '260px', md: '300px' },
              overflow: 'hidden',
              border: `1px solid ${STROKE_COLOR}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              backgroundColor: '#12151B',
            }}
          >
            {/* Natural Scenery Background Images crossfading per tab */}
            {COUNCIL_POINTS.map((point, idx) => (
              <Box
                key={point.id}
                component="img"
                src={point.bgImage}
                alt={point.title}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  opacity: previewTab === idx ? 1 : 0,
                  transform: previewTab === idx ? 'scale(1)' : 'scale(1.03)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
            ))}

            {/* Dark gradient overlay for high text readability */}
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 60% 30%, rgba(10, 12, 16, 0.42) 0%, rgba(10, 12, 16, 0.8) 75%, rgba(10, 12, 16, 0.94) 100%)',
                zIndex: 1,
              }}
            />

            {/* Frosted Glass UI Card */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 2,
                m: { xs: 1.5, sm: 2 },
                p: { xs: 1.6, sm: 2 },
                borderRadius: '16px',
                backgroundColor: 'rgba(18, 22, 31, 0.88)',
                backdropFilter: 'blur(24px)',
                border: `1px solid ${INNER_STROKE}`,
                boxShadow:
                  '0 18px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Dynamic View 0: Model Strengths (Point 1) */}
              {previewTab === 0 && (
                <Box>
                  {/* Card Header */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 1.4,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <AutoAwesomeIcon sx={{ fontSize: 13, color: '#FFFFFF' }} />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Model Strengths Matrix
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.25,
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid ${INNER_STROKE}`,
                        fontSize: '0.68rem',
                        color: '#FFFFFF',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      3 Engines Active
                    </Box>
                  </Box>

                  {/* Model 1: Claude */}
                  <Box
                    sx={{
                      p: 1.1,
                      mb: 0.9,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${STROKE_COLOR}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Box
                        component="img"
                        src="/Models/Claude.svg"
                        alt="Claude"
                        sx={{ width: 18, height: 18 }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Claude 3.5 Sonnet
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.7rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Nuanced writing & deep analysis
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.3,
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid ${INNER_STROKE}`,
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Nuance & Prose
                    </Box>
                  </Box>

                  {/* Model 2: GPT */}
                  <Box
                    sx={{
                      p: 1.1,
                      mb: 0.9,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${STROKE_COLOR}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Box
                        component="img"
                        src="/Models/Chatgpt.svg"
                        alt="GPT"
                        sx={{ width: 18, height: 18, filter: 'invert(1)' }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          GPT-4o (OpenAI)
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.7rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Structured tasks & coding
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.3,
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid ${INNER_STROKE}`,
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Logic & Code
                    </Box>
                  </Box>

                  {/* Model 3: Gemini */}
                  <Box
                    sx={{
                      p: 1.1,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${STROKE_COLOR}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Box
                        component="img"
                        src="/Models/Gemini.svg"
                        alt="Gemini"
                        sx={{ width: 18, height: 18 }}
                      />
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Gemini 1.5 Pro
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '0.7rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Real-time knowledge & 2M context
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.3,
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid ${INNER_STROKE}`,
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      2M Context
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Dynamic View 1: Catch Blind Spots (Point 2) */}
              {previewTab === 1 && (
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 1.2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ShieldIcon sx={{ fontSize: 13, color: '#FFFFFF' }} />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Consensus & Blind-Spot Engine
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.25,
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: `1px solid ${INNER_STROKE}`,
                        fontSize: '0.68rem',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Q: Safe under high load?
                    </Box>
                  </Box>

                  {/* Claude: Agrees */}
                  <Box
                    sx={{
                      p: 1.1,
                      mb: 0.9,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${STROKE_COLOR}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Box
                        component="img"
                        src="/Models/Claude.svg"
                        alt="Claude"
                        sx={{ width: 18, height: 18 }}
                      />
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Claude
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.6,
                        color: '#FFFFFF',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 14, color: '#FFFFFF' }} />
                      Agrees
                    </Box>
                  </Box>

                  {/* GPT: Agrees */}
                  <Box
                    sx={{
                      p: 1.1,
                      mb: 0.9,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${STROKE_COLOR}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Box
                        component="img"
                        src="/Models/Chatgpt.svg"
                        alt="GPT"
                        sx={{ width: 18, height: 18, filter: 'invert(1)' }}
                      />
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        GPT
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.6,
                        color: '#FFFFFF',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 14, color: '#FFFFFF' }} />
                      Agrees
                    </Box>
                  </Box>

                  {/* Gemini: Flags edge case */}
                  <Box
                    sx={{
                      p: 1.1,
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${INNER_STROKE}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                      <Box
                        component="img"
                        src="/Models/Gemini.svg"
                        alt="Gemini"
                        sx={{ width: 18, height: 18 }}
                      />
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Gemini
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.6,
                        color: '#FFFFFF',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      <WarningIcon sx={{ fontSize: 14, color: '#FFFFFF' }} />
                      Flags edge case
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Dynamic View 2: Faster Decisions (Point 3) */}
              {previewTab === 2 && (
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 1.4,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <BoltIcon sx={{ fontSize: 14, color: '#FFFFFF' }} />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Responses streaming
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '0.7rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      in parallel
                    </Typography>
                  </Box>

                  {/* Claude: 1.2s */}
                  <Box sx={{ mb: 1.2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 0.5,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          component="img"
                          src="/Models/Claude.svg"
                          alt="Claude"
                          sx={{ width: 16, height: 16 }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Claude
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.74rem',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        1.2s
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        height: 6,
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: '70%',
                          height: '100%',
                          borderRadius: '9999px',
                          backgroundColor: '#FFFFFF',
                        }}
                      />
                    </Box>
                  </Box>

                  {/* GPT: 1.4s */}
                  <Box sx={{ mb: 1.2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 0.5,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          component="img"
                          src="/Models/Chatgpt.svg"
                          alt="GPT"
                          sx={{ width: 16, height: 16, filter: 'invert(1)' }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          GPT
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.74rem',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        1.4s
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        height: 6,
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: '82%',
                          height: '100%',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(255, 255, 255, 0.85)',
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Gemini: 1.8s */}
                  <Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 0.5,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          component="img"
                          src="/Models/Gemini.svg"
                          alt="Gemini"
                          sx={{ width: 16, height: 16 }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          Gemini
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '0.74rem',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        1.8s
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        height: 6,
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: '95%',
                          height: '100%',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          {/* ================= BOTTOM-LEFT: NATURAL SCENERY (DESERT DUNES) ================= */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {/* Ambient Card Container */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: '22px',
                height: { xs: '180px', sm: '190px' },
                overflow: 'hidden',
                border: `1px solid ${STROKE_COLOR}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                backgroundColor: '#12151B',
              }}
            >
              {/* Natural Scenery: Desert Dunes at Sunset */}
              <Box
                component="img"
                src="/images/scenery_dunes.jpg"
                alt="Ideation & Creation"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  zIndex: 0,
                }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at center, rgba(10, 12, 16, 0.35) 0%, rgba(10, 12, 16, 0.82) 100%)',
                  zIndex: 1,
                }}
              />

              {/* Floating UI Elements matching Image 1 pills */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  width: { xs: '92%', sm: '84%' },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                {/* Upper pill */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: '8px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${INNER_STROKE}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Claude 3.5 Sonnet
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.7rem',
                      color: 'rgba(255, 255, 255, 0.65)',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Exploring architecture...
                  </Typography>
                </Box>

                {/* Main active prompt pill with send button */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: '8px 12px 8px 16px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.22)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CompareArrowsIcon sx={{ fontSize: 16, color: '#FFFFFF' }} />
                    <Typography
                      sx={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Query 3 Models Simultaneously
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      color: '#0A0C10',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowUpwardIcon sx={{ fontSize: 15 }} />
                  </Box>
                </Box>

                {/* Lower pill */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: '8px 14px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(16px)',
                    border: `1px solid ${INNER_STROKE}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    GPT-4o & Gemini
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                    <Typography
                      sx={{
                        fontSize: '0.7rem',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Synthesized
                    </Typography>
                    <CheckCircleIcon sx={{ fontSize: 13, color: '#FFFFFF' }} />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Text Caption below card matching Image 1 */}
            <Typography
              sx={{
                fontSize: '0.78rem',
                lineHeight: 1.45,
                color: 'var(--text-secondary)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Box component="span" sx={{ fontWeight: 700, color: 'var(--text-heading)' }}>
                Ideation & Creation.
              </Box>{' '}
              Generate ideas, explore concepts, and quickly expand early thoughts into clear,
              structured directions.
            </Typography>
          </Box>

          {/* ================= BOTTOM-RIGHT: NATURAL SCENERY (MISTY FOREST) ================= */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            {/* Ambient Card Container */}
            <Box
              sx={{
                position: 'relative',
                borderRadius: '22px',
                height: { xs: '180px', sm: '190px' },
                overflow: 'hidden',
                border: `1px solid ${STROKE_COLOR}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                backgroundColor: '#12151B',
              }}
            >
              {/* Natural Scenery: Misty Evergreen Forest with Sunbeams */}
              <Box
                component="img"
                src="/images/scenery_forest.jpg"
                alt="Workflow Enhancement"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  zIndex: 0,
                }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at center, rgba(10, 12, 16, 0.35) 0%, rgba(10, 12, 16, 0.82) 100%)',
                  zIndex: 1,
                }}
              />

              {/* Floating UI Elements matching Image 1 mini modal */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  width: { xs: '92%', sm: '84%' },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    p: 1.8,
                    borderRadius: '14px',
                    backgroundColor: 'rgba(20, 24, 34, 0.88)',
                    backdropFilter: 'blur(24px)',
                    border: `1px solid ${INNER_STROKE}`,
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mb: 0.8,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: '#FFFFFF',
                          boxShadow: '0 0 6px #FFFFFF',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Council Consensus Hub
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '0.68rem',
                        color: '#FFFFFF',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      99.4% Verified
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: '0.72rem',
                      color: 'rgba(255, 255, 255, 0.65)',
                      lineHeight: 1.4,
                      mb: 1.4,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    3 models analyzed the system prompt. Consensus reached on lock-free caching.
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: '9999px',
                        textTransform: 'none',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        py: 0.4,
                        px: 1.5,
                        backgroundColor: '#10131A',
                        color: '#FFFFFF',
                        border: `1px solid ${INNER_STROKE}`,
                        fontFamily: "'Inter', sans-serif",
                        '&:hover': {
                          backgroundColor: '#1E232E',
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                      }}
                    >
                      &lt; Automate
                    </Button>
                    <Typography
                      sx={{
                        fontSize: '0.68rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Instant side-by-side synthesis
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Text Caption below card matching Image 1 */}
            <Typography
              sx={{
                fontSize: '0.78rem',
                lineHeight: 1.45,
                color: 'var(--text-secondary)',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <Box component="span" sx={{ fontWeight: 700, color: 'var(--text-heading)' }}>
                Workflow Enhancement.
              </Box>{' '}
              Refining inputs, organizing information, and removing repetitive steps from your
              process.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
