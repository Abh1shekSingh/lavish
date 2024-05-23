"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect } from "react";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}
