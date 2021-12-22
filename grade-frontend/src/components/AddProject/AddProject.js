import React, { Component, useState } from "react";
import './AddProject.css'
import ProjectList from "./projectsList";

const url = 'localhost:3000/projects'

class AddProject extends Component{

    constructor (props)
    {
        super(props)
        this.state = {
            project: ''
        }
    }
    render (){
        return (
            <div>
                <ProjectList dataList = {this.state.project}></ProjectList>
                <form className="newProjectForm">
                    <div className="formInner">
                        <h3> Add your project here! </h3>
                        <div className="formGroups">
                            <label htmlFor="name"> Your team name: </label>
                            <input type="text" name="name" id="name"></input>

                            <label htmlFor="subject"> Your project subject: </label>
                            <input type="text" name="subject" id="subject"></input>

                            <label htmlFor="partials"> How many partials do you want to deliver? </label>
                            <input type="number" name="partials" id="partials"></input>

                            <input type="button" value="Add Project" id = "btnAdd"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProject;
