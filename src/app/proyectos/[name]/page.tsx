'use client'
import { infoProyectos } from "@/utils/datainfo"
import Image from "next/image"
import Link from "next/link"

const Page = ({ params }: { params: { name: string } }) => {
    const proy = infoProyectos.find(x => x.path === params.name)

    return (
        <div className="max-w-screen-xl mx-auto h-screen">
            <div className="flex justify-center items-center h-full">
                <div className="grid grid-cols-[80%_20%]">
                    <div className=" ">
                        <h1 className="text-4xl">{proy?.title}</h1>
                        <h2 className="">{proy?.subtitle}</h2>
                        <div className="grid grid-cols-3 gap-2 m-2">
                            {
                                proy?.imageviews?.map((item, index) => (
                                    <div key={index} className="col-span-1">
                                        <div className="relative h-60 w-full">
                                            <Image className="rounded-lg object-contain" key={index} src={item} alt="imagen no disponible" fill></Image>
                                        </div>
                                    </div>))
                            }
                        </div>
                        <div className="lg:col-span-4 p-4">
                            <h3 className="mb-2 text-2xl">Desafio</h3>
                            <div className="">
                                {proy?.challenge.split('. ').map((item, index) => (<div key={index}>{item} <br /> <br /></div>))}
                            </div>
                        </div>

                    </div>
                    <div className="border-2 border-solid rounded-lg">
                        <div className="">
                            <div className="lg:col-span-2 p-4">
                                <div>
                                    <h3 className="mb-2 text-2xl">Cliente</h3>
                                    <h3>{proy?.about_client.split('.  ').map((item, index) => (<div key={index}>{item} <br /></div>))}</h3>
                                    <h3 className="mb-2 text-2xl">View</h3>
                                    <div className="">
                                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                            <Link href={`${proy?.url}`}>Demo</Link>
                                        </button>
                                        {
                                            proy?.urlback ?

                                                <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">

                                                    <Link href={`${proy?.urlback}`}>Back Swagger</Link>
                                                </button>
                                                : null

                                        }
                                    </div>
                                </div>

                                <div className="">
                                    <h3 className="mb-2 text-2xl">Objetivo</h3>

                                    <h3>{proy?.objetive}</h3>
                                </div>

                                <div className="">
                                    <h3 className="mb-2 text-2xl">Herramientas y tecnología</h3>
                                    <div className="">
                                        {proy?.tools_tech.replaceAll('-', ',')}.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Page