import React, { Component, useState, useEffect } from "react";
import "./SignUpForm.css";
import axios from 'axios';

class SignUpForm extends Component {
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
    
        axios
          .post('http://localhost:8080/newAccount', account)
          .then(() => console.log('New account created'))
          .catch(err => {
            console.error(err);
          });
      };
  render() {
    return (
      <div>
        <form className="newAccount">
          <div className="signInFormInner">
            <h3 className="signInTitle"> Let's make a new account for you! </h3>
            <div className="signInFormGroups">
              <label className = "signInLabel" htmlFor="username"> Your username: </label>
              <input className="signInInput" type="text" name="username" id="username" onChange={this.handleInputChange}></input>

              <label className = "signInLabel" htmlFor="password"> Your new password: </label>
              <input className="signInInput" type="password" name="password" id="password" onChange={this.handleInputChange}></input>

              <input className="signInInput" type="button" value="Sign Up!" id="btnSignUp" onClick={this.handleSubmit}/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
