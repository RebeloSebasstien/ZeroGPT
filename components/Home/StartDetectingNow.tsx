import React from 'react'

const StartDetectingNow = () => {
    return (
        <div className='py-10 sm:py-16 md:py-[90px] px-3.5 sm:px-5'>
            <div className='py-12 sm:pt-[68px] px-4 sm:pb-[78px] text-white text-center max-w-[1320px] mx-auto rounded-[20px] sm:rounded-[30px]' style={{background: "linear-gradient(180.17deg, #0E0F11 15.64%, #192C5C 99.86%)"}}>
                <h1 className='text-[24px] sm:text-[32px] md:text-[40px] uppercase font-bold'>Start Detecting Now!</h1>
                <p className='mt-3 max-w-[653px] mx-auto text-sm sm:text-lg font-normal sm:leading-[26px]'>Don’t let AI-generated content go unnoticed. Upload your text, PDF, or URL and see the difference ZeroGPT can make.</p>
                <button className='mt-5 sm:mt-7 bg-bright-cyan transition-all duration-300 ease-in-out hover:bg-soft-cyan hover:shadow-lg hover:text-white rounded-[30px] h-[40px] sm:h-[52px] px-7 text-dark-blue font-semibold text-sm sm:text-base uppercase'>Analyze Now!</button>
            </div>  
        </div>
    )
}

export default StartDetectingNow