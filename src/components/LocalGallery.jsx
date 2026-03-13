import { motion } from "framer-motion";

export default function LocalGallery() {
  const localImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop', alt: 'Interior del Local' },
    { id: 2, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', alt: 'Mesas y sillas' },
    { id: 3, url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop', alt: 'Horno pizzero' },
    { id: 4, url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop', alt: 'Exterior iluminado' },
  ];

  return (
    <section className="py-32 bg-zinc-50 text-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-brand tracking-[0.2em] font-medium text-sm block mb-4 uppercase">Nuestra Casa</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark mb-6">
            El <i className="text-brand/90 font-light">Horno</i> de Barro
          </h2>
          <div className="w-16 h-[1px] bg-brand/40 mx-auto"></div>
          <p className="text-gray-600 mt-8 max-w-2xl mx-auto font-light leading-relaxed">
            Un entorno diseñado para cautivar tus sentidos. El calor de la leña y un ambiente íntimo para una velada inolvidable.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {localImages.map((img, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              key={img.id} 
              className="relative aspect-[4/5] overflow-hidden bg-gray-200 group"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}