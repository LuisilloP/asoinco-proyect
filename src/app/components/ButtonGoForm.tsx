"use client"
import React from 'react'

type Props = {}

const Button = (props: Props) => {
    const goForm = () => {

    }
    return (
        // <a href="#_" className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
        //     <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-blue-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
        //     <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
        //     <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
        //     <span className="relative text-blue-600 transition-colors duration-300 ease-in-out delay-100 group-hover:text-white lato-black">!Vamos al formulario!</span>
        // </a>
        <a
            className="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            onClick={(event) => {
                event.preventDefault()
                document.querySelector(`#form-section`)?.scrollIntoView({ behavior: 'smooth', block: "start" })
            }}

        >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-500 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg className="w-5 h-5 text-green-400 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className="w-5 h-5 text-green-400 rotate-90 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">!Vamos al formulario!</span>
        </a>

    )
}

export default Button