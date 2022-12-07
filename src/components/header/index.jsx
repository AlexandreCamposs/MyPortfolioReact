import React from 'react';
import './style.scss'


const Header = () => {
  return (
    
      <div className="container-header">
        <nav className="">
          <ul className="navegation">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="#section-skills">Hard Skill</a>
            </li>
            <li>
              <a href="#section-projects">Projects</a>
            </li>
          </ul>
        </nav>

      </div>    
  );
};

export default Header;