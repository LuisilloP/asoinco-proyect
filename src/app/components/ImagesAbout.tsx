"use client"
import React from 'react'
import { imagesData } from "../data/arrays"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
type Props = {}

const ImagesAbout = (props: Props) => {
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper cursor-pointer h-[20rem] rounded-sm"
            >
                {imagesData.map((urlImage, i) => (

                    <SwiperSlide key={i}><Image className=' ' src={urlImage.src} width={800} height={500} alt="image Asoinco"></Image></SwiperSlide>
                ))}
            </Swiper>

        </>
    )
}

export default ImagesAbout