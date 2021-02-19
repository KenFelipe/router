import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Navigation = props => (
    <NavBar>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='/about' id="link-about">About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/nonexists'>NonExists</Link>
        </ul>
    </NavBar>
)

const NavBar = styled.nav`
    ul {
        margin: 0;
        padding: 10px 20px;
        background-color: gray;
    }
    a {
        display: inline-block;
        font-size: 18px;
        padding: 0px 4px;
        margin: 0 8px;
        text-decoration: none;

        color: maroon;
        transition: color .5s ease;

        &:hover {
            color: #c8c8c8;
        }

        &:first-child {
            margin-left: 0;
            padding-left: 0;
        }

        &:last-child {
            margin-right: 0;
            padding-right: 0;
        }
    }
`

export default Navigation