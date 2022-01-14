import React, { Component, useState, useEffect } from "react";
import "./AddProject.css";
import axios from 'axios';

class AddProject extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          noPartials: '',
          subject: ''
        };
      }
    
      handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state);
      };
    
    handleSubmit = e => {
        e.preventDefault();
    
        const {name, noPartials, subject} = this.state;
    
        const project = {
            name,
            noPartials,
            subject
        };
        console.log(project)
    
        axios
          .post(`http://localhost:8080/accounts/${this.props.username}/projects`, project)
          .then(() => console.log('Project Posted'))
          .catch(err => {
            console.error(err);
          });
      };
  render() {
    return (
      <div id = "classContainer">
        <form className="newProjectForm">
          <div className="formInner">
            <h3> Add your project here! </h3>
            <div className="formGroups">
              <label htmlFor="name"> Your team name: </label>
              <input className="projNameIn" type="text" name="name" id="name" onChange={this.handleInputChange}></input>

              <label htmlFor="subject"> Your project subject: </label>
              <input className="projNameIn" type="text" name="subject" id="subject" onChange={this.handleInputChange}></input>

              <label htmlFor="noPartials"> How many partials do you want to deliver: </label>
              <input className="projNameIn" type="text" name="noPartials" id="noPartials" onChange={this.handleInputChange}></input>

              <input type="button" value="Add Project" id="btnAdd" onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
