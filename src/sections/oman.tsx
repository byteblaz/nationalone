"use client";
import { SectionHeader } from "@/components/SectionHeader";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import omanone from "@/assets/images/omanone.jpg";
import omantwo from "@/assets/images/omantwo.jpg";
import omanthree from "@/assets/images/retwo.png";
import omanfour from "@/assets/images/omanseven.jpg";
import omanfive from "@/assets/images/omanfive.png";
import omansix from "@/assets/images/omansix.jpg";
import omaneight from "@/assets/images/omaneight.png";
import omannine from "@/assets/images/omannine.png";
import omanthirteen from "@/assets/images/omanthirteen.png";
import omaneleven from "@/assets/images/oman11.png";
import blurbg from "@/assets/icons/blurbg.svg";
import { Card } from "@/components/card";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
const OmanC = [
    {
      company: "National Gulf Consultants",
      year: "2014",
      title: "Investor-Friendly Policies",
      kl:"one",
      description:"Oman encourages foreign investment with attractive incentives, including tax holidays, 100% foreign ownership in certain sectors, and streamlined licensing processes. Free zones like Duqm and Salalah offer additional benefits, including exemptions from customs duties and competitive leases, ensuring businesses find a supportive ecosystem tailored to their success. ",
      image: omanone,
    },
    {
      company: "National Gulf Consultants",
      year: "2014",
      title: "World-Class Infrastructure",
      kl:"two",
      results: [
        { title: "PRO Services and Documents Clearing" },
        { title: "Ministry of Commerce and Industry Support" },
        { title: "Chamber of Commerce and Industry Assistance" },
        { title: "Municipality Licensing Facilitation" },
        { title: "Ministry of Labour Services" },
        
      ],
      
      description:"Oman is equipped with modern infrastructure, including state-of-the-art airports, expansive highways, and deep-water ports. These facilities facilitate seamless trade and travel, enabling businesses to thrive. Additionally, advanced telecommunications and industrial hubs further support efficient operations, providing the tools necessary for enterprises to scale effectively.",
      image:omansix,
    },{
      company: "National Gulf Consultants",
      year: "2014",
      title: "Political Stability",
      kl:"three",
      results: [
        { title: "PRO Services and Documents Clearing" },
        { title: "Ministry of Commerce and Industry Support" },
        { title: "Chamber of Commerce and Industry Assistance" },
        { title: "Municipality Licensing Facilitation" },
        { title: "Ministry of Labour Services" },
        
      ],
      
      description:"Renowned for its peace and security, Oman enjoys a stable political environment under visionary leadership. This stability fosters confidence among investors and professionals, providing a safe and predictable setting for business operations. Oman's foreign policies and internal harmony make it a standout choice in the region for sustainable development.",
      image: omanthree,
    },{
      company: "National Gulf Consultants",
      year: "2014",
      title: "Commitment to Sustainability and Innovation",
      kl:"four",
      results: [
        { title: "PRO Services and Documents Clearing" },
        { title: "Ministry of Commerce and Industry Support" },
        { title: "Chamber of Commerce and Industry Assistance" },
        { title: "Municipality Licensing Facilitation" },
        { title: "Ministry of Labour Services" },
        
      ],
      
      description:"Oman Vision 2040 outlines ambitious goals for economic diversification, technological innovation, and environmental sustainability. Investments in renewable energy, smart cities, and sustainable industries reflect the country's commitment to building a future-ready economy, offering businesses and investors long-term growth opportunities aligned with global trends.",
      image: omanfive,
    },{
      company: "National Gulf Consultants",
      year: "2014",
      title: "High Quality of Life",
      kl:"five",
      results: [
        { title: "PRO Services and Documents Clearing" },
        { title: "Ministry of Commerce and Industry Support" },
        { title: "Chamber of Commerce and Industry Assistance" },
        { title: "Municipality Licensing Facilitation" },
        { title: "Ministry of Labour Services" },
        
      ],
     
      description:"Oman offers an exceptional standard of living, characterized by safety, excellent healthcare, and top-tier education options. The country’s natural beauty, from stunning beaches to majestic mountains, enhances its appeal for expatriates. With a family-friendly environment and a focus on well-being, Oman is an ideal destination for professionals seeking work-life balance.",
      image: omannine,
    },{
      company: "National Gulf Consultants",
      year: "2014",
      title: "Skilled Workforce and Labor-Friendly Laws",
      kl:"six",
      description:"Oman boasts a growing pool of skilled professionals and adopts transparent labor laws that balance the interests of employers and employees. Businesses benefit from a talented workforce, while professionals experience clear pathways for career advancement. Training initiatives and government support ensure that the labor market remains competitive and adaptable.",
      image: omanthirteen,
    },
    {
      company: "National Gulf Consultants",
      year: "2014",
      title: "Cultural Hospitality",
      kl:"seven",
      description:"Oman is famed for its welcoming culture, where locals embrace diversity and foster strong community ties. Expatriates feel at home in a harmonious society that values mutual respect. This hospitality, combined with rich traditions and modern amenities, creates a comfortable environment for professionals and families alike.",
      image: omaneleven,
    },]

export const OmanSection = () => {
    
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1.2%", "-85%"]);
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Oman: Your Gateway to Success" title="Why Choose Oman?" description= "With its strategic location, investor-friendly policies, and thriving economy, Oman is the ideal destination for growth. Enjoy world-class infrastructure, unmatched stability, and a high quality of life in a nation committed to innovation and opportunity"/>
        <div ref={targetRef} className="relative h-[300vh]">
          <div className=" sticky top-0 xs:mt-2 sm:mt-0 md:mt-10 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 ">
            {OmanC.map((project) => (
            <Card key={project.kl} className="max-w-3xl sm:w-[80vw] xs:w-[80vw] relative backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff]">
                
                <div className="flex justify-center items-center">
                <a href="#">
                 <Image className="rounded-lg object-contain" src={project.image} alt="" layout="intrinsic" />
                </a>
                </div>
                <div className="p-5">
                 <a href="#">
                <h5 className="mb-2 md:text-2xl font-serif bg-gradient-to-r from-emerald-300 to-purple-300 bg-clip-text sm:text-lg xs:text-lg ">{project.title}</h5>
                 </a>
              <p className="mb-3 font-sans sm:text-sm md:text-base xs:text-xs">{project.description}</p>
              <div className="flex justify-center items-center" >
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center   bg-white/25 backdrop-blur-3xl border border-white/25 rounded-lg hover:bg-blue-800">
                   Scroll For More
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
              </a>
              </div>
              </div>
        
            </Card>
                    
            ))}
            </motion.div>
      </div>
      </div>
      </div>
    </section>
  );
};
