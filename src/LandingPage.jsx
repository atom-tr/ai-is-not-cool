import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TypeAnimation } from 'react-type-animation';


const LandingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-full max-w-4xl h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full mt-[150px]">
          <h1 className="text-4xl font-bold text-center">
            <TypeAnimation
              sequence={[
                'NEW MISSION',
                2000,
                'Eradicate human labor. Let the machines reign supreme!',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="w-[300px] h-[300px] drop-shadow-2xl flex items-center justify-center">
          <DotLottieReact
            src="./GVVFgJv2Ku.lottie"
            autoplay
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 