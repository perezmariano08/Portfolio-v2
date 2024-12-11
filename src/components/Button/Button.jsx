import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({children, href, target}) => {
    return (
        <ButtonWrapper href={href} target={target}>
            {children}
        </ButtonWrapper>
    )
}

export default Button