import styled from "styled-components";

export const ButtonWrapper = styled.button`
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
        border-color: var(--green-light); /* Cambia a un tono más claro de verde */
        transform: translateY(-4px); /* Desplaza el botón ligeramente hacia arriba */
        box-shadow: 0 8px 20px rgba(0, 128, 0, 0.3); /* Sombra elegante */
    }

    &:active {
        transform: translateY(0); /* Vuelve a su posición original */
        box-shadow: 0 4px 10px rgba(0, 128, 0, 0.2); /* Reduce la sombra */
    }

    @media (max-width: 500px) {
        font-size: 15px;
    }
`;

