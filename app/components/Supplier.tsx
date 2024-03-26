'use client'

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


function Suppliers() {

  return (
    <main className="flex h-[90vh] min-w-screen flex-col justify-between p-16 gap-y-20 ">
      <div className="flex flex-col gap-y-4 w-80">
          <div className="w-[60px] h-[4px] bg-[#57CC99]"/>
          <div className="text-2xl font-bold my-auto">Our Premium Suppliers</div>
        </div>
  </main>
  );
}

export default Suppliers;
