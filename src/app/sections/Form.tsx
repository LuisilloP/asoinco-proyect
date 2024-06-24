import React from 'react'
import FormAsoinco from '../components/FormAsoinco'
import form_image from "../../../public/form_image.jpg"
import Image from 'next/image'
type Props = {}

const Form = (props: Props) => {
    return (
        <section id="form-section" className=''>
            <h2 className='text-[1.8rem] font-bold text-gray-800 pb-5 lg:px-60'>Completa nuestra preinscripcion para el evento</h2>
            <div className='flex flex-col md:flex-row lg:mx-[15rem] '>
                <div className='pb-5 lg:pt-[4rem] flex-1 text-gray-700 text-sm'>
                    <div className='pt-5'>
                        <p className=''>¡Preinscríbete ahora para disfrutar de un acceso rápido y sin esperas al evento! Evita largas filas y comienza a disfrutar de inmediato.</p>
                        <br></br>
                        <p>Al momento de realizar la preinscripción para el evento,se generará un código QR. Este código QR servirá como tu identificación y será utilizado para registrar tu asistencia el día del evento.<br></br><br></br> Asegúrate de guardar el código QR en tu dispositivo móvil o imprimirlo, ya que deberás presentarlo en el punto de entrada.</p>
                    </div>

                </div>
                <hr className="lg:hidden h-[1px] my-8 bg-green-500 border-1 mx-20"></hr>
                <section id="" className='flex-1'>
                    <h2 className=' text-center text-[1.5rem] font-bold text-blue-600 pb-4'>Formulario</h2>
                    <FormAsoinco></FormAsoinco>
                </section>
            </div>
        </section>
    )
}

export default Form