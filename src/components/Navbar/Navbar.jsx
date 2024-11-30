import React from 'react'
import { NavbarBars, NavbarContainerStyled, NavbarList, NavbarLogo, NavbarWrapper } from './NavbarStyles'

import { HiBars3BottomRight } from "react-icons/hi2";
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <NavbarWrapper>
                <NavbarLogo>
                    <span>.</span>mp
                </NavbarLogo>
                <NavbarList>
                    <li><span>01.</span> Sobre mi</li>
                    <li><span>02.</span> Educación</li>
                    <li><span>03.</span> Proyectos</li>
                    <li><span>04.</span> Contacto</li>
                    <Button>
                        Descargar CV
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
