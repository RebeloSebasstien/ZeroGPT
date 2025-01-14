import Image from 'next/image'
import React from 'react'

interface Feature {
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        title: "Cutting-Edge Detection Models",
        description: "Advanced neural networks analyze text patterns to differentiate AI-generated content accurately."
    },
    {
        title: "Industry-Leading Accuracy Metrics",
        description: "Achieves up to 98% accuracy, verified through real-world tests and internal benchmarks."
    },
    {
        title: "Continuous Adaptation",
        description: "Regular updates ensure compatibility with the latest AI models, including GPT-4 and Google-Gemini."
    }
];

const ScienceBehindZeroGPT: React.FC = () => {
    return (
        <div className='text-white py-10 md:py-16 bg-very-light-gray'>
            <div className='max-w-[1340px] mx-auto w-full flex lg:flex-row flex-col items-start justify-between gap-8 lg:gap-4 px-3.5 sm:px-5'>
                <div className='lg:w-1/2 w-full h-full flex'>
                    <Image
                        src='/assets/the-science-behind-zeroGPT.webp'
                        alt='the-science-behind-zeroGPT'
                        width={677}
                        height={502}
                        className='rounded-[20px] w-full'
                    />
                </div>
                <div className='lg:w-1/2 lg:max-w-[586px]'>
                    <h1 className='text-primary text-2xl md:text-3xl lg:text-4xl font-bold font-helvetica uppercase lg:leading-[44px]'>
                        The Science Behind ZeroGPT
                    </h1>
                    <p className='text-dark-gray-80 text-sm sm:text-base font-medium sm:leading-[24px] mt-3.5 md:mt-4 mb-5 md:mb-5'>
                        ZeroGPT utilizes state-of-the-art machine learning algorithms to provide unmatched accuracy in detecting AI-generated text.
                    </p>
                    <div className='space-y-3.5 sm:space-y-4'>
                        {features.map((feature, index) => (
                            <div key={index} className='flex items-start gap-2.5 sm:gap-4'>
                                <Image
                                    src='/assets/checkbox-black.svg'
                                    alt='icons'
                                    width={22}
                                    height={22}
                                    className='mt-1.5 sm:mt-1 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]'
                                />
                                <div className='space-y-1 sm:space-y-2'>
                                    <h3 className='text-primary text-lg md:text-xl font-helvetica font-semibold'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-dark-gray-80 text-sm sm:text-base font-medium'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='mt-6 sm:mt-5 bg-bright-cyan transition-all duration-300 ease-in-out hover:bg-soft-cyan hover:shadow-lg hover:text-white rounded-[30px] h-[45px] sm:h-[52px] px-7 text-dark-blue font-semibold text-base uppercase'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ScienceBehindZeroGPT