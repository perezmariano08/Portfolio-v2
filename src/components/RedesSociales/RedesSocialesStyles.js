import styled from "styled-components";

export const RedesSocialesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    position: fixed;
    bottom: 0;
    left: 50px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        li {
            a {
                width: 100%;
                height: 100%;
                padding: 10px;
                svg {
                    font-size: 20px;
                    color: var(--gray-200);
                    transition: all .2s ease-in-out;
                    cursor: pointer;
                }
            }
            
            &:hover {
                svg {
                    transform: translateY(-3px);
                    color: var(--green);
                }
            }
        }
    }
    

    .linea {
        width: 1.5px;
        height: 90px;
        background-color: var(--gray-200);
    }

    @media (max-width: 1200px) {
        display: none;
    }
`