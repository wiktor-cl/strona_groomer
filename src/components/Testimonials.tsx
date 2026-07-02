import { motion } from "framer-motion";

const data = [
  { n: "Ania", p: "Border collie · Czesanie + kosmetyka", t: "To był nasz pierwszy raz u groomera. Cudowne podejście do zwierzaka. Delikatność i skuteczność. Świetna robota. Jesteśmy bardzo zadowolone. Dziękujemy i polecamy." },
  { n: "Monika", p: "Wizyta adaptacyjna", t: "Wszystko super. Piesek zadowolony. Polecam 😉" },
  { n: "Karolina", p: "Czesanie + kosmetyka", t: "Piesek świetnie zaopiekowany i pięknie wyczesany. Polecamy z całego serducha." },
  { n: "Wiktoria", p: "Mimi · Strzyżenie pies mały", t: "Mimi ślicznie wystylizowana 🥰🥰" },
  { n: "Tetiana", p: "Strzyżenie pies mały", t: "Super 👌" },
  { n: "Emilia", p: "Strzyżenie psy średnie i duże", t: "Jesteśmy zadowoleni — co uzgodniliśmy, super zostało wykonane. Kolejny raz na medal." },
  { n: "Małgorzata", p: "Wizyta adaptacyjna", t: "Jestem bardzo zadowolona z efektu końcowego, podejście Pani do pieska jest naprawdę rewelacyjne. Polecam z całego serca." },
  { n: "Małgorzata", p: "Trymowanie", t: "Bardzo polecam, piesek zadowolony, przemiła obsługa i kontakt, będziemy na pewno wracać." },
  { n: "Iwona", p: "Strzyżenie pies mały", t: "Byłam pierwszy raz z pieskiem. Super podejście i super Pani. Bardzo polecam. Jestem bardzo zadowolona. 💞" },
  { n: "Sandra", p: "Strzyżenie pies mały", t: "Wspaniałe miejsce 😊" },
];

export function Testimonials() {
  return (
    <section id="opinie" className="relative overflow-hidden px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="text-xs tracking-[0.4em] text-primary uppercase">Opinie z Booksy</div>
          <h2 className="text-gradient mt-3 text-5xl font-bold md:text-6xl">5.0★ · 100 opinii</h2>
          <p className="mt-3 text-muted-foreground">Prawdziwe opinie zadowolonych opiekunów</p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...data, ...data].map((d, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
              style={{ transformPerspective: 1000 }}
              className="glass-strong w-[340px] shrink-0 rounded-3xl p-7"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, k) => (
                  <motion.span
                    key={k}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: k * 0.08, type: "spring" }}
                    className="text-gold text-lg"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{d.t}"</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-gold text-sm font-bold text-background">
                  {d.n[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{d.n}</div>
                  <div className="text-xs text-muted-foreground">{d.p}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
