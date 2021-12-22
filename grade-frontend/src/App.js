import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeComp from "./components/HomeComp";
import LoginForm from "./components/Login/LoginForm";
import AddProject from "./components/AddProject/AddProject";

function App() {
  //#region LOGIN PART (inca nu merge cu orice cont?)
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const Login = details =>
  {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password)
    {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else 
    {
      console.log("Details don't match");
      setError("Details don't match")
    }
    //!!!!aici trebuie sa facem conexiunea cu RESTful din spate
  }

  const Logout = () =>
  {
    console.log("Logout");
    setUser({ name: "", email: "" });
  }
  //#endregion

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<HomeComp />}/>
      <Route path = "/login" element = {<LoginForm Login = {Login} error = {error}></LoginForm>}/>
      <Route path = '/newProject' element = {<AddProject></AddProject>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
