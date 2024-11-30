import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const ProyectosDestacadosContainer = styled(ContainerStyled)`
    
`

export const ProyectosDestacadosWrapper = styled(WrapperStyled)`
    gap: 80px;
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
        background-color: var(--lightest-navy);
    }
`

export const ProyectosDestacadoItem = styled.div`
    display: flex;
    gap: 30px;
    padding: 30px 0;
    position: relative;
    flex-direction: column;

    &.right {
        align-items: end;
        text-align: end;
    }

    @media (max-width: 968px) {
        padding: 25px;
    }
`


export const ProyectosDestacadosTitulo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    z-index: 1;

    span {
        font-size: 14px;
        color: var(--green);
    }

    a {
        font-size: 26px;
        font-weight: 600;
        color: var(--lightest-slate);
        transition: all .2s ease-in-out;
        width: fit-content;
        &:hover {
            color: var(--green);
        }
    }
`

export const ProyectosDestacadosDescripcion = styled.div`
    display: flex;
    padding: 20px;
    max-width: 500px;
    background-color: var(--light-navy);
    z-index: 1;

`

export const ProyectosDestacadosTecnologias = styled.ul`
    display: flex;
    gap: 20px;
    z-index: 1;
    

    li {
        color: var(--light-slate);
        font-weight: 300;
    }
`

export const ProyectosDestacadosImagen = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 85%;
    max-width: 60%;

    &.left {
        left: 0;
        right: none;
    }

    &.right {
        right: 0;
    }

    a {
        border-radius: 4px;
        height: 100%;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            opacity: .8;
            filter: grayscale(100%) contrast(1) brightness(90%);
            transition: all .2s ease-in-out;
            &:hover {
                filter: none;
            }
        }
    }

    @media (max-width: 968px) {
        max-width: 100%;
        width: 100%;
        height: 100%;

        a {
            img {
                opacity: .2;
            }
        }
    }
`

export const ProyectosDestacadosLinks = styled.div`
    display: flex;
    gap: 20px;

    svg {
        font-size: 22px;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover {
            color: var(--green);
        }
    }
`