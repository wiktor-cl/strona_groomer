import { useEffect, useState } from "react";

type Paw = { id: number; x: number; y: number; r: number };

export function PawTrail() {
  const [paws, setPaws] = useState<Paw[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;
    let lastSpawn = 0;
    let id = 0;
    const onScroll = () => {
      const now = performance.now();
      const dy = window.scrollY - lastY;
      if (Math.abs(dy) > 60 && now - lastSpawn > 220) {
        const p: Paw = {
          id: id++,
          x: 15 + Math.random() * 70,
          y: (window.scrollY + window.innerHeight - 80 - Math.random() * 60),
          r: (Math.random() - 0.5) * 40,
        };
        setPaws((arr) => [...arr.slice(-12), p]);
        lastSpawn = now;
        lastY = window.scrollY;
        setTimeout(() => setPaws((arr) => arr.filter((x) => x.id !== p.id)), 2500);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {paws.map((p) => (
        <svg
          key={p.id}
          viewBox="0 0 24 24"
          width="26"
          height="26"
          className="absolute opacity-0"
          style={{
            left: `${p.x}vw`,
            top: p.y,
            transform: `rotate(${p.r}deg)`,
            animation: "pawFade 2.5s ease-out forwards",
            color: "oklch(0.74 0.18 350 / 0.55)",
          }}
        >
          <path
            fill="currentColor"
            d="M12 13.5c-2 0-4 2-4 4.5 0 1.5 1 2 2 2h4c1 0 2-0.5 2-2 0-2.5-2-4.5-4-4.5zM6 11c1.1 0 2-1.1 2-2.5S7.1 6 6 6s-2 1.1-2 2.5S4.9 11 6 11zm12 0c1.1 0 2-1.1 2-2.5S19.1 6 18 6s-2 1.1-2 2.5 0.9 2.5 2 2.5zM9 7c1.1 0 2-1.3 2-3s-0.9-3-2-3-2 1.3-2 3 0.9 3 2 3zm6 0c1.1 0 2-1.3 2-3s-0.9-3-2-3-2 1.3-2 3 0.9 3 2 3z"
          />
        </svg>
      ))}
      <style>{`
        @keyframes pawFade {
          0% { opacity: 0; transform: translateY(-10px) rotate(0); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translateY(20px); }
        }
      `}</style>
    </div>
  );
}
