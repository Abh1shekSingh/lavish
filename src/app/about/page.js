"use client";
import Image from 'next/image';
import React, { useEffect } from 'react'
import owner from '/public/assets/Optimised/owner.webp'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import cloud from "/public/assets/Optimised/circle.svg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
]
const About = () => {
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

      useGSAP(() => {
        gsap.from('#about-heading', {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: 'power4.out',
          stagger: 0.2
        })

        gsap.from('#about-text', {
          y: 100,
          duration: 1,
          opacity: 0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '#about-text',
            start: 'top 90%',
            end: 'bottom 90%',
            scrub: true,
            once: true
          }        
        })
      })
  return (
    <section id='about' className='w-full bg-primary min-h-screen xl:p-sectionPadding px-12 py-12'>
        <div>
          <div className='relative'>
            <h1 className='xl:text-8xl text-5xl font-[melodrama] xl:w-5/6 w-full'>
              <span className='overflow-hidden inline-flex'>
                <span id='about-heading'>Unleash Your Inner Beauty with Our Expert Touch.</span>
              </span>
              <span className='overflow-hidden xl:visible hidden inline-flex'>
                <span id='about-heading'>with Our Expert Touch.</span>
              </span>
            </h1>
            <div className='relative flex justify-center mt-9 items-center z-0 mx-auto w-full overflow-hidden'>
              <Image className='aspect-auto absolute left-[15%]  -z-[1] object-cover opacity-80' src={cloud} alt="loop" width={400} height={400} loading='lazy' />
              <Image className='aspect-auto absolute right-[15%]  -z-[1] object-cover opacity-80' src={cloud} alt="loop" width={400} height={400} loading='lazy' />
              <Image className='aspect-auto rounded object-cover' src={owner} alt="owner of lavish beauty salon" width={500} height={500} loading='lazy' />
              <div className='w-[500px] rounded h-full absolute top-0  bg-gradient-to-t from-primary  to-transparent '></div>
            </div>
          </div>
          <h4 className='-mt-8 w-full relative z-2 font-[nunito] xl:text-2xl text-xl flex justify-end items-end'>
            <span id='about-text' className='max-w-[44ch]'>Lavish Beauty Studio is a family-owned and operated business. Despite the challenges of the COVID-19 pandemic, we boldly launched at Harbour Town Shopping Centre in August 2020. Our passion for beauty is unwavering, and we are committed to providing precision, perfection, and perseverance through our highly trained staff. We ensure our customers receive excellent services and professional advice.</span>
          </h4>
        </div>
        {/* <div className='w-full flex mt-32 gap-8 h-[175vh] gallery'>
          <Column imagess = {[images[0], images[1], images[2]]} />
          <Column imagess = {[images[3], images[4], images[5]]} />
          <Column imagess = {[images[6], images[7], images[8]]} />
          <Column imagess = {[images[9], images[10], images[11]]} />
        </div> */}
    </section>
  )
}

// const Column = ({imagess}) => {
//   return (
//     <div className='w-[25%] h-[100%] flex flex-col gap-8 min-w-[250px]'>
//       {
//         imagess.map((image, i) => {
//           return <div key={i} className='w-[100%] h-[100%] relative'>
//             <Image src={`/assets/${image}`} fill alt={`image ${i}`} objectFit='cover'/>
//           </div>
//         })
//       }
//     </div>
//   )
// }

export default About