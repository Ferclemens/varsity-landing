import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
