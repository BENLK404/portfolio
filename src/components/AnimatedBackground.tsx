import { useEffect, useRef } from 'react';

interface Props { theme: 'light' | 'dark'; }

const LIGHT_PALETTE = [
  '#f4f7f9', '#f2f6f8', '#f0f5f7', '#f5f8fa',
  '#f1f6f8', '#f3f7f9', '#f6f9fb', '#f0f4f6',
  '#eef3f6', '#f2f7f9', '#f4f8fa', '#f7fafb',
];

const DARK_PALETTE = [
  '#181e26', '#1a2028', '#1c2230', '#1e242e',
  '#1b2129', '#1d232b', '#1f252d', '#1a202a',
  '#1c2430', '#1e262e', '#20262e', '#1b232d',
];

export default function AnimatedBackground({ theme }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      draw();
    };
    window.addEventListener('resize', onResize);

    const rng = (x: number, y: number) => {
      const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return n - Math.floor(n);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const isDark = theme === 'dark';
      const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;
      const bgCenter = isDark ? 'rgba(24,30,38,0.88)' : 'rgba(244,247,249,0.92)';
      const bgEdge   = isDark ? 'rgba(24,30,38,0.35)' : 'rgba(244,247,249,0.4)';

      const SIZE = 52;
      const cols = Math.ceil(W / SIZE) + 1;
      const rows = Math.ceil(H / SIZE) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const v = rng(c, r);
          const color = palette[Math.floor(v * palette.length)];

          ctx.fillStyle = color;
          ctx.globalAlpha = 1;
          ctx.fillRect(c * SIZE + 1, r * SIZE + 1, SIZE - 2, SIZE - 2);
        }
      }

      ctx.globalAlpha = 1;

      // Soft center vignette so content stays readable
      const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, W * 0.8);
      vignette.addColorStop(0, bgCenter);
      vignette.addColorStop(1, bgEdge);
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);
    };

    draw();
    return () => window.removeEventListener('resize', onResize);
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
}
