"use client"
import React, { use, useState } from 'react'
import { comunasPorRegion } from "../data/arrays"
import Checklist from './Checklist'
import { FormDataAsoinco } from '../Interfaces'
import { fireAlert } from '../sweetAlert/message'
type Props = {}

const FormAsoinco = (props: Props) => {

    const [data, setData] = useState<FormData[]>([])

    const [selectedRegion, setSelectedRegion] = useState('');
    const [comunas, setComunas] = useState<string[]>([]);
    const currentYear = new Date().getFullYear();
    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const region = event.target.value;
        setSelectedRegion(region);
        setComunas(comunasPorRegion[region] || []);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //obtenemos el form del html con los valores actuales
        const formData = new FormData(event.currentTarget);
        //transformamos la fecha en un formato valido
        const fechaNac = `${formData.get('dia')}/${formData.get('mes')}/${formData.get('anio')}`
        //tomamos el valor obtenido y lo pasamos a string para que sea usable en typescript
        const getValue = (key: string) => {
            const value = formData.get(key);
            return typeof value === 'string' ? value : '';
        };
        // creamos un objeto con la interfaz de formdata 
        const formValues: FormDataAsoinco = {
            nombre: getValue('nombre'),
            apellido: getValue('apellido'),
            rut: getValue('rut'),
            genero: getValue('genero'),
            fecha_nac: fechaNac,
            region: getValue('region'),
            comuna: getValue('comuna'),
            correo: getValue('correo'),
            celular: getValue('celular'),
            compania: getValue('compania'),
            intereses: formData.getAll('intereses').map(value => value.toString()) as string[]
        };
        fireAlert(formValues)

    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto lato-regular">
            <div className="grid grid-cols-2 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" pattern='[a-zA-Z]{4,}' title='mas 3 letras' name="nombre" id="nombre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-9000 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="nombre" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre: </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" pattern='[a-zA-Z]{4,}' title='mas 3 letras' name="apellido" id="apellido" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-9000 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="apellido" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido: </label>
                </div>
            </div>
            {/* rut y genero */}
            <div className="grid grid-cols-2 gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" pattern="\d{7,9}-[\dKk]" title='sin puntos y con guion ej: 12345678-9' name="rut" id="rut" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-9000 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="rut" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rut: <span className=' text-[11px]'>(ej:12345678-9)</span></label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="genero" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Genero: </label>
                    <select required id="genero" name='genero' className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option value="" defaultChecked>Seleccione</option>
                        <option value="masculino" >Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>

                    </select>
                </div>
            </div>
            {/* fecha nacimiento */}
            <div>
                <label htmlFor="checklist" className="font-medium text-sm text-gray-400 mb-5">Ingrese fecha de nacimiento</label>
                <div className="h-5"></div>
                <div className='grid grid-cols-3 gap-3'>

                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="dia" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dia</label>
                        <select required id="dia" name='dia' className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option defaultChecked value="">Seleccione dia</option>
                            {[...Array(31)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="mes" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mes</label>
                        <select required id="mes" name="mes" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option defaultChecked value="">Seleccione mes</option>
                            {[...Array(12)].map((_, index) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                            ))}
                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="anio" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Año</label>
                        <select required id="anio" name='anio' className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option defaultChecked value="">Seleccione año</option>
                            {[...Array(110)].map((_, index) => {
                                const yearValue = currentYear - index;
                                return <option key={yearValue} value={yearValue}>{yearValue}</option>
                            })}

                        </select>
                    </div>
                </div>

            </div>
            {/* region y comuna  */}
            <div className="grid grid-cols-2 gap-6">

                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="region" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Region</label>
                    <select required id="region" name='region' className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" onChange={handleRegionChange}>
                        <option defaultChecked value="" >Seleccione una región</option>
                        {Object.keys(comunasPorRegion).map(region => (
                            <option key={region} value={region}>
                                {region.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label htmlFor="comuna" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comuna</label>
                    <select required id="comuna" name='comuna' className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-[1px] border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option defaultChecked value="">Seleccione una comuna</option>
                        {comunas.map(comuna => (
                            <option key={comuna} value={comuna}>
                                {comuna}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            {/*Email */}
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="correo" id="correo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-9000 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="correo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address: </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{9}" title='formato 9123456789' name="celular" id="celular" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-9000 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="celular" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular: </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="compania" id="compania" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-9000 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="compania" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Compañia: (Ex. Entel)</label>
                </div>
            </div>

            <div className='text-sm'>
                <label htmlFor="checklist" className="font-medium text-sm text-gray-500">Marque sus intereses</label>
                {/* <span className=' text-[10px]'> (al menos 1)</span> */}
                <div className='grid grid-cols-2 gap-3'>
                    <Checklist names="intereses" values='tecnología'></Checklist>
                    <Checklist names="intereses" values='construcción'></Checklist>
                    <Checklist names="intereses" values='negocios'></Checklist>
                    <Checklist names="intereses" values='inmobiliaria'></Checklist>
                    <Checklist names="intereses" values='salud'></Checklist>
                    <Checklist names="intereses" values='alimentos'></Checklist>
                    <Checklist names="intereses" values='minería'></Checklist>
                    <Checklist names="intereses" values='industrial'></Checklist>
                </div>
            </div>
            <button className="text-white lato-bold mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">!Preinscibirme!</button>
        </form>

    )
}

export default FormAsoinco