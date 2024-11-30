import React from 'react'
import { ProyectosDestacadoCard, ProyectosDestacadoCardDetalle, ProyectosDestacadoCardTecnologias, ProyectosDestacadoCardTop, ProyectosDestacadoCardTopContainer, ProyectosDestacadoCardTopLinks, ProyectosDestacadosCardContainer, ProyectosDestacadosOtrosContainer, ProyectosDestacadosOtrosWrapper } from './ProyectosDestacadosOtrosStyles'
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink } from 'react-icons/fi';

const ProyectosDestacadosOtros = () => {
    return (
        <ProyectosDestacadosOtrosContainer>
            <ProyectosDestacadosOtrosWrapper>
                <h3>Otros proyectos destacados</h3>
                <ProyectosDestacadosCardContainer>
                    
                    <ProyectosDestacadoCard  href="https://www.behance.net/gallery/194931761/Moura-Cordoba-Landing-Page-Design" target='_blank'>
                        <ProyectosDestacadoCardTop>
                            <CiFolderOn className='folder'/>
                            <ProyectosDestacadoCardTopLinks>
                                {/* <a href="https://github.com/perezmariano08/CR_Frontend" target='_blank'>
                                    <FiGithub />
                                </a> */}
                                <a href="https://www.behance.net/gallery/194931761/Moura-Cordoba-Landing-Page-Design" target='_blank'>
                                    <FiExternalLink />
                                </a>
                            </ProyectosDestacadoCardTopLinks>
                        </ProyectosDestacadoCardTop>
                        <ProyectosDestacadoCardDetalle>
                            <h4>Moura Cordoba</h4>
                            <p>Landing page diseñada para Moura Córdoba, enfocada en destacar sus baterías automotrices con instalación inmediata. Incluye diseño moderno, estructura organizada, llamadas a la acción estratégicas y es totalmente responsiva.</p>
                        </ProyectosDestacadoCardDetalle>
                        <ProyectosDestacadoCardTecnologias>
                            <p>Figma</p>
                        </ProyectosDestacadoCardTecnologias>
                    </ProyectosDestacadoCard>
                    <ProyectosDestacadoCard  href="https://alaic.org" target='_blank'>
                        <ProyectosDestacadoCardTop>
                            <CiFolderOn className='folder'/>
                            <ProyectosDestacadoCardTopLinks>
                                {/* <a href="https://github.com/perezmariano08/CR_Frontend" target='_blank'>
                                    <FiGithub />
                                </a> */}
                                <a href="https://alaic.org" target='_blank'>
                                    <FiExternalLink />
                                </a>
                            </ProyectosDestacadoCardTopLinks>
                        </ProyectosDestacadoCardTop>
                        <ProyectosDestacadoCardDetalle>
                            <h4>Alaic.org</h4>
                            <p>Web en WordPress con integración de
                            WooCommerce. Implementación de
                            funcionalidades para facilitar el registro y
                            pago en línea.</p>
                        </ProyectosDestacadoCardDetalle>
                        <ProyectosDestacadoCardTecnologias>
                            <p>WordPress</p>
                            <p>WooCommerce</p>
                            <p>MySQL</p>
                        </ProyectosDestacadoCardTecnologias>
                    </ProyectosDestacadoCard>
                    <ProyectosDestacadoCard  href="https://crocken.vercel.app" target='_blank'>
                        <ProyectosDestacadoCardTop>
                            <CiFolderOn className='folder'/>
                            <ProyectosDestacadoCardTopLinks>
                                {/* <a href="https://github.com/perezmariano08/CR_Frontend" target='_blank'>
                                    <FiGithub />
                                </a> */}
                                <a href="https://crocken.vercel.app" target='_blank'>
                                    <FiExternalLink />
                                </a>
                            </ProyectosDestacadoCardTopLinks>
                        </ProyectosDestacadoCardTop>
                        <ProyectosDestacadoCardDetalle>
                            <h4>Proyecto: Crocken</h4>
                            <p>Sitio web académico desarrollado para prácticas de diseño y funcionalidad. Presenta una interfaz moderna, estructura organizada y diseño responsivo, optimizado para una experiencia de usuario fluida.</p>
                        </ProyectosDestacadoCardDetalle>
                        <ProyectosDestacadoCardTecnologias>
                            <p>HTML</p>
                            <p>CS</p>
                            <p>JavaScript</p>
                            <p>Vercel</p>
                        </ProyectosDestacadoCardTecnologias>
                    </ProyectosDestacadoCard>
                    
                </ProyectosDestacadosCardContainer>
                
            </ProyectosDestacadosOtrosWrapper>
        </ProyectosDestacadosOtrosContainer>
    )
}

export default ProyectosDestacadosOtros
