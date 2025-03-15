import CardProyect from '@/components/Card'
import Image from 'next/image'
import { infoProyectos } from '@/utils/datainfo'

const Page = () => {
    return (
        <section className='max-w-screen-xl mx-auto pt-20'>
            <div className='text-center font-bold mb-20 font-sans'>
                <p className='text-4xl'>Proyectos</p>
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
