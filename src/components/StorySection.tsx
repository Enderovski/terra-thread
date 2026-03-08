import { motion } from "framer-motion";
import workshopImage from "@/assets/story-workshop.jpg";

const StorySection = () => {
  return (
    <section id="story" className="bg-secondary">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <img
            src={workshopImage}
            alt="TOPRAK atölyesi"
            className="w-full h-full object-cover min-h-[400px]"
            loading="lazy"
          />
        </motion.div>

        {/* Text */}
        <div className="flex items-center px-8 lg:px-16 xl:px-24 py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Hikayemiz
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
              Topraktan
              <br />
              <span className="italic">Doğan Güzellik</span>
            </h2>
            <div className="space-y-5 font-body text-sm leading-relaxed text-muted-foreground">
              <p>
                TOPRAK, İstanbul'un kalbinde küçük bir atölyede doğdu. Her parçamız, doğanın ham güzelliğinden 
                ilham alarak usta ellerde tek tek şekilleniyor.
              </p>
              <p>
                Seri üretimden uzak, her biri sınırlı sayıda üretilen koleksiyonlarımız, 
                taşıyan kişiye özel bir hikaye anlatıyor. Hammaddelerimizi Anadolu'nun dört bir yanından, 
                etik ve sürdürülebilir kaynaklardan temin ediyoruz.
              </p>
              <p>
                Çünkü inanıyoruz ki güzellik, doğaya ve insana saygıyla başlar.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-12">
              <div>
                <span className="font-display text-3xl text-foreground">500+</span>
                <p className="font-body text-xs text-muted-foreground mt-1 tracking-wider uppercase">El Yapımı Parça</p>
              </div>
              <div>
                <span className="font-display text-3xl text-foreground">2019</span>
                <p className="font-body text-xs text-muted-foreground mt-1 tracking-wider uppercase">Yılından Beri</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
