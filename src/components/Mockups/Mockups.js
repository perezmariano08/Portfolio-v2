import styled from "styled-components";

export const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
`

export const WrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    padding: 0 30px;
    @media (max-width: 768px) {
        padding: 0 15px;
    }
`
