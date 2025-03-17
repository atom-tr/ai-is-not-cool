import React, { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TypeAnimation } from 'react-type-animation';

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Hide loading screen after 1s, regardless of content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsContentVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
          <p className="text-2xl font-bold">Loading...</p>
        </div>
      )}

      {/* Background Lottie Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
        <DotLottieReact
          src="./6479feb6cb5520054406b277_code__face.lottie"
          autoplay
          loop
          isClickToPause={false}
        />
      </div>
      
      {isContentVisible && (
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
      )}
    </div>
  );
};

export default LandingPage;
