import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import RedesSociales from './components/RedesSociales/RedesSociales'
import Mail from './components/Mail/Mail'
import ProyectosDestacados from './components/ProyectosDestacados/ProyectosDestacados'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProyectosDestacados/>

      <RedesSociales/>
      <Mail/>
    </>
  )
}

export default App