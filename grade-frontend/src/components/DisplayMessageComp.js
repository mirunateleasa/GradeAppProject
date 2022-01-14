import React from 'react'
import { BsFillHouseFill } from "react-icons/bs";

const DisplayMessageComp = (props) => {
    return (
        <div>
           <h3>Welcome to {props.page} page!</h3>
        </div>
    )
}

export default DisplayMessageComp;
