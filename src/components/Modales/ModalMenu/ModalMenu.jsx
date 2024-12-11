import React from 'react';
import { ModalMenuWrapper } from './ModalMenuStyles';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { BsTwitterX } from 'react-icons/bs';

const ModalMenu = ({ onClose }) => {
    return (
        <ModalMenuWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <li><a href="#sobre-mi" onClick={onClose}>Sobre mí</a></li>
            <li><a href="#experiencia" onClick={onClose}>Experiencia</a></li>
            <li><a href="#proyectos" onClick={onClose}>Proyectos</a></li>
            <li><a href="tel:+5493513347081">Contacto</a></li>
            <li><a href="https://wa.link/9stgrn">WhatsApp</a></li>
            <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                <li><a target='_blank' href="https://github.com/perezmariano08"><FiGithub title='GitHub'/></a></li>
                <li><a target='_blank' href="https://instagram.com/marianoperez08"><FiInstagram title='Instagram'/></a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/marianoperez08/"><FiLinkedin title='LinkedIn'/></a></li>
                <li><a target='_blank' href="https://x.com/marianoperez08"><BsTwitterX title='X'/></a></li>
            </ul>
        </ModalMenuWrapper>
    );
};

export default ModalMenu;
