import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Parallax Feel (framer motion setup optional, sticky class handles it nicely) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549996647-190b679b33d7?q=80&w=2070&auto=format&fit=crop" 
          alt="DiverXo Pizza Artesanal"
          className="w-full h-full object-cover fixed top-0"
        />
        {/* Dark elegant gradients */}
        <div className="absolute inset-0 bg-dark/60"></div>
        <div className="absolute inset-0 bg-hero-gradient"></div>
        {/* Noise overlay */}
        <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-noise pointer-events-none"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto px-4 mt-16"
      >
        <span className="text-brand tracking-[0.3em] font-medium text-sm md:text-base uppercase mb-4 block">
          Experiencia Culinaria
        </span>
        <h1 
          className="text-6xl sm:text-7xl md:text-9xl font-semibold mb-6 uppercase tracking-tighter drop-shadow-2xl max-w-full break-words"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549996647-190b679b33d7?q=80&w=2070&auto=format&fit=crop')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent"
          }}
        >
          Diver<span style={{ WebkitTextFillColor: "#D35400" }}>X</span>o
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Artesanía en cada masa. Descubre la verdadera esencia de nuestra receta en el corazón de Arrecifes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-4 bg-brand text-white text-sm tracking-widest uppercase rounded-sm hover:shadow-glow hover:bg-orange-600 transition-all duration-300"
          >
            Reservar Mesa
          </motion.a>
          
          <Link 
            to="/menu" 
            className="group px-10 py-4 relative overflow-hidden text-sm tracking-widest uppercase text-white transition-all"
          >
            <span className="relative z-10 font-light group-hover:text-brand transition-colors duration-300">
              Nuestro menú
            </span>
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-brand/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
