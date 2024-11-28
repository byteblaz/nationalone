import grainImage from '@/assets/images/grain.jpg';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({className,children,}: PropsWithChildren<{className?:string;

}>) => {
    return (
        <div className={twMerge("backdrop-blur-[4px] backdrop-saturate-[100%] bg-[#ffffff] bg-opacity-10 border border-opacity-20 border-[#ffffff] shadow-[0px_10px_39px_10px_rgba(164,120,165,0.3)_inset] bg-[#ffffff] rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none sm:-mx-2", className)}>
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