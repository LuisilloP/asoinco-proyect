import React from 'react'
import { imageDataSponsors } from "../data/arrays"
import Image from 'next/image'
type Props = {}

const Sponsors = (props: Props) => {
    return (
        <section className='pt-10'>
            <hr className="h-[2px] my-8 bg-yellow-500 border-1 mx-20"></hr>
            <h2 className='text-[1.8rem] font-bold text-gray-800'>Auspicado por</h2>
            <div className=' slider '>
                <div className='slide-track'>
                    {imageDataSponsors.map((value, i) => (
                        <div key={i} className='slide '><Image src={value.src} alt='' width={200} height={200} className='h-[200px] w-[200px] object-contain ' /></div>
                    ))}
                    {imageDataSponsors.map((value, i) => (
                        <div key={i} className='slide '>  <Image src={value.src} alt='' width={200} height={200} className='h-[200px] w-[200px] object-contain ' /></div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Sponsors