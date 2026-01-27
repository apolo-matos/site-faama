import Navbar from "../Components/Navbar.js";
import Hero from "../Components/Hero.js";
import Destaques from "../Components/Destaques.js";
import "../styles/Inicio.css";

function Inicio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destaques />
    </>
  );
}

export default Inicio;