export function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="text-2xl">🐾</span>
          <span className="text-gradient">Podaj Łapę</span>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="https://www.instagram.com/groomer_podaj_lape/" target="_blank" rel="noopener noreferrer" data-hover className="hover:text-primary">Instagram</a>
          <a href="https://www.facebook.com/p/Salon-groomerski-Podaj-%C5%81ap%C4%99-61571158025059/" target="_blank" rel="noopener noreferrer" data-hover className="hover:text-primary">Facebook</a>
          <a href="https://booksy.com/pl-pl/276480_salon-groomerski-podaj-lape_zwierzaki_21859_starogard-gdanski#ba_s=sh_1" target="_blank" rel="noopener noreferrer" data-hover className="hover:text-primary">Booksy</a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Podaj Łapę
        </div>
      </div>
    </footer>
  );
}
