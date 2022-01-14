import { useState, useEffect } from 'react';
import './DisplayProjects.css'
import img1 from '../../resources/work2.jpg'
import DisplayMessageComp from '../DisplayMessageComp';

function DisplayProjects(props) {
  const [projects, setProjects] = useState(null);
  const [isItStudentPage, setIsItStudentPage] = useState(false);

  useEffect(() => {
    getData();

    async function getData() {
      if (Object.keys(this.props).length === 0)
      {
        let response = await fetch("http://localhost:8080/projects");
        let data = await response.json();
        setProjects(data) ;
        setIsItStudentPage(" ALL PROJECTS' ");
      }
      else
      {
        let response = await fetch("http://localhost:8080/projects");
        let data = await response.json();
        setProjects(data) ;
        setIsItStudentPage(" YOUR PROJECTS' ");
      }
    }
  }, []);

  return (
    <div className='mainContainer'>
      <DisplayMessageComp page = {isItStudentPage}></DisplayMessageComp>
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
            </div>
          </div>
          ))}
  
        </div>
      )}
    </div>
  )
}

export default DisplayProjects;