import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Feature {
    icon: string
    title: string
    description: string
    learnMoreLink: string
}

const features: Feature[] = [
    {
        icon: '/assets/ai-detection.svg',
        title: 'AI Detection',
        description: 'Identify AI-generated text in real-time with high accuracy.',
        learnMoreLink: '/',
    },
    {
        icon: '/assets/advanced-scans.svg',
        title: 'Advanced Scans',
        description: 'Deep text analysis across multiple languages.',
        learnMoreLink: '/',
    },
    {
        icon: '/assets/vocabulary-tracker.svg',
        title: 'Vocabulary Tracker',
        description: 'Track and optimize vocabulary usage.',
        learnMoreLink: '/',
    },
    {
        icon: '/assets/plagiarism-checker.svg',
        title: 'Plagiarism Checker',
        description: 'Verify originality and integrity of content.',
        learnMoreLink: '/',
    },
]

const FeatureCard: React.FC<Feature> = ({ icon, title, description, learnMoreLink }) => (
    <div className="bg-light-sky px-5 py-6 rounded-[20px] shadow-custom-shadow hover:shadow-inner transition-all duration-300">
        <Image src={icon} alt={title} width={44} height={36} />
        <h2 className="text-dark-blue text-xl font-bold leading-[55px] font-helvetica">{title}</h2>
        <p className="text-dark-gray text-[16.51px] font-helvetica font-normal leading-[21.67px]">{description}</p>
        <Link href={learnMoreLink} className="mt-5 flex items-center gap-2 text-dark-gray text-[16.51px] font-medium">
            Learn More
            <Image src='/assets/why-choose-arrow.svg' alt='arrow' width={16} height={16} />
        </Link>
    </div>


)

const WhyChooseZeroGPT: React.FC = () => {
    return (
        <div className='mt-[60px] md:mt-[116px] pb-20 px-3.5 sm:px-5 max-w-[1340px] mx-auto w-full'>
            <h1 className='text-center text-dark-blue font-extrabold text-[25px] sm:text-[32px] md:text-[40px]'>Why Choose ZeroGPT?</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 md:mt-12'>
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    )
}

export default WhyChooseZeroGPT

