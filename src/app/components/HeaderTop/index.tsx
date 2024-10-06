'use client'
import { useState } from "react"

const Index = () => {
    const [show, setShow] = useState(false)
    return (
        <header className="max-w-screen-2xl mx-auto h-8">
            <div className="grid md:grid-cols-3 grid-cols-2 grid-rows-1 justify-between text-center mt-8">

                <div className="">
                    Logo
                </div>
                <div className="hidden md:flex justify-center">
                    <ul className="inline-flex">
                        <li className=""><a href="">Inicio</a></li>
                        <li className="ml-6"><a href="">Proyectos</a></li>
                        <li className="ml-6"><a href="">Acerca de</a></li>
                        <li className="ml-6"><a href="">Contacto</a></li>
                    </ul>
                </div>
                <div >
                    <button onClick={() => { console.log("click");setShow(!show) }} 
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        > <i className="bi bi-list text-xl"></i> </button>

                </div>

                <div className={`absolute ${show ? "hidden": "flex"} md:hidden w-full mt-12`}>
                    <ul className="flex flex-col w-full">
                        <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><a href="">Inicio</a></li>
                        <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><a href="">Proyectos</a></li>
                        <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><a href="">Acerca de</a></li>
                        <li className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><a href="">Contacto</a></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Index