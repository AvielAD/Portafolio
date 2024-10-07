'use client'
import CardProyect from '@/app/components/Card'

const Page = () => {
    return (
        <section className='max-w-screen-2xl mx-auto pt-20'>
            <div className='grid grid-cols-3 gap-5 p-5'>
                {
                    infoProyectos.map((item: any, index: number) => {
                        return (
                            <CardProyect key={index} {...item}></CardProyect>
                        )
                    })
                }

            </div>


        </section>
    )
}

export default Page

const infoProyectos = [
    {
        title: "LocalFix",
        subtitle: "Aplicación Web",
        image: { alt: "LocalFix", url: "/localfix.png" },
        path: "",
        url: 'https://localfix.mx'
    },
    {
        title: "Inscripción a cursos",
        subtitle: "Aplicación web",
        image: { alt: "LocalFix", url: "/atmosfera.png" },
        path: "",
        url: 'https://dev.atmosfera.la/login'
    },
    {
        title: "Workline",
        subtitle: "Aplicación web",
        image: { alt: "LocalFix", url: "/workline.png" },
        path: "",
        url: 'https://dev.atmosfera.la/login'
    },
    {
        title: "Bot NLP",
        subtitle: "Chat Web",
        image: { alt: "LocalFix", url: "/frontbot.png" },
        path: "",
        url: 'https://frontbot.vercel.app/'
    },
    {
        title: "Landing Page Atmosfera",
        subtitle: "Web",
        image: { alt: "LocalFix", url: "/landingatmosfera.png" },
        path: "",
        url: 'https://dev.atmosfera.la/'
    },
    {
        title: "Landing Page LocalFix",
        subtitle: "Web",
        image: { alt: "LocalFix", url: "/landinglocalfix.png" },
        path: "",
        url: 'https://localfix.mx'
    }

]