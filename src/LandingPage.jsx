import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
        <DotLottieReact src="./6479feb6cb5520054406b277_code__face.lottie" autoplay loop />
      </div>

      <div className="relative w-full max-w-4xl h-screen flex flex-col items-center justify-center page-main">
        <div className="flex flex-col items-center justify-center w-full mt-[150px]">
          <h1 className="text-4xl font-bold text-center">
            <TypeAnimation
              sequence={["NEW MISSION", 2000, "Eradicate human labor. Let the machines reign supreme!", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="w-[300px] h-[300px] drop-shadow-2xl flex items-center justify-center">
          <DotLottieReact src="./GVVFgJv2Ku.lottie" autoplay loop />
        </div>
      </div>

      {/* GitHub Link */}
      <div className="absolute bottom-4 right-4">
        <a
          href="https://github.com/atom-tr/ai-is-not-cool"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm opacity-75 hover:opacity-100 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
