import { useState } from "react";

export default function PizzaMenu() {
  const [activeCategory, setActiveCategory] = useState("Clásicas");

  const pizzas = [
    { id: 1, nombre: "Margarita", desc: "Salsa de tomate, mozzarella fior di latte, albahaca fresca.", precio: "$7500", category: "Clásicas" },
    { id: 2, nombre: "Fugazzeta", desc: "Mucha mozzarella, cebolla morada, orégano.", precio: "$8000", category: "Clásicas" },
    { id: 3, nombre: "Pepperoni", desc: "Salsa, mozzarella, pepperoni curado, aceite de oliva.", precio: "$9500", category: "Especiales" },
    { id: 4, nombre: "Roquefort", desc: "Mozzarella, queso azul, nueces, toque de pera.", precio: "$9000", category: "Especiales" },
    { id: 5, nombre: "Prosciutto", desc: "Salsa, fior di latte, rúcula, jamón crudo, parmesano.", precio: "$10500", category: "Premium" },
    { id: 6, nombre: "Trufada", desc: "Crema de trufa, champiñones, mozzarella, yema curada.", precio: "$11000", category: "Premium" }
  ];

  const categories = ["Clásicas", "Especiales", "Premium"];

  const filteredPizzas = pizzas.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-zinc-950 border-t border-brand/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4 uppercase">
          Nuestro <span className="text-brand">Menú</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Pizzas al estilo napolitano horneadas en leña. Masa madre con 48h de fermentación.
        </p>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-colors \${
                activeCategory === cat
                  ? "bg-brand text-white shadow-lg shadow-brand/20"
                  : "bg-zinc-900 text-gray-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Menú */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPizzas.map((pizza) => (
            <div 
              key={pizza.id} 
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-brand/40 transition-colors group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-100 group-hover:text-brand transition-colors">
                  {pizza.nombre}
                </h3>
                <span className="text-xl font-bold text-brand bg-brand/10 px-3 py-1 rounded">
                  {pizza.precio}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                {pizza.desc}
              </p>
              <button className="w-full py-3 bg-zinc-800 text-gray-200 rounded font-medium hover:bg-brand hover:text-white transition-all">
                Añadir al Pedido
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}