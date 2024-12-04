import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
export const ContactSection = () => {
  return (
  <div className="mb-10">
    <div className="container">
      <div className="backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_31px_6px_rgba(159,244,218,0.3)_inset] bg-[#ffffff] text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 xs:-mx-2">
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
    <h2 className="font-serif text-2xl md:text-3xl text-pretty">Get In Touch With Us</h2>
    <p className="text-sm mt-2 md:text-base">Whether you have questions, or feedback, or want to say hello, we&rsquo;d love to hear from you! Reach out via our contact page, and our team will reply promptly.
    </p>
    </div>
    <div>
    <a href='./ContactUs'>
    <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
      <span className="font-semibold">Contact Us</span>
        <ArrowUpRightIcon className="size-4"/>
      </button>
      </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};
