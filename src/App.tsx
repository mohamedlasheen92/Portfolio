import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      {/* <div className="text-5xl">💚 💙 🙋 👋</div> */}
      <div className="container mx-auto">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Main />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
