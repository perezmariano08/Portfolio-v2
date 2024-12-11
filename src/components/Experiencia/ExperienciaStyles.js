import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";
import { motion } from "framer-motion";

export const ExperienciaContainer = styled(ContainerStyled)`
    flex-direction: column;
    align-items: center;
    scroll-margin-top: 150px; /* Ajusta según el tamaño deseado */

`

export const ExperienciaWrapper = styled(WrapperStyled)`
    flex-direction: row;
    margin: 80px 0;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ExperienciaMenu = styled.div`
    position: relative;
    width: 300px;
    color: #ffffff;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        margin-bottom: 30px;
        overflow: auto;
        /* Ancho de la barra de desplazamiento */
        &::-webkit-scrollbar {
            height: 8px;
        }

        /* Track de la barra */
        &::-webkit-scrollbar-track {
            background-color: transparent;
        }

        /* Barra de desplazamiento */
        &::-webkit-scrollbar-thumb {
            background-color: var(--black-100);
            border-radius: 4px;
        }
    }
`

export const ExperienciaBarraAnimacion = styled.div`
    position: absolute;
    width: 2px;
    height: 40px;
    background-color: var(--green);
    left: 0;
    border-radius: 5px;
    @media (max-width: 768px) {
        height: 1px;
        width: 200px;
        bottom: 0;
    }
`

export const ExperienciaMenuOpcion = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 20px;
    cursor: pointer;
    color: var(--white-100);
    height: 40px;
    text-align: center;
    transition: background 0.2s;
    border-left: 2px solid var(--black-200);
    

    &:hover {
        background-color: var(--black-500);
        color: var(--green);
    }

    &.activo {
        color: var(--green);
        background-color: var(--black-500);
    }

    @media (max-width: 768px) {
        flex-direction: row;
        padding: 0 20px;
        min-width: 200px;
        justify-content: center;
        border-bottom: 1px solid var(--black-200);
        border-left: none;

        &:hover {
            background-color: var(--black-700);
            color: var(--white-100);
            
        }

        &.activo {
            color: var(--green);
            background-color: var(--black-500);
        }
    }
`

export const ExperienciaContenido = styled(motion.div)`
    padding: 0 30px;
    color: var(--white-100);
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    min-height: 500px;
    animation: fadeIn 0.5s ease-out;

    h4 {
        font-size: 1.5em;

        span {
            color: var(--green);
        }
    }
    
    .fecha {
        font-family: var(--code);
        color: var(--white-600);
        font-size: 14px;
    }

    
    li {
        display: flex;
        gap: 5px;
        margin-bottom: 5px;

        p {
            font-size: 16px;

            a {
                color: var(--green);
            }
        }

        svg {
            color: var(--green);
            rotate: 90deg;
            min-width: 15px;
            margin-top: 2px
        }
    }

    @media (max-width: 768px) {
        padding-left: 10px;
    }
`