import React from 'react';
import './style.scss';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Index = () => {
  return (
    <div className="main">
      <div class="image-background">
        <img src="public/image/bg.jpg" alt="" />
      </div>
      <div className="container-header">
        <nav className="">
          <ul className="navegation">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Conhecimentos</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
          </ul>
        </nav>
        <div className="information">
          <ul>
            <li>
              <a href="https://github.com/AlexandreCamposs">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexandre-moura-de-campos-496627114/">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5513997615741">
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-name">
        <h1>Web Developer Front End </h1>
        <h3>Alexandre Moura de Campos</h3>
      </div>
    </div>
  );
};

export default Index;
