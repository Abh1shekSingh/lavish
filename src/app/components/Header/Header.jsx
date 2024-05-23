"use client";
import React, { useState } from 'react'
import Button from './Button'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Nav from './Nav';
const Header = () => {
    const [isActive, setIsActive] = useState(false);

    useGSAP(() => {
        if(isActive){
            gsap.to('#menu', {
                duration: .5,
                width: '400px',
                height: '550px', 
                top: '-25px',
                right: '-25px',
                ease:'0.76 0 0.24 1'
            })
        }else{
            gsap.to('#menu', {
                duration: .5,
                width: '100px',
                height: '40px',
                top: '0px',
                right: '0px',
                ease:'0.76 0 0.24 1'
            })
        }
    
    }, [isActive])
  return (
    <header className='fixed z-[999] right-[50px] top-[50px]'>
        <div id='menu' className='relative rounded-xl bg-secondary'>
            {isActive && <Nav isActive = {isActive} />}
        </div>
        <Button isActive = {isActive} setIsActive = {setIsActive} />
    </header>
  )
}

export default Header