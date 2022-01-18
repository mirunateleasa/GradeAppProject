import React, { useState, useEffect, useRef, Component } from "react";
import { Button } from 'primereact/button';
import {EventEmitter} from 'fbemitter'
import axios from 'axios';

class ProjectsStore 
{
  constructor(props){
    this.projects = []
    this.project = []
    this.emitter = new EventEmitter()
    this.user = props
    this.currentGrade = 0
  }

  async getAllForUser(){
      try{
          let response = await fetch(`http://localhost:8080/accounts/${this.user}/projects`);
          let data = await await response.json();
          this.projects = data;
          this.emitter.emit('GET_PROJ_SUCCESS')
      }
      catch(err){
          console.warn(err)
          this.emitter.emit('GET_PROJ_ERROR')
      }
  }
  async getAllToGrade(){
    try{
        let response = await fetch(`http://localhost:8080/accounts/${this.user}/gradeProjects`);
        let data = await await response.json();
        console.log(data);
        this.projects = data;
        this.emitter.emit('GET_PROJ_SUCCESS')
    }
    catch(err){
        console.warn(err)
        this.emitter.emit('GET_PROJ_ERROR')
    }
}
  async getProjectById (id)
  {
    try{
      let response = await fetch(`http://localhost:8080/projects/${id}`)
      let data = await response.json();
      this.project = data;
      this.emitter.emit('GET_PROJ_SUCCESS')
    }
    catch (err)
    {
      console.warn(err)
      this.emitter.emit('GET_PROJ_ERROR')
    }
  }

  async updateGradesById(id, grade)
  {
    try{
        let response = await axios.post(`http://localhost:8080/projects/${id}/gradesprojects`, grade);
        let data = await response.json();
        this.computeCurrentGrade(id);
        console.log("AFTER UPDATE: " ,data);
        //this.project = data;
        this.emitter.emit('GET_PROJ_SUCCESS')
      }
      catch (err)
      {
        console.warn(err)
        this.emitter.emit('GET_PROJ_ERROR')
      }
  }

  async computeCurrentGrade (id)
  {
    try{
      let response = await fetch(`http://localhost:8080/projects/${id}/grades`);
      let data = await await response.json();
      let grades = data;
      const { length } = grades;
      const { sum, min, max } = grades.reduce((acc, val) => {
        let sum = acc;
        sum += val;
        if(val > max){
           max = val;
        };
        if(val < min){
           min = val;
        };
        return { min, max, sum };
       }, {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE,
        sum: 0
     });
     this.currentGrade = (sum - min - max) / (length - 2);
     this.emitter.emit('GET_PROJ_SUCCESS')
  }
  catch(err){
      console.warn(err)
      this.emitter.emit('GET_PROJ_ERROR')
  }
  }
}

export default ProjectsStore;
