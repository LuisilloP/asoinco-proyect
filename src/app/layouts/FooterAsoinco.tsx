import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LogoFacebook from '../../../public/FLogo.svg'
import LogoInstagram from '../../../public/IgLogo.svg'
import LogoAso from '../../../public/logoAso.png'
type Props = {}

const FooterAsoinco = (props: Props) => {
    return (
        <footer className=' mt-10 bg-neutral-900 min-h-[5rem] mg-20 pb-8 md:pb-0 '>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={"/"} className=' flex z-50 font-title items-center text-xl uppercase'> <Image alt='logo' className='w-10' src={LogoAso}></Image> <p className='text-white'>Asoinco</p> </Link>
                    <div>

                        <div className='pt-3 flex gap-3 items-center'>
                            <p className='  text-white font-bold uppercase '>Síguenos en redes sociales</p>
                            <Link href={"https://www.instagram.com/asoinco.barrioindustrial/"} target='_blank'><Image src={LogoInstagram} width={27} height={27} alt='Logo Instagram' ></Image></Link>
                            <Link href={""} target='_blank'><Image src={LogoFacebook} width={27} height={27} alt='Logo Facebook' ></Image></Link>
                            <Link href={"https://www.asoinco.cl/"} target='_blank'><Image src={LogoFacebook} width={27} height={27} alt='Logo Facebook' ></Image></Link>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>
    )
}

export default FooterAsoinco