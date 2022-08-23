import React from 'react'
import Hello from "./Components/Home"
import Landing from "./Components/Landing"
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello/>}/>
        <Route path="landing" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App