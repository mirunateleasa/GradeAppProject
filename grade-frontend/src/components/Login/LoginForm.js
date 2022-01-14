import React, { Component, useState, useEffect } from "react";
import "./SignUpForm.css";
import axios from 'axios';
import DisplayProjects from "../DisplayProject/DisplayProjects";
const url = require('url');

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
    
        const account = {
            username,
            password
        };

        var response;
        axios
          .get(`http://localhost:8080/accounts/${username}/${password}`)
          .then(function(data) {
            response = data.status
            if (response === 200)
            {
              console.log("YOU ARE HERE");
              //go to display projects for person page
            }
            if (response === 404)
            {
              console.log("Sorry! It seems like you don't have an account");
            }
          })
          .catch(err => {
            console.error(err);
          });       
      };

    checkAccount = function (responseMessage)
    {
      if (responseMessage == 200)
      {
        
      }
    }
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
