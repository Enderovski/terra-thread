const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">TOPRAK</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              El yapımı bohem takılar ve ev dekorasyon.
              <br />
              İstanbul'dan sevgiyle.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Keşfet</p>
            <div className="flex flex-col gap-2">
              {["Yeni Koleksiyon", "Takılar", "Ev Dekorasyon", "Hikayemiz"].map((item) => (
                <a key={item} href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Takip Edin</p>
            <div className="flex flex-col gap-2">
              {["Instagram", "Pinterest", "TikTok"].map((item) => (
                <a key={item} href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 TOPRAK. Tüm hakları saklıdır.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Sürdürülebilir · Etik · El Yapımı
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
