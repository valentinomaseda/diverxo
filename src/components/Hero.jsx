import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-dark"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight">
          Diver<span className="text-brand">X</span>o
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          La mejor pizza en horno de barro de Arrecifes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-brand text-white font-bold rounded shadow-lg shadow-brand/20 hover:bg-orange-700 hover:-translate-y-1 transition-all"
          >
            Reservar por WhatsApp
          </a>
          <Link 
            to="/menu" 
            className="px-8 py-4 bg-transparent border border-brand text-brand font-bold rounded hover:bg-brand/10 hover:-translate-y-1 transition-all"
          >
            Ver Menú
          </Link>
        </div>
      </div>
    </section>
  );
}
