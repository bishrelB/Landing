'use client'

import React, {useEffect, useRef, useState } from "react";
import "animate.css";
import "../globals.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Stastic = () => {
  const container = useRef()

  useGSAP(() => {

    gsap.to(".textPop", {
      scrollTrigger: {
        trigger: '.textPop',
      },
      delay: 0.4,
      color: 'white',
      ease: 'power1.inOut'
    }),{
      scope: {container}
    }
    },
  )

  return (
    <main className="flex h-[90vh] min-w-screen flex-col p-16 gap-y-20 bg-[#10261C] text-white">
      <div className="flex flex-col gap-y-4 w-80">
          <div className="w-[60px] h-[4px] bg-[#57CC99]"/>
          <div className="text-2xl font-bold my-auto">Statistic</div>
        </div>
        <div ref={container} className="w-3/4 grid grid-cols-2 gap-x-12 gap-y-12 text-[#10261C] text-3xl font-semibold">
            <div className="textPop">10%</div>
            <div className="textPop">$650B+</div>
        </div>
  </main>
  )
}

export default Stastic