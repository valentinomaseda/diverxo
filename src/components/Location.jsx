export default function Location() {
  return (
    <section className="bg-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 uppercase">
          Dónde <span className="text-brand">Encontrarnos</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Info */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">Ubicación y Horarios</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mt-1 bg-brand/10 p-2 rounded text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Av. Principal 1234, Arrecifes</p>
                  <p className="text-gray-400">Provincia de Buenos Aires</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 bg-brand/10 p-2 rounded text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Miércoles a Domingos</p>
                  <p className="text-gray-400">19:30 - 23:30 hs</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="mt-1 bg-brand/10 p-2 rounded text-brand">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-white">Reservas y Delivery</p>
                  <p className="text-gray-400">+54 9 2478 123456</p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto px-8 py-4 text-center bg-brand text-white font-bold rounded shadow-lg shadow-brand/20 hover:bg-orange-700 transition-colors"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 lg:h-full min-h-[400px] w-full bg-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.262529944062!2d-60.10606!3d-34.0664801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9c054f02ec3b7%3A0x6e9a66b5bdee93fc!2sArrecifes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de DiverXo en Arrecifes"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}