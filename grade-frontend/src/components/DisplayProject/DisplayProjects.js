import React, { useState, useEffect, useRef, Component } from "react";
import {EventEmitter} from 'fbemitter'
import './DisplayProjects.css'
import img1 from '../../resources/work2.jpg'
import img2 from '../../resources/emoji.png'
import DisplayMessageComp from '../DisplayMessageComp';
import NavBarComp from '../NavBar/NavBarComp';

class ProjectsStore 
{
  constructor(props){
    this.projects = []
    this.emitter = new EventEmitter()
    this.user = props
  }

  async getAll(){
      try{
          let response = await fetch(`http://localhost:8080/accounts/${this.user}/projects`);
          let data = await await response.json();
          this.projects = data;
          this.emitter.emit('GET_PROJ_SUCCESS')
      }
      catch(err){
          console.warn(err)
          this.emitter.emit('GET_PROJ_ERROR')
      }
  }
}

class DisplayProjects extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      username: window.location.href.split('/')[4],
      projects: [],
      isItStudentPage: " ALL PROJECTS' ",
      hasProjects: false
    }
    this.store = new ProjectsStore(this.state.username);

    this.goToAddPartials = (clickedCard) =>
    {
      console.log("CLICKED: ", clickedCard)
      let path = `/accounts/${this.state.username}/projects/${clickedCard}`;
      window.location.href = "http://localhost:3000" + path;
    }
  }

  componentDidMount(){
    let urlElements = window.location.href.split('/');
    this.setState({username: urlElements[4]});
    this.store.getAll();
    this.store.emitter.addListener('GET_PROJ_SUCCESS', () => {
      this.setState({
          projects : this.store.projects,
          hasProjects: true
      })
      if (this.state.projects.length !== 0)
      {
        this.setState ({
          isItStudentPage: " YOUR PROJECTS' " 
        })
      }
    })
  }
  render ()
  {
    console.log(this.state.hasProjects);
    if (this.state.hasProjects) {
      return (
        <div className='mainContainer'>
          <NavBarComp activeIndex = {1} username = {this.state.username}></NavBarComp>
          <DisplayMessageComp page = {this.state.isItStudentPage}></DisplayMessageComp>
              {this.state.projects && (
                <div id="projects">
                  {this.state.projects.map((project, index) => (
                    <div id="card" onClick={this.goToAddPartials}>
                      <div id="container">
                        <center><img id='cardImage' src = {img1}></img></center><br></br>
                        <label><b>Team name: </b></label>
                        <p className='projDetail'><center>{project.name}</center></p> 

                        <label><b>Subject chosen:</b></label>
                        <p className = 'projDetail'><center>{project.subject}</center></p>
                      </div>
                    </div>
                  ))}
                </div>)}
        </div>
      )}
    else {
      return (
      <div className='mainContainer'>
        <NavBarComp activeIndex = {1} username = {this.state.username}></NavBarComp>
        <DisplayMessageComp page = {this.state.isItStudentPage}></DisplayMessageComp>
        <div id='messageContainer'>
          <img id='emoji' src={img2}></img>
          <h4 id='noProjectMessage'>Hmmm, it looks like you didn't registered any projects... <br></br><br></br>Go to the Add Project page to register your first project!</h4>
        </div>

      </div>
      )}
    }
  }
export default DisplayProjects;