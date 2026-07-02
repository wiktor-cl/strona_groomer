import { motion } from "framer-motion";

export function Booking() {
  return (
    <section id="rezerwacja" className="relative px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] glass-strong p-12 text-center md:p-20"
      >
        <div className="absolute -top-32 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-gold/20 blur-[100px]" />

        <div className="text-xs tracking-[0.4em] text-gold uppercase">Rezerwacja</div>
        <h2 className="text-gradient mt-3 text-5xl font-bold md:text-6xl">
          Twój pupil zasłużył.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Rezerwuj online przez Booksy w 30 sekund. Wybierz dogodny termin i zostaw resztę nam.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://booksy.com/pl-pl/276480_salon-groomerski-podaj-lape_zwierzaki_21859_starogard-gdanski#ba_s=sh_1"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow-teal)]"
          >
            <span className="absolute inset-0 rounded-full animate-pulse-ring" />
            Umów wizytę online
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="tel:+48512564990" className="text-sm text-muted-foreground hover:text-foreground" data-hover>
            lub zadzwoń: <span className="text-gold">512 564 990</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
