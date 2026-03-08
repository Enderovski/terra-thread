import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  tag?: string;
  index: number;
}

const ProductCard = ({ image, name, price, tag, index }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id: name, name, price, image });
    toast.success(`${name} sepete eklendi`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {tag && (
          <span className="absolute top-4 left-4 font-body text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-3 py-1.5">
            {tag}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-foreground hover:text-background"
        >
          <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500 pointer-events-none" />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-display text-lg font-medium text-foreground">{name}</h3>
        <p className="font-body text-sm text-muted-foreground">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
