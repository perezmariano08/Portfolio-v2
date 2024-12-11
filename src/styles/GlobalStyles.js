import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --blue-dark: #020C1B;
        --blue: #0A192F;
        --blue-light: #112240;
        --blue-lightest: #233554;
        
        --dark-slate: #495670;
        --slate: #8892b0;
        --lightest-slate: #ccd6f6;
        --light-slate: #A8B2D1;

        --navy: #0A192F;
        --light-navy: #112240;
        --lightest-navy: #233554;

        /* Gray Scale */
        --white: #fafafa;
        --gray-100: #e9ebed;
        --gray-200: #8892b0;
        --gray-300: #9FA4A9;
        --gray-400: #73787E;
        --gray-500: #464C52;
        --gray-600: #26282B;
        --gray-700: #1B1D1F;
        --black: #121212;


        --code : 'Fira Code', sans-serif;

        // New //
        --breakpoint-xs: 480px; /* Móviles pequeños */
        --breakpoint-sm: 768px; /* Tablets */
        --breakpoint-md: 1024px; /* Laptops pequeñas */
        --breakpoint-lg: 1280px; /* Laptops grandes */
        --breakpoint-xl: 1440px; /* Pantallas grandes */

        --green: #CDF140;
        --black-700: #0F0F0F;
        --black-600: #141414;
        --black-500: #1A1A1A;
        --black-400: #1F1F1F;
        --black-300: #262626;
        --black-200: #2E2E2E;
        --black-100: #404040;
        --white-600: #96979C;
        --white-500: #B0B1B5;
        --white-400: #CACBCE;
        --white-300: #E4E5E6;
        --white-200: #F2F2F3;
        --white-100: #F7F7F8;
    }

    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: var(--black-700);
        color: var(--white-500);
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Rethink Sans', sans-serif;
    }


    h1 {
        font-size: 80px;
        line-height: 80px;
        font-weight: 800;

        @media (max-width: 768px) {
            font-size: 45px;
            line-height: 45px;
        }
    }

    h2 {
        font-size: 40px;
        line-height: 40px;
        font-weight: 800;

        @media (max-width: 768px) {
            font-size: 25px;
            line-height: 25px;
        }
    }

    

    p {
        font-size: 18px;
        font-weight: 400;
        color: var(--white-500);

        @media (max-width: 768px) {
            font-size: 15px;
        }

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
    }

    /* Ancho de la barra de desplazamiento */
::-webkit-scrollbar {
    width: 8px;
}

/* Track de la barra */
::-webkit-scrollbar-track {
    background-color: transparent;
}

/* Barra de desplazamiento */
::-webkit-scrollbar-thumb {
    background-color: var(--black-100);
    border-radius: 4px;
}

/* Flechas de la barra (parte superior e inferior) */
::-webkit-scrollbar-button:single-button:vertical:decrement {
    height: 12px;
    display: block;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="%23495670" d="M7 14l5-5 5 5z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
}

::-webkit-scrollbar-button:single-button:vertical:increment {
    height: 12px;
    display: block;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="%23495670" d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
}


@keyframes slideDown {
    from {
        transform: translateY(-20px); /* Empieza más arriba */
        opacity: 0; /* Comienza transparente */
    }
    to {
        transform: translateY(0); /* Termina en su posición original */
        opacity: 1; /* Completamente visible */
    }
}

@keyframes fadeIn {
    from {
        opacity: 0; /* Comienza transparente */
    }
    to {
        opacity: 1; /* Completamente visible */
    }
}


`