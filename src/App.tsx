import './App.css'
import Home from './pages/home'
import Navbar from './components/Navbar'
import Proyects from './sections/proyects'
import AboutMe from './sections/AboutMe'
import ScrollDownHint from './components/ScrollDownHint'
import Sep from './components/sep'
import Contact from './sections/Contact'
import Technologies from './sections/technologies'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Sep />
        <ScrollDownHint />
        <Proyects />
        <AboutMe />
        <Sep />
        <Technologies />
        <Sep />
        <Contact />
      </div>
    </>
  )
}

export default App
