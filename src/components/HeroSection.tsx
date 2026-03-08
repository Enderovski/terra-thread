import { motion } from "framer-motion";
import heroImage from "@/assets/hero-jewelry.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="El yapımı bohem takılar"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.35em] uppercase text-cream mb-6"
        >
          Sınırlı Üretim · El Yapımı · Tek Parça
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight"
        >
          Her Parçanın
          <br />
          <span className="italic font-light">Bir Hikayesi Var</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-sm md:text-base text-cream/80 mt-8 max-w-md leading-relaxed"
        >
          Doğanın dokusundan ilham alan, usta ellerde şekillenen bohem takılar ve ev dekorasyon parçaları.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          href="#collection"
          className="mt-10 font-body text-xs tracking-[0.3em] uppercase text-cream border border-cream/40 px-10 py-4 hover:bg-cream/10 transition-all duration-500"
        >
          Koleksiyonu Keşfet
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/60">Aşağı Kaydır</span>
        <div className="w-px h-8 bg-cream/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
