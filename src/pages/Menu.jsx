import PizzaMenu from "../components/PizzaMenu";

export default function Menu() {
  return (
    <div className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase tracking-tight">
          Menú <span className="text-brand">Completo</span>
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Explora todas nuestras variedades. Hechas con amor en Arrecifes.
        </p>
      </div>
      <PizzaMenu />
    </div>
  );
}