import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
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
    <nav className='h-full pt-[100px] pl-[40px] pb-[50px] pr-[40px] font-[melodrama] flex text-white flex-col justify-between shadow-xl rounded-xl'>
        <div className='flex flex-col gap-8'>
            <Link href='/' className='xl:text-4xl text-2xl hover:text-black transition-all duration-500'>
                <span className='inline-flex overflow-hidden'>
                    <span id='about' className='inline-block'>Home</span>
                </span>
            </Link>
            <Link href='#about' className='xl:text-4xl text-2xl hover:text-black transition-all duration-500 '>
                <span className='inline-flex overflow-hidden'>
                    <span id='about' className='inline-block'>About</span>
                </span>
            </Link>
            <Link href='/' className='xl:text-4xl text-2xl hover:text-black transition-all duration-500'>
                <span className='inline-flex overflow-hidden'>
                    <span id='services' className='inline-block'>Services</span>
                </span>
            </Link>
            <Link href='/' className='xl:text-4xl text-2xl opacity-40 '>
                <span className='inline-flex overflow-hidden'>
                    <span id='gallery' className='inline-block'>Gallery</span>
                </span>
            </Link>
            <Link href='https://bookings.gettimely.com/lavishbeautystudio1/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F146599%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue'  target='_blank' className='xl:text-4xl text-2xl hover:text-black transition-all duration-500'>
                <span className='inline-flex overflow-hidden'>
                    <span id='gallery' className='inline-flex items-center gap-2'>Book Now <MdArrowOutward /></span>
                </span>
            </Link>
        </div>
        <div className='flex gap-8 justify-center font-[nunito] items-center'>
            <Link href='https://www.instagram.com/studiolavishbeauty/' target='_blank' className='social text-lg uppercase font-semibold '>Instagram</Link>
            <Link href='https://www.facebook.com/lavishbeautystudio.com.au/?ref=page_internal' target='_blank' className='social text-lg uppercase font-semibold'>Facebook</Link>
        </div>
    </nav>
  )
}

export default Nav