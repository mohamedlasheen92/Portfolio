import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Hero />
        <Main />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
