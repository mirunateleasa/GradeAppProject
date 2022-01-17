import React, { useState, useEffect, useRef, Component } from "react";
import { Button } from 'primereact/button';
import {EventEmitter} from 'fbemitter'
import './DisplayProjects.css'
import ProjectsStore from '../stores/ProjectsStore'
import img1 from '../../resources/work2.jpg'
import img2 from '../../resources/emoji.png'
import DisplayMessageComp from '../DisplayMessageComp';
import NavBarComp from '../NavBar/NavBarComp';

class DisplayProjects extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      username: window.location.href.split('/')[4],
      projects: [],
      hasProjects: false
    }
    this.store = new ProjectsStore(this.state.username);

    this.goToAddPartials = function(clickedCard) 
    {
      let path = `/accounts/${this.state.username}/projects/${clickedCard}`;
      window.location.href = "http://localhost:3000" + path;
    }

    this.goToGrade = function (clickedCard) {
      let path = `/accounts/${this.state.username}/projects/${clickedCard}/grades`;
      window.location.href = "http://localhost:3000" + path;
    }
  }

  componentDidMount(){
    if (this.state.username)
    {
      if (window.location.href.split('/')[5] === "projects")
      {
        this.store.getAllForUser();
        this.store.emitter.addListener('GET_PROJ_SUCCESS', () => {
          this.setState({
              projects : this.store.projects,
              hasProjects: true
          })
          if (this.state.projects.length !== 0)
          {
            this.setState ({
              hasProjects: true
            })
          }
          else 
          {
            this.setState ({
              hasProjects: false
            })
          }
        })
      }
      else if (window.location.href.split('/')[5] === "gradeProjects")
      {
        this.store.getAllToGrade();
        this.store.emitter.addListener('GET_PROJ_SUCCESS', () => {
          this.setState({
              projects : this.store.projects,
              hasProjects: true
          })
        })
      }
    }
    else 
    {
      this.store.getAllToGrade();
      this.store.emitter.addListener('GET_PROJ_SUCCESS', () => {
        this.setState({
            projects : this.store.projects
        })
      })
    }
  }
  render ()
  {
    if (window.location.href.split('/')[5] === "projects")
    {
      if (this.state.hasProjects) { //e student are proiecte
          return (
            <div className='mainContainer'>
              <NavBarComp activeIndex = {3} username = {this.state.username} hasProjects = {true}></NavBarComp>
              <DisplayMessageComp page = {"Your projects'"}></DisplayMessageComp>
                  {this.state.projects && (
                    <div id="projects">
                      {this.state.projects.map((project, index) => (
                        <div id="card" onClick={() => this.goToAddPartials(project.id)}>
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
          // else //nu e student sau nu are proiecte
          // {
          //  
          //   )}
        
        else {
          return (
          <div className='mainContainer'>
            <NavBarComp activeIndex = {3} username = {this.state.username} hasProjects = {false}></NavBarComp>
            <DisplayMessageComp page = {"Your projects'"}></DisplayMessageComp>
            <div id='messageContainer'>
              <img id='emoji' src={img2}></img>
              <h4 id='noProjectMessage'>Hmmm, it looks like you didn't registered any projects... <br></br><br></br>Go to the Add Project page to register your first project!</h4>
            </div>

          </div>
          )}
      }
    else if (window.location.href.split('/')[5] === "gradeProjects") 
    {
      return (
            <div className='mainContainer'>
              <NavBarComp activeIndex = {2} username = {this.state.username} hasProjects = {false}></NavBarComp>
              <DisplayMessageComp page = {"Registered projects'"}></DisplayMessageComp>
                  {this.state.projects && (
                    <div id="projects">
                      {this.state.projects.map((project, index) => (
                        <div id="card" onClick={() => this.goToGrade(project.id)}>
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
      )
    }
  }
}
export default DisplayProjects;