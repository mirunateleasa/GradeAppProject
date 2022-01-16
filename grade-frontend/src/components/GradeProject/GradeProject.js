import React, { useState, useEffect, useRef, Component } from "react";
import ProjectsStore from '../stores/ProjectsStore'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import imgProj from '../../resources/work3.jpg'
import './GradeProject.css'
import NavBarComp from "../NavBar/NavBarComp";
import { Rating } from 'primereact/rating';


class GradeProject extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      projectId: window.location.href.split('/')[4],
      grade: {
          value: 0
      },
      project: []
    }
    this.store = new ProjectsStore('guest');

    this.handleSubmit = () =>
    {
        this.store.updateGradesById(this.state.projectId, this.state.grade);
        this.setState({grade: {value: 0}});
    }
  }

  componentDidMount(){
    this.store.getProjectById(this.state.projectId);
    this.store.emitter.addListener('GET_PROJ_SUCCESS', () => {
        this.setState({
            project : this.store.project
        })
    })
}
    
  render ()
  {
        const header = <img id = "imgCard" alt="Card" src={imgProj}/>;
        return (
            <div className="mainContainerToGrade">
                <div className="p-mr-2"> <NavBarComp activeIndex = {3} username = {'guest'}></NavBarComp></div>
                <div id="cardContainer">
                    <Card header={header}>
                        <label><b>Team name: </b></label>
                        <p className='projDetail'><center>{this.state.project.name}</center></p> 
                        <label><b>Subject chosen:</b></label>
                        <p className = 'projDetail'><center>{this.state.project.subject}</center></p>
                        <center><Rating cancel={false} value={this.state.grade.value} onChange={(e) => 
                        {
                            this.setState({grade:
                                {
                                    value: e.value
                                }});
                        }} stars={10} /></center>
                        <Button label="Grade!" onClick={this.handleSubmit}></Button>
                    </Card>
                </div>
            </div>
        )
}
            
}
export default GradeProject;