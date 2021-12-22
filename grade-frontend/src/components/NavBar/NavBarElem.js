import React from 'react'
import styled from 'styled-components'
import {NavLink as theLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

//use the backtick (``) for styling like css for each component (it comes from styled-components)
 export const NavBarElem = styled.nav ` 
    background: #E9BB75;
    height: 80px;
    display: flex;
    justify-content: space-between;
    paddin: 0.5%;
    z-index: 10;
`

//the &active is the active state of the component (it doesn't have to be define separated as in css)
export const NavLink = styled(theLink) `
    color: #634619;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 3vw;
    cursor: pointer;

    &.active {
        color: #C39C5F;
    }
`

export const Bars = styled (FaBars) `
    display: none;
    color: #634619;

    @media screen and (max-width: 768px)
    {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px)
    {
        display:none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (ma-width: 768px)
    {
        display:none;
    }
`

export const NavBtnLink = styled(theLink)`
    border-radius: 4px;
    background: #634619;
    padding: 10px 22px;
    color #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover
    {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`