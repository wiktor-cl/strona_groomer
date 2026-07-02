import { useRef, useState } from "react";
import { motion } from "framer-motion";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <section id="metamorfozy" className="relative px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="text-xs tracking-[0.4em] text-primary uppercase">Metamorfozy</div>
          <h2 className="text-gradient mt-3 text-5xl font-bold md:text-6xl">Przed i Po</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Przeciągnij suwak. Każda metamorfoza to historia spokoju i zaufania.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl glass-strong select-none glow-teal"
          onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
          onMouseMove={(e) => dragging.current && update(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => update(e.touches[0].clientX)}
          onTouchMove={(e) => update(e.touches[0].clientX)}
        >
          <img src={after} alt="Po" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img src={before} alt="Przed" className="h-full w-full object-cover" loading="lazy" />
          </div>

          <div className="glass absolute top-4 left-4 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest">
            PRZED
          </div>
          <div className="glass absolute top-4 right-4 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-gold">
            PO
          </div>

          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-gold to-primary"
            style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background border-2 border-primary shadow-[var(--shadow-glow-teal)]">
              <span className="text-primary text-lg">⇆</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
