import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { image: product1, name: "Ametist Doğal Taş Yüzük", price: "₺890", tag: "Son 3 Adet" },
  { image: product2, name: "Ay Kolye · Altın Kaplama", price: "₺1.240" },
  { image: product3, name: "Seramik Vazo · Toprak Serisi", price: "₺680", tag: "Yeni" },
  { image: product4, name: "Bohem Halka Küpe Seti", price: "₺560" },
];

const CollectionSection = () => {
  return (
    <section id="collection" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Seçilmiş Parçalar
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Yeni Koleksiyon
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.name} {...product} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <a
          href="#"
          className="font-body text-xs tracking-[0.3em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-300"
        >
          Tüm Ürünleri Gör
        </a>
      </motion.div>
    </section>
  );
};

export default CollectionSection;
