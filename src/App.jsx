import './index.css'
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Proyects } from './Proyects/Proyects';
import { Skills } from './Skills/Skills'
import { About } from './AboutMe/AboutMe';
import { ContactMe } from './Contact/Contact';
import { Footer } from './Footer/Footer';

function App() {
  

  return (
    <>
    <div>
      <Header/>
      <Hero/>
      <Proyects/>
      <Skills/>
      <About/>
      <ContactMe/>
      <Footer/>
    </div>
    </>

);
}

export default App