import React, { Component, useState, useEffect } from "react";
import "./AddProject.css";
import axios from 'axios';

class AddProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            subject: '',
            noPartials: 0
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { name, subject, noPartials } = this.state;

        const project = {
            name,
            subject,
            noPartials,
        };

        axios
            .post('http://localhost:8080/newProject', project)
            .then(() => console.log('Project Posted'))
            .catch(err => {
                console.error(err);
            });
    };
    render() {
        return ( <
            div >
            <
            form className = "newProjectForm" >
            <
            div className = "formInner" >
            <
            h3 > Add your project here! < /h3> <
            div className = "formGroups" >
            <
            label htmlFor = "name" > Your team name: < /label> <
            input type = "text"
            name = "name"
            id = "name"
            onChange = { this.handleInputChange } > < /input>

            <
            label htmlFor = "subject" > Your project subject: < /label> <
            input type = "text"
            name = "subject"
            id = "subject"
            onChange = { this.handleInputChange } > < /input>

            <
            label htmlFor = "partials" > { " " }
            How many partials do you want to deliver ? { " " } <
                /label> <
                input type = "number"
            name = "partials"
            id = "partials"
            onChange = { this.handleInputChange } > < /input>

            <
            input type = "button"
            value = "Add Project"
            id = "btnAdd"
            onClick = { this.handleSubmit }
            /> <
            /div> <
            /div> <
            /form> <
            /div>
        );
    }
}

export default AddProject;