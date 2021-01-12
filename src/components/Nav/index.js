import React from 'react';


function Nav(){

    const services = [
        {
            name:"web development",
            description:"",
        },
        {
            name:"flight attending",
            description: "traveling, safety, customer service",
        },

        {
            name:"hobbies",
            description: "plants, cooking, books",
        },
    ];
    
    return(
        <header>
            <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          Ashley Warters
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      <li className="mx-1"
      key={services.name}
      >
          <span>
              {services.name}
          </span>
      </li>
    </ul>
  </nav>
        </header>
    )
}



export default Nav;