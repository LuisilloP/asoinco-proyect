import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='pt-10  mx-3 flex flex-col gap-6 md:flex-row '>
            <div className=''>
                <h2 className='text-[1.8rem] font-bold text-gray-800'>Conoce Expo 2023</h2>
                <div className='pt-5 text-gray-600'><p className=''>La Asociación Gremial de Industriales de Coquimbo (Asoinco) trabaja en conjunto con el Gobierno de Chile para fortalecer las micro, pequeñas y medianas empresas (MiPymes) de la región. La Expo Asoinco, celebrada en el Barrio Industrial de Coquimbo, es un evento clave que reúne a empresas locales y nacionales para fomentar la colaboración y la reactivación económica.</p>
                    <br></br>
                    <p>El evento incluye charlas y exposiciones sobre alianzas productivas, estrategias nacionales como la del litio, y la transformación digital para MiPymes. También se realiza una Rueda de Negocios impulsada por Sercotec. La Expo es una plataforma importante para generar empleos de calidad y promover una economía sostenible, facilitando el encuentro entre emprendedores y empresas para establecer nuevas relaciones comerciales.</p>
                </div>
            </div>
            <div className=' bg-expo-image w-[100%]  h-[30rem] bg-contain bg-no-repeat '></div>


        </div>

    )
}

export default About