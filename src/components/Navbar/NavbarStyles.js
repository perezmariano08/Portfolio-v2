import styled from "styled-components";

export const NavbarContainerStyled = styled.header` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 32px;
    z-index: 99;
    padding: 0 20px;
    height: 80px;
    animation: slideDown 0.5s ease-out;
    @media (max-width: 768px) {
        padding: 0 15px;
    }
`

export const NavbarWrapper = styled.div`
    background-color: rgba(15, 15, 15, 0.65);
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px); /* Compatibilidad con Safari */
    border: 1px solid var(--black-300);
    padding: 14px 14px 14px 28px;
    width: 100%;
    max-width: 800px;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 50px;
    justify-content: space-between;
    @media (max-width: 768px) {
        padding-left: 14px;
    }
`

export const NavbarLogo = styled.div`
    font-weight: 800;
    height: 100%;
    aspect-ratio: 1; /* Mantiene el ancho igual al alto */
    font-size: 30px;
    font-weight: 700;
    border-radius: 50% 50% 0 50%;
    color: var(--black-700);
    background-color: var(--green);
    border: 3px solid var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: slideDown 0.5s ease-out;
    animation-fill-mode: both; /* Mantener la posición final después de la animación */
`

export const NavbarList = styled.ul`
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 18px;

    li a {
        cursor: pointer;
        color: var(--white-300);
        transition: all .2s ease-in-out;
        &:hover {
            color: var(--green);
        }
        
    }

    li, a {
        animation: slideDown 0.5s ease-out;
        animation-fill-mode: both; /* Mantener la posición final después de la animación */
        &:nth-child(1) {
            animation-delay: 0s;
        }
        &:nth-child(2) {
            animation-delay: 0.1s;
        }
        &:nth-child(3) {
            animation-delay: 0.2s;
        }
        &:nth-child(4) {
            animation-delay: 0.3s;
        }
    }
    span {
        color: var(--green);
        margin-right: 2px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const NavbarBars = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        animation: slideDown 0.5s ease-out;
        animation-fill-mode: both; /* Mantener la posición final después de la animación */
        background-color: var(--black-600);
        aspect-ratio: 1; /* Mantiene el ancho igual al alto */
        height: 100%;
        border-radius: 50%;
        display: flex;
        font-size: 30px;
        align-items: center;
        justify-content: center;
        color: var(--green);
    }
`