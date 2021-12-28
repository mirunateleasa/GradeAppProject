import React from 'react'
import {NavBarElem, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElem';
import { BsFillHouseFill } from "react-icons/bs";

const NavBar = () => {
    return (
        <div>
            <NavBarElem>
                <NavMenu>
                    <NavLink to = "/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/newProject" activeStyle>
                        New Project
                    </NavLink>
                    <NavLink to="/displayProjects" activeStyle>
                        All projects
                    </NavLink>
                    <NavLink to="/incaOPagina" activeStyle>
                        Inca o pagina
                    </NavLink>
                </NavMenu>
            </NavBarElem>
        </div>
    )
}

export default NavBar
