import React , {useState} from "react";
import NavBar from "./NavBar/NavBar";
import './HomeComp.css'
import img1 from '../resources/work1.jpg';

function HomeComp ()
{
    return (
        <div className="homeContainer">
            <NavBar>
            </NavBar>

            <img className="image" src = {img1}></img>
        </div>

    )
}

export default HomeComp;