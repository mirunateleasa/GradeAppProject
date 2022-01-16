import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComp from "./components/HomeComp";
import SignUpForm from "./components/Login/SignUpForm";
import AddProject from "./components/AddProject/AddProject";
import LoginForm from './components/Login/LogInForm';
import DisplayProjects from './components/DisplayProject/DisplayProjects'
import UploadPartial from './components/UploadPartial/UploadPartial'
import NavPage from './components/NavBar/NavPage'
import GradeProject from './components/GradeProject/GradeProject'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<HomeComp />}/>
      <Route path = "/login" element = {<LoginForm></LoginForm>}/>
      <Route path = "/signup" element = {<SignUpForm></SignUpForm>}/>
      <Route path = "/navpage" element = {<NavPage />}/>
      <Route path = '/accounts/:username/newProject' element = {<AddProject></AddProject>}></Route>
      <Route path = '/gradeProjects' element = {<DisplayProjects></DisplayProjects>}></Route>
      <Route path = '/projects/:projectId/grades' element = {<GradeProject></GradeProject>}></Route>
      <Route path = '/uploadPartial' element = {<UploadPartial></UploadPartial>}></Route>
      <Route path = {`/accounts/:username/projects`} element = {<DisplayProjects></DisplayProjects>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
