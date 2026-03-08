import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";
import { categories, products, Product, ElementCategory } from "@/data/products";

const CollectionSection = () => {
  const [activeCategory, setActiveCategory] = useState<ElementCategory>("fire");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((p) => p.category === activeCategory);

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
          Dört Element Koleksiyonu
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
          Doğanın Gücü
        </h2>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative flex items-center gap-2 px-5 py-3 md:px-8 md:py-4 font-body text-xs tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Category Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-center font-body text-sm text-muted-foreground mb-12"
        >
          {categories.find((c) => c.id === activeCategory)?.description}
        </motion.p>
      </AnimatePresence>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {filteredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              tag={product.tag}
              index={i}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      <ProductDetailModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default CollectionSection;
