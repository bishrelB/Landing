'use client'

import React, {useEffect, useRef, useState } from "react";
import "animate.css";
import "../globals.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const array = ['1']

const Stories = () => {
  const container = useRef()

  useGSAP(() => {
  
    /*
    gsap.to(".bigger", {
      scrollTrigger: {
        trigger: '.bigger',
        scrub: 1
      },
      delay: 0.4,
      scale: 1.2,
    })*/

    const timeline = gsap.timeline({repeat: 2})
    timeline.to('.bigger', {
      scrollTrigger: {
        trigger: '.bigger',
        scrub: 1
      }, 
      delay: 0.8,
      scale: 1.3,
      }, 
    )
    },
  )

  return (
    <main className="flex min-w-screen flex-col justify-between p-16 gap-y-20 bg-[#10261C] text-white">
      <div className="flex flex-col gap-y-4 w-80">
          <div className="w-[60px] h-[4px] bg-[#57CC99]"/>
          <div className="text-2xl font-bold my-auto">Success Stories</div>
        </div>
        <div className="flex flex-col gap-y-20">
          {
            array.map((item, index) => {
              return (
                <div key={index} className="w-full flex flex-col items-center"  ref={container}>
                  <div className="w-[70%] h-[300px] border border-[0.9px] border-white rounded-3xl bigger flex items-center justify-center">{item}</div>
                </div>
              )
            })
          }
        </div>
  </main>
  )
}

export default Stories