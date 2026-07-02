import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Service = {
  icon: string;
  title: string;
  short: string;
  price: string;
  long: string;
};

const services: Service[] = [
  { icon: "✂️", title: "Strzyżenie psy małe", price: "od 150 zł", short: "Kompleksowa pielęgnacja małych ras", long: "Kąpiel w szamponie oczyszczającym i pielęgnacyjnym, odżywka, suszenie z modelowaniem, strzyżenie maszynkowe i nożyczkowe, obcięcie pazurów, kosmetyka opuszków, czyszczenie uszu i okolic oczu. York, maltańczyk, shih tzu, pudel toy, pomeranian, maltipoo." },
  { icon: "🐕", title: "Strzyżenie psy średnie i duże", price: "od 150 zł", short: "Pełna obsługa dla większych ras", long: "Buldog, beagle, labrador, owczarek, akita, husky — pełen serwis kąpielowo-pielęgnacyjny i strzyżenie dopasowane do rasy oraz potrzeb sierści." },
  { icon: "🪮", title: "Czesanie + kosmetyka", price: "od 130 zł", short: "Dla psów z długim włosem", long: "Rozczesywanie, wyczesywanie podszerstka i włosa okrywowego, kosmetyczne podcięcie nożyczkowe, kąpiel z odżywką, pełna kosmetyka pazurów, uszu i opuszków. Border collie, golden retriever, cavalier, samoyed i inne." },
  { icon: "🎀", title: "Trymowanie", price: "od 210 zł", short: "Ręczne trymowanie ras szorstkowłosych", long: "Ręczne usuwanie martwego włosa pozwala skórze oddychać i zachować zdrową szatę. Dwukrotna kąpiel hipoalergiczna, odżywka, suszenie, trymowanie, pazurki, opuszki, uszy. Jack Russell, jamnik szorstkowłosy, west highland." },
  { icon: "💛", title: "Wizyta adaptacyjna", price: "indywidualnie", short: "Pierwsza wizyta bez stresu", long: "Łagodne wprowadzenie pieska w atmosferę salonu. Idealne dla szczeniąt i wrażliwych dorosłych, którzy odwiedzają groomera po raz pierwszy." },
  { icon: "🛁", title: "Spa & kosmetyka", price: "w pakiecie", short: "Premium szampony i odżywki", long: "Każda usługa zawiera profesjonalną kąpiel z szamponami dobieranymi do rodzaju szaty, nałożenie odżywki, suszenie z modelowaniem oraz pełną kosmetykę: pazurki, opuszki, uszy i okolice oczu." },
];

function ServiceCard({ s, onOpen }: { s: Service; onOpen: () => void }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sy = useSpring(ry, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-1, 1], [10, -10]);
  const rotateY = useTransform(sx, [-1, 1], [-14, 14]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    rx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    ry.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      data-hover
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ z: 20 }}
      className="group glass-strong relative cursor-pointer overflow-hidden rounded-3xl p-7 transition-shadow hover:shadow-[var(--shadow-glow-teal)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mx,50%) var(--my,50%), oklch(0.74 0.18 350 / 0.18), transparent 60%)",
        }}
      />
      <div className="text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        {s.icon}
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">
        {s.price}
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Dowiedz się więcej →
      </div>
    </motion.div>
  );
}

export function Services() {
  const [open, setOpen] = useState<Service | null>(null);
  return (
    <section id="uslugi" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="text-xs tracking-[0.4em] text-primary uppercase">Usługi</div>
          <h2 className="text-gradient mt-3 text-5xl font-bold md:text-6xl">Co dla Was robimy</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Karty obracają się przy najechaniu. Kliknij, aby zobaczyć szczegóły każdej usługi.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} s={s} onOpen={() => setOpen(s)} />
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="glass-strong border-white/10 bg-card/80">
          <DialogHeader>
            <div className="mb-2 text-5xl">{open?.icon}</div>
            <DialogTitle className="text-gradient font-display text-3xl">{open?.title}</DialogTitle>
            <DialogDescription className="pt-2 text-base text-muted-foreground">
              {open?.long}
            </DialogDescription>
          </DialogHeader>
          <a
            href="https://booksy.com/pl-pl/276480_salon-groomerski-podaj-lape_zwierzaki_21859_starogard-gdanski#ba_s=sh_1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(null)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            Umów na Booksy
          </a>
        </DialogContent>
      </Dialog>
    </section>
  );
}
