'use client'
import React from 'react'
import Image from 'next/image'
import TextDetector from "./TextDetector"
import { useLanguage } from '../../contexts/LanguageContext'

const Hero = () => {
    const { t } = useLanguage()
    return (
        <>
            <div className="relative overflow-hidden">
                <Image
                    src="/assets/hero-bg.webp"
                    alt="Background"
                    width={10000}
                    height={11000}
                    objectFit="contain"
                    priority
                    className="min-w-full min-h-full absolute inset-0 z-10"
                />

                <Image
                    src="/assets/bg.webp"
                    alt="Background"
                    width={1040}
                    loading="lazy"
                    height={672}
                    className="absolute inset-0 z-20 left-0 top-0"
                />

                {/* Overlay */}
                <div
                    className="absolute inset-0 rounded-b-[30px]"
                    style={{
                        background: "linear-gradient(270deg, #D9EEFF 0%, #A8D8FF 100%)",
                        opacity: 0.4,
                    }}
                />

                <div className="relative z-40 h-full pt-[120px] md:pt-[180px] pb-[220px] px-3.5">
                    <div className="text-center">
                        <h1 className="text-dark-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[58px] max-w-[864px] mx-auto uppercase">
                            {t("title", "home")}
                        </h1>
                        <p className="mt-3.5 sm:mt-5 text-dark-blue-gray font-semibold text-lg sm:text-xl leading-[28px]">
                            {t("description", "home")}
                        </p>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4 sm:gap-10">
                        <button className="bg-bright-cyan rounded-[26px] h-[52px] px-4 sm:w-[152px] text-dark-blue text-base font-semibold uppercase transition-all duration-300 ease-in-out hover:bg-soft-cyan hover:shadow-lg hover:text-white">
                            Get Started
                        </button>

                        <button className="flex items-center gap-2.5 text-dark-blue text-base font-semibold">
                            <Image
                                src="/assets/request-demo.svg"
                                alt="request-demo"
                                width={46}
                                height={52}
                                className="sm:w-[46px] sm:h-[52px] w-[35px] h-[45px]"
                            />
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative z-40 px-4 -mt-40">
                <div className="max-w-[1100px] mx-auto">
                    <TextDetector />
                </div>
            </div>
        </>
    );
}

export default Hero

