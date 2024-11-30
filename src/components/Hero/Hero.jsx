import React from 'react'
import { HeroContainerStyled, HeroText, HeroTitle, HeroWrapper } from './HeroStyles'
import Button from '../Button/Button';

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroWrapper>
                <HeroText>
                    <HeroTitle>
                        <h1>Mariano Perez</h1>
                        <h4>Desarrollador Web - Analista de Sistemas</h4>
                    </HeroTitle>
                    <p>Soy un desarrollador web enfocado en crear y diseñar experiencias digitales que mejoren la eficiencia. Actualmente, me dedico a construir productos accesibles y centrados en el usuario.</p>
                    <Button>
                        Ver mis proyectos
                    </Button>
                </HeroText>
            </HeroWrapper>
        </HeroContainerStyled>
    )
}

export default Hero
