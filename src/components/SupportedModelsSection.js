import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 10 Premier AI models supported in OpenLedger
const MODELS = [
  {
    id: 'chatgpt',
    name: 'ChatGPT (GPT-4o)',
    provider: 'OpenAI',
    badge: 'Flagship Multimodal',
    context: '128K Context',
    description: 'Advanced reasoning, multimodal understanding, and high-precision code.',
    icon: '/Models/Chatgpt.svg',
    invertIcon: true,
  },
  {
    id: 'claude',
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    badge: 'State of the Art',
    context: '200K Context',
    description: 'Nuanced reasoning, frontier coding capability, and complex problem solving.',
    icon: '/Models/Claude.svg',
    invertIcon: false,
  },
  {
    id: 'gemini',
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    badge: '2M Long Context',
    context: '2M Tokens',
    description: 'Massive long-document analysis, video reasoning, and multimodal synthesis.',
    icon: '/Models/Gemini.svg',
    invertIcon: false,
  },
  {
    id: 'llama',
    name: 'Llama 3.1 405B',
    provider: 'Meta',
    badge: 'Open Weights Titan',
    context: '128K Context',
    description: 'Frontier open-source intelligence rivaling leading proprietary systems.',
    icon: '/Models/Llama.svg',
    invertIcon: false,
  },
  {
    id: 'mistral',
    name: 'Mistral Large 2',
    provider: 'Mistral AI',
    badge: 'European Frontier',
    context: '128K Context',
    description: 'High-speed multilingual reasoning, code generation, and mathematical reasoning.',
    icon: '/Models/Mistral.svg',
    invertIcon: false,
  },
  {
    id: 'deepseek',
    name: 'DeepSeek V3 / R1',
    provider: 'DeepSeek',
    badge: 'Reasoning Breakthrough',
    context: '64K Context',
    description: 'Open-weights reasoning model with chain-of-thought verification proofs.',
    icon: '/Models/DeepSeek.svg',
    invertIcon: false,
  },
  {
    id: 'grok',
    name: 'Grok 2',
    provider: 'xAI',
    badge: 'Real-Time Insights',
    context: '128K Context',
    description: 'Real-time knowledge integration and unfiltered analytical problem solving.',
    icon: '/Models/Grok.svg',
    invertIcon: true,
  },
  {
    id: 'qwen',
    name: 'Qwen 2.5 72B',
    provider: 'Alibaba Cloud',
    badge: 'Multilingual Leader',
    context: '128K Context',
    description: 'Exceptional multilingual mastery, math processing, and dense coding acumen.',
    icon: '/Models/Qwen.svg',
    invertIcon: false,
  },
  {
    id: 'perplexity',
    name: 'Perplexity Sonar',
    provider: 'Perplexity',
    badge: 'Live Web Grounding',
    context: '128K Context',
    description: 'Real-time citation-backed web queries and live intelligence synthesis.',
    icon: '/Models/Perplexcity.svg',
    invertIcon: true,
  },
  {
    id: 'cohere',
    name: 'Command R+',
    provider: 'Cohere',
    badge: 'Enterprise RAG',
    context: '128K Context',
    description: 'Engineered for high-reliability Retrieval-Augmented Generation workflows.',
    icon: '/Models/Cohere.svg',
    invertIcon: false,
  },
];

// Orbital geometry matching lazy.so reference:
// Tilted by -34.353 degrees with concentric dashed orbits
const TILT_DEG = -34.353;
const TILT_RAD = (TILT_DEG * Math.PI) / 180;
const VIEW_W = 800;
const VIEW_H = 480;
const CX = VIEW_W / 2; // 400
const CY = VIEW_H / 2; // 240
const RX_OUTER = 290;
const RY_OUTER = 160;
const RX_INNER = 145;
const RY_INNER = 80;
const THETA_START = -Math.PI / 2;

// Exact parametric coordinates on tilted ellipse
function getOrbitPoint(theta, rx = RX_OUTER, ry = RY_OUTER) {
  const xPrime = rx * Math.cos(theta);
  const yPrime = ry * Math.sin(theta);
  const x = CX + xPrime * Math.cos(TILT_RAD) - yPrime * Math.sin(TILT_RAD);
  const y = CY + xPrime * Math.sin(TILT_RAD) + yPrime * Math.cos(TILT_RAD);
  return {
    x,
    y,
    leftPercent: (x / VIEW_W) * 100,
    topPercent: (y / VIEW_H) * 100,
  };
}

export default function SupportedModelsSection() {
  const [activeModelIndex, setActiveModelIndex] = React.useState(0);
  const [maxReachedIndex, setMaxReachedIndex] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [isCenterHovered, setIsCenterHovered] = React.useState(false);
  const sectionRef = React.useRef(null);
  const pinContainerRef = React.useRef(null);
  const scrollTriggerRef = React.useRef(null);
  const lastActiveIndexRef = React.useRef(0);
  const lastReachedIndexRef = React.useRef(0);

  // Direct DOM refs for the SVG light bead to achieve silky 60fps/120fps motion with zero CSS transition lag
  const dotCoreRef = React.useRef(null);
  const dotMidRef = React.useRef(null);
  const dotGlowRef = React.useRef(null);

  // Pre-calculate fixed positions for the 10 models evenly spaced along the outer ellipse
  const nodePositions = React.useMemo(() => {
    return MODELS.map((_, i) => {
      const theta = THETA_START + ((2 * Math.PI) / MODELS.length) * i;
      return {
        ...getOrbitPoint(theta, RX_OUTER, RY_OUTER),
        theta,
        threshold: i / MODELS.length,
      };
    });
  }, []);

  // Initial starting point on outer ellipse
  const initialPt = React.useMemo(() => getOrbitPoint(THETA_START, RX_OUTER, RY_OUTER), []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    let mm = gsap.matchMedia();

    mm.add('(min-width: 900px)', () => {
      const orbitProxy = { progress: 0 };

      const tween = gsap.to(orbitProxy, {
        progress: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinContainerRef.current,
          scrub: 1.2, // Velvety, smooth easing and natural momentum!
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: () => {
            const p = orbitProxy.progress;
            const theta = THETA_START + p * (2 * Math.PI);
            const pt = getOrbitPoint(theta, RX_OUTER, RY_OUTER);

            if (dotCoreRef.current) {
              dotCoreRef.current.setAttribute('cx', pt.x.toFixed(2));
              dotCoreRef.current.setAttribute('cy', pt.y.toFixed(2));
            }
            if (dotMidRef.current) {
              dotMidRef.current.setAttribute('cx', pt.x.toFixed(2));
              dotMidRef.current.setAttribute('cy', pt.y.toFixed(2));
            }
            if (dotGlowRef.current) {
              dotGlowRef.current.setAttribute('cx', pt.x.toFixed(2));
              dotGlowRef.current.setAttribute('cy', pt.y.toFixed(2));
            }

            // Active model station closest to dot (only updates state on index change!)
            const currentIdx = Math.min(
              MODELS.length - 1,
              Math.floor(p * MODELS.length)
            );
            if (currentIdx !== lastActiveIndexRef.current) {
              lastActiveIndexRef.current = currentIdx;
              setActiveModelIndex(currentIdx);
            }

            // Max reached model along the orbit
            const reached = Math.min(
              MODELS.length - 1,
              Math.floor(p * MODELS.length)
            );
            if (reached !== lastReachedIndexRef.current) {
              lastReachedIndexRef.current = reached;
              setMaxReachedIndex(reached);
            }
          },
        },
      });

      scrollTriggerRef.current = tween.scrollTrigger;

      return () => {
        if (tween.scrollTrigger) tween.scrollTrigger.kill();
        tween.kill();
        scrollTriggerRef.current = null;
      };
    });

    return () => mm.revert();
  }, []);

  const handleModelClick = (idx) => {
    setActiveModelIndex(idx);
    if (!scrollTriggerRef.current) return;
    const trigger = scrollTriggerRef.current;
    const targetProgress = idx / (MODELS.length - 1);
    const targetScroll = trigger.start + targetProgress * (trigger.end - trigger.start);

    if (window.lenis) {
      window.lenis.scrollTo(targetScroll, {
        duration: 0.85,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      gsap.to(window, {
        scrollTo: { y: targetScroll, autoKill: false },
        duration: 0.85,
        ease: 'power2.out',
      });
    }
  };

  const displayedIndex = hoveredIndex !== null ? hoveredIndex : activeModelIndex;
  const currentModel = MODELS[displayedIndex] || MODELS[0];

  return (
    <Box
      ref={sectionRef}
      id="supported-models"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '300vh' },
        backgroundColor: '#0A0C10',
        color: '#FFFFFF',
      }}
    >
      {/* Pinned Viewport Container */}
      <Box
        ref={pinContainerRef}
        sx={{
          position: { xs: 'relative', md: 'sticky' },
          top: 0,
          height: { xs: 'auto', md: '100vh' },
          maxHeight: { md: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 5, md: 3 },
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center', px: { xs: 2, sm: 3 } }}>
          {/* Section Pill Badge */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1.5 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.9,
                px: 1.6,
                py: 0.5,
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.85)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Supported Models
              </Typography>
            </Box>
          </Box>

          {/* Heading - Clean Typography matching lazy.so */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.9rem', sm: '2.5rem', md: '2.9rem' },
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              mb: 0.6,
            }}
          >
            Access all leading models.
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Inter", -apple-system, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.1rem' },
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              color: 'rgba(255, 255, 255, 0.55)',
              mb: { xs: 2, md: 2.8 },
            }}
          >
            Unified context, zero switching.
          </Typography>

          {/* Active Model Live HUD / Specs Pill */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: { xs: 1, sm: 1.5 },
              px: 2.2,
              py: 0.8,
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              mb: { xs: 2, md: 2.5 },
              transition: 'all 0.3s ease',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.88rem' },
                fontWeight: 600,
                color: '#FFFFFF',
              }}
            >
              {currentModel.name}
            </Typography>
            <Box sx={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <Typography
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.82rem' },
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {currentModel.badge}
            </Typography>
            <Box sx={{ width: 3, height: 3, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.3)' }} />
            <Typography
              sx={{
                fontSize: { xs: '0.72rem', sm: '0.78rem' },
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              {currentModel.context}
            </Typography>
          </Box>

          {/* Orbit Canvas Showcase Area: Exactly matches 800/480 SVG Aspect Ratio */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: 960,
              mx: 'auto',
              aspectRatio: '800 / 480',
              maxHeight: { xs: '320px', sm: '420px', md: '54vh' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* SVG Background Orbits & Rotating Light Bead */}
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'visible',
              }}
            >
              <defs>
                <filter id="dotGlowFilter" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                </filter>
              </defs>

              {/* Outer Tilted Dashed Ellipse */}
              <ellipse
                cx={CX}
                cy={CY}
                rx={RX_OUTER}
                ry={RY_OUTER}
                transform={`rotate(${TILT_DEG} ${CX} ${CY})`}
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                strokeLinecap="round"
              />

              {/* Inner Tilted Dashed Ellipse */}
              <ellipse
                cx={CX}
                cy={CY}
                rx={RX_INNER}
                ry={RY_INNER}
                transform={`rotate(${TILT_DEG} ${CX} ${CY})`}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="3 6"
                strokeLinecap="round"
              />

              {/* Rotating Light Dot: Rendered natively inside SVG, 100% glued to outer dashed line */}
              <g>
                <circle
                  ref={dotGlowRef}
                  cx={initialPt.x}
                  cy={initialPt.y}
                  r="15"
                  fill="rgba(255, 255, 255, 0.14)"
                  filter="url(#dotGlowFilter)"
                />
                <circle
                  ref={dotMidRef}
                  cx={initialPt.x}
                  cy={initialPt.y}
                  r="7.5"
                  fill="rgba(255, 255, 255, 0.55)"
                  filter="url(#dotGlowFilter)"
                />
                <circle
                  ref={dotCoreRef}
                  cx={initialPt.x}
                  cy={initialPt.y}
                  r="4.5"
                  fill="#FFFFFF"
                />
              </g>
            </svg>

            {/* Central Hub Orb with OpenLedger White Icon & Hover Pill */}
            <Box
              onMouseEnter={() => setIsCenterHovered(true)}
              onMouseLeave={() => setIsCenterHovered(false)}
              sx={{
                position: 'absolute',
                top: `${(CY / VIEW_H) * 100}%`,
                left: `${(CX / VIEW_W) * 100}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 35,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Central Orb */}
              <Box
                id="center-hub-orb"
                onClick={() => setIsCenterHovered((prev) => !prev)}
                sx={{
                  width: { xs: 58, sm: 72, md: 80 },
                  height: { xs: 58, sm: 72, md: 80 },
                  borderRadius: '50%',
                  backgroundColor: isCenterHovered ? '#161A22' : '#11141A',
                  backgroundImage: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.18), transparent 70%)',
                  border: isCenterHovered
                    ? '1.5px solid rgba(255, 255, 255, 0.45)'
                    : '1.5px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: isCenterHovered
                    ? `
                      0 0 45px rgba(0, 0, 0, 0.95),
                      0 0 35px rgba(255, 255, 255, 0.22),
                      0 0 0 1px rgba(255, 255, 255, 0.15) inset
                    `
                    : `
                      0 0 35px rgba(0, 0, 0, 0.9),
                      0 0 30px rgba(255, 255, 255, 0.08),
                      0 0 0 1px rgba(255, 255, 255, 0.06) inset
                    `,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transform: isCenterHovered ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* User-specified center logo: Open Ledegr icon White.svg */}
                <Box
                  component="img"
                  src="/Open%20Ledegr%20icon%20White.svg"
                  alt="OpenLedger Hub"
                  sx={{
                    width: { xs: 28, sm: 38, md: 44 },
                    height: { xs: 28, sm: 38, md: 44 },
                    filter: isCenterHovered
                      ? 'drop-shadow(0 2px 12px rgba(255, 255, 255, 0.4))'
                      : 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.2))',
                    display: 'block',
                    transition: 'filter 0.3s ease',
                  }}
                />
              </Box>

              {/* View All Models Pill Revealed on Hover */}
              <Box
                id="view-all-models-pill"
                component="a"
                href="#models"
                onClick={(e) => {
                  // Ready for future navigation to all models page
                  console.log('Navigate to all models page');
                }}
                sx={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  left: '50%',
                  transform: isCenterHovered
                    ? 'translateX(-50%) translateY(0) scale(1)'
                    : 'translateX(-50%) translateY(-8px) scale(0.92)',
                  opacity: isCenterHovered ? 1 : 0,
                  pointerEvents: isCenterHovered ? 'auto' : 'none',
                  transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  px: { xs: 1.6, sm: 2 },
                  py: { xs: 0.55, sm: 0.7 },
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(20, 24, 32, 0.95)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.22)',
                  boxShadow: `
                    0 12px 32px rgba(0, 0, 0, 0.75),
                    0 0 20px rgba(255, 255, 255, 0.12),
                    0 0 0 1px rgba(255, 255, 255, 0.08) inset
                  `,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  userSelect: 'none',
                  '&:hover': {
                    backgroundColor: '#222834',
                    borderColor: 'rgba(255, 255, 255, 0.45)',
                    boxShadow: `
                      0 14px 36px rgba(0, 0, 0, 0.85),
                      0 0 28px rgba(255, 255, 255, 0.25),
                      0 0 0 1px rgba(255, 255, 255, 0.15) inset
                    `,
                    '& .arrow-icon': {
                      transform: 'translateX(3px)',
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '0.74rem', sm: '0.8rem' },
                    fontWeight: 600,
                    color: '#FFFFFF',
                    letterSpacing: '-0.01em',
                    fontFamily: '"Inter", -apple-system, sans-serif',
                  }}
                >
                  View all models
                </Typography>
                <Box
                  className="arrow-icon"
                  component="svg"
                  viewBox="0 0 24 24"
                  sx={{
                    width: 13,
                    height: 13,
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: 2.2,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </Box>
              </Box>
            </Box>

            {/* 10 Model Nodes: Bloom smoothly with spring easing as rotating dot reaches each station */}
            {MODELS.map((model, idx) => {
              const pos = nodePositions[idx];
              const isBorn = idx <= maxReachedIndex;
              const isActive = (activeModelIndex === idx || hoveredIndex === idx) && isBorn;

              return (
                <Box
                  key={model.id}
                  id={`model-node-${model.id}`}
                  onClick={() => handleModelClick(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    position: 'absolute',
                    left: `${pos.leftPercent}%`,
                    top: `${pos.topPercent}%`,
                    transform: isBorn
                      ? (isActive ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%) scale(1)')
                      : 'translate(-50%, -50%) scale(0)',
                    opacity: isBorn ? 1 : 0,
                    pointerEvents: isBorn ? 'auto' : 'none',
                    width: { xs: 38, sm: 46, md: 52 },
                    height: { xs: 38, sm: 46, md: 52 },
                    borderRadius: '50%',
                    cursor: isBorn ? 'pointer' : 'default',
                    userSelect: 'none',
                    zIndex: isActive ? 22 : 12,
                    // Neutral dark translucent glass bubble - NO colored strokes
                    backgroundColor: isActive ? '#181C24' : '#11141A',
                    backgroundImage: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.12), transparent 70%)',
                    border: isActive
                      ? '1.5px solid rgba(255, 255, 255, 0.45)'
                      : '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: isActive
                      ? `
                        0 0 24px rgba(255, 255, 255, 0.28),
                        0 8px 24px rgba(0, 0, 0, 0.8),
                        0 0 0 1px rgba(255, 255, 255, 0.12) inset
                      `
                      : `
                        0 4px 16px rgba(0, 0, 0, 0.6),
                        0 0 0 1px rgba(255, 255, 255, 0.04) inset
                      `,
                    backdropFilter: 'blur(12px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition:
                      'transform 0.45s cubic-bezier(0.34, 1.4, 0.64, 1), opacity 0.35s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
                    '&:hover': isBorn
                      ? {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                          boxShadow: '0 0 24px rgba(255, 255, 255, 0.3), 0 8px 24px rgba(0, 0, 0, 0.8)',
                          transform: 'translate(-50%, -50%) scale(1.14)',
                        }
                      : {},
                  }}
                >
                  {/* Model Logo Centered in Bubble */}
                  <Box
                    component="img"
                    src={model.icon}
                    alt={model.name}
                    sx={{
                      width: { xs: 20, sm: 24, md: 28 },
                      height: { xs: 20, sm: 24, md: 28 },
                      objectFit: 'contain',
                      filter: model.invertIcon
                        ? 'brightness(0) invert(1) drop-shadow(0 1px 4px rgba(255, 255, 255, 0.15))'
                        : 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.35))',
                      transition: 'transform 0.2s ease',
                      transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
