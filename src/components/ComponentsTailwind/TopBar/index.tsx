"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    const onClose = () => {
        console.log('menus')
        setOpen(!open)
    }


    return (
        <div className="container max-w-screen-2xl mx-auto p-6">

            <div className={`hidden md:grid md:grid-rows-1 md:grid-cols-2`}>
                <Link href={"#"}><span className="text-2xl">Portafolio</span></Link>
                <nav className="flex gap-4">
                    <li><Link href={'#'}>Acerca de</Link></li>
                    <li><Link href={'#'}>Proyectos</Link></li>
                    <li><Link href={'#'}>Habilidades</Link></li>
                    <li><Link href={'#'}>Experiencia</Link></li>
                    <li><Link href={'#'}>Servicios</Link></li>
                    <li><Link href={'#'}>Contacto</Link></li>
                </nav>
            </div>
            <div className="md:hidden flex justify-end">
                <button onClick={onClose}><i className="text-2xl bi bi-menu-button-wide"></i></button>
            </div>
            <nav className={`z-50 ${open ? "": "hidden"} border-2 border-solid w-1/2 backdrop-blur-sm`}>
                <li><Link href={'#'}>Acerca de</Link></li>
                <li><Link href={'#'}>Proyectos</Link></li>
                <li><Link href={'#'}>Habilidades</Link></li>
                <li><Link href={'#'}>Experiencia</Link></li>
                <li><Link href={'#'}>Servicios</Link></li>
                <li><Link href={'#'}>Contacto</Link></li>
            </nav>
        </div>
    )
}

