import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, X } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, open, onClose }: ProductDetailModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    toast.success(`${product.name} sepete eklendi`);
  };

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % product.gallery.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-background border-border overflow-hidden gap-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery */}
          <div className="relative aspect-square bg-muted overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={product.gallery[activeIndex]}
                alt={`${product.name} - Görünüm ${activeIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {product.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/90 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Thumbnail dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {product.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex ? "bg-foreground w-6" : "bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              {product.tag && (
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-3 block">
                  {product.tag}
                </span>
              )}
              <h2 className="font-display text-3xl font-light text-foreground mb-2">
                {product.name}
              </h2>
              <p className="font-display text-2xl text-foreground/80 mb-6">{product.price}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-4 gap-2 mb-8">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`aspect-square overflow-hidden border-2 transition-colors ${
                      i === activeIndex ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt={`Görünüm ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-3 font-body text-xs tracking-[0.2em] uppercase bg-foreground text-background py-4 hover:bg-foreground/90 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              Sepete Ekle
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailModal;
