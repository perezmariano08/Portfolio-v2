import styled from "styled-components";

export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--white-100);
    padding-bottom: 80px;
`

export const TituloSeccionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    text-align: center;
`

export const TituloSeccionNombre = styled.div`
    display: flex;
    gap: 5px;    
    color: var(--green);
    font-size: 16px;
    padding: 6px 12px;
    background-color: var(--black-600);
    border-radius: 42px;
    border: 1px solid var(--black-200);
    width: fit-content;

    svg {
        font-size: 20px;
    }

    h2 {
        font-size: 26px;
    }
`