import React, { Component, useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./SignUpForm.css";
import axios from 'axios';
import DisplayProjects from "../DisplayProject/DisplayProjects";
import { Toast } from 'primereact/toast';
 

const url = require('url');

class LoginForm extends Component {
  
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
        const { username, password} = this.state;
    
        const account = {
            username,
            password
        };

        var response;
        axios
          .get(`http://localhost:8080/accounts/${username}/${password}`)
          .then((data) =>{
            response = data.status
            if (response === 200)
            {
              let path = `/accounts/${username}/projects`;
              console.log(path);
              window.location.href = "http://localhost:3000" + path;
            }
          })
          .catch(err => {
            this.toast.show({severity: 'error', summary: 'Wrong credentials', detail: 'Please re-check the credentials and try logging in again!'});
            console.error(err);
          });
    
    };
    
  render() {
    return (
      <div>
        <Toast ref={(el) => this.toast = el} />
        <form className="newAccount">
          <div className="signInFormInner">
            <h3 className="signInTitle"> Let's log you in! </h3>
            <div className="signInFormGroups">
              <label className = "signInLabel" htmlFor="username"> Your username: </label>
              <input className="signInInput" type="text" name="username" id="username" onChange={this.handleInputChange}></input>

              <label className = "signInLabel" htmlFor="password"> Your new password: </label>
              <input className="signInInput" type="password" name="password" id="password" onChange={this.handleInputChange}></input>

              <input className="signInInput" type="button" value="LogIn!" id="btnSignUp" onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
