"use client";
import darkSaasLandingPage from "@/assets/images/pro1.png";
import lightSaasLandingPage from "@/assets/images/visa1.png";
import taxone from "@/assets/images/tax1.png";
import vatone from "@/assets/images/tax2.png";
import isoone from "@/assets/images/iso1.png";
import companyone from "@/assets/images/cmpny.png";
import companytwo from "@/assets/images/cmpnytwo.png";
import companythree from "@/assets/images/cmpnythree.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import marketing from '@/assets/images/marketing1.png';
import intellectual from '@/assets/images/intellectual1.png';
import hiring from '@/assets/images/hiring1.png';
import outsourcing from '@/assets/images/outsourcing1.png';
import { SectionHeader } from "@/components/SectionHeader";
const portfolioProjects = [
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Services",
    aboutmain:"At National Gulf Consultants, we provide comprehensive solutions to empower businesses in Oman across various sectors. Our expertise spans business incorporation, visa processing, PRO services, marketing strategies, ISO certifications, and tax consulting. With a commitment to excellence, we tailor our services to meet your unique requirements, ensuring compliance, efficiency, and sustainable growth. Whether you're starting a new venture, enhancing operations, or meeting regulatory standards, our experienced team is here to guide you every step of the way. Partner with us to unlock opportunities, streamline processes, and achieve your business goals with confidence and ease.",
    kl:"one",
    titleone:"Business Incorporation Consulting",
    aboutone:`We specialize in guiding businesses through seamless incorporation processes in Oman. Whether you’re establishing a foreign-owned entity, a local Omani-owned company, or a free zone business, we ensure efficient compliance with legal requirements. From registering trade names and updating commercial registrations (CR) to setting up sole proprietor companies (SPC) or limited liability companies (LLC), our experts handle it all. We also provide comprehensive solutions for joint and limited partnerships, company share transfers, and commercial registration updates. With our deep expertise, businesses can navigate Oman’s regulatory landscape effortlessly, ensuring swift and successful market entry.`,
    titletwo:"Tax Services Consulting",
    abouttwo:"We provide expert tax consulting services to help businesses in Oman remain compliant and optimize their financial strategies. Our offerings include corporate tax and VAT registration, VAT compliance, reporting, and comprehensive VAT health checks to ensure accuracy. We assist with Oman-specific transfer pricing, VAT filing services, and economic substance regulations to meet local and international standards. For SMEs, we deliver tailored finance and tax solutions, ensuring cost-effective compliance. Additionally, we help businesses secure tax residency certificates, enabling them to benefit from Oman’s tax treaties. With our proactive approach, your business stays compliant, efficient, and well-prepared for any regulatory changes.",
    titlethree:"Visa Services Consulting",
    aboutthree:"We simplify visa acquisition processes for individuals and businesses in Oman. We specialize in obtaining Golden Visas and investor visas tailored to your needs, including 5-year and 10-year investor options. Whether you're applying for a visit visa, securing an investor visa, or managing visa services for employees, our team ensures a smooth and hassle-free process. With our expertise in navigating Oman’s immigration regulations, we help you meet all requirements efficiently and with minimal delays. Trust us to handle the complexities, allowing you to focus on your investments and personal goals in Oman.",
    titlefour:"PRO Services Consulting",
    aboutfour:"We offer comprehensive PRO services to streamline administrative processes for businesses in Oman. Our expertise covers document clearing, municipality licensing facilitation, and support with the Ministry of Commerce and Industry. We also assist with Chamber of Commerce and Industry requirements, ensuring seamless compliance with regulatory standards. From handling Ministry of Labour services to navigating complex documentation, our dedicated team saves you time and effort, enabling your business to focus on growth. Trust us to manage these crucial processes efficiently and professionally, minimizing delays and ensuring smooth operations.",
    titlefive:"Promotion and Marketing Consulting",
    aboutfive:"We provide solutions and tools to match the challenges and objectives, to improve the marketing performance of clients in line with Oman's requirement. We provide a strategic approach for brand promotion and marketing methods. National Gulf helps the clients in doing marketing research and drafting the marketing strategy.",
    titlesix:"Intellectual Property Registration Consulting",
    aboutsix:"We consider the brand of our clients as a unique asset. National Gulf provide a smooth and secure online registration process to secure the brands. Trademarks registration provides the possibility of license franchising or selling the trademark. It offers the legally protected rights of the brand.",
    titleseven:"ISO Certification Consulting",
    aboutseven:"We provide expert guidance for achieving internationally recognized ISO certifications. Our services cover a wide range of standards, including ISO 9001:2015 for quality management, ISO 22000:2018 for food safety, and ISO 14001:2015 for environmental management. We also specialize in ISO 27001:2013 for information security, ISO 20000-1:2011 for IT service management, and ISO 45001:2018 for occupational health and safety. Our team ensures a smooth certification process, helping your organization meet regulatory requirements, improve operational efficiency, and enhance credibility. With our tailored approach, we make the path to certification straightforward and efficient, empowering businesses to excel in their industries.",
    titleeight:"Hiring and Staffing Consulting",
    abouteight:"We understand the importance of acquiring professional and skilled workforce in success of any business and our devoted hiring team provides customized solutions for each client based on the nature of the business. National Gulf can significantly reduce the hiring time and cost in mobilizing the required staffing for smooth start of the business operations. Our talent search is extended to all major business sectors like Oil and Gas, Engineering, Facility Management, Retail Sector, Construction Industry, and many more.",
    titlenine:"Outsourcing Workforce and Services Consulting",
    aboutnine:"Workforce is composed of equally talented pool of professionals and workers from diverse backgrounds and experience. National Gulf executes the practice of engaging external professionals and workers to handle specific task and functions for the smooth work execution. Outsourcing Workforce and Services allow companies to focus on their core competencies by delegating non-core activities to external partners. It can be full time/temporary/project based/region based, etc.",
    
    link: "./",
    imageone:companythree,
    imagetwo:taxone,
    imagethree:lightSaasLandingPage,
    imagefour:darkSaasLandingPage,
    imagefive:marketing,
    imagesix:intellectual,
    imageseven:isoone,
    imageeight:hiring,
    imagenine:outsourcing,
    
  },
  


  


  
  
];


export const ServiSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Our Services"
          title="What We Offer to Empower Your Growth"
          description="Our team is here to provide top-notch solutions tailored to your needs. Browse through each service to see how we can bring value to your business."
        />
        <div className="mt-10 md:mt-20 flex flex-col transition duration-300">
          {portfolioProjects.map((project) => (
            <div
              key={project.kl}
              className="backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-20 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 xs:-mx-2 after:pointer-events-none lg:top-3">   
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="">
                <div className="lg:pb-16">
                  {/* Company Info */}
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest md:text-sm lg:text-base xs:text-xs text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl text-left">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                  <h3 className="font-sans md:text-lg xs:text-sm mt-4 mb-4 text-left">
                      {project.aboutmain}
                    </h3>
                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titleone}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.aboutone}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imageone}
                        alt={project.title}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>
                 
                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titletwo}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.abouttwo}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imagetwo}
                        alt={project.title}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titlethree}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.aboutthree}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imagethree}
                        alt={project.title}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titlefour}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.aboutfour}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imagefour}
                        alt={project.title}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titlefive}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.aboutfive}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imagefive}
                        alt={project.title}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titlesix}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.aboutsix}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imagesix}
                        alt={project.titlesix}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titleseven}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.aboutseven}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imageseven}
                        alt={project.titleseven}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titleeight}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.abouteight}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imageeight}
                        alt={project.titleeight}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col">
                    <h3 className="font-serif text-2xl mt-2 md:mt-2 md:text-3xl text-left">
                      {project.titlenine}
                    </h3>
                    <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2" />
                    
                    <h3 className="font-sans md:text-lg xs:text-sm mt-4 text-left">
                      {project.aboutnine}
                    </h3>

                    <div className="flex justify-center mt-4 md:mt-4 lg:mt-4">
                      <Image
                        src={project.imagenine}
                        alt={project.titlenine}
                        layout="intrinsic"
                        className="w-full max-w-xs md:max-w-sm xs:w-64 xs:h-64 md:w-[300px] md: h-[300px] rounded-lg"
                      />
                    </div>
                  </div>

               

                  {/* Button */}
                  <a href={project.link} className="mt-8 mb-3">
                    <div className="relative flex items-center justify-center mt-8 mb-11">
                      <button className="backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-20 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff] text-gray-950 h-10 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span className="">Go Home</span>
                        <ArrowUpRightIcon className="w-4 h-4 text-green-700" />
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
