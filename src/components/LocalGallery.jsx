export default function LocalGallery() {
  const localImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop', alt: 'Interior del Local' },
    { id: 2, url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop', alt: 'Mesas y sillas' },
    { id: 3, url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop', alt: 'Horno pizzero' },
    { id: 4, url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop', alt: 'Exterior iluminado' },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4 uppercase">
          Nuestro <span className="text-brand">Local</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Un ambiente relajado con estilo único en el que puedes disfrutar de las mejores pizzas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localImages.map((img) => (
            <div 
              key={img.id} 
              className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 group"
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <span className="p-4 text-white font-medium drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}