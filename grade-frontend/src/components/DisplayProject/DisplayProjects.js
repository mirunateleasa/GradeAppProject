import { useState, useEffect } from 'react';
import './DisplayProjects.css'

function DisplayProjects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("http://localhost:8080/projects");
      const data = await response.json();
      setProjects(data) ;
    }
  }, []);

  return (
    <div className='body'>
      <h1>Projects in execution</h1>
  
      {/* display books from the API */}
      {projects && (
        <div className="projects">
  
          {/* loop over the books */}
          {projects.map((project, index) => (
            <div class="card">
            <div class="container">
              <h4><b>{project.name}</b></h4> 
              <p>{project.subject}</p>
              <input className="gradeBtn" type="button" value="Grade!"/>
            </div>
          </div>
          ))}
  
        </div>
      )}
    </div>
  )
}

export default DisplayProjects;