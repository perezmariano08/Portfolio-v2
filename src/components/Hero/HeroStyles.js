import styled from "styled-components";

export const HeroContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const HeroWrapper = styled.div`
    padding: 112px 30px 30px 30px;
    max-width: 1000px;
    width: 100%;
    gap: 30px;
    display: flex;
    align-items: center;
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    p {
        width: 60%;

        a {
            color: var(--green);
            font-weight: 500;
            position: relative; /* Necesario para el pseudo-elemento */
            text-decoration: none; /* Elimina el subrayado predeterminado */
            transition: color 0.3s ease-in-out;

            &::after {
                content: '';
                position: absolute;
                bottom: 0px; /* Ajusta la posición debajo del texto */
                left: 0;
                width: 0; /* Inicialmente sin ancho */
                height: .5px; /* Altura de la línea */
                background-color: var(--green); /* Color de la línea */
                transition: width 0.3s ease-in-out; /* Animación suave */
            }

            &:hover {
                &::after {
                    width: 100%; /* Expande la línea al ancho completo */
                }
            }
        }

        @media (max-width: 500px) {
            width: 100%;
        }
    }
`;


export const HeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    color: var(--white-100);
    span {
        font-family: var(--code);
        color: var(--green);
        margin-bottom: 10px;
        font-size: 16px;
    }
    

    h4 {
        font-weight: 800;
        color: var(--white-600);
        font-size: 40px;
        line-height: 40px;
    }

    @media (max-width: 768px) {

        h4 {
            font-size: 23px;
            line-height: 23px;
        }
    }
`