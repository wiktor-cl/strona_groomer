import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative">
            <motion.svg
              viewBox="0 0 100 100"
              width="120"
              height="120"
              initial={{ scale: 0.6, rotate: -10 }}
              animate={{ scale: [0.8, 1.1, 0.9, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <defs>
                <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.74 0.18 350)" />
                  <stop offset="100%" stopColor="oklch(0.85 0.10 50)" />
                </linearGradient>
              </defs>
              <g fill="url(#lg)">
                <ellipse cx="50" cy="62" rx="20" ry="16" />
                <circle cx="28" cy="42" r="9" />
                <circle cx="72" cy="42" r="9" />
                <circle cx="38" cy="22" r="7" />
                <circle cx="62" cy="22" r="7" />
              </g>
            </motion.svg>
          </div>
          <motion.div
            className="mt-8 text-sm tracking-[0.4em] text-muted-foreground"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            PODAJ ŁAPĘ
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
