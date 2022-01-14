import React from 'react'
import NavBarComp from './NavBarComp';
import './NavBarComp.css';


const NavPage = (props) => {
    
    return (
        <div className='container'>
          <NavBarComp></NavBarComp>
          <h4>Hi, {props.username}! What do you want to do Today?</h4>
     </div>
    )
}

export default NavPage;