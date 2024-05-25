"use client";
import Image from 'next/image';
import React, { useEffect } from 'react'
import owner from '/public/assets/owner.png'
const page = () => {
    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll({
                lenisOptions: {
                  duration: 2,
                }
              });
          }
        )()
      }, [])
  return (
    <section id='about' className='w-full min-h-screen '>
        
    </section>
  )
}

export default page