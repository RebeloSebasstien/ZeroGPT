import Image from 'next/image'
import React from 'react'

interface Feature {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: "Supported AI Models",
        description: "Compatible with ChatGPT, GPT-4, Google-Gemini, and more."
    },
    {
        title: "User-Friendly Interface",
        description: "Easy to use with no technical expertise required."
    },
    {
        title: "Free Access",
        description: "Provides essential detection tools at no cost for individuals."
    }
];

const AccurateAIDetection: React.FC = () => {
    return (
        <div className='text-white py-10 md:py-16' style={{ background: "linear-gradient(106.5deg, #1B243C 10.06%, #000719 83.26%)" }}>
            <div className='max-w-[1340px] mx-auto w-full flex lg:flex-row flex-col items-start justify-between gap-10 lg:gap-4 px-3.5 sm:px-5'>
                <div className='lg:w-1/2 lg:max-w-[546px]'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold font-helvetica uppercase lg:leading-[44px]'>
                        Empowering Users with Accurate AI Detection
                    </h1>
                    <p className='text-white/90 text-sm sm:text-base font-medium sm:leading-[24px] mt-3.5 md:mt-5 mb-5 md:mb-7'>
                        ZeroGPT is your ultimate tool to differentiate between human and AI-generated text.
                        Whether you&apos;re a writer, educator, or developer, our platform ensures accuracy and simplicity.
                    </p>
                    <div className='space-y-3.5 sm:space-y-5'>
                        {features.map((feature, index) => (
                            <div key={index} className='flex items-start gap-2.5 sm:gap-4'>
                                <Image
                                    src='/assets/select-icon.svg'
                                    alt='icons'
                                    width={22}
                                    height={22}
                                    className='mt-1.5 sm:mt-1 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]'
                                />
                                <div className='space-y-1 sm:space-y-2'>
                                    <h3 className='text-lg md:text-xl font-helvetica font-semibold'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-white/90 text-sm sm:text-base font-medium'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='mt-6 sm:mt-7 bg-bright-cyan transition-all duration-300 ease-in-out hover:bg-soft-cyan hover:shadow-lg hover:text-white rounded-[30px] h-[45px] sm:h-[52px] px-7 text-dark-blue font-semibold text-base uppercase'>
                        Learn More
                    </button>
                </div>
                <div className='lg:w-1/2 h-full flex mx-auto'>
                    <Image
                        src='/assets/empowering-users-with-accurate-ai-detection.webp'
                        alt='empowering-users-with-accurate-ai-detection'
                        width={677}
                        height={484}
                        className='rounded-[20px]'
                    />
                </div>
            </div>
        </div>
    )
}

export default AccurateAIDetection