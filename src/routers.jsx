import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import HomePage from "./views/homepage";

const ChangeRouters = () =>{
  return(
    <Router>
      <Routes>
      <Route path="/home" element={<HomePage/>} />
      <Route path="*" element={<HomePage/>} /> 
      </Routes>
    </Router>
  )
}
export default ChangeRouters;