import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-brand/20 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-brand uppercase tracking-widest">
            DiverXo
          </Link>
          <div className="flex gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium hover:text-brand transition-colors \${location.pathname === '/' ? 'text-brand' : 'text-gray-300'}`}
            >
              Inicio
            </Link>
            <Link 
              to="/menu" 
              className={`text-sm font-medium hover:text-brand transition-colors \${location.pathname === '/menu' ? 'text-brand' : 'text-gray-300'}`}
            >
              Menú
            </Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-brand rounded hover:bg-orange-700 transition-colors"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
