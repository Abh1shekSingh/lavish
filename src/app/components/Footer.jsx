import Image from 'next/image';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import logo from "/public/assets/logo-footer.webp";

const Footer = () => {
  return (
    <footer className="p-sectionPadding h-screen ">
      <div className='grid grid-cols-12 items-end'>
        <div className='col-span-9'>
          <h1 className='text-8xl font-[melodrama] uppercase w-3/4'>Unleash your inner glow with every visit.</h1>
        </div>
        <div className='col-span-3 flex justify-end items-start flex-col gap-8'>
          <h2 className='text-[nunito] text-lg w-3/4'>Ready to feel your best? Click here to book your appointment now!</h2>
          <button className='bg-secondary text-[nunito] text-primary font-bold rounded-xl w-full uppercase py-2 flex justify-center items-center text-xl'>Book your appointment <MdArrowOutward /></button>
        </div>
      </div>
      <div className='mt-24 grid grid-cols-12 border-b-4'>
        <div className='col-span-4'>
          <Image src={logo} alt='logo' className='opacity-20' width={500} height={500}/>
        </div>
        <div className='col-span-4 flex justify-center items-end flex-col'>
          <h1 className='font-[melodrama] uppercase text-3xl mb-2'>Harbour town</h1>
          <p className='text-end'>Outlet Centre T36B,<br></br> Adelaide Airport SA 5950</p>
          <p>PH: 0468469032</p>
        </div>
        <div className='col-span-4 flex justify-center items-end flex-col'>
          <h1 className='font-[melodrama] uppercase text-3xl mb-2'>UNLEY SHOOPING CENTER</h1>
          <p className='text-end'>T34 Shopping Centre,<br></br> Unley SA 5061</p>
          <p>PH: 0468469014</p>
        </div>
      </div>
      <div className='mt-2'>
        <p className='font-[nunito]'>&copy; All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer