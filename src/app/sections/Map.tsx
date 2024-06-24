import React from 'react'

type Props = {}

const Map = (props: Props) => {
    return (
        <div className='md:px-10'>
            <hr className="h-[2px] my-8 bg-red-500 border-1 mx-20"></hr>
            <h2 className='text-[1.8rem] font-bold text-gray-800'>Como llegar</h2>
            <div className='w-full pt-10'>
                <div className=''>
                    <iframe className=' hover:scale-105 transition ease-in-out w-full h-[30rem] lg:h-[40vw] border-0 ' loading="lazy" src="https://maps.google.com/maps?q=-30.0213625%2C-71.2559452&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near" title="-30.0213625,-71.2559452" aria-label="-30.0213625,-71.2559452"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Map