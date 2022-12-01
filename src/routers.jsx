import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './views/homepage';
import Imersao from './views/ImersaoAlura';
import ImersaoC from './views/cursoemvideo';
import B7webJS from './views/b7web';

const ChangeRouters = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/projetos" element={<Imersao />} />
        <Route path="/projeto2" element={<ImersaoC />} />
        <Route path="/projeto3" element={<B7webJS />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default ChangeRouters;
