import EmbraceAIDetection from '@/components/AboutUs/EmbraceAIDetection'
import BlogsCard from '@/components/Blogs/BlogsCard'
import React from 'react'

const Blogs = () => {
    return (
        <div>
            <div
                className="w-full pt-[120px] sm:pt-[214px] pb-[60px] px-3.5 sm:px-5 rounded-b-[30px]"
                style={{
                    background:
                        "linear-gradient(270deg, rgba(217, 238, 255, 0.5) 0%, rgba(168, 216, 255, 0.5) 100%)",
                }}
            >
                <div className="max-w-[1340px] mx-auto w-full text-center">
                    <h1 className="text-dark-blue font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[58px] max-w-[800px] mx-auto uppercase">
                        Insights on AI Advancements
                    </h1>
                    <p className="mt-3.5 text-dark-blue-gray text-sm sm:text-base font-medium ">
                        Explore the latest trends, tools, and innovations in AI technology. Stay informed and ahead in the evolving digital landscape.
                    </p>
                </div>
            </div>
            <div className='mt-10 sm:mt-[70px]'>
                <BlogsCard />
                <EmbraceAIDetection />
            </div>
        </div>

    )
}

export default Blogs