import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const ProyectosDestacadosContainer = styled(ContainerStyled)`
    flex-direction: column;
    align-items: center;
    scroll-margin-top: 150px; /* Ajusta según el tamaño deseado */

`

export const ProyectosDestacadosWrapper = styled(WrapperStyled)`
    gap: 40px;
    margin-top: 80px;
`

export const ProyectosDestacadosTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    p {
        color: var(--green);
        font-size: 20px;
    }
    h3 {
        font-size: 28px;
    }

    .linea {
        height: 1px;
        width: 100%;
        margin-left: 20px;
        background-color: var(--lightest-navy);
    }
`

export const ProyectosDestacadoItem = styled.div`
    display: flex;
    position: relative;
    background-color: var(--black-600);
    border-radius: 16px;
    border: 1px solid var(--black-200);
    overflow: hidden;

    &.right {
        flex-direction: row-reverse;
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }

`
export const ProyectosDestacadosImagen = styled.div`
    width: 100%;
    max-width: 350px;
    
    a {
        width: 100%;
        height: 100%;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    
    @media (max-width: 768px) {
        max-width: none;
    }
`

export const ProyectosDestacadosTexto = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 30px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`

export const ProyectosDestacadosTitulo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
        font-size: 20px;
        font-weight: 700;
        color: var(--white-100);
        transition: all .2s ease-in-out;
        width: fit-content;
        &:hover {
            color: var(--green);
        }
    }
`


export const ProyectosDestacadosTecnologias = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--black-500);
    gap: 30px;
    padding: 20px 30px 20px 20px;
    border: 1px solid var(--black-200);
    border-radius: 16px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 20px;
    }
`

export const ProyectosDestacadosTecnologiasDetalle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    span {
        color: var(--green);
        font-size: 20px;
        font-weight: 700;
    }
`

export const ProyectosDestacadosTecnologiasLista = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    row-gap: 10px;

    li {
        font-family: var(--code);
        font-weight: 14px;
    }
`

export const ProyectosDestacadosTecnologiasDivisor = styled.ul`
    height: 100%;
    width: 1px;
    background-color: var(--black-200);
`



export const ProyectosDestacadosLinks = styled.div`
    display: flex;
    gap: 20px;

    svg {
        font-size: 22px;
        color: var(--white-500);
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover {
            color: var(--green);
        }
        @media (max-width: 768px) {
            color: var(--green);
        }
    }
`