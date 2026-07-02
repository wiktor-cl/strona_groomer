import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 3,
        dx: (Math.random() - 0.5) * 200,
        dy: -100 - Math.random() * 300,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 8,
        teal: Math.random() > 0.5,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.teal ? "oklch(0.74 0.18 350 / 0.7)" : "oklch(0.85 0.10 50 / 0.6)",
            // @ts-expect-error css var
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
            animation: `drift ${p.duration}s ease-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
