import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems } = useCart();

  const parsePrice = (price: string) => {
    return parseFloat(price.replace("₺", "").replace(".", "").replace(",", "."));
  };

  const total = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-background flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl font-light text-foreground">
            Sepetiniz ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="w-12 h-12" strokeWidth={1} />
            <p className="font-body text-sm">Sepetiniz boş</p>
            <button
              onClick={() => setIsOpen(false)}
              className="font-body text-xs tracking-[0.2em] uppercase border border-foreground/30 px-6 py-3 text-foreground hover:bg-foreground/5 transition-colors"
            >
              Alışverişe Devam Et
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-20 bg-muted flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-medium text-foreground truncate">{item.name}</h4>
                      <p className="font-body text-sm text-muted-foreground mt-0.5">{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border text-foreground hover:bg-muted transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-body text-sm text-foreground w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-border text-foreground hover:bg-muted transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-muted-foreground">Toplam</span>
                <span className="font-display text-xl text-foreground">
                  ₺{total.toLocaleString("tr-TR")}
                </span>
              </div>
              <button className="w-full font-body text-xs tracking-[0.2em] uppercase bg-foreground text-background py-4 hover:bg-foreground/90 transition-colors">
                Siparişi Tamamla
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Alışverişe Devam Et
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
