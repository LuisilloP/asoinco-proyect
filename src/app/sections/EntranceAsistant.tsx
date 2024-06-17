import React from 'react'

import ButtonGoForm from '../components/ButtonGoForm'
type Props = {}

const EntranceAsistant = (props: Props) => {
    return (
        // <div className="relative">
        //     <div className="bg-principal-image w-[100vw] h-[30rem] md:h-[40rem] bg-center principal-image opacity-20 bg-no-repeat bg-cover"></div>

        //     <div className="absolute bottom-0 left-0 w-full px-4 py-8 justify-between content-between  ">
        //         <div className="flex items-center">
        //             <h1 className="text-5xl font-bold text-white lato-black ">Expo Asoinco 2024</h1>
        //         </div>
        //         <ButtonGoForm></ButtonGoForm>
        //         <div className="mt-4 flex space-x-4">
        //             <div className="flex items-center">
        //                 <h3 className="mr-2 text-white">| Icono</h3>
        //                 <h3 className="text-white">3, 4 y 5 de noviembre</h3>
        //             </div>

        //             <div className="flex items-center ">
        //                 <h3 className="mr-2 text-white">| Icono</h3>
        //                 <h3 className="text-white">un lugar de Coquimbo, Coquimbo</h3>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="relative w-[100vw] h-[45rem] md:h-[40rem] flex flex-col justify-end  items-center">
            {/* Capa de fondo con opacidad */}
            <div className="absolute inset-0 z-10 bg-black bg-opacity-65"></div>

            {/* Contenido de texto */}
            <div className="relative z-20 font-serif  text-white text-center lato-black ">


                <div className=" flex  flex-col  gap-10">
                    <div className="flex items-center pb-28">
                        <h1 className=" text-5xl md:text-7xl font-bold text-white lato-black ">Expo Asoinco 2024</h1>
                    </div>
                    <div className='flex flex-col  gap-10 '>
                        <div className='mx-10'><ButtonGoForm></ButtonGoForm></div>
                        <div className='mb-10 px-5'>
                            <div className="flex items-center">
                                <h3 className="mr-2 text-white">| Icono</h3>
                                <h3 className="text-white">3, 4 y 5 de noviembre</h3>
                            </div>
                            <div className="flex items-center ">
                                <h3 className="mr-2 text-white">| Icono</h3>
                                <h3 className="text-white">un lugar de Coquimbo, Coquimbo</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Fondo de imagen con parallax */}
            <div className="absolute inset-0 z-0 bg-fixed bg-cover bg-principal-image bg-bottom"></div>
        </div >
    )
}

export default EntranceAsistant