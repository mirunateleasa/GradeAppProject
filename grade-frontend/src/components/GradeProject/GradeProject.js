import React, { useState, useEffect, useRef, Component } from "react";
import ProjectsStore from '../stores/ProjectsStore'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import imgProj from '../../resources/work3.jpg'
import './GradeProject.css'
import NavBarComp from "../NavBar/NavBarComp";
import { Rating } from 'primereact/rating';
import { Toast } from 'primereact/toast';


class GradeProject extends Component {
  constructor (props)
  {
    super(props);
    this.state = {
      projectId: window.location.href.split('/')[6],
      username: window.location.href.split('/')[4], 
      grade: {
          value: 0
      },
      project: []
    }
    this.store = new ProjectsStore('guest');    //username doesn't matter when grading 

    this.handleSubmit = () =>
    {
        this.store.updateGradesById(this.state.projectId, this.state.grade);
        this.setState({grade: {value: 0}});
        this.toast.show({severity: 'success', summary: 'Rating registered!', detail: 'Thanks for rating!'});
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
                <Toast ref={(el) => this.toast = el} />
                <div className="p-mr-2"> <NavBarComp activeIndex = {2} username = {this.state.username}></NavBarComp></div>
                <div id="cardContainer">
                    <Card id = "cardBody" header={header}>
                        <label><b>Team name: </b></label>
                        <p className='projDetail'><center>{this.state.project.name}</center></p> 
                        <label><b>Subject chosen:</b></label>
                        <p className = 'projDetail'><center>{this.state.project.subject}</center></p>
                        <center><Rating id="ratingBar" cancel={false} value={this.state.grade.value} onChange={(e) => 
                        {
                            this.setState({grade:
                                {
                                    value: e.value
                                }});
                        }} stars={10} /></center>
                        <Button id="btnGrade" label="Grade!" onClick={this.handleSubmit}></Button>
                    </Card>
                </div>
            </div>
        )
}
            
}
export default GradeProject;