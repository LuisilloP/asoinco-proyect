import React from 'react'
import ImagesAbout from '../components/ImagesAbout'

type Props = {}

const About = (props: Props) => {
    return (
        <section id='about' className=' flex flex-col gap-6 md:flex-row lg:px-44'>
            <div className=''>
                <h2 className='text-[1.8rem] font-bold text-gray-800'>Asoinco y Expo 2023</h2>
                <hr className="h-[4px] my-2 bg-blue-500 w-[18.5rem] "></hr>
                <div className='pt-5 text-gray-600 text-sm'><p className=''>La Asociación Gremial de Industriales de Coquimbo (Asoinco) trabaja en conjunto con el Gobierno de Chile para fortalecer las micro, pequeñas y medianas empresas (MiPymes) de la región. La Expo Asoinco, celebrada en el Barrio Industrial de Coquimbo, es un evento clave que reúne a empresas locales y nacionales para fomentar la colaboración y la reactivación económica.</p>

                    <hr className="h-[1.8px] my-5 bg-orange-300 mx-20 lg:mx-40 "></hr>
                    <p>El evento incluye charlas y exposiciones sobre alianzas productivas, estrategias nacionales como la del litio, y la transformación digital para MiPymes. También se realiza una Rueda de Negocios impulsada por Sercotec. La Expo es una plataforma importante para generar empleos de calidad y promover una economía sostenible, facilitando el encuentro entre emprendedores y empresas para establecer nuevas relaciones comerciales.</p>
                </div>
            </div>
            <div className='  '>
                <ImagesAbout></ImagesAbout>
            </div>


        </section>

    )
}

export default About