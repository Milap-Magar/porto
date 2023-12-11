import React from 'react'
import { Homepage, Works, About, Contact } from "./pages/index";
import { Effect, Footer } from './components';

const App = () => {
  return (
    <>
      <Homepage />
      <Works />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App