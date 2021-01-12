import React from "react";

function Nav(props) {
    return (
        <nav >
        <div>
            <span>
          <div>
            <ul className="flex-row">
              <li className="nav-item">
                <a data-testid="about" href="#about" 
                onClick={() => props.setCurrentSection('About')}>About</a>
              </li>
              <li className="nav-item">
                <a data-testid="projects" href="#projects"
                onClick={() => props.setCurrentSection('Projects')}>Projects</a>
              </li>
              <li className="nav-item">
                <a  href="#contact"
                onClick={() => props.setCurrentSection('Contact')}>Contact</a>
              </li>
              <li className="nav-item-resume" id='resume'>
                <a href="https://drive.google.com/file/d/1sHyPFKwnIU1sjxzflTwZ_cWjPAcBiZ8c/view?usp=sharing">Resume</a>
              </li>
            </ul>
          </div>
          </span>
        </div>
      </nav>
    );
}

export default Nav;