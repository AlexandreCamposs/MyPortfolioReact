import React from 'react';
import './style.scss';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { TbBrandJavascript } from 'react-icons/tb';

const HardSkills = () => {
  return (
    <div className="container">
      <h3>Conhecimentos</h3>
      <div className="container-skills">
        <div className='hardskills'>
          <div className="logo-skill"><AiFillHtml5 /></div>
           <name className="skill">HTML</name>
        </div>
        <div className='hardskills'>
          <div className="logo-skill"><SiCss3 /></div>
           <name className="skill">CSS</name>
        </div>
        <div className='hardskills'>
          <div className="logo-skill"><TbBrandJavascript /></div>
           <name className="skill">JavaScript</name>
        </div>
        <div className='hardskills'>
          <div className="logo-skill"><AiFillGithub /></div>
           <name className="skill">GitHub</name>
        </div>
      </div>
    </div>
  );
};

export default HardSkills;
