import { motion } from "framer-motion";
import groomer from "@/assets/groomer.jpg";
import { Counter } from "./Counter";

export function About() {
  const text = "Każdy pupil zasługuje na chwilę luksusu.";
  return (
    <section id="o-nas" className="relative px-4 py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl glass-strong">
            <img
              src={groomer}
              alt="Profesjonalny groomer w salonie Podaj Łapę"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-6 rounded-2xl p-5">
            <div className="text-gold font-display text-3xl font-bold">
              <Counter to={5} suffix=".0★" />
            </div>
            <div className="text-xs text-muted-foreground">Średnia ocena</div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs tracking-[0.4em] text-primary uppercase"
          >
            O nas
          </motion.div>

          <h2 className="text-gradient text-5xl font-bold leading-[1.05] md:text-6xl">
            {text.split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="mr-3 inline-block"
              >
                {w}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Salon prowadzi <span className="text-foreground font-semibold">Marta Michalik</span> —
            butikowy salon groomerski przy ul. Gdańskiej 17 w Starogardzie Gdańskim. 100 opinii 5★
            na Booksy mówią same za siebie: indywidualne podejście, delikatność i dbałość o każdy
            detal — od kąpieli po finalny cut.
          </motion.p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { v: 100, s: "+", l: "Opinii 5★" },
              { v: 500, s: "+", l: "Pupili" },
              { v: 7, s: "", l: "Lat pasji" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-gradient font-display text-4xl font-bold">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
