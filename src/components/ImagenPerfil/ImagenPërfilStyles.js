import styled from "styled-components";

export const ImagenWrapper = styled.a`
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid var(--green);
    background-color: var(--green);
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: white;
        border: 10px solid white;

    }
    img {
        object-fit: cover;
        width: 100%;
        rotate: -10deg;
    }
`