
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Works from './components/Works.jsx'
import Blog from './components/Blog.jsx'

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



    </>
  )
}

export default App
