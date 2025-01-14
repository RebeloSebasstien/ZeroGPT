import Content from "@/components/AboutUs/Content";
import EmbraceAIDetection from "@/components/AboutUs/EmbraceAIDetection";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <>
      <div
        className="w-full pt-[120px] sm:pt-[203px] pb-32 sm:pb-[300px] px-3.5 sm:px-5 rounded-b-[30px]"
        style={{
          background:
            "linear-gradient(270deg, rgba(217, 238, 255, 0.5) 0%, rgba(168, 216, 255, 0.5) 100%)",
        }}
      >
        <div className="max-w-[1340px] mx-auto w-full text-center">
          <h1 className="text-dark-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[58px] max-w-[800px] mx-auto uppercase">
            About ZeroGPT.net - AI content detector
          </h1>
          <h3 className="mt-4 text-dark-blue-gray text-[16px] font-bold leading-[28px]">
            Welcome to ZeroGPT.net!
          </h3>
          <p className="text-dark-blue-gray text-sm sm:text-base font-medium max-w-[1100px] mx-auto">
            At ZeroGPT.net, we are passionate about cutting-edge AI technology
            and its limitless potential. We strive to provide you with the most
            advanced and innovative solutions to meet your language processing
            needs. Whether you are looking for assistance with writing, content
            generation, translation, or creative brainstorming, our
            state-of-the-art language model, powered by GPT-3.5, is here to
            revolutionize your experience.
          </p>
        </div>
      </div>
      <div className="relative z-40 px-4 -mt-20 sm:-mt-[300px]">
        <div className="max-w-[1290px] mx-auto mt-0 sm:mt-[50px]">
          <Image
            src="/assets/about-us.png"
            alt="about"
            width={1317}
            height={578}
            className="mx-auto h-[200px] md:h-auto object-cover rounded-[20px]"
          />
        </div>
      </div>
      <Content />
      <EmbraceAIDetection />
    </>
  );
};

export default about;
