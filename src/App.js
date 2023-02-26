import "./App.css";
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'
import KnowMeMore from './components/KnowMeMore/KnowMeMore.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import ContactMe from './components/ContactMe/ContactMe.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <KnowMeMore />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
