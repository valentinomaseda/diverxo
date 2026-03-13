import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="py-32 relative text-dark bg-[#EAE5D9]">
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <span className="text-brand tracking-[0.2em] font-medium text-sm block mb-4 uppercase">Visítanos</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-dark mb-10">
              Reserva tu <i className="text-brand font-light">Mesa</i>
            </h2>
            
            <ul className="space-y-8 mb-12">
              <li className="flex items-start">
                <div className="text-brand mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-xl font-serif text-dark mb-1">Av. Principal 1234, Arrecifes</p>
                  <p className="text-gray-500 font-light text-sm">Provincia de Buenos Aires</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="text-brand mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-xl font-serif text-dark mb-1">Miércoles a Domingos</p>
                  <p className="text-gray-500 font-light text-sm">19:30 - 23:30 hs</p>
                </div>
              </li>
            </ul>

            <div>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-dark text-white text-sm tracking-widest uppercase hover:bg-brand hover:shadow-glow transition-all duration-300"
              >
                Contactar
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-[400px] lg:h-[500px] w-full bg-zinc-100 relative group overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.262529944062!2d-60.10606!3d-34.0664801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9c054f02ec3b7%3A0x6e9a66b5bdee93fc!2sArrecifes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
              className="transition-all duration-700 group-hover:filter-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación DiverXo"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}