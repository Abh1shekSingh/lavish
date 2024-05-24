import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hybrid from "/public/assets/HYBRID.png";
import wispy from "/public/assets/wispy.png";
import facial from "/public/assets/facial.png";
import waxing from "/public/assets/waxing.png";
import volume from "/public/assets/volume.png";
import classic from "/public/assets/classic.png";
import lash from "/public/assets/lash.png";
import threading from "/public/assets/threading.png";
import tinting from "/public/assets/tinting.png";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const targetRef = useRef(null);

    useEffect(() => {
        const elements = gsap.utils.toArray('.service');
        elements.forEach((element, index) => {
          if(index != 0) {

          
            gsap.fromTo(
                element,
                { opacity: 0, visibility:'hidden'},
                {
                    opacity: 1,
                    visibility:'visible',
                    duration: 0.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: element,
                        start: () => `top+=${index * 100}% top`,
                        end: () => `top+=${(index + 1) * 100}% top`,
                        scrub: true,
                    }
                }
            );

            gsap.fromTo(
                element,
                { opacity: 1 },
                {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: element,
                        start: () => `top+=${(index + 1) * 100}% top`,
                        end: () => `top+=${(index + 2) * 100}% top`,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                }
            );
          }
        });

        const firstImage = elements[0];
        gsap.fromTo(
            firstImage,
            { opacity: 1, visibility: 'visible' },
            {
                opacity: 0,
                duration: 0.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: elements[1], // Trigger on the second image
                    start: "top+=100% top",
                    end: "top+=200% top",
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            }
        );
      
    }, []);

    return (
        <section ref={targetRef} className='w-full h-[900vh] relative z-20 rounded-t-3xl'>
            <div className='absolute w-full h-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen sticky top-0'>
                    <div className='bg-secondary h-[30vh] rounded-tl-3xl lg:h-auto'></div>
                    <div className='bg-primary h-[90vh] rounded-tr-3xl lg:min-h-screen'></div>
                </div>
            </div>
            <div className='sticky top-0 h-screen overflow-hidden'>
                {[
                    { image: hybrid, text: 'Eyelash hybrid' },
                    { image: wispy, text: 'Eyelash Wispy' },
                    { image: facial, text: 'Facial Massage' },
                    { image: lash, text: 'Last Lift & Removal' },
                    { image: classic, text: 'Eyelash Classic' },
                    { image: waxing, text: 'Waxing' },
                    { image: threading, text: 'Threading' },
                    { image: tinting, text: 'Tinting' },
                    { image: volume, text: 'Eyelash Volume' }
                ].map((service, index) => (
                    <div key={index} className={`service absolute top-0 w-full`}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen'>
                            <div className='work-left flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto'>
                                <div className='leading-10 text text-white'>
                                    <h2 className='font-[nunito]'>Our Services</h2>
                                    <h1 className='font-[melodrama] text-4xl md:text-5xl font-semibold tracking-tight'>{service.text}</h1>
                                </div>
                            </div>
                            <div className='work-right flex flex-1 lg:items-center justify-center h-screen'>
                                <div className='w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0 image'>
                                    <Image src={service.image} width={400} height={400} alt={service.text} className={`rounded-3xl ${index === 5 ? '!w-[1000px]' : null}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;