import React from 'react'
import { NavbarBars, NavbarContainerStyled, NavbarList, NavbarLogo, NavbarWrapper } from './NavbarStyles'

import { HiBars3BottomRight } from "react-icons/hi2";
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <NavbarWrapper>
                <NavbarLogo>
                    M
                </NavbarLogo>
                <NavbarList>
                    <li><a href="#sobre-mi">Sobre mi</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <Button>
                        Contacto
                    </Button>
                </NavbarList>
                <NavbarBars>
                    <HiBars3BottomRight/>
                </NavbarBars>
            </NavbarWrapper>
        </NavbarContainerStyled>
    )
}

export default Navbar
