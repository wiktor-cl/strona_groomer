import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import heroDog from "@/assets/czarus-hero.png";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });

  const rotY = useTransform(sx, [-1, 1], [-12, 12]);
  const rotX = useTransform(sy, [-1, 1], [8, -8]);
  const dogX = useTransform(sx, [-1, 1], [-30, 30]);
  const dogY = useTransform(sy, [-1, 1], [-20, 20]);
  const glowX = useTransform(sx, [-1, 1], [-60, 60]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-24"
    >
      <Particles count={50} />

      {/* Glow blobs */}
      <motion.div
        style={{ x: glowX }}
        className="absolute top-1/3 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]"
      />
      <div className="absolute bottom-10 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-gold/20 blur-[100px]" />

      <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-widest text-primary uppercase"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Premium grooming · Starogard Gdański
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.9 }}
            className="text-gradient text-6xl leading-[0.95] font-black md:text-7xl lg:text-8xl"
          >
            PODAJ
            <br />
            ŁAPĘ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-6 max-w-md text-lg text-muted-foreground"
          >
            Profesjonalny salon groomerski w Starogardzie Gdańskim. Twój pupil zasługuje na luksus,
            spokój i ręce, które go pokochają.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="https://booksy.com/pl-pl/276480_salon-groomerski-podaj-lape_zwierzaki_21859_starogard-gdanski#ba_s=sh_1"
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-glow-teal)] transition hover:scale-105"
            >
              <span className="relative z-10">Umów wizytę</span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary via-gold to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
            <a
              href="#metamorfozy"
              data-hover
              className="glass rounded-full px-8 py-4 font-semibold transition hover:border-gold/40 hover:text-gold"
            >
              Zobacz metamorfozy →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-12 flex items-center gap-8 text-sm"
          >
            <div>
              <div className="text-gold font-display text-2xl font-bold">5.0★</div>
              <div className="text-muted-foreground">100+ opinii</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-bold">500+</div>
              <div className="text-muted-foreground">Zadowolonych pupili</div>
            </div>
          </motion.div>
        </div>

        {/* Animated dog showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          style={{ rotateY: rotY, rotateX: rotX, transformPerspective: 1200 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* rotating gradient halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, oklch(0.74 0.18 350 / 0.55), transparent, oklch(0.85 0.10 50 / 0.5), transparent)",
              filter: "blur(30px)",
            }}
          />
          {/* pulsing inner glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-10 rounded-full bg-primary/40 blur-3xl"
          />
          {/* soft ring */}
          <div className="absolute inset-4 rounded-full border border-white/10 glass" />

          {/* floating dog */}
          <motion.img
            src={heroDog}
            alt="Rudy pudel Czaruś — premium grooming Podaj Łapę"
            width={896}
            height={1152}
            style={{ x: dogX, y: dogY }}
            animate={{ y: [0, -16, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 h-full w-full object-contain drop-shadow-[0_30px_60px_oklch(0.18_0.04_340/0.8)]"
          />

          {/* sparkles */}
          {([
            { top: "10%", left: "15%", d: 0 },
            { top: "20%", right: "10%", d: 0.6 },
            { bottom: "25%", left: "8%", d: 1.2 },
            { bottom: "15%", right: "18%", d: 1.8 },
            { top: "50%", right: "4%", d: 2.4 },
          ] as const).map((s, i) => {
            const { d, ...pos } = s;
            return (
              <motion.span
                key={i}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: d }}
                style={pos as React.CSSProperties}
                className="pointer-events-none absolute text-gold text-xl"
              >
                ✦
              </motion.span>
            );
          })}

          {/* info chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="glass-strong absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-3 whitespace-nowrap"
          >
            <span className="text-2xl animate-tail-wag inline-block">🐩</span>
            <div className="text-left">
              <div className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Najnowsza metamorfoza
              </div>
              <div className="font-display text-sm font-semibold">Rudy pudel Czaruś ✨</div>
            </div>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass absolute top-6 -left-2 z-20 rounded-2xl px-4 py-2 text-sm"
          >
            🛁 Spa & Kąpiel
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass absolute top-16 -right-2 z-20 rounded-2xl px-4 py-2 text-sm text-gold"
          >
            ✂️ Premium cut
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-muted-foreground"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
