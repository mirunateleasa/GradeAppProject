import React, { Component, useState, useEffect } from "react";
import "./SignUpForm.css";
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
    
        const { username, password} = this.state;
    
        const project = {
            username,
            password
        };
    
        axios
          .post('http://localhost:8080/newProject', project)
          .then(() => console.log('Project Posted'))
          .catch(err => {
            console.error(err);
          });
      };
  render() {
    return (
      <div>
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
