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

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<HomeComp />}/>
      <Route path = "/login" element = {<LoginForm></LoginForm>}/>
      <Route path = "/signup" element = {<SignUpForm></SignUpForm>}/>
      <Route path = "/navpage" element = {<NavPage />}/>
      <Route path = '/newProject' element = {<AddProject></AddProject>}></Route>
      <Route path = '/displayProjects' element = {<DisplayProjects></DisplayProjects>}></Route>
      <Route path = '/uploadPartial' element = {<UploadPartial></UploadPartial>}></Route>
      <Route path = {`/displayProjects/:username`} element = {<DisplayProjects></DisplayProjects>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
