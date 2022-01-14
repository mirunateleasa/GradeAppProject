import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React , {useState} from "react";
import './HomeComp.css'
import img1 from '../resources/work1.jpg';
import { Button } from 'primereact/button';

function HomeComp ()
{
    function goToLogin ()
    {
        window.location.href='/login'
    }
    function goToSignUp()
    {
        window.location.href='/signup'
    }
    return (
        <div className="homeContainer">
            <img src={img1} className="background"></img>
            <center>
            
            <Button label = "Log IN" icon="pi pi-sign-in" iconPos="right" className="p-button-raised p-button-rounded p-button-success"
                onClick={goToLogin}/>

            <Button label="Sign UP" icon="pi pi-user-edit" iconPos="right" className="p-button-raised p-button-rounded p-button-success"
                onClick={goToSignUp}/>

            <h3 className="appTitle"> APLICATIE FARA NUME </h3>
            </center>
           
            
            
        </div>

    )
}

export default HomeComp;