import styled from "styled-components";

export const HeroContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const HeroWrapper = styled.div`
    padding: 30px;
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
    width: 70%;
    p {
        width: 60%;
        @media (max-width: 500px) {
            width: 100%;
        }
    }
`

export const HeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--lightest-slate);
    width: fit-content;

    h4 {
        font-weight: 400;
        color: var(--green);
        font-size: 25px;
    }

    @media (max-width: 500px) {
        h1 {
            font-size: 40px;
        }

        h4 {
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            width: 80%;
        }
    }
`