import React, { useEffect, useState } from "react";
import { ExperienciaBarraAnimacion, ExperienciaContainer, ExperienciaContenido, ExperienciaMenu, ExperienciaMenuOpcion, ExperienciaWrapper } from "./ExperienciaStyles";
import { CgShapeTriangle } from "react-icons/cg";
import { TbSunLow } from "react-icons/tb";
import { TituloSeccionNombre, TituloSeccionWrapper } from "../Layout/LayoutStyles";

const Experiencia = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const opciones = ["Copa Relámpago", "Inversite", "Gaager SAS"];
    const contenido = [
        {
            titulo: <h4>Analista y Desarrollador de Software Web, <span>Copa Relámpago</span></h4>,
            empresa: "Copa Relampago",
            periodo: "Junio 2023 – Presente",
            tareas: [
                <p>Realización de un estudio de los flujos de trabajo, procesos y requisitos específicos para la
                gestión de equipos, programación de partidos, registro de resultados y administración de
                estadísticas del torneo.</p>,

                <p>Creación de una interfaz de usuario intuitiva y responsive, utilizando React para una experiencia
                interactiva y fácil de usar. Diseño de pantallas para la visualización de estadísticas, resultados y
                detalles del torneo, enfocándose en la accesibilidad y la navegación eficiente.</p>,

                <p>Creación de una interfaz de usuario intuitiva y responsive, utilizando React para una experiencia
                interactiva y fácil de usar. Diseño de pantallas para la visualización de estadísticas, resultados y
                detalles del torneo, enfocándose en la accesibilidad y la navegación eficiente.</p>,

                <p>Programación del servidor utilizando Node.js y configuración de una base de datos en MySQL
                para almacenar toda la información del torneo. Implementación de una API segura y eficiente
                para gestionar las interacciones entre el frontend y el backend.</p>,

                <p>Configuración y despliegue del sistema en el sitio web <a href="https://coparelampago.com" target="_blank">coparelampago.com</a>, asegurando un
                entorno de producción estable. Verificación de la seguridad de datos y optimización para un
                funcionamiento continuo y sin interrupciones.</p>,
            ],
        },
        {
            titulo: <h4>Diseñador Web, <span>Inversite</span></h4>, 
            periodo: "Febrero 2024 – Abril 2024",
            tareas: [
                <p>Investigación de UX/UI: Análisis de tendencias de diseño y necesidades del usuario para crear un
                enfoque moderno y funcional.</p>,       

                <p>Wireframing y Prototipado en Figma: Desarrollo de estructuras de navegación y flujo de usuario,
                seguido por prototipos interactivos para pruebas iniciales.</p>,

                <p>Diseño Visual: Creación de un estilo visual atractivo y coherente, trabajando con paletas de
                colores, tipografía y componentes gráficos.</p>,

                <p>Colaboración en equipo: Comunicación constante con el equipo para asegurar que el diseño
                cumpliera con los objetivos del proyecto y los estándares de la marca.</p>,
            ],
        },
        {
            titulo: <h4>Asistente Administrativo y Desarrollador Web, <span>Gaager SAS</span></h4>,
            periodo: "Noviembre 2023 – Octubre 2024",
            tareas: [
                <p>Tareas administrativas en el sistema Dux, con uso de Excel para organización y análisis de datos.</p>,       

                <p>Gestión y actualización de redes sociales (diseño de flyers, edición de contenido).</p>,

                <p>Gestión de campañas de anuncios pagos en redes.</p>,

                <p>Desarrollo de sitios web a medida.</p>,
            ],
        },
        // Agrega más objetos para cada opción
    ];

    // Detectar si la pantalla es móvil
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ExperienciaContainer id="experiencia">
            <TituloSeccionWrapper>
                <TituloSeccionNombre>
                    <TbSunLow />
                    Experiencia
                </TituloSeccionNombre>
                <h2>Mi experiencia laboral</h2>
            </TituloSeccionWrapper>
            <ExperienciaWrapper>
                    <ExperienciaMenu>
                        <ExperienciaBarraAnimacion
                            style={{
                                transform: isMobile
                                    ? `translateX(${activeIndex * 200}px)` // Movimiento horizontal
                                    : `translateY(${activeIndex * 40}px)`, // Movimiento vertical
                                transition: "transform 0.3s ease",
                            }}
                        />
                        
                        {opciones.map((opcion, index) => (
                            <ExperienciaMenuOpcion
                                key={index}
                                className={`menu-opcion ${index === activeIndex ? "activo" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {opcion}
                            </ExperienciaMenuOpcion>
                        ))}
                    </ExperienciaMenu>
                    <ExperienciaContenido>
                        {contenido[activeIndex].titulo}
                        <span className="fecha">{contenido[activeIndex].periodo}</span>
                        <ul>
                            {contenido[activeIndex].tareas.map((tarea, index) => (
                                <li key={index}>
                                    <CgShapeTriangle />
                                    {tarea}
                                </li>
                            ))}
                        </ul>
                    </ExperienciaContenido>
            </ExperienciaWrapper>
        </ExperienciaContainer>
        
    );
};

export default Experiencia;
