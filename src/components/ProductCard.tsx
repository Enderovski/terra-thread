import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  tag?: string;
  index: number;
}

const ProductCard = ({ image, name, price, tag, index }: ProductCardProps) => {
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
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-display text-lg font-medium text-foreground">{name}</h3>
        <p className="font-body text-sm text-muted-foreground">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
