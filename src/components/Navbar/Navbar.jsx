import React, { useState } from 'react';
import { NavbarBars, NavbarContainerStyled, NavbarList, NavbarLogo, NavbarWrapper } from './NavbarStyles';
import { HiBars3BottomRight } from "react-icons/hi2";
import Button from '../Button/Button';
import ModalMenu from '../Modales/ModalMenu/ModalMenu';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavbarContainerStyled>
            <NavbarWrapper>
                <NavbarLogo>
                    M
                </NavbarLogo>
                <NavbarList>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#experiencia">Experiencia</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <Button href="mailto:perezmariano.pm@gmail.com" target={'_blank'}>
                        Contacto
                    </Button>
                </NavbarList>
                <NavbarBars onClick={toggleMenu}>
                    <HiBars3BottomRight />
                </NavbarBars>
                <AnimatePresence>
                    {isMenuOpen && (
                        <ModalMenu onClose={() => setIsMenuOpen(false)} />
                    )}
                </AnimatePresence>
            </NavbarWrapper>
        </NavbarContainerStyled>
    );
};

export default Navbar;
