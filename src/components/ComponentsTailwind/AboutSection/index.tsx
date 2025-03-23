import Image from "next/image"
import AboutImage from '../../../../public/about.png'

const Index = () => {
    return (
        <div className="max-w-screen-xl mx-auto h-full">
            <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1">
                <div className="text-center p-6">
                    <h1 className="text-5xl">Acerca de mi</h1>
                    <p>Desarrollador fullstack con 3 años de experiencia,
                        mi enfoque laboral consiste en generar aplicaciones optimizadas para un correcto funcionamiento,
                        desde el diseño de la base datos, la optimización de las consultas en el backend y vistas creadas con herramientas
                        que brindan el mejor rendimiento. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <Image src={AboutImage} alt="sin imagen" className="rounded-lg object-contain" height="400" width="500"></Image>
                    </div>
                    <div className="">
                        <div className="p-3">
                            <span className="text-xl">Aprendizaje</span>
                            <p>Durante la universidad inicié con los lenguajes de programación C/C++, orientación a objetos con java, estos 
                                fundamentos me han permitido continuar aprendiendo nuevos lenguajes y sus beneficios como C# y el framework .NET, pero fue hasta incursionar en la libreria React
                                que comprendí la arquitectura de una aplicacion web moderna, por lo que desde ese punto pude integrar esos conocimientos
                                para generar aplicaciones que resuelvan ciertos problemas.
                            </p>
                        </div>
                        <div className="p-3">
                            <span className="text-xl">Enfoque</span>
                            <p>Mi mecánica de trabajo consiste en aplicar las mejores prácticas de desarrollo, para garantizar mantenibilidad y escalabilidad a los proyectos
                                en los que participo, construyendo las soluciones, de esta manera se tiene un resultado destacable en cuanto a rendimiento que nos permite 
                                de manera eficaz centrarnos en el modelo de negocio principal
                            </p>
                        </div>
                        <div className="p-3">
                            <span className="text-xl">Meta</span>
                            <p>Generar soluciones de software que permitan resolver problemas de una manera efectiva, para permitir al usuario centrarse en el crecimiento 
                                de su idea.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>)
}

export default Index