"use client";
import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/Optimised/logo.webp";
import { MdArrowOutward } from "react-icons/md";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

    useGSAP(() => {
        gsap.from('.heading', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power4.out',
            stagger: 0.2
        })
        gsap.from('.subheading', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power4.out',
        })
        gsap.from('.button', {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'power4.out',
        })
    })
  return (
    <section id='hero' className='px-12 xl:px-24 py-12 w-full flex flex-col justify-between h-screen'>
        <div>
            <Image src={logo} width={100} height={100} alt='lavish beauty studio logo in black color tone' />
        </div>
        <div className='flex flex-col gap-4 items-baseline justify-end xl:p-24 '>
            <h1 className='flex flex-col w-full leading-tight'>
                <span className='inline-flex overflow-hidden'>
                    <span className='heading  text-5xl xl:text-9xl text-primary font-[melodrama]'>Lavish <span className='italic text-secondary'>Beauty</span> </span>
                </span>
                <span className='inline-flex overflow-hidden'>
                    <span className='heading text-5xl xl:text-9xl text-primary font-[melodrama]'>Studio.</span>
                </span>
            </h1>
            <p className='inline-flex overflow-hidden'>
                <span className='subheading xl:text-2xl font-[nunito] text-primary'>Offering wide range of services.</span>
            </p>
            <button className= 'button xl:text-xl bg-secondary px-4 py-2 rounded-full text-center flex justify-center items-center  font-[nunito] uppercase'>Book Now <MdArrowOutward /> </button>
        </div>
    </section>
  )
}

export default Hero