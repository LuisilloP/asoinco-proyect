"use client"
import React from 'react'

import ButtonGoForm from '../components/ButtonGoForm'
import { motion } from 'framer-motion'
type Props = {}

const EntranceAsistant = (props: Props) => {
    const variantsConfig = (directionX: number = 0, directonY: number = 0) => {
        return {
            hidden: { opacity: 0, y: directonY, x: directionX },
            visible: { opacity: 1, y: 0, x: 0 }
        }
    }
    return (

        <div className="relative w-[100vw] h-[45rem] md:h-[40rem] flex flex-col justify-end  items-center">
            {/* Capa de fondo con opacidad */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-65"></div>

            {/* Contenido de texto */}
            <div className="relative z-20 font-serif  text-white text-center lato-black ">


                <div className=" flex  flex-col  gap-10">
                    <div className="flex items-center pb-28">
                        <motion.div
                            variants={variantsConfig(0, -100)}
                            initial="hidden"
                            animate={'visible'}
                            transition={{ duration: 1, delay: .5 }}
                        >
                            <h1 className=" text-5xl md:text-7xl font-bold text-white lato-black ">Expo Asoinco
                                <span className='text-orange-600'> 2</span><span className='text-green-600'>0</span><span className='text-red-600'>2</span><span className='text-yellow-600'>4</span>
                            </h1>
                        </motion.div >
                    </div>
                    <div className='flex flex-col  gap-10  '>
                        <motion.div
                            variants={variantsConfig(0, 100)}
                            initial="hidden"
                            animate={'visible'}
                            transition={{ duration: 1, delay: .5 }}
                        >
                            <div className='mx-10'><ButtonGoForm></ButtonGoForm></div>
                        </motion.div>
                        <motion.div
                            variants={variantsConfig(150, 0)}
                            initial="hidden"
                            animate={'visible'}
                            transition={{ duration: 1, delay: .5 }}
                        >
                            <div className='mb-10 px-5 text-[13px] md:text-[16px] '>
                                <div className="flex items-center">
                                    {/* <h3 className="mr-2 text-white">| Icono</h3> */}
                                    <h3 className="text-white">|  3, 4 y 5 de noviembre</h3>
                                </div>
                                <div className="flex items-center ">
                                    {/* <h3 className="mr-2 text-white">| Icono</h3> */}
                                    <h3 className="text-white"> |  Ruta D409 #4831, Pan de azucar</h3>
                                </div>


                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>


            {/* Fondo de imagen con parallax */}
            <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-principal-image bg-bottom"></div>
        </div >
    )
}

export default EntranceAsistant