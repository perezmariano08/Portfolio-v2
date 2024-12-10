import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import RedesSociales from './components/RedesSociales/RedesSociales'
import Mail from './components/Mail/Mail'
import ProyectosDestacados from './components/ProyectosDestacados/ProyectosDestacados'
import ProyectosDestacadosOtros from './components/ProyectosDestacadosOtros/ProyectosDestacadosOtros'
import Layout from './components/Layout/Layout'
import Experiencia from './components/Experiencia/Experiencia'

const App = () => {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Experiencia/>
        <ProyectosDestacados/>

        {/* 
        <ProyectosDestacadosOtros/> */}

      </Layout>
      
      <RedesSociales/>
      <Mail/>
    </>
  )
}

export default App