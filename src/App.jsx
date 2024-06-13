import './index.css'
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Proyects } from './proyects';
import { Skills } from './Skills/Skills'
import { About } from './about';
import { ContactMe } from './contact';
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