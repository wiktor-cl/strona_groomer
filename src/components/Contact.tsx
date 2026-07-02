import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="kontakt" className="relative px-4 py-32">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.4em] text-primary uppercase">Kontakt</div>
          <h2 className="text-gradient mt-3 text-5xl font-bold md:text-6xl">Zapraszamy</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Salon znajduje się w centrum Starogardu Gdańskiego. Łatwy dojazd, parking w pobliżu.
          </p>

          <div className="mt-10 space-y-5">
            <div className="glass flex items-start gap-4 rounded-2xl p-5">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-xs text-muted-foreground">Adres</div>
                <div className="font-semibold">ul. Gdańska 17</div>
                <div className="font-semibold">83-200 Starogard Gdański</div>
              </div>
            </div>
            <a href="tel:+48512564990" data-hover className="glass flex items-start gap-4 rounded-2xl p-5 transition hover:border-primary/40">
              <span className="text-2xl">📞</span>
              <div>
                <div className="text-xs text-muted-foreground">Telefon</div>
                <div className="text-gold font-display text-2xl font-bold">512 564 990</div>
              </div>
            </a>
            <div className="glass flex items-start gap-4 rounded-2xl p-5">
              <span className="text-2xl">🕐</span>
              <div>
                <div className="text-xs text-muted-foreground">Godziny</div>
                <div className="font-semibold">Pon–Pt: 9:00 – 18:00</div>
                <div className="font-semibold">Sob: 9:00 – 14:00</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[480px] overflow-hidden rounded-3xl glass-strong glow-teal"
        >
          <iframe
            title="Mapa - Podaj Łapę Starogard Gdański"
            src="https://www.google.com/maps?q=ul.+Gda%C5%84ska+17,+83-200+Starogard+Gda%C5%84ski&output=embed"
            className="absolute inset-0 h-full w-full grayscale-[0.3] invert-[0.85] hue-rotate-[170deg]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
