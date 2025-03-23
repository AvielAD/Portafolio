import Image from "next/image"
import ImageTech from '../../../../public/topcv.png'

import Link from "next/link"

const Index = () => {
    return (
        <section className="max-w-screen-xl mx-auto h-full">
            <div className="flex justify-center items-center h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex justify-center items-center">
                        <div>
                            <p className="text-4xl font-bold">Hola, soy Aviel Aldama </p>
                            <p className="text-xl">Desarrollador web full stack</p>
                            <div className="mt-2 flex flex-col justify-around gap-2 min-[400px]:flex-row">
                                <Link href={'#proyectsection'} className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                    <button className="w-full min-[400px]:w-auto px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">Proyectos</button>
                                </Link>
                                <Link href={'./aviel_cv.pdf'} download={'aviel_cv.pdf'} className="inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                                    <button className="w-full min-[400px]:w-auto px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">Descargar CV</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="h-60 w-60 md:h-[34rem] md:w-[34rem] relative">
                            <Image src={ImageTech}
                                objectFit="cover"
                                alt="top section"
                                className="w-full h-full top-0 left-0 object-cover rounded-2xl" fill></Image>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Index