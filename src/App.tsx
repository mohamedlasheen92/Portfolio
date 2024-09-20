import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      {/* <div className="text-5xl">💚 💙 🙋 👋</div> */}
      <div className="container mx-auto">
        <Header />
        <Hero />
        <About />
        <Main />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
