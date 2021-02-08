import React from 'react';
import gcfclothing from './img/gcfclothing.gif';
import petpurrfect from './img/PetPurrfect.gif';
import techblog from './img/tech-blog.gif';
import github from './img/github-logo.png';


function Projects(){
    return(
<div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-primary">
        <img src={petpurrfect} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">PetPurrfect</h5>
          <p className="card-text">Pet Purrfect is an app that allows a user to search through a list of cat breeds, returning a cute picture and pertinent info about said breed, the app also contains a search function for available adoptable cats in the user’s area!
            <a href="https://github.com/bmralph87/cats">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-info">
        <img src={gcfclothing} className="card-img-top" alt="Password Generator Project" />
        <div className="card-body">
          <h5 className="card-title">GCF Clothing</h5>
          <p className="card-text">A Christian street wear company utilizing the MERN stack
            <a href="https://github.com/chender93/gcfclothing">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-primary">
        <img src={techblog} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Tech Blog</h5>
          <p className="card-text">A blog for individuals in tech to share information, advice, or stories and interact with others in the field. Users can log in, share text content, and comment on others' posts.
            <a href="https://github.com/ashwarters/tech-blog">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
</div>

    )
}

export default Projects;