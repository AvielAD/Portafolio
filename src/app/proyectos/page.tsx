'use client'
import CardProyect from '@/components/Card'
import Link from 'next/link'
import Image from 'next/image'
import { infoProyectos } from '@/utils/datainfo'

const Page = () => {
    return (
        <section className='max-w-screen-xl mx-auto pt-20'>
            <div className='text-center font-bold mb-20 font-sans'>
                <p className='text-4xl'>Portafolio de proyectos</p>
            </div>
            <div className='p-5'>
                Para el desarrollo de este grupo de proyectos se tuvo en cuenta la arquitectura de desarrollo de aplicaciones web moderna, 
                donde se integran un conjunto de herramientas que garantizan la mantenibilidad y seguridad en el producto final, 
                la arquitectura manejada es la siguiente, donde se resalta la distribución de las partes, implementada en un servidor virtual personal (VPS).
                <div className='relative h-96 w-full m-4'>
                    <Image src="./assets/plataformas/arquitectura.svg" alt="imagen" fill></Image>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-5 justify-center'>
                {
                    infoProyectos?.map((item: any, index: number) => {
                        return (
                            <CardProyect key={index} title={item.title} subtitle={item.subtitle} image={item.image} path={item.path}></CardProyect>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Page
