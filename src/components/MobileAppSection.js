import * as React from 'react';
import Box from '@mui/material/Box';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TOTAL_FRAMES = 607;
const FRAME_PATH = (idx) => `/images/mockup_seq/product_mockup${String(idx).padStart(3, '0')}.jpg`;

export default function MobileAppSection() {
  const sectionRef = React.useRef(null);
  const pinRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const qrRef = React.useRef(null);

  const imagesRef = React.useRef(new Array(TOTAL_FRAMES));
  const isLoadedRef = React.useRef(new Array(TOTAL_FRAMES).fill(false));
  const currentFrameRef = React.useRef(0);

  // Draw a frame to canvas with full-bleed COVER to fill viewport
  const drawFrame = React.useCallback((targetIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetIndex));

    // Find closest loaded frame if target is not ready yet
    let img = imagesRef.current[clampedIdx];
    if (!img || !isLoadedRef.current[clampedIdx]) {
      for (let offset = 1; offset < 50; offset++) {
        const prev = clampedIdx - offset;
        if (prev >= 0 && isLoadedRef.current[prev] && imagesRef.current[prev]) {
          img = imagesRef.current[prev];
          break;
        }
        const next = clampedIdx + offset;
        if (next < TOTAL_FRAMES && isLoadedRef.current[next] && imagesRef.current[next]) {
          img = imagesRef.current[next];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Clear background with black
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, cw, ch);

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgAspect = imgW / imgH; // 1176 / 784 = 1.5
    const canvasAspect = cw / ch;

    let dw, dh, dx, dy;
    // Object-fit: COVER to completely fill the entire viewport
    if (canvasAspect > imgAspect) {
      // Screen is wider than image aspect ratio (widescreen desktop)
      dw = cw;
      dh = cw / imgAspect;
      dx = 0;
      dy = (ch - dh) / 2;
    } else {
      // Screen is taller than image aspect ratio (mobile / portrait)
      dh = ch;
      dw = ch * imgAspect;
      dx = (cw - dw) / 2;
      dy = 0;
    }

    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Set up canvas dimensions based on container and DPR
  const resizeCanvas = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !pinRef.current) return;
    const rect = pinRef.current.getBoundingClientRect();
    const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Preloader with tiered priority:
  // Tier 0: Frame 0 immediately (instant initial paint)
  // Tier 1: Keyframe intervals (step 6)
  // Tier 2: Step 2
  // Tier 3: All remaining frames
  React.useEffect(() => {
    let unmounted = false;

    const loadSingleImage = (idx) => {
      return new Promise((resolve) => {
        if (isLoadedRef.current[idx]) return resolve();

        const img = new Image();
        img.onload = () => {
          if (unmounted) return resolve();
          imagesRef.current[idx] = img;
          isLoadedRef.current[idx] = true;
          if (currentFrameRef.current === idx) {
            drawFrame(idx);
          }
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        img.src = FRAME_PATH(idx);
      });
    };

    const loadBatchInPool = async (indices, concurrency = 6) => {
      let cursor = 0;
      const worker = async () => {
        while (cursor < indices.length && !unmounted) {
          const idx = indices[cursor++];
          await loadSingleImage(idx);
        }
      };
      const workers = Array.from({ length: concurrency }, () => worker());
      await Promise.all(workers);
    };

    const runPreload = async () => {
      // Tier 0: Frame 0
      await loadSingleImage(0);
      drawFrame(0);

      // Tier 1: Keyframes (step 6)
      const tier1 = [];
      for (let i = 0; i < TOTAL_FRAMES; i += 6) tier1.push(i);
      await loadBatchInPool(tier1, 6);

      // Tier 2: Step 2
      const tier2 = [];
      for (let i = 2; i < TOTAL_FRAMES; i += 4) {
        if (!isLoadedRef.current[i]) tier2.push(i);
      }
      await loadBatchInPool(tier2, 6);

      // Tier 3: All remaining
      const tier3 = [];
      for (let i = 1; i < TOTAL_FRAMES; i += 2) {
        if (!isLoadedRef.current[i]) tier3.push(i);
      }
      await loadBatchInPool(tier3, 6);
    };

    runPreload();

    return () => {
      unmounted = true;
    };
  }, [drawFrame]);

  // Window resize and canvas setup
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // GSAP ScrollTrigger Scrubbing Animation
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.set(qrRef.current, { opacity: 0, scale: 0.8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: pinRef.current,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(p * (TOTAL_FRAMES - 1))));
            currentFrameRef.current = targetFrame;
            drawFrame(targetFrame);
          },
        },
      });

      // QR Code card fades in when mobile phone on velvet couch appears (~frame 520 / progress 0.84)
      tl.to(qrRef.current, { opacity: 1, scale: 1, ease: 'back.out(1.5)', duration: 0.16 }, 0.84);

      // Hold end state
      tl.to({}, { duration: 0.1 }, 0.9);
    }, sectionRef);

    return () => ctx.revert();
  }, [drawFrame]);

  return (
    <Box
      ref={sectionRef}
      id="mockup-sequence"
      sx={{
        position: 'relative',
        minHeight: '560vh',
        background: '#000000',
        color: '#FFFFFF',
      }}
    >
      {/* Pinned Viewport Container */}
      <Box
        ref={pinRef}
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#000000',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Full-Bleed Canvas for Sequence Playback */}
        <Box
          component="canvas"
          ref={canvasRef}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            zIndex: 1,
          }}
        />

        {/* Bottom-Right Corner: Native Scannable QR Code Card */}
        <Box
          ref={qrRef}
          sx={{
            position: 'absolute',
            bottom: { xs: 20, md: 36 },
            right: { xs: 20, md: 44 },
            zIndex: 10,
            p: 1.2,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: 3,
            boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'scale(1.06)',
              boxShadow: '0 20px 48px rgba(0,0,0,0.7)',
            },
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 24 24"
            sx={{ width: { xs: 46, md: 56 }, height: { xs: 46, md: 56 }, fill: '#0F172A' }}
          >
            <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4-2h2v4h-2v-4zm2 6h4v2h-4v-2zm2-4h2v2h-2v-2zm-4 4h2v2h-2v-2zm0-6h2v2h-2v-2zm-3-3h2v2h-2v-2zm0-4h2v2h-2V7zm-2 2h2v2h-2V9z" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
