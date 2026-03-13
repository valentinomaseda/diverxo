import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PizzaMenu() {
  const [activeCategory, setActiveCategory] = useState("Clásicas");
  const [direction, setDirection] = useState(0);

  const categories = ["Clásicas", "Especiales", "Premium", "Empanadas"];

  const handleCategoryChange = (newCat) => {
    if (newCat === activeCategory) return;
    const currentIndex = categories.indexOf(activeCategory);
    const newIndex = categories.indexOf(newCat);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveCategory(newCat);
  };

  const pizzas = [
    { 
      id: 1, 
      nombre: "Margarita Auténtica", 
      desc: "Salsa San Marzano, fior di latte importada, albahaca fresca y AOVE.", 
      category: "Clásicas",
      imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=200&h=200",
      badge: "Best Seller"
    },
    { 
      id: 2, 
      nombre: "Fugazzeta de Autor", 
      desc: "Blend de quesos, mermelada de cebolla morada reposada, flor de sal.", 
      category: "Clásicas",
      imagen: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    { 
      id: 3, 
      nombre: "Pepperoni & Miel", 
      desc: "Pepperoni curado, mozzarella, lluvia de miel picante.", 
      category: "Especiales",
      imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=200&h=200"
    },
    { 
      id: 4, 
      nombre: "Azul y Peras", 
      desc: "Queso Roquefort, peras asadas al horno, nueces pecan garrapiñadas.", 
      category: "Especiales",
      imagen: "https://plus.unsplash.com/premium_photo-1667682209935-9069772ee785?auto=format&fit=crop&q=80&w=200&h=200"
    },
    { 
      id: 5, 
      nombre: "Prosciutto Di Parma", 
      desc: "Fior di latte, rúcula selvática, prosciutto italiano 24 meses, escamas de Grana Padano.", 
      category: "Premium",
      imagen: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80&w=200&h=200",
      badge: "De Autor"
    },
    { 
      id: 6, 
      nombre: "Trufada", 
      desc: "Carpaccio de trufa negra, crema de mascarpone, champiñones confitados, yema curada.", 
      category: "Premium",
      imagen: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=200&h=200"
    },
    { 
      id: 7, 
      nombre: "Carne Cortada a Cuchillo", 
      desc: "Receta tradicional salteña, carne braseada, huevo y verdeo. Fritas o al horno.", 
      category: "Empanadas",
      imagen: "https://images.unsplash.com/photo-1628198622765-38507ab18228?auto=format&fit=crop&q=80&w=200&h=200",
      badge: "Clásica"
    },
    { 
      id: 8, 
      nombre: "Queso Azul y Apio", 
      desc: "Blend de quesos con roquefort, apio crocante y nueces tostadas.", 
      category: "Empanadas",
      imagen: "https://images.unsplash.com/photo-1606927989938-16cb03ed5be4?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  const filteredPizzas = pizzas.filter(p => p.category === activeCategory);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 150 : -150,
      opacity: 0,
    }),
  };

  return (
    <section className="py-32 relative bg-dark">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand tracking-[0.2em] font-medium text-sm block mb-4 uppercase">Degustación</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Colección de <i className="text-brand/90 font-light">Temporada</i>
          </h2>
          <div className="w-16 h-[1px] bg-brand/30 mx-auto"></div>
        </motion.div>

        {/* Categoria Tabs */}
        <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mb-20 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`relative pb-2 text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 \${
                activeCategory === cat
                  ? "text-brand"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeCategory" 
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand shadow-glow"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Editorial */}
        <div className="relative min-h-[600px] overflow-hidden">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeCategory}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 pt-10"
            >
              {filteredPizzas.map((pizza, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={pizza.id}
                  className="relative glass-panel rounded-2xl p-8 pt-16 flex flex-col group hover:border-brand/20 transition-all duration-500 hover:shadow-glow/30"
                >
                  {/* Imagen Circular Fotografía Gastronómica */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-dark shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={pizza.imagen} 
                    alt={pizza.nombre} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center mt-2 flex-grow">
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-brand transition-colors duration-300">
                    {pizza.nombre}
                  </h3>
                  <div className="flex justify-center my-4">
                    <span className="w-8 h-[1px] bg-white/10"></span>
                  </div>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                    {pizza.desc}
                  </p>
                </div>
              </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}