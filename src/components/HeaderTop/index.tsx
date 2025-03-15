'use client'
import { useState } from "react"
import Link from "next/link"
const Index = () => {
    const [show, setShow] = useState(false)
    return (
        <header className="">
            <div className="">
                <div className="">
                    Portafolio
                </div>
                <div className="">
                    <ul className="">
                        <li className=""><Link href="/">Inicio</Link></li>
                        <li className=""><Link href="/">Proyectos</Link></li>
                        <li className=""><Link href="">Acerca de</Link></li>
                        <li className=""><Link href="">Contacto</Link></li>
                    </ul>
                </div>
                <div >
                    <button onClick={() => { setShow(!show) }} 
                        className=""
                        > <i className=""></i> </button>

                </div>

                <div className={`absolute ${show ? "flex": "hidden"} z-10 bg-white md:hidden w-full mt-12`}>
                    <ul className="">
                        <li className=""><Link href="/">Inicio</Link></li>
                        <li className=""><Link href="/proyectos">Proyectos</Link></li>
                        <li className=""><Link href="/">Acerca de</Link></li>
                        <li className=""><Link href="/">Contacto</Link></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Index