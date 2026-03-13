import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import SEO from "./components/SEO";
import { business } from "./lib/data";
import { buildWhatsappHref } from "./lib/whatsapp";

function App() {
  const whatsappHref = buildWhatsappHref(business.whatsappNumber);

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
        <ChatBot />
      </div>
    </>
  );
}

export default App;
