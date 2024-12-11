import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalMenuWrapper = styled(motion.ul)`
    position: absolute;
    top: 90px;
    right: 14px;
    width: 200px;
    background-color: var(--black-600);
    border: 1px solid var(--black-200);
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    li a {
        color: var(--white-600);
        display: flex;
        align-items: center;
        gap: 8px;
    }
`