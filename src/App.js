import { useState } from 'react'
import './App.css'
import { podnozje as Footer, zaglavlje as Header, glavnidio as Main} from './Components';

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App