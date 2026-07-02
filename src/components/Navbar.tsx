import { motion } from "framer-motion";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#metamorfozy", label: "Metamorfozy" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.6 }}
      className="fixed top-4 left-1/2 z-50 w-[min(95%,1100px)] -translate-x-1/2"
    >
      <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold" data-hover>
          <span className="text-2xl">🐾</span>
          <span className="text-gradient">Podaj Łapę</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-hover
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="relative">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://booksy.com/pl-pl/276480_salon-groomerski-podaj-lape_zwierzaki_21859_starogard-gdanski#ba_s=sh_1"
          target="_blank"
          rel="noopener noreferrer"
          data-hover
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:shadow-[var(--shadow-glow-teal)]"
        >
          Umów wizytę
        </a>
      </nav>
    </motion.header>
  );
}
