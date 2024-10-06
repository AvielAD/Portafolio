'use client'


const Page = () => {
    const clickHandle= (url: string)=>{
        document.location.href = url
    }
    return (
        <>

                {
                    infoProyectos.map((item: proyectodto, index: number) => {
                        return (
                            <div key={index}></div>
                        )
                    })
                }


        </>
    )
}

export default Page

const infoProyectos: Array<proyectodto> = [
    {
        titulo: "LocalFix",
        descripcion: "Este proyecto gestiona el historial e impresión de tickets para talleres de celulares y computadoras",
        imagen: { titulo: "LocalFix", url: "/localfix.png"},
        link: 'https://localfix.mx'
    },
    {
        titulo: "Plataforma de formularios inscripción a cursos",
        descripcion: "Generación dinámica de formularios para la gestión de cursos",
        imagen: { titulo: "LocalFix", url: "/atmosfera.png"},
        link: 'https://dev.atmosfera.la/login'
    },
    {
        titulo: "Workline",
        descripcion: "Plataforma que administra los servicios y consumos que se pueden reservar en la disposición de espacios físicos como oficina o cafetería",
        imagen: { titulo: "LocalFix", url: "/workline.png"},
        link: 'https://dev.atmosfera.la/login'
    },
    {
        titulo: "Bot NLP",
        descripcion: "Bot perteneciente a la categoría preguntas - respuestas",
        imagen: { titulo: "LocalFix", url: "/frontbot.png"},
        link: 'https://frontbot.vercel.app/'
    },
    {
        titulo: "Landing Page Atmosfera",
        descripcion: "Página estática JS,CSS y HTML sin librería de desarrollo",
        imagen: { titulo: "LocalFix", url: "/landingatmosfera.png"},
        link: 'https://dev.atmosfera.la/'
    },
    {
        titulo: "Landing Page LocalFix",
        descripcion: "Página informativa para proyecto de reparación y asesoría de dispositivos",
        imagen: { titulo: "LocalFix", url: "/landinglocalfix.png"},
        link: 'https://localfix.mx'
    }

]

interface proyectodto {
    titulo: string,
    descripcion: string,
    imagen: icontecnologiadto,
    link: string
}

interface icontecnologiadto {
    titulo: string,
    url: string
}