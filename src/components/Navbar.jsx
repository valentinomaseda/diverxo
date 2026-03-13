import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToMenu = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 bg-black/90 backdrop-blur-md border-b border-brand/20 shadow-md transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={handleScrollToTop} className="flex items-center">
            <img src="/logo.png" alt="DiverXo Logo" className="h-10 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110" />
          </Link>
          <div className="flex gap-6 items-center">
            <Link 
              to="/" 
              onClick={handleScrollToTop}
              className={`text-sm font-medium hover:text-brand transition-colors ${location.pathname === '/' ? 'text-brand' : 'text-gray-300'}`}
            >
              Inicio
            </Link>
            <a 
              href="/#menu" 
              onClick={handleScrollToMenu}
              className={`text-sm font-medium hover:text-brand transition-colors text-gray-300`}
            >
              Menú
            </a>
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
