import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Nav = ({isActive}) => {

    useGSAP(() => {
        if(isActive){
            gsap.from('#about', {
                duration: .5,
                y: '100px',
                ease:'0.76 0 0.24 1',
                delay: .5
            })
            gsap.from('#services', {
                duration: .5,
                y: '100px',
                ease:'0.76 0 0.24 1',
                delay: .5
            })
            gsap.from('#gallery', {
                duration: .5,
                y: '100px',
                ease:'0.76 0 0.24 1',
                delay: .5
            })
            gsap.from(".social", {
                duration: .5,
                opacity: 0,
                ease:'0.76 0 0.24 1',
                delay: .5
            })
        }
    }, [isActive])

  return (
    <nav className='h-full pt-[100px] pl-[40px] pb-[50px] pr-[40px] font-[nunito] flex flex-col justify-between border-2 border-black rounded-xl'>
        <div className='flex flex-col gap-8'>
            <a href='/' className='xl:text-4xl text-2xl '>
                <span className='inline-flex overflow-hidden'>
                    <span id='about' className='inline-block'>About</span>
                </span>
            </a>
            <a href='/' className='xl:text-4xl text-2xl'>
                <span className='inline-flex overflow-hidden'>
                    <span id='services' className='inline-block'>Services</span>
                </span>
            </a>
            <a href='/' className='xl:text-4xl text-2xl'>
                <span className='inline-flex overflow-hidden'>
                    <span id='gallery' className='inline-block'>Gallery</span>
                </span>
            </a>
            <a href='/' className='xl:text-4xl text-2xl'>
                <span className='inline-flex overflow-hidden'>
                    <span id='gallery' className='inline-block'>Book Now</span>
                </span>
            </a>
        </div>
        <div className='flex gap-8 justify-center items-center'>
            <a href='/' className='social text-md'>Instagram</a>
            <a href='/' className='social text-md'>Facebook</a>
        </div>
    </nav>
  )
}

export default Nav