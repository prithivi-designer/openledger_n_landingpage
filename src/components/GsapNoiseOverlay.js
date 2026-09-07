import * as React from 'react';
import gsap from 'gsap';

/**
 * GsapNoiseOverlay
 * High-performance, film-grain cybernetic noise animation powered by gsap.ticker.
 * Uses pre-computed cyclic grain patterns to achieve 60fps smoothness with near-zero CPU load.
 */
export default function GsapNoiseOverlay({ opacity = 0.055, fps = 24, blendMode = 'screen' }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let parent = canvas.parentElement;
    let width = (canvas.width = parent ? parent.offsetWidth : window.innerWidth);
    let height = (canvas.height = parent ? parent.offsetHeight : 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Pre-generate 10 subtle monochrome grain patterns on offscreen canvas buffers
    const patternSize = 180;
    const patterns = [];

    for (let i = 0; i < 10; i++) {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = patternSize;
      pCanvas.height = patternSize;
      const pCtx = pCanvas.getContext('2d');
      const imgData = pCtx.createImageData(patternSize, patternSize);
      const data32 = new Uint32Array(imgData.data.buffer);
      const totalPixels = data32.length;

      for (let j = 0; j < totalPixels; j++) {
        // Subtle variations in brightness and alpha for organic film grain
        const val = (Math.random() * 255) | 0;
        const alpha = (Math.random() * 55 + 15) | 0;
        data32[j] = (alpha << 24) | (val << 16) | (val << 8) | val;
      }

      pCtx.putImageData(imgData, 0, 0);
      patterns.push(ctx.createPattern(pCanvas, 'repeat'));
    }

    let frameIndex = 0;
    let lastTime = performance.now();
    const frameInterval = 1000 / fps;

    // GSAP Ticker callback
    const onTick = () => {
      const now = performance.now();
      if (now - lastTime < frameInterval) return;
      lastTime = now;

      frameIndex = (frameIndex + 1) % patterns.length;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = patterns[frameIndex];
      ctx.fillRect(0, 0, width, height);
    };

    gsap.ticker.add(onTick);

    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.ticker.remove(onTick);
    };
  }, [fps]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: opacity,
        mixBlendMode: blendMode,
        zIndex: 1,
      }}
    />
  );
}
