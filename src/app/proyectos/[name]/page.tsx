'use client'
import { infoProyectos } from "@/utils/datainfo"
import Image from "next/image"
const Page = ({ params }: { params: { name: string } }) => {
    const proy = infoProyectos.find(x => x.path === params.name)

    return (
        <div className="max-w-screen-xl mx-auto mt-20 px-4">
            <h1 className="text-4xl">{proy?.title}</h1>
            <h2 className="">{proy?.subtitle}</h2>
            <div className="grid grid-cols-3 gap-2 m-2">
                {
                    proy?.imageviews?.map((item, index) => (
                        <div key={index} className="col-span-1">
                            <div className="relative h-60 w-full">
                                <Image className="rounded-lg" key={index} src={item} alt="imagen no disponible" fill></Image>
                            </div>
                        </div>))
                }
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-10">
                <div className="lg:col-span-2 p-4">
                    <div>
                        <h3 className="mb-2 text-2xl">Cliente</h3>
                        <h3>{proy?.about_client.split('.  ').map((item, index) => (<div key={index}>{item} <br /></div>))}</h3>
                        <h3 className="mb-2 text-2xl">View</h3>
                        <div className="">
                            <a href={proy?.url}>{proy?.url}</a>
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
                <div className="lg:col-span-4 p-4">
                    <h3 className="mb-2 text-2xl">Desafio</h3>
                    <div className="">
                        {proy?.challenge.split('. ').map((item, index) => (<div key={index}>{item} <br /> <br /></div>))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Page