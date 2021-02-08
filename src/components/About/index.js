import React from 'react';
import ashImage from "../../assets/ash-img.png";

function About(){
    return(
        <section className='my-5'>
            <h1 id="about"> Ashley Warters</h1>
        <div>
        <div>
            <img className='ash-img' src= {ashImage} style= {{height:200, width: 200}}></img>
            <br></br>
            
            <h4 style= {{textAlign: 'center'}}>About Me</h4>
            <p className='card-text'>
                I am a Flight Attendant turned Web Developer. My passion lies in creating
                 accessible and user friendly websites through thoughtful design, 
                 best practices, and creativity. I am currently a student at the University
                 of Pennsylvania LPS Coding Bootcamp program. I am actively seeking professional
                 opportunities in marketing and full stack web development for inspirational
                 and creative businesses and communities.

            </p>
            </div>
        </div>
        </section>
    )
}



export default About;