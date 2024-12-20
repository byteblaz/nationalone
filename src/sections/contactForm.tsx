"use client";
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import { Card } from '@/components/card';
import { SectionHeader } from '@/components/SectionHeader';
import { CardHeader } from '@/components/CardHeader';

export const ContactForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [mail, setMail] = useState('');

  const sendMail = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject,
        message,
        mail,
      })
    });

    const responseData = await response.json();
    console.log("Response status:", response.status);
    console.log("Response data:", responseData);

    if (response.status === 200) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email. Please check the console for details.");
    }
  }

  return ( 
    
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 lg:p-24">
      <SectionHeader eyebrow="Just A Message Away" title="We&rsquo;d Love to Hear from You"description="Have a question, need assistance, or want to discuss our services? Fill out the form below, and our team will get back to you as soon as possible."/>
      <Card className="w-full max-w-md sm:w-[90vw] md:max-w-2xl lg:max-w-3xl p-6 sm:p-10 lg:p-16 rounded-xl transition-shadow duration-300 mt-8">
        <form onSubmit={sendMail} className="space-y-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl">Contact Us</h1>
          </div>
          <hr className="border-t-2 border-slate-900/65 mt-2 md:mt-2 w-[100%]" />
          
          <div className="relative flex flex-col space-y-2">
            <label htmlFor="title" className="xs:text-md md:text-lg font-medium">
              Subject
            </label>
            <input
              name="title"
              type="text"
              id="title"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter the subject"
              className="w-full p-3 md:p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative flex flex-col space-y-2">
            <label htmlFor="title" className="xs:text-md md:text-lg font-medium">
              Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 md:p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative flex flex-col space-y-2">
            <label htmlFor="description" className="xs:text-md md:text-lg font-medium">
              Message
            </label>
            <textarea
              name="description"
              id="description"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-full p-3 md:p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 sm:py-4 rounded-lg backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-20 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_31px_6px_rgba(159,244,218,0.3)_inset]  text-md sm:text-lg font-medium hover:shadow-[0px_10px_37px_6px_rgba(181,163,245,0.3)_inset] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 mt-10">
        <Card className="flex flex-col col-span-1 md:col-span-5 lg:col-span-3 backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-20 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_31px_6px_rgba(159,244,218,0.3)_inset]">
        <CardHeader title="Reach Out To Us" description="We’re here to assist you! Feel free to visit us at our address or give us a call. We’re happy to help with any questions or concerns." className="px-6 py-6 "/>
         <div className="flex flex-col px-8 md:px-12 md:pb-10 xs:pb-8">
          <h1 className="font-serif md:text-xl xs:text-lg"> 🏢 Address </h1> 
          <p className="py-1 xs:text-xs md:text-base"> National Gulf Business Management LLC
             <br></br>PO Box 1610 PC 114 
             <br></br> Ruwi, Muscat, Sultanate of Oman </p>
          <h1 className="font-serif md:text-xl xs:text-lg mt-4"> 📞 Phone </h1> 
          <p className="py-1 xs:text-xs md:text-base"> +968 2475 0891, +968 9802 1900, +968 9745 0666 </p>
         </div>
        </Card>

      </div>
    
    </div>
  );
};
