import Image from 'next/image';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import logo from "/public/assets/Optimised/logo.webp";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="xl:p-sectionPadding px-12 pt-12 min-h-screen bg-secondary text-white rounded-t-3xl">
      <div className='grid grid-cols-12 items-end'>
        <div className='xl:col-span-9 col-span-12'>
          <h1 className='xl:text-8xl text-5xl font-[melodrama] uppercase xl:w-3/4'>Unleash your inner <span className='italic text-dark'>glow</span> with every visit.</h1>
        </div>
        <div className='xl:col-span-3 col-span-12 mt-7 xl:mt-0 flex justify-end items-start flex-col gap-8'>
          <h2 className='text-[nunito] text-lg xl:w-3/4'>Ready to feel your best? Click here to book your appointment now!</h2>
          <Link href="https://bookings.gettimely.com/lavishbeautystudio1/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F146599%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue" target="_blank"><button className='bg-primary text-[nunito] text-secondary font-bold w-full rounded-full uppercase py-4 px-2 flex justify-center items-center xl:text-xl'>Book your appointment <MdArrowOutward className='text-2xl' /></button></Link>
        </div>
      </div>
      <div className='xl:mt-24 mt-12 grid grid-cols-12 border-b-2'>
        <div className='xl:col-span-4 mt-12 xl:mt-0 order-last xl:order-first col-span-12 mb-4'>
          <Image src={logo} alt='logo' className='opacity-100' width={500} height={500} loading='lazy'/>
        </div>
        <div className='xl:col-span-4 col-span-12 flex justify-center xl:items-end flex-col'>
          <h1 className='font-[melodrama] uppercase text-3xl mb-2'>Harbour town</h1>
          <p className='xl:text-end'>Outlet Centre T36B,<br></br> Adelaide Airport SA 5950</p>
          <p>PH: 0468469032</p>
        </div>
        <div className='xl:col-span-4 mt-12 xl:mt-0 col-span-12 flex justify-center xl:items-end flex-col'>
          <h1 className='font-[melodrama] uppercase text-3xl mb-2'>UNLEY SHOOPING CENTER</h1>
          <p className='xl:text-end'>T34 Shopping Centre,<br></br> Unley SA 5061</p>
          <p>PH: 0468469014</p>
        </div>
      </div>
      <div className='mt-2'>
        <h6 className='font-[nunito]'>&copy; All Right Reserved.</h6>
      </div>
    </footer>
  )
}

export default Footer