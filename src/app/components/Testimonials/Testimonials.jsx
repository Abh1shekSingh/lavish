"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const testimonials = [
  { id: 1, text: "Pleasant experience. Lovely Staff", author: "Rebecca" },
  { id: 2, text: "Excellent service. I go there regularily for beauty services and have always had a good experience. Highly recommended.", author: "Renna" },
  { id: 3, text: "Thank you ladies at Lavish. Been having my lashes done here for a while, so accommodating, kind and honest. Always happy with the service, would highly recommend Amit | A+", author: "Dora the explorer" },
  { id: 4, text: "Always perfect lashes for the last 18 months. I don't go anywhere else. Love them!!!!", author: "Chantel" },
  { id: 5, text: "I recommend this place 100% all the girls are very sweet and give the best attention I always when I leave the shop I feel very happy because they make me much more prettier thank you  :🌟🌟🌟🌟🌟", author: "Marianni" },
  { id: 6, text: "Great service with waxing and eyelash extensions Highly recommend.", author: "Maria" },
  { id: 7, text: "Thad my eyebrows threaded and I was very impressed with the service. They were very thorough and friendly.", author: "Kajal" },
  { id: 8, text: "Extremely professional and best at providing services...I recommend it to everyone", author: "Mahila" },
  { id: 9, text: "Really happy with them will definitely go back again", author: "Tanya" },
  { id: 10, text: "I came from Gawler and stopped by their studio. I must say Most AMAZING salon. The girls are so friendly and the service is very efficient. So glad to have found this amazing place Will definitely be recommending to everyone i know.", author: "Rajvir" },
  { id: 11, text: "Great customer service! Got the eyebrows heading done and amit did fabulous job.", author: "Preet" },
  { id: 12, text: "Thank you so much ladies for always fitting me in last minute. Love your customer service and my brows have never looked this good! Special thank you to Meena she is so lovely and always takes good care of me", author: "Georgia" },
  { id: 13, text: "Amazing attention to detail and client comfort. Super impressed!", author: "Lydia" },
  // Add more testimonials if needed
];

const Testimonials = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useGSAP(() => {
    requestAnimationFrame(animation);
  },[])

  const animation = () => {
    if(xPercent <= -100) {
      xPercent = 0;
    }
   
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.01 * direction;
    requestAnimationFrame(animation);
  }
  

  return (
    <section id='testimonials' className='mt-[-100svh] p-sectionPadding'>
      <div className='relative h-svh'></div>
      <div className='sticky min-h-screen -bottom-80 overflow-hidden'>
        <div className='absolute top-0'>
          <h1 className='font-[melodrama] text-5xl mb-24'>Our Happy Customers</h1>
          <div className='relative flex justify-center items-center'>
            <div ref={firstText} className='m-0 flex gap-12 '>
              {
                testimonials.map((testimonial, index) => {
                  return <div key={index} className='flex flex-col justify-center rounded-3xl items-center  w-[400px] h-[400px] p-7 gap-8'>
                    <h1 className='font-[nunito] text-center text-3xl'>"{testimonial.text}"</h1>
                    <h6 className='font-[nunito] text-center text-sm italic'>-{testimonial.author}</h6>
                  </div> 
                })
              }
            </div>
            <div ref={secondText} className='m-0 flex gap-12 '>
              {
                testimonials.map((testimonial, index) => {
                  return <div key={index} className='flex flex-col justify-center rounded-3xl items-center  w-[400px] h-[400px] p-7 gap-8'>
                    <h1 className='font-[nunito] text-center text-3xl'>"{testimonial.text}"</h1>
                    <h6 className='font-[nunito] text-center text-sm italic'>-{testimonial.author}</h6>
                  </div> 
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
