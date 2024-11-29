"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/x.png";
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GitHubIcon from '@/assets/icons/github.svg'; 
import FireIcon from '@/assets/icons/fire.svg';
import Manu from '@/assets/icons/jkkl.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/Screenshot (166).png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { Toolboxitems } from "@/components/Toolboxitems";
import {motion} from 'framer-motion';
import { useRef } from "react";

const toolboxItems = [
  {
    title:'Construction',
    iconType: JavascriptIcon,
  },
  {
    title:'Oil And Gas',
    iconType: HTMLIcon,
  },
  {
    title:'Powerplant',
    iconType: CssIcon,
  },
  {
    title:'Petrochemical',
    iconType: ReactIcon
  },
  {
    title:'Insulation and Scaffolding',
    iconType: ChromeIcon,
  },
  {
    title:'Engineering',
    iconType: GitHubIcon,
  },
  {
    title:'Fire and Safety',
    iconType: FireIcon,
  },
  {
    title:'Manufacturing',
    iconType: Manu,
  },
];

const hobbies =[
  {
    title:'Hiring',
    emoji:'🧑🏻‍💼',
    left:"5%",
    top:"5%",
  },
  {
    title:'Consulting',
    emoji:'🧑🏻‍💻',
    left:"50%",
    top:"5%",
  },
  {
    title:'Outsourcing',
    emoji:'🤝',
    left:"35%",
    top:"40%",
  },
  {
    title:'Timely Services',
    emoji:'⌛',
    left:"10%",
    top:"35%",
  },
  {
    title:'Support 24/7',
    emoji:'📞',
    left:"70%",
    top:"45%",
  },
  {
    title:'Quality',
    emoji:'✔️',
    left:"5%",
    top:"65%",
  },
  {
    title:'Staffing Simplified',
    emoji:'👩🏻‍💼',
    left:"45%",
    top:"70%",
  },
]
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return(
   <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="Diverse Recruitment Expertise" title="We Have Extensive Recruitment Experience Across Various Industries" description="Explore the various fields we offer to find the right fit for you."/>
    <div className="mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
      <Card className="h-[320px] md:col-span-2 lg:col-span-1 backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff]">
        <CardHeader title="Our Mission" description="We create a new experience of Human Resource by reliable hiring, outsourcing and staffing solutions"/>
        <div className="w-40 mx-auto -mt-9 xs:mt-2 md:mt-0">
          <Image src={bookImage} alt="Book Cover"/>
          </div>
      </Card>
      <Card className="h-[320px]  md:col-span-3 lg:col-span-2 backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff]">
      <CardHeader title="Our Recruitment Fields" description="Our experience in recruiting extends to a wide range of fields" className=""/>
      <Toolboxitems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
      <Toolboxitems items={toolboxItems} className="mt-6"itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
      </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
      <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2 backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff]">
      <CardHeader title="What We Provide" description="We provide expert help and customized solutions to help you meet challenges and reach your goals." className="px-6 py-6"/>
      <div className="relative grid xs:gap-7 sm:gap-4 p-4 grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"  ref={constraintRef} >
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="flex items-center justify-center  gap-1 px-2 py-1  bg-white/25 backdrop-blur-3xl border border-white/25 rounded-full min-w-[120px] xs:-ml-5 sm:min-w-[125px] xs:min-w-[125px] xs:text-xxs sm:text-xxs md:text-xxs xs:-mt-4 sm:m-0"
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 whitespace-nowrap overflow-hidden text-ellipsis">
                      {hobby.title}
                    </span>
                    <span className="ml-1">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
      </Card>
      <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
      <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1828.5572896873718!2d58.58283!3d23.564328!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730544950299!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
      </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
        <Card className="flex flex-col col-span-1 md:col-span-5 lg:col-span-3 backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-20 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset]">
        <CardHeader title="Reach Out To Us" description="We’re here to assist you! Feel free to visit us at our address or give us a call. We’re happy to help with any questions or concerns." className="px-6 py-6 "/>
         <div className="flex flex-col px-8 md:px-12 md:pb-10 xs:pb-8">
          <h1 className="font-serif md:text-xl xs:text-lg"> 🏢 Address </h1> 
          <p className="py-1 xs:text-sm md:text-base"> National Gulf Business Management LLC, PO Box 1610 PC 114, Ruwi, Muscat, Sultanate of Oman </p>
          <h1 className="font-serif md:text-xl xs:text-lg mt-4"> 📞 Phone </h1> 
          <p className="py-1 xs:text-sm md:text-base"> +968 2475 0891, +968 9802 1900 </p>
         </div>
        </Card>

      </div>
    </div>
  </div>
  </div>
  );
};
