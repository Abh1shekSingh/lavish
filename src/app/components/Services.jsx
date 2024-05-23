import Image from 'next/image'
import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
    const targetRef = useRef(null);
    useGSAP(() => {
    
          gsap.fromTo(".third", 
            { opacity: 1 }, 
            {
              opacity: 0,
              duration:0.5,
              ease:"power4.out",
              scrollTrigger: {
                trigger: ".third",
                start: "top+=33% top",
                end: "top+=66% top", 
                scrub: true,
              }
            }
          );
          gsap.fromTo(".second", 
            { opacity: 0 }, 
            {
              opacity: 1,
              duration:0.5,
              ease:"power4.out",
              scrollTrigger: {
                trigger: ".second",
                start: "top+=33% top",
                end: "top+=66% top", 
                scrub: true,
              }
            }
          );
          gsap.fromTo(".second", 
            { opacity: 1 }, 
            {
              opacity: 0,
              duration:0.5,
              ease:"power4.out",
              scrollTrigger: {
                trigger: ".second",
                start: "top+=66% top",
                end: "top+=100% top", 
                scrub: true,
              }
            }
          );
          gsap.fromTo(".first", 
            { opacity: 0 }, 
            {
              opacity: 1,
              duration:0.5,
              ease:"power4.out",
              scrollTrigger: {
                trigger: ".first",
                start: "top+=66% top",
                end: "top+=100% top", 
                scrub: true,
              }
            }
          );
      }, []);
  return (
    <section ref={targetRef} className='w-full h-[300vh] relative z-20 rounded-t-3xl'>
        <div className='absolute w-full h-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sticky top-0'>
          <div className='bg-secondary h-[30vh] rounded-tl-3xl lg:h-auto'></div>
          <div className='bg-primary h-[90vh] rounded-tr-3xl lg:min-h-screen'></div>
        </div>
      </div>
      <div className='sticky top-0 h-screen overflow-hidden'>

        <div className='first absolute top-0 w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>
            <div className='work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto'>
              <div className='leading-10 text text-white'>
                <div>We Design and developed</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Lorem Ipsum</div>
              </div>
            </div>
            <div className='work-right flex flex-1 lg:items-center justify-center h-screen'>
              <div className='w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0 image'>
                <Image src='https://images.unsplash.com/photo-1704146087769-ba4d31543936?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'  width={500} height={500} alt='Picture' />
              </div>
            </div>
          </div>
        </div>
        <div className='second absolute top-0 w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>
            <div className='work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto'>
              <div className='leading-10 text text-white'>
                <div>We Design and developed</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Craftzblog</div>
              </div>
            </div>
            <div className='work-right flex flex-1 lg:items-center justify-center h-screen'>
              <div className='w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0 image'>
                <Image src='https://images.unsplash.com/photo-1704121355552-10ac4d5b1677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} alt='Picture' />
              </div>
            </div>
          </div>
        </div>
        <div className='third absolute top-0 w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>
            <div className='work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto'>
              <div className='leading-10 text text-white'>
                <div>We Design and developed</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Leetcode</div>
              </div>
            </div>
            <div className='work-right flex flex-1 lg:items-center justify-center h-screen'>
              <div className='w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0 image'>
                <Image src='https://images.unsplash.com/photo-1701937189060-8b87985d85e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D' width={500} height={500} alt='Picture' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services