import styled from "styled-components";

export const ButtonWrapper = styled.button`
    padding: 0.75rem 1rem;
    border: 1px solid var(--green);
    background-color: transparent;
    border-radius: 5px;
    color: var(--green);
    font-weight: 300;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    width: fit-content;
    cursor: pointer;
    
    &:hover {
        outline: none;
        box-shadow: 3px 3px 0 0 var(--green);
        transform: translate(-4px, -4px);
    }
`