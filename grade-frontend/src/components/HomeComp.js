import React , {useState} from "react";
import NavBar from "./NavBar/NavBar";
import './HomeComp.css'
import img1 from '../resources/work1.jpg';
import { NavBtn, NavBtnLink } from "./NavBar/NavBarElem";

function HomeComp ()
{
    return (
        <div className="homeContainer">
            <NavBar id="navBar">
            </NavBar>
            <NavBtn id="buttonSign">
                <NavBtnLink to= "/signup">
                        Sign Up
                </NavBtnLink>
            </NavBtn>
            <NavBtn id="buttonLog">
                <NavBtnLink to= "/login">
                    Log In
                </NavBtnLink>
            </NavBtn>

            <img className="image" src = {img1}></img>
        </div>

    )
}

export default HomeComp;