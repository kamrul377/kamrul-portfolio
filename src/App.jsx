
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Intro from './components/Intro'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <div className='h-screen w-full'>
        <Navbar />

        <Intro />
      </div>

      <About />
      <Skills />



    </>
  )
}

export default App
