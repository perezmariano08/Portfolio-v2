import React from 'react'
import { MailContainer } from './MailStyles'

const Mail = () => {
    return (
        <MailContainer>
            <a href="mailto:perezmariano.pm@gmail.com">perezmariano.pm@gmail.com</a>
            <span className='linea'></span>
        </MailContainer>
    )
}

export default Mail