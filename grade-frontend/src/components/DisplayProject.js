import React, { Component } from "react";
const express = require("../../../grade-backend/node_modules/express");

class DisplayProject extends Component {

    constructor()
    {
        super ()
        this.state = {
            name: '',
            subject: '',
            noPartials: 0
        }
    };

    componentDidMount = () => //when the page is rendered (mounted)
    {
        //make an http request to the endpoint

    }

  render() {
    return <div>
        <h1>The project name is: {this.state.name}, the subject is {this.state.subject}, and the number of partials is {this.state.noPartials}</h1>
    </div>;
  }
}

export default DisplayProject;
