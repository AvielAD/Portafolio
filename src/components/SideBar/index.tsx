'use client'
import Link from "next/link"
import { useState } from "react"

interface MenuState {
    inicio: boolean,
    about: boolean,
    skill: boolean,
    portfolio: boolean,
    contact: boolean
}
const MenuStyle = {
    bgGray: "bg-gray-400",
    bgBlue: "bg-blue-700",
}
const InitialValues = {
    inicio: false,
    about: false,
    skill: false,
    portfolio: false,
    contact: false
}

const Index = () => {
    const [menu, setMenu] = useState<MenuState>(InitialValues)

    return (<>
        <div className="m-3 text-2xl grid gap-4 text-white">
            <div onClick={() => setMenu({ ...InitialValues, inicio: true })}
                className={`rounded-full p-3 ${menu.inicio ? MenuStyle.bgBlue : MenuStyle.bgGray} `}>
                <Link key={1} href={"#Inicio"}>
                    <i className="bi bi-house"></i>
                    <span className="hidden">Inicio</span>
                </Link>
            </div>
            <div onClick={() => setMenu({ ...InitialValues, about: true })}
                className={`rounded-full p-3 ${menu.about ? MenuStyle.bgBlue : MenuStyle.bgGray}`}>
                <Link key={2} href={"#About"} className="">
                    <i className="bi bi-person"></i>
                    <span className="hidden">Acerca de</span>
                </Link>
            </div>
            
            <div onClick={() => setMenu({ ...InitialValues, portfolio: true })}
                className={`rounded-full p-3 ${menu.portfolio ? MenuStyle.bgBlue : MenuStyle.bgGray} `}>
                <Link href={"#Portfolio"}>
                    <i className="bi bi-suitcase-lg"></i>
                    <span className="hidden">Proyectos</span>
                </Link>
            </div>
            <div onClick={() => setMenu({ ...InitialValues, contact: true })}
                className={`rounded-full p-3 ${menu.contact ? MenuStyle.bgBlue : MenuStyle.bgGray}  `}>
                <Link href={"#Contact"} className="">
                    <i className="bi bi-envelope"></i>
                    <span className="hidden">Contacto</span>
                </Link>
            </div>
        </div>
    </>)
}

export default Index