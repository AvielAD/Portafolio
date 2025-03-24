import CardProyect from '@/components/Card'
import { infoProyectos } from '@/utils/datainfo'

const Page = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex justify-center items-center'>
            <div className=''>
                <div className='text-center font-bold font-sans'>
                    <p className='text-4xl'>Proyectos</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        infoProyectos?.map((item: any, index: number) => {
                            return (
                                <CardProyect key={index} title={item.title} subtitle={item.subtitle} image={item.image} path={item.path}></CardProyect>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Page
