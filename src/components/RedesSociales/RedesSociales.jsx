import React from 'react'
import { RedesSocialesContainer } from './RedesSocialesStyles'
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const RedesSociales = () => {
    return (
        <RedesSocialesContainer>
            <ul>
                <li><a target='_blank' href="https://github.com/perezmariano08"><FiGithub title='GitHub'/></a></li>
                <li><a target='_blank' href="https://instagram.com/marianoperez08"><FiInstagram title='Instagram'/></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/marianoperez08/"><FiLinkedin title='LinkedIn'/></a></li>
                <li><a target='_blank' href="https://x.com/marianoperez08"><BsTwitterX title='X'/></a></li>
            </ul>
            <span className='linea'></span>
        </RedesSocialesContainer>
    )
}

export default RedesSociales