import type { Metadata } from "next";
import {Inter,Calistoga,Merriweather,Roboto, Merriweather_Sans,Lora} from 'next/font/google';
/*import {Inter,Calistoga} from 'next/font/google';*/
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
      <head> 
       <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={twMerge(inter.variable, calistoga.variable,"bg-gradient-to-br from-purple-300/60 via-teal-300/60 to-pink-300/80 text-slate-900 antialiased font-sans")}>{children} 
       <Analytics/>
       <SpeedInsights/>
      </body>
    </html>
  );
}
