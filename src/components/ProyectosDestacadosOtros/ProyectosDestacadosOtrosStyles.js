import styled from "styled-components";
import { ContainerStyled, WrapperStyled } from "../Mockups/Mockups";

export const ProyectosDestacadosOtrosContainer = styled(ContainerStyled)`
    
`

export const ProyectosDestacadosOtrosWrapper = styled(WrapperStyled)`
    gap: 40px;
    align-items: center;
    h3 {
        font-size: 28px;
    }
`

export const ProyectosDestacadosCardContainer = styled.div`
    display: flex;
    gap: 15px;

    
`

export const ProyectosDestacadoCard = styled.a`
    background-color: var(--light-navy);
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 35px;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {     
        transform: translateY(-5px);
        color: var(--green);               
    }
`

export const ProyectosDestacadoCardTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const ProyectosDestacadoCardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .folder {
        font-size: 40px;
        color: var(--green);
    }
`

export const ProyectosDestacadoCardTopLinks = styled.div`
    svg {
        font-size: 18px;
        transition: all .2s ease-in-out;

        &:hover {
            color: var(--green);
        }
    }
`

export const ProyectosDestacadoCardDetalle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    h4 {
        font-size: 22px;
    }

    p {

    }
`

export const ProyectosDestacadoCardTecnologias = styled.div`
    display: flex;
    gap: 15px;
    p {
        font-size: 12px;
    }
    
`