import styled from "styled-components";

export const NavbarContainerStyled = styled.header`    
    height: 80px;
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: var(--navy);
`

export const NavbarWrapper = styled.div`
    font-weight: 200;
    display: flex;
    align-items: center;
    padding: 0 60px;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`

export const NavbarLogo = styled.div`
    font-weight: 600;
    font-size: 30px;

    & span {
        color: var(--green);
    }
`

export const NavbarList = styled.ul`
    display: flex;
    align-items: center;
    gap: 25px;

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
        display: flex;
        font-size: 30px;
        align-items: center;
        justify-content: center;
        color: var(--green);
    }
`