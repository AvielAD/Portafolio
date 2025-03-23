"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(!open)
    }
    return (
        <div className="fixed w-full border-2 border-solid md:backdrop-blur-md z-50">
            <div className={`max-w-screen-xl mx-auto`}>
                <div className={`hidden md:grid md:grid-rows-1 md:grid-cols-2 p-6`}>
                    <Link href={"#topsection"}><span className="text-2xl">Portafolio</span></Link>
                    <nav className="flex gap-4">
                        <li><Link href={'#aboutsection'}>Acerca de</Link></li>
                        <li><Link href={'#proyectsection'}>Proyectos</Link></li>
                        <li><Link href={'#skillsection'}>Habilidades</Link></li>
                        <li><Link href={'#'}>Experiencia</Link></li>
                        <li><Link href={'#'}>Servicios</Link></li>
                        <li><Link href={'#'}>Contacto</Link></li>
                    </nav>
                </div>
                <div className={`${open ? "hidden" : ""} md:hidden p-2 absolute flex justify-end w-full z-50`}>
                    <button onClick={onClose}><i className="text-2xl bi bi-menu-button-wide"></i></button>
                </div>
                <div onClick={onClose} className={`${open ? "" : "hidden"} md:hidden w-full absolute flex justify-end backdrop-blur-sm`}>
                    <div onClick={(e) => e.stopPropagation()} className="w-1/2 shadow-lg p-2 bg-gray-100 h-screen">
                        <div className={`${open ? "" : "hidden"} flex justify-between`}>
                        <Link href={"#topsection"}><span className="text-2xl">Portafolio</span></Link>

                            <button onClick={onClose}>
                                <i className="bi bi-x-lg"></i>

                            </button>
                        </div>
                        <div className="">
                            <nav className={`mt-6 flex flex-col space-y-4`}>
                                <li><Link href={'#aboutsection'} className="text-lg font-medium transition-colors hover:text-primary">Acerca de</Link></li>
                                <li><Link href={'#proyectsection'} className="text-lg font-medium transition-colors hover:text-blue-500">Proyectos</Link></li>
                                <li><Link href={'#skillsection'}>Habilidades</Link></li>
                                <li><Link href={'#'}>Experiencia</Link></li>
                                <li><Link href={'#'}>Servicios</Link></li>
                                <li><Link href={'#'}>Contacto</Link></li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

