
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Works from './components/Works'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ModalComponent from './utils/Modal'

function App() {

  return (
    <>
      <div className='h-screen w-full'>
        <Navbar />

        <Intro />
      </div>

      <About />
      <Skills />

      <Resume />
      <Works />
      <Blog />
      <Contact />
      <Footer />






    </>
  )
}

export default App
