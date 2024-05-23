import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/logo.png";
import { MdArrowOutward } from "react-icons/md";
const Hero = () => {
  return (
    <section id='hero' className='px-12 xl:px-24 py-12 w-full flex flex-col justify-between h-screen'>
        <div>
            <Image src={logo} width={100} height={100} alt='lavish beauty studio logo in black color tone' />
        </div>
        <div className='flex flex-col gap-4 items-baseline justify-end xl:p-24 '>
            <h1 className='flex flex-col leading-tight'>
                <span>
                    <span className='text-5xl xl:text-9xl text-primary font-[melodrama]'>Lavish <span className='italic text-secondary'>Beauty</span> </span>
                </span>
                <span>
                    <span className='text-5xl xl:text-9xl text-primary font-[melodrama]'>Studio.</span>
                </span>
            </h1>
            <p>
                <span className='xl:text-2xl font-[nunito] text-primary'>Offering wide range of services.</span>
            </p>
            <button className= 'xl:text-xl bg-secondary px-4 py-2 rounded-full text-center flex justify-center items-center  font-[nunito] uppercase'>Book Now <MdArrowOutward /> </button>
        </div>
    </section>
  )
}

export default Hero