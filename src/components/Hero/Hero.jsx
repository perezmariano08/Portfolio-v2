import React from 'react'
import { HeroContainerStyled, HeroText, HeroTitle, HeroWrapper } from './HeroStyles'
import Button from '../Button/Button';
import ImagenPerfil from '../ImagenPerfil/ImagenPerfil';

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroWrapper>
                {/* <ImagenPerfil/> */}
                <HeroText>
                    <HeroTitle>
                        <span>Hola, mi nombre es</span>
                        <h1>Mariano Perez.</h1>
                        <h4>Desarrollador Web - Analista de Sistemas</h4>
                    </HeroTitle>
                    <p>Soy un desarrollador web enfocado en crear y diseñar experiencias digitales que mejoren la eficiencia. Actualmente, me dedico a construir productos accesibles y centrados en el <a href='gentiomkt.com'>usuario</a>.</p>
                    <Button>
                        Ver mis proyectos
                    </Button>
                </HeroText>
            </HeroWrapper>
        </HeroContainerStyled>
    )
}

export default Hero
