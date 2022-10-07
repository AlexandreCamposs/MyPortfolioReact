import React from 'react';
import './style.scss';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Main = () => {
  return (
    <div className="main">
      <div class="image-background">
        <img src="image/bg.jpg" alt="" />
      </div>

      <div className="container-name">
        <h1>Web Developer Front End </h1>
        <h3>Alexandre Moura de Campos</h3>
      </div>
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
  );
};

export default Main;
