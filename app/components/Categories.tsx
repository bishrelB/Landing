'use client'

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import meatBack from "@/public/images/categoryBackground/meatCategory.png"
import leatherBack from "@/public/images/categoryBackground/leatherCategory.png"
import cashmereBack from "@/public/images/categoryBackground/cashmereCategory.png"
import plantsBack from "@/public/images/categoryBackground/plantsCategory.png"
import dairyBack from "@/public/images/categoryBackground/dairyCategory.png"
import Image from "next/image";


const category = [{
  title: 'Meat',
  background: meatBack
}, {
  title: 'Leather',
  background: leatherBack
}, {
  title: 'Cashmere & Wool',
  background: cashmereBack
}, {
  title: 'Plants',
  background: plantsBack
}, {
  title: 'Diary',
  background: dairyBack
}]

function Categories() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let scrollLength = 0
    scrollLength = document.getElementById('scrollStart')
    console.log(scrollLength.offsetWidth, 'SCROLL LENGTH')
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: -1750, //ene container-iin urt baival zov ajilna
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `1800 top`, //2000 top ${scrollLength.offsetWidth}
          scrub: 0.6,
          pin: true,
          //markers: true
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/*the trigger below can't be the first jsx element in the component - will get an error on route change */}
      {/* the trigger and animation should always be two separated refs */}

      <div ref={triggerRef} id="scrollStart" >
        <div ref={sectionRef} className="scroll-section-inner" >
        <div className="self-start pt-36 flex flex-col justify-start items-start w-[30vw] gap-y-4">
            <div className="w-[60px] h-[4px] bg-[#57CC99]"></div>
            <div className="text-2xl font-bold">Our categories</div>
            <div className="font-light text-lg text-[#64696E]">Discover Mongolian Sustainable Agricultural Products for Your Business Needs.</div>
          </div>
          <div className="flex gap-x-8">
          {
            category.map((item, index) => {
              return (
                <div key={index} className= "relative bg-black rounded-3xl flex justify-start items-end p-12 text-white text-xl font-bold h-[450px] w-[450px]">
                  <Image className="rounded-3xl" src={item.background} alt="Category Background" fill/>
                  <h3 className="z-20">{item.title}</h3>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
