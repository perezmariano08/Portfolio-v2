import styled from "styled-components";

export const ButtonWrapper = styled.a`
    padding: 14px 28px;
    border: 2px solid var(--green);
    background-color: var(--green);
    border-radius: 50px;
    color: var(--black-700);
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    width: fit-content;

    &:hover {
        background-color: transparent; /* El fondo se vuelve transparente */
        color: var(--green); /* El texto toma el color del borde */
        border-color: var(--green); /* Cambia a un tono más claro de verde */
    }


    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

