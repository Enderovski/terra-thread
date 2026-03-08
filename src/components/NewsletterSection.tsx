import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Ailemize Katılın
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
          Yeni parçalardan <span className="italic">ilk siz</span> haberdar olun
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-10">
          Sınırlı sayıda üretilen koleksiyonlarımız hızla tükeniyor. E-posta listemize katılarak 
          yeni parçalardan ve özel fırsatlardan öncelikli haberdar olun.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            required
            className="flex-1 font-body text-sm px-5 py-3.5 bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
          <button
            type="submit"
            className="font-body text-xs tracking-[0.2em] uppercase bg-foreground text-background px-8 py-3.5 hover:bg-foreground/90 transition-colors duration-300"
          >
            Katıl
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
