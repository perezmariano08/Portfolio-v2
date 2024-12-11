import React from 'react'
import { HeroContainerStyled, HeroText, HeroTitle, HeroWrapper } from './HeroStyles'
import Button from '../Button/Button';
import ImagenPerfil from '../ImagenPerfil/ImagenPerfil';

const Hero = () => {
    return (
        <HeroContainerStyled id='sobre-mi'>
            <HeroWrapper>
                <HeroText>
                    <HeroTitle>
                        <span>Hola, mi nombre es</span>
                        <h1>Mariano Perez.</h1>
                        <h4>Desarrollador Web - Analista de Sistemas</h4>
                    </HeroTitle>
                    <p>
                    Soy un diseñador y desarrollador web con experiencia en sistemas y soluciones digitales. Me dedico a crear proyectos funcionales, combinando diseño y tecnología.</p>
                    <Button target={'_blank'} href="/pdf/CV.pdf">
                        Descargar CV
                    </Button>
                </HeroText>
            </HeroWrapper>
        </HeroContainerStyled>
    )
}

export default Hero
