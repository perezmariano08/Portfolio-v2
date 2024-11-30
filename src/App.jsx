import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import RedesSociales from './components/RedesSociales/RedesSociales'
import Mail from './components/Mail/Mail'
import ProyectosDestacados from './components/ProyectosDestacados/ProyectosDestacados'
import ProyectosDestacadosOtros from './components/ProyectosDestacadosOtros/ProyectosDestacadosOtros'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <ProyectosDestacados/>
        <ProyectosDestacadosOtros/>

      </Layout>
      
      <RedesSociales/>
      <Mail/>
    </>
  )
}

export default App