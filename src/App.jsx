import './index.css'
import { Header } from './header';
import { Hero } from './hero';
import { Proyects } from './proyects';
import { Skills } from './skills'
import { About } from './about';
import { ContactMe } from './contact';

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
    </div>
    </>

);
}

export default App