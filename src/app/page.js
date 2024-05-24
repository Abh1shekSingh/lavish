"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect } from "react";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
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
    <main className="">
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}
