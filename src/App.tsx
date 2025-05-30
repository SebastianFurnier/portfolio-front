import './App.css'
import Home from './components/home'
import Navbar from './components/Navbar'
import Proyects from './components/proyects'
import AboutMe from './components/AboutMe'
import ScrollDownHint from './components/ScrollDownHint'
import Sep from './components/sep'
import Contact from './components/Contact'
import Technologies from './components/technologies'

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
