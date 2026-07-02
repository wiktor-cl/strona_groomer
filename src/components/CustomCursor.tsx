import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 28, mass: 0.4 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      >
        <svg
          width={hovering ? 56 : 28}
          height={hovering ? 56 : 28}
          viewBox="0 0 24 24"
          fill="white"
          style={{ transform: "translate(-50%, -50%)", transition: "width 0.2s, height 0.2s" }}
        >
          <path d="M12 13.5c-2 0-4 2-4 4.5 0 1.5 1 2 2 2h4c1 0 2-0.5 2-2 0-2.5-2-4.5-4-4.5zM6 11c1.1 0 2-1.1 2-2.5S7.1 6 6 6s-2 1.1-2 2.5S4.9 11 6 11zm12 0c1.1 0 2-1.1 2-2.5S19.1 6 18 6s-2 1.1-2 2.5 0.9 2.5 2 2.5zM9 7c1.1 0 2-1.3 2-3s-0.9-3-2-3-2 1.3-2 3 0.9 3 2 3zm6 0c1.1 0 2-1.3 2-3s-0.9-3-2-3-2 1.3-2 3 0.9 3 2 3z"/>
        </svg>
      </motion.div>
    </>
  );
}
