import './App.css'
import Home from './pages/home'
import Snow from './components/SnowflakesBackground'
import Proyects from './sections/Projects/proyects'
import AboutMe from './sections/About/AboutMe'
import Contact from './sections/Contact/Contact'
import Technologies from './sections/Tech/technologies'

function App() {

  return (
    <>
      <div>
        <Snow />
        <Home />
        <AboutMe />
        <Technologies />
        <Proyects />
        <Contact />
      </div>
    </>
  )
}

export default App
