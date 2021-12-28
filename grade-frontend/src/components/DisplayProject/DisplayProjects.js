import { useState, useEffect } from 'react';
import './DisplayProjects.css'
import img1 from '../../resources/work2.jpg'
import NavBar from '../NavBar/NavBar';
import { NavBtn, NavBtnLink } from '../NavBar/NavBarElem';

function DisplayProjects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("http://localhost:8080/projects");
      const data = await response.json();
      setProjects(data) ;
    }
  }, []);

  return (
    <div className='mainContainer'>
      <NavBar></NavBar>
      <h1>Projects in execution</h1>
      {projects && (
        <div id="projects">
          {projects.map((project, index) => (
            <div id="card">
            <div id="container">
              <center><img id='cardImage' src = {img1}></img></center><br></br>
              <label><b>Team name: </b></label>
              <p className='projDetail'><center>{project.name}</center></p> 

              <label><b>Subject chosen:</b></label>
              <p className = 'projDetail'><center>{project.subject}</center></p>

              <NavBtn>
                <center>
                <NavBtnLink id="gradeBtn" to= "/gradeProject">
                    Grade!
                </NavBtnLink>
                </center>
            </NavBtn>
            </div>
          </div>
          ))}
  
        </div>
      )}
    </div>
  )
}

export default DisplayProjects;