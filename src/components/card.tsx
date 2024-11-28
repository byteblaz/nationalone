import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({className,children,}: PropsWithChildren<{className?:string;

}>) => {
    return (
        <div className={twMerge("bg-white/5 backdrop-blur-xl rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none sm:-mx-2 border border-white/25 shadow-[0_0_90px_inset] shadow-emerald-800/5", className)}>
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
              
              ></div>
              <div className="absolute inset-0  rounded-lg blur -z-10 opacity-5" style={{ backgroundImage: 'linear-gradient(to right, #ff7e5f, #feb47b)' 
               }}></div>
              {children}
              </div>
    );
};