import './App.css'
import Logos from './components/logos'
import Navbar from './components/Navbar'
import Contact from './sections/contact'
import Experience from './sections/experience'
import Features from './sections/Features'
import Footer from './sections/footer'
import Hero from './sections/Hero'
import Show from './sections/show'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Show/>
    <Logos/>
    <Features/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
