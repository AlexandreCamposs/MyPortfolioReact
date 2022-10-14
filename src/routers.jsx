import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./views/homepage";
import Imersao from "./views/ImersaoAlura";

const ChangeRouters = () =>{
  return(
    <Router>
      <Header/>
      <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="*" element={<HomePage/>} /> 
      <Route path="/projetos" element={<Imersao/>} /> 
      </Routes>
      <Footer/>
    </Router>
  )
}
export default ChangeRouters;