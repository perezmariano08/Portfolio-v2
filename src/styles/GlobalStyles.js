import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --blue-dark: #020C1B;
        --blue: #0A192F;
        --blue-light: #112240;
        --blue-lightest: #233554;
        --green: #ABF129;
        
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
    }
    
    @font-face {
        font-family: 'Clash Display';
        src: local('ClashDisplayExtraLight'), url(src/assets/fonts/clash-display/ClashDisplayExtraLight.otf) format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Clash Display';
        src: local('ClashDisplayLight'), url(src/assets/fonts/clash-display/ClashDisplayLight.otf) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Clash Display';
        src: local('ClashDisplayRegular'), url(src/assets/fonts/clash-display/ClashDisplayRegular.otf) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Clash Display';
        src: local('ClashDisplayMedium'), url(src/assets/fonts/clash-display/ClashDisplayMedium.otf) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Clash Display';
        src: local('ClashDisplaySemibold'), url(src/assets/fonts/clash-display/ClashDisplaySemibold.otf) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Clash Display';
        src: local('ClashDisplayBold'), url(src/assets/fonts/clash-display/ClashDisplayBold.otf) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    body {
        background-color: var(--navy);
        color: var(--lightest-slate);
    }
    
    a {
        color: var(--lightest-slate);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Clash Display', sans-serif;
    }


    h1 {
        font-size: 61.04px;
        line-height: 61.04px;
        font-weight: 500;
    }

    body {
        height: 5000px;
    }

    p {
        font-size: 16px;
        font-weight: 300;
        letter-spacing: .03em;
        color: var(--gray-200);
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
    background-color: var(--dark-slate);
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


`