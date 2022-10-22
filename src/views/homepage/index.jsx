import React,{useState,useEffect} from 'react';
import Main from '../main';
import HardSkills from '../hardskills';
import Card from '../../components/Card'
import { projects } from '../../mocks/mock';



function HomePage() {
  return (
    <div>
      
      <Main/>
      <HardSkills/>
      <Card title="Meus projetos" projects={projects}/>
      
      </div>
  );
}

export default HomePage;
