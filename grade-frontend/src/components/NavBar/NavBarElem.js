import React from 'react'
import styled from 'styled-components'
import {NavLink as theLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

//use the backtick (``) for styling like css for each component (it comes from styled-components)
 export const NavBarElem = styled.nav ` 
    background: #588556;
	height: 35px;
	padding-left: 18px;
	border-radius: 10px;
	border: 2px groove #6D6D6D;
    display: flex;
    justify-content: space-between;
    padding: 0.5%;
    z-index: 10;
`

export const NavLink = styled(theLink) `
    color: #D4FFD1;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 7vw;
    cursor: pointer;
    &.active {
        color: #45FF70;
    }
    &:hover
    {
        text-decoration: underline;
        color: #45FF70;
    }
`
export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    height: 35px;
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
    background: #034D01;
    padding: 10px 22px;
    color #D4FFD1;
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