import Image from "next/image"
import ImageTech from '@/assets/mk2.png'
const Index = () => {
    return (
        <section className="max-w-screen-xl mx-auto pt-20">
            <div className="grid grid-cols-5 gap-2">
                <div className="col-span-5 md:col-span-2 md:grid md:justify-center md:content-center px-4">
                    <p className="text-4xl break-words">Hola, soy Aviel Aldama <span className="text-3xl break-normal">desarrollador web full stack</span></p>
                </div>
                <div className="hidden md:col-span-3 md:grid md:justify-center">
                    <Image src={ImageTech} alt="top section" className="rounded-lg" height="400" width="500"></Image>
                </div>
            </div>
        </section>

    )
}

export default Index