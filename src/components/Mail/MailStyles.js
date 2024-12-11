import styled from "styled-components";

export const MailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    position: fixed;
    bottom: 0;
    right: 60px;
    animation: slideDown 0.5s ease-out;
    animation-fill-mode: both; /* Mantener la posición final después de la animación */
    animation-delay: 1.4s;

    a {
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        letter-spacing: .1em;
        color: var(--white-600);
        font-size: 14px;
        transition: all .2s ease-in-out;
        font-weight: 300;

        &:hover {
            transform: translateY(-3px);
            color: var(--green);
        }
    }

    .linea {
        width: 1.5px;
        height: 90px;
        background-color: var(--white-600);
    }

    @media (max-width: 1200px) {
        display: none;
    }
`