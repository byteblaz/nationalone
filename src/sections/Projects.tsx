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
const portfolioProjects = [{
  company: "National Gulf Consultants",
  year: "2014",
  title: "Business Incorporation Consulting",
  kl:"six",
  results: [
    { title: "Foriegn Ownership Company in Oman " },
    { title: "Local Omani Owned Company" },
    { title: "Free Zone Company" },
    { title: "Mainland Company" },
    { title: "Register Company Name or Trade Name in Oman" },
    
  ],
  link: "./Service",
  image: companyone,
},
{
  company: "National Gulf Consultants",
  year: "2014",
  title: "Business Incorporation Consulting",
  kl:"seven",
  results: [
    { title:"Commercial Registration Activities" },
    { title: "Company Share Transfer Services in Oman" },
    { title: "Limited Liability Company - LLC" },
    { title: "Update Commercial Registration - CR" },
    { title: "Sole Proprietor Company in Oman - SPC" },
    
  ],
  link: "./Service",
  image: companytwo,
},
{
  company: "National Gulf Consultants",
  year: "2014",
  title: "Business Incorporation Consulting",
  kl:"eight",
  results: [
    { title: "Joint Partnership" },
    { title: "Limited Partnership" },
    { title: "Business Setup in Oman" },
    { title: "Company Formation in Oman" },
    { title: "Company Registration in Oman" },
   
  ],
  link: "./Service",
  image: companythree,
},
{
  company: "National Gulf Consultants",
  year: "2014",
  title: "Tax Services Consulting",
  kl: "three",
  results: [
    { title: "Corporate tax Registration" },
    { title: "Tax (VAT) Registration" },
    { title: "VAT Health Check" },
    { title: "VAT Compliance and Reporting" },
    { title: "Oman Transfer Pricing" },
    

  ],
  link: "./Service",
  image: taxone,
},
{
  company: "National Gulf Consultants",
  year: "2014",
  title: "Tax Services Consulting",
  kl:"four",
  results: [
    { title: "VAT Filing Service" },
    { title: "SME Finance and Tax Solution" },
    { title: "Tax Residency Certificates" },
    { title: "Economic Substance Regulations" },

  ],
  link: "./Service",
  image: vatone,
},
{
  company: "National Gulf Consultants",
  year: "2014",
  title: "Visa Services Consulting",
  kl:"two",
  results: [
    { title: "Golden Visa in Oman" },
    { title: "Investor Visa in Oman" },
    { title: "Visit Visa Oman" },
    { title: "Visa Services in Oman" },
    { title: "5 Years Investor Visa in Oman" },
    { title: "10 Years Investor Visa in Oman" },
  ],
  link: "./Service",
  image: lightSaasLandingPage,
},

  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "PRO Services Consulting",
    kl:"one",
    results: [
      { title: "PRO Services and Documents Clearing" },
      { title: "Ministry of Commerce and Industry Support" },
      { title: "Chamber of Commerce and Industry Assistance" },
      { title: "Municipality Licensing Facilitation" },
      { title: "Ministry of Labour Services" },
      
    ],
    link: "./Service",
    image: darkSaasLandingPage,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Marketing and Promotion Consulting",
    kl:"nine",
    results: [
      { title: "Strategic Marketing Planning" },
      { title: "Brand Development and Positioning" },
      { title: "Creative Campaign Development" },
      { title: "Marketing In-line With Oman's Requirement" },
      { title: "Market Research and Analysis" },
      
    ],
    link: "./Service",
    image: marketing,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Intellectual Property Registration Consulting",
    kl:"ten",
    results: [
      { title: "Trademark Registration" },
      { title: "Copyright Registration" },
      { title: "IP Management" },
      { title: "Licensing and Franchising" },
      { title: "Online Registration Process" },
      
    ],
    link: "./Service",
    image: intellectual,
  },
  
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "ISO Certification Consulting",
    kl:"five",
    results: [
      { title: "ISO 9001:2015 Quality Management" },
      { title: "ISO 22000:2018 Food Safety Management" },
      { title: "ISO 14001:2015 Environmental Management" },
      { title: "ISO 27001:2013 Information Security Management" },
      { title: "ISO 20000-1:2011 IT Service Management" },
      { title: "ISO 45001:2018 Occupational Health And Safety Management" },
    ],
    link: "./Service",
    image: isoone,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Hiring and Staffing Consulting",
    kl:"eleven",
    results: [
      { title: "Talent Acquisition and Recruitment" },
      { title: "Onboarding and Induction" },
      { title: "Contract Staffing and Recruitment" },
      { title: "Compliance and Regulatory Adherence" },
      { title: "Multi-disciplinary Workforce" },
      
    ],
    link: "./Service",
    image: hiring,
  },
  {
    company: "National Gulf Consultants",
    year: "2014",
    title: "Outsourcing Workforce and Services Consulting",
    kl:"twelwe",
    results: [
      { title: "Diverse Talent Pool" },
      { title: "Focus on Core Competencies" },
      { title: "Flexible Workforce Models" },
      { title: "Task-Specific Engagement" },
      { title: "Strategic Partnership" },
      
    ],
    link: "./Service",
    image: outsourcing,
  },
];
export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Our Services" title="What We Offer"description="Take a quick glance at our professional services"/>
        <div className="mt-10 md:mt-20 flex flex-col transition duration-300">
       
        
        {portfolioProjects.map((project) => (
          
          <div
              key={project.kl}
              className=" backdrop-blur-2xl backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sm:-mx-2 after:pointer-events-none sticky -top-10 lg:top-3 xs:-mx-2 ">
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }}></div>
              
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
                <div className="lg:pb-16">
                  {/* Company Info */}
                  <div className="bg-gradient-to-r from-emerald-600 to-sky-600 inline-flex gap-2 font-bold uppercase tracking-widest md:text-sm lg:text-base sm:text-xs text-transparent bg-clip-text xs:text-xxs">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif xs:text-lg mt-2 md:mt-5 md:text-2xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2 w-[100%]" />

                  {/* Results List */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex gap-2 text-sm sm:text-xs xs:text-xs md:text-base">
                        <CheckCircleIcon className="w-5 h-5 text-green-700 md:w-6 md:h-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a href="./Service" className="inline-block mt-8">
                    <button className="backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] bg-[#ffffff] text-gray-950 h-10 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                      <span className="xs:text-sm md:text-md">Services</span>
                      <ArrowUpRightIcon className="w-4 h-4 text-green-800" />
                    </button>
                  </a>
                </div>

                {/* Project Image */}
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="intrinsic"
                    className="mt-8 -mb-4 md:-mb-0 sm:w-64 sm:h-64  lg:mt-20 lg:absolute lg:w-[602px] h-[415px]"
                  />
                </div>
                
              </div>
              
            </div>
             
          ))}
         
        </div>
      </div>
    </section>
  );
};
