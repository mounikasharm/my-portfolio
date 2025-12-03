import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificate';
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Skills from "./components/Skills"
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects /> 
      <Certificates /> 
      <Skills />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
