import React from 'react'
import { ProyectosDestacadoItem, ProyectosDestacadosContainer, ProyectosDestacadosDescripcion, ProyectosDestacadosImagen, ProyectosDestacadosLinks, ProyectosDestacadosTecnologias, ProyectosDestacadosTitle, ProyectosDestacadosTitulo, ProyectosDestacadosWrapper } from './ProyectosDestacadosStyles'
import { FaGithub, FaGithubAlt, FaGithubSquare } from 'react-icons/fa'
import { FiExternalLink, FiGithub, FiLink } from "react-icons/fi";

const ProyectosDestacados = () => {
    return (
        <ProyectosDestacadosContainer>
            <ProyectosDestacadosWrapper>
                <ProyectosDestacadosTitle>
                    <p>03.</p>
                    <h3>Proyectos</h3>
                    <div className='linea'></div>
                </ProyectosDestacadosTitle>
                <ProyectosDestacadoItem>
                    <ProyectosDestacadosTitulo>
                        <span>Proyecto destacado</span>
                        <a href="https://coparelampago.com" target='_blank'>Copa Relámpago Software</a>
                    </ProyectosDestacadosTitulo>
                    <ProyectosDestacadosDescripcion>
                        <p>Proyecto de tesis - Sistema de gestion para Copa Relámpago, un torneo de fútbol 7 de Córdoba, Argentina. Cuenta con roles de administrador, planillero y usuario, entre otras muchas cosas más!
                        </p>
                    </ProyectosDestacadosDescripcion>
                    <ProyectosDestacadosTecnologias>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Railway</li>
                    </ProyectosDestacadosTecnologias>
                    <ProyectosDestacadosLinks>
                        <a href="https://github.com/perezmariano08/CR_Frontend" target='_blank'>
                            <FiGithub />
                        </a>
                        <a href="https://coparelampago.com" target='_blank'>
                            <FiExternalLink />
                        </a>
                    </ProyectosDestacadosLinks>
                    <ProyectosDestacadosImagen className='right'>
                        <a href="https://coparelampago.com" target='_blank'>
                            <img src="/Login.jpg" alt="" srcset="" />
                        </a>
                    </ProyectosDestacadosImagen>
                </ProyectosDestacadoItem>
                <ProyectosDestacadoItem className='right'>
                    <ProyectosDestacadosTitulo className='right'>
                        <span>Proyecto destacado</span>
                        <a href="https://coparelampago.com" target='_blank'>Gentio - Landing Page</a>                    </ProyectosDestacadosTitulo>
                    <ProyectosDestacadosDescripcion>
                        <p>Landing page elaborada con un analisis previo de competencias y pedido de usuario.</p>
                    </ProyectosDestacadosDescripcion>
                    <ProyectosDestacadosTecnologias>
                        <li>React</li>
                        <li>Styled Components</li>
                    </ProyectosDestacadosTecnologias>
                    <ProyectosDestacadosLinks>
                        <a href='https://github.com/perezmariano08/Gentio-Web' target='_blank'>
                            <FiGithub />
                        </a>
                        <a href="https://gentiomkt.com/" target='_blank'>
                            <FiExternalLink />
                        </a>
                    </ProyectosDestacadosLinks>
                    <ProyectosDestacadosImagen className='left'>
                        <a href="https://coparelampago.com" target='_blank'>
                            <img src="/gentio.jpg" alt="" srcset="" />
                        </a>
                    </ProyectosDestacadosImagen>
                </ProyectosDestacadoItem>
                <ProyectosDestacadoItem>
                    <ProyectosDestacadosTitulo>
                        <span>Proyecto destacado</span>
                        <a href="https://coparelampago.com" target='_blank'>Neumaticor - Landing Page</a>
                    </ProyectosDestacadosTitulo>
                    <ProyectosDestacadosDescripcion>
                        <p>Landing page para la venta de
                        neumáticos, optimización con
                        herramientas de SEO y Google Ads para
                        mejorar visibilidad y captación.</p>
                    </ProyectosDestacadosDescripcion>
                    <ProyectosDestacadosTecnologias>
                        <li>React</li>
                        <li>Styled Components</li>
                    </ProyectosDestacadosTecnologias>
                    <ProyectosDestacadosLinks>
                        <a href="https://www.neumaticor.com/" target='_blank'>
                            <FiExternalLink />
                        </a>
                    </ProyectosDestacadosLinks>
                    <ProyectosDestacadosImagen className='right'>
                        <a href="https://coparelampago.com" target='_blank'>
                            <img src="/neumaticor.jpg" alt="" srcset="" />
                        </a>
                    </ProyectosDestacadosImagen>
                </ProyectosDestacadoItem>
            </ProyectosDestacadosWrapper>
        </ProyectosDestacadosContainer>
    )
}

export default ProyectosDestacados
