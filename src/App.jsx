import Navbar from './sections/Navbar.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Gallery from './sections/Gallery.jsx';
import Contact from './sections/Contact.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
