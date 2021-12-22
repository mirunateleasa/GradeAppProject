import React from 'react'
import {NavBarElem, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElem';
import { BsFillHouseFill } from "react-icons/bs";

const NavBar = () => {
    return (
        <div>
            <NavBarElem>
                <NavLink to ="/" >   {/*this comes from react router link*/}
                    <h1>NumeleAplicatiei?</h1>
                </NavLink>
                <Bars>

                </Bars>
                <NavMenu>
                    <NavLink to="/newProject" activeStyle>
                        New Project
                    </NavLink>
                    <NavLink to="/altaPagina" activeStyle>
                        Alta Pagina
                    </NavLink>
                    <NavLink to="/incaOPagina" activeStyle>
                        Inca o pagina
                    </NavLink>
                    {/* Whatever else we want to do*/}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to= "/login">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </NavBarElem>
        </div>
    )
}

export default NavBar
