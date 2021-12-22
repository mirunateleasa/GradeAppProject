import React, { Component, useState, useEffect } from "react";
import "./Login.css";
import axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { username, password } = this.state;

        const project = {
            username,
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

export default LoginForm;