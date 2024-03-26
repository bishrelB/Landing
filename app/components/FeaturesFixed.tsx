'use client'

import React, { use, useEffect, useState } from "react";
import "animate.css";
import pic1 from "./../../public/images/pic.jpeg";
import pic2 from "./../../public/images/pic1.jpeg";
import pic3 from "./../../public/images/pic2.jpeg";
import pic4 from "./../../public/images/pic3.png";
import pic5 from "./../../public/images/pic4.jpeg";
import Image from "next/image";
import "../globals.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@nextui-org/react";


const listArray = [
    {
      number: 1,
      title: "Know the origin",
      key: "Traceability",
      info: "Ensure absolute transparency in the origin of your products and raw materials, directly sourced from herders and herder cooperatives. Our seamless integration with government agencies and implementation of Agri•X Distributed Ledger Technology (DLT) guarantee complete trust and traceability throughout your supply chain",
      background: pic1,
    },
    {
      number: 2,
      title: "Processing",
      key: "Traceability",
      info: "Ensure absolute transparency in the origin of your products and raw materials, directly sourced from herders and herder cooperatives.",
      background: pic2,
    },
    {
      number: 3,
      title: "Trading",
      key: "Traceability",
      info: "Ensure absolute transparency in the origin of your products and raw materials, directly sourced from herders and herder cooperatives.",
      background: pic3,
    },
    {
      number: 4,
      title: "Logistics",
      key: "Traceability",
      info: "Ensure absolute transparency in the origin of your products and raw materials, directly sourced from herders and herder cooperatives.",
      background: pic4,
    },
    {
      number: 5,
      title: "Data",
      key: "Traceability",
      info: "Ensure absolute transparency in the origin of your products and raw materials, directly sourced from herders and herder cooperatives.",
      background: pic5,
    },
  ];

const FeaturesFixed = () => {

    const [hoverIndex, setHoverIndex] = useState<number>(0)
    const [image, setImage] = useState(pic1)
    const [active, setActive] = useState<string>('in-active')

    const clickedBox = (index: number) => {
        index === hoverIndex ? setHoverIndex(0) : setHoverIndex(index);
      };

    useEffect(() => {
        console.log(hoverIndex, 'HOVER INDEX')
        if(hoverIndex === 1 || hoverIndex ===  2 || hoverIndex === 3 || hoverIndex === 4) {
            setImage(listArray[hoverIndex].background)
            setActive('active')
        } else {
          setImage(listArray[0].background)
            setActive('in-active')
        }
        //console.log(active)
    }, [hoverIndex])

  return (
    <main className="flex bg-gray-50 min-w-screen flex-col justify-between p-16 gap-y-12">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-4 w-80">
          <div className="w-[60px] h-[4px] bg-[#57CC99]"/>
          <div className="text-2xl font-bold my-auto">Platform feature</div>
          <div className="font-light text-lg text-[#64696E]">Discover Mongolian Sustainable Agricultural Products for Your Business Needs.</div>
        </div>
        <div className="flex gap-x-6 items-center">
        <Progress color="success" aria-label="Loading..." value={70} />
          <div className="flex gap-x-2">
            <button disabled={(hoverIndex > 0) ? false: true} className="rounded-full h-[35px] w-[35px] bg-[#57CC99] text-white font-semibold" onClick={(() => setHoverIndex((prev) => prev - 1))}>
              <ArrowLeft className="mx-auto" size={20}/>
            </button>
            <button  disabled={(hoverIndex < 4) ? false : true} className="rounded-full h-[35px] w-[35px] bg-[#57CC99] text-white font-semibold" onClick={(() =>setHoverIndex((prev) => prev + 1))} >
              <ArrowRight className="mx-auto" size={20}/>
            </button>
          </div>
        </div>
      </div>
    <div className="relative w-[100%] h-[380px] rounded-3xl flex overflow-hidden">
        <Image
            className={`rounded-2xl ${active}`}
            src={image}
            alt="Background picture"
            fill={true}
        />
        {
            listArray.map((box, index) => {
                return (
                    <div
                    key={index}
                    className={`z-20 flex items-center justify-center hover:cursor-pointer border border-[0.3px] border-white ${
                      hoverIndex === index ? "w-1/2" : "flex-1"
                    }`}
                    //onClick={() => clickedBox(index)}
                    onMouseLeave={() => clickedBox(0)}
                    onMouseEnter={() => clickedBox(index)}
                  >
                    <div
                      className={`flex flex-col ${
                        hoverIndex === index ? "items-start px-12" : "items-center"
                      }`}
                    >
                      {hoverIndex === index ? (
                        <div className="text-white text-sm mb-4 border border-[0.6px] border-white rounded-full px-4 py-2 backdrop-sepia-0 bg-white/20 font-semibold animate__animated animate__fadeIn animate__duration-2">
                          {box.number}. {box.key}
                        </div>
                      ) : (
                        <div className="text-white text-3xl font-semibold">
                          {box.number}.
                        </div>
                      )}
                      <div
                        className={`text-white text-[22px] font-semibold text-center ${
                          hoverIndex === index
                            ? "animate__animated animate__fadeIn animate__duration-3"
                            : ""
                        }`}
                      >
                        {box.title}
                      </div>
                      <div
                        className={`text-white mt-6 text-sm font-light ${
                          hoverIndex === index
                            ? "visible animate__animated animate__fadeIn animate__duration-2"
                            : "hidden"
                        }`}
                      >
                        {box.info}
                      </div>
                    </div>
                  </div>
                )
            })
        }
    </div>
  </main>
  )
}

export default FeaturesFixed