import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import SEO from "./components/SEO";
import { business } from "./lib/data";

function App() {
  const whatsappMessage = encodeURIComponent(
    "Halo Muria Cellular Technology, saya ingin bertanya tentang produk/layanan yang tersedia."
  );
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white text-gray-800">
        <Navbar whatsappHref={whatsappHref} />
        <main>
          <Hero whatsappHref={whatsappHref} />
          <About />
          <Services />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp whatsappHref={whatsappHref} />
      </div>
    </>
  );
}

export default App;
