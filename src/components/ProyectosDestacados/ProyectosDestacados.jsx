import React from 'react'
import { ProyectosDestacadoItem, ProyectosDestacadosContainer, ProyectosDestacadosImagen, ProyectosDestacadosLinks, ProyectosDestacadosTecnologias, ProyectosDestacadosTecnologiasDetalle, ProyectosDestacadosTecnologiasDivisor, ProyectosDestacadosTecnologiasLista, ProyectosDestacadosTexto, ProyectosDestacadosTitulo, ProyectosDestacadosWrapper } from './ProyectosDestacadosStyles'
import { ProyectosDestacadoCardTecnologias } from '../ProyectosDestacadosOtros/ProyectosDestacadosOtrosStyles'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { TituloSeccionNombre, TituloSeccionWrapper } from '../Layout/LayoutStyles'
import { TbSunLow } from 'react-icons/tb'

const ProyectosDestacados = () => {
    return (
        <ProyectosDestacadosContainer id='proyectos'>
            <TituloSeccionWrapper>
                    <TituloSeccionNombre>
                        <TbSunLow />
                        Proyectos
                    </TituloSeccionNombre>
                    <h2>Algunas cosas que desarrollé</h2>
                </TituloSeccionWrapper>
            <ProyectosDestacadosWrapper>
                <ProyectosDestacadoItem>
                    <ProyectosDestacadosImagen className='right'>
                        <a href="https://coparelampago.com" target='_blank'>
                            <img src="/cr_mockup.jpg" />
                        </a>
                    </ProyectosDestacadosImagen>
                    <ProyectosDestacadosTexto>
                        <ProyectosDestacadosTitulo>
                            <a href="https://coparelampago.com" target='_blank'>Copa Relámpago Software</a>
                            <p>Sistema de gestion para Copa Relámpago, un torneo de fútbol 7 de Córdoba, Argentina. Cuenta con roles de administrador, planillero y usuario, entre otras muchas cosas más!
                            </p>
                        </ProyectosDestacadosTitulo>
                        <ProyectosDestacadosTecnologias>
                            <ProyectosDestacadosTecnologiasDetalle>
                                <ProyectosDestacadosTecnologiasLista>
                                    <li>React</li>
                                    <li>Styled Components</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Railway</li>
                                </ProyectosDestacadosTecnologiasLista>
                            </ProyectosDestacadosTecnologiasDetalle>
                            <ProyectosDestacadosTecnologiasDivisor />
                            <ProyectosDestacadosLinks>
                                <a href="https://github.com/perezmariano08/CR_Frontend" target='_blank'>
                                    <FiGithub />
                                </a>
                                <a href="https://coparelampago.com" target='_blank'>
                                    <FiExternalLink />
                                </a>
                            </ProyectosDestacadosLinks>
                        </ProyectosDestacadosTecnologias>
                    </ProyectosDestacadosTexto>
                </ProyectosDestacadoItem>
                <ProyectosDestacadoItem className='right'>
                    <ProyectosDestacadosImagen className='right'>
                        <a href="https://gentiomkt.com" target='_blank'>
                            <img src="/gentio_mockup.jpg" />
                        </a>
                    </ProyectosDestacadosImagen>
                    <ProyectosDestacadosTexto>
                        <ProyectosDestacadosTitulo>
                            <a href="https://gentiomkt.com" target='_blank'>Gentio - Landing Page</a>
                            <p>Landing page elaborada con un analisis previo de competencias y pedido de usuario.
                            </p>
                        </ProyectosDestacadosTitulo>
                        <ProyectosDestacadosTecnologias>
                            <ProyectosDestacadosTecnologiasDetalle>
                                <ProyectosDestacadosTecnologiasLista>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>Express</li>
                                    <li>Railway</li>
                                </ProyectosDestacadosTecnologiasLista>
                            </ProyectosDestacadosTecnologiasDetalle>
                            <ProyectosDestacadosTecnologiasDivisor />
                            <ProyectosDestacadosLinks>
                                <a href="https://github.com/perezmariano08/Gentio-Web" target='_blank'>
                                    <FiGithub />
                                </a>
                                <a href="https://gentiomkt.com" target='_blank'>
                                    <FiExternalLink />
                                </a>
                            </ProyectosDestacadosLinks>
                        </ProyectosDestacadosTecnologias>
                    </ProyectosDestacadosTexto>
                    
                </ProyectosDestacadoItem>
                <ProyectosDestacadoItem>
                    <ProyectosDestacadosImagen className='right'>
                        <a href="https://neumaticor.com" target='_blank'>
                            <img src="/neumaticor_mockup.jpg"/>
                        </a>
                    </ProyectosDestacadosImagen>
                    <ProyectosDestacadosTexto>
                        <ProyectosDestacadosTitulo>
                            <a href="https://neumaticor.com" target='_blank'>Neumaticor - Landing Page</a>
                            <p>Landing page para la venta de neumáticos, optimización con herramientas de SEO y Google Ads para mejorar visibilidad y captación.
                            </p>
                        </ProyectosDestacadosTitulo>
                        <ProyectosDestacadosTecnologias>
                            <ProyectosDestacadosTecnologiasDetalle>
                                <ProyectosDestacadosTecnologiasLista>
                                    <li>React</li>
                                    <li>Styled Components</li>
                                </ProyectosDestacadosTecnologiasLista>
                            </ProyectosDestacadosTecnologiasDetalle>
                            <ProyectosDestacadosTecnologiasDivisor />
                            <ProyectosDestacadosLinks>
                                <a href="https://github.com/perezmariano08/Neumaticor" target='_blank'>
                                    <FiGithub />
                                </a>
                                <a href="https://neumaticor.com" target='_blank'>
                                    <FiExternalLink />
                                </a>
                            </ProyectosDestacadosLinks>
                        </ProyectosDestacadosTecnologias>
                    </ProyectosDestacadosTexto>
                </ProyectosDestacadoItem>
            </ProyectosDestacadosWrapper>
        </ProyectosDestacadosContainer>
    )
}

export default ProyectosDestacados
