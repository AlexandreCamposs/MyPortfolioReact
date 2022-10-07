import React,{useState,useEffect} from 'react';
import Main from '../main';
import Header from '../../components/header'
import HardSkills from '../hardskills';
import MyProject from '../myprojects';
import Footer from '../../components/footer';
import Card from '../../components/Card'
import { projects } from '../../mocks/mock';


function HomePage() {
  return (
    <>
      <Header/>
      <Main/>
      <HardSkills/>
      <Card title="Meus projetos" projects={projects}/>
      <Footer/>
      </>
  );
}

export default HomePage;
