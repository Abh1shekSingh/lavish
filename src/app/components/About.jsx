"use client";
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
const paragraph = "Lavish Beauty Studio, nestled in the heart of Sydney, Australia,offers an exquisite range of beauty services tailored to enhance your natural radiance.Our skilled professionals specialize in bespoke treatments, from rejuvenating facials to luxurious manicures, ensuring a personalized experience for every client."
const words = paragraph.split(' ');
const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from('#about-text', {
            duration: 2,
            opacity: 0,
            ease: 'power4.out',
            stagger:1,
            scrollTrigger: {
                trigger: '#about-text',
                start: 'top-=200px center',
                end: 'bottom center',
                scrub: true,

            },
        })
    })
  return (
    <section className='mb-[-100svh]'>
        <div className='bg-primary h-svh top-0 sticky w-full flex justify-center items-center'>
            <h3  className='font-[nunito] flex flex-wrap xl:text-4xl text-xl px-7 max-w-[50ch]'>
                {
                    words.map((word, i) => {
                        return <Word key={i}>{word}</Word>
                    })
                }
            </h3>
        </div>
        <div className='h-svh'></div>
    </section>
  )
}

const Word = ({children}) => {
    const character = children.split('');
    return (
        <span className='relative mr-[12px] xl:mt-[12px] mt-[6px]'>
            {
                character.map((char, i) => {
                    return <Character key={i}>{char}</Character>
                })
            }
        </span>
    )
}

const Character = ({children}) => {
    return (
        <span>
        <span className='absolute opacity-[.2]'>{children}</span>
        <span id='about-text'>{children}</span>
        </span>
    )
}

export default About