"use client";
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Button = ({isActive, setIsActive}) => {
    useGSAP(() => {
        if(isActive){
            gsap.to('#slider', {
                duration: .5,
                y: '-100%', 
                ease:'0.76 0 0.24 1'
            })
        }else{
            gsap.to('#slider', {
                duration: .5,
                y: '0%',
                ease:'0.76 0 0.24 1'
            })
        }
    }, [isActive])
  return (
    <div onClick={() => setIsActive(!isActive)} className='w-[100px] h-[40px] absolute top-0 right-0 overflow-hidden  rounded-full cursor-pointer'>
        <div id='slider' className='relative w-full h-full font-[nunito] uppercase'>
            <div className='w-full h-full bg-secondary flex justify-center items-center'>
                <p>menu</p>
            </div>
            <div className='w-full h-full absolute top-[100%] flex justify-center items-center bg-black text-white'>
                <p>close</p>
            </div>
        </div>
    </div>
  )
}

export default Button