import type { Metadata } from "next";
import {Inter,Calistoga,Merriweather,Roboto, Merriweather_Sans,Lora} from 'next/font/google';
/*import {Inter,Calistoga} from 'next/font/google';*/
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Lora({subsets:['latin'],variable:"--font-sans"});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable:"--font-serif",
  weight:["400"],});


export const metadata: Metadata = {
  title: "National Gulf Consultants",
  description: "Manpower Recruitment Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable,"bg-gradient-to-br from-purple-300/60 via-teal-300/60 to-pink-300/80 text-slate-900 antialiased font-sans")}>{children} 
        <div></div>
      </body>
    </html>
  );
}
