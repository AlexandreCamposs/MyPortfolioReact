import React from 'react';
import './style.scss';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineContactPage } from 'react-icons/md';

const B7webJS = () => {
  return(
    <main>
    <div className="container-imersao">
      <h1>Projetos JavaScript B7web</h1>
      <div className="container-descrition">
        <div className="container-information">
          <h4>Bateria</h4>
          <div className="container-descrition2">
            <div>
              <a href="https://github.com/AlexandreCamposs/JS-7-Days-Cod/tree/main/1-Bateria">
                <BsGithub />
              </a>
            </div>
            <div>
              <a href="https://alexandrecamposs.github.io/JS-7-Days-Cod/1-Bateria/index.html">
                <MdOutlineContactPage />
              </a>
            </div>
          </div>
        </div>
        <div className="container-information">
          <h4>Relógio</h4>
          <div className="container-descrition2">
            <div>
              <a href="https://github.com/AlexandreCamposs/JS-7-Days-Cod/tree/main/2-Relogio">
                <BsGithub />
              </a>
            </div>
            <div>
              <a href="https://alexandrecamposs.github.io/JS-7-Days-Cod/2-Relogio/index.html">
                <MdOutlineContactPage />
              </a>
            </div>
          </div>
        </div>
        <div className="container-information">
          <h4>Clima</h4>
          <div className="container-descrition2">
            <div>
              <a href="https://github.com/AlexandreCamposs/JS-7-Days-Cod/tree/main/3-Clima">
                <BsGithub />
              </a>
            </div>
            <div>
              <a href="https://alexandrecamposs.github.io/JS-7-Days-Cod/3-Clima/index.html">
                <MdOutlineContactPage />
              </a>
            </div>
          </div>
        </div>
        <div className="container-information">
          <h4>Jogo da velha</h4>
          <div className="container-descrition2">
            <div>
              <a href="https://github.com/AlexandreCamposs/JS-7-Days-Cod/tree/main/4-JogoDaVelha">
                <BsGithub />
              </a>
            </div>
            <div>
              <a href="https://alexandrecamposs.github.io/JS-7-Days-Cod/4-JogoDaVelha/index.html">
                <MdOutlineContactPage />
              </a>
            </div>
          </div>
        </div>
        <div className="container-information">
          <h4>Quiz</h4>
          <div className="container-descrition2">
            <div>
              <a href="https://github.com/AlexandreCamposs/JS-7-Days-Cod/tree/main/6-Quiz">
                <BsGithub />
              </a>
            </div>
            <div>
            <a href="https://alexandrecamposs.github.io/JS-7-Days-Cod/6-Quiz/index.html">
                <MdOutlineContactPage />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>

  )
}

export default B7webJS;