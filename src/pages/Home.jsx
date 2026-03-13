import Hero from "../components/Hero";
import LocalGallery from "../components/LocalGallery";
import PizzaMenu from "../components/PizzaMenu";
import Location from "../components/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <LocalGallery />
      <PizzaMenu />
      <Location />
    </>
  );
}