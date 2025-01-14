import Image from 'next/image'
import React from 'react'

interface BlogPost {
    id: number;
    title: string;
    image: string;
    date: string;
    readTime?: string;
    description?: string;
}

interface BlogData {
    mainPost: BlogPost;
    subPosts: BlogPost[];
}

const blogData: BlogData = {
    mainPost: {
        id: 1,
        title: "How Automation And Ai Tools Can Help Businesses Thrive",
        image: "/assets/person-working.svg",
        date: "September 20, 2024",
        readTime: "10 min Read",
        description: "Streamlining Operations: Automation tools handle repetitive tasks like data entry, inventory management, and scheduling, allowing employees to focus on strategic activities."
    },
    subPosts: [
        {
            id: 2,
            title: "Advancements In Virtual Reality Beyond Gaming And Entertainment",
            image: "/assets/blog-1.svg",
            date: "September 12, 2024"
        },
        {
            id: 3,
            title: "The Future of Cloud Computing and Edge Technologies",
            image: "/assets/blog-2.svg",
            date: "September 12, 2024"
        },
        {
            id: 4,
            title: "Cybersecurity Trends and Best Practices for 2024",
            image: "/assets/blog-3.svg",
            date: "September 12, 2024"
        }
    ]
};

const OurBlogs: React.FC = () => {
    return (
        <div className='py-12 md:py-20 lg:py-[90px] px-3.5 sm:px-5'>
            <div className='max-w-[1300px] mx-auto w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl sm:text-4xl font-extrabold text-black uppercase'>Our Blogs</h1>
                    <button className='bg-bright-cyan transition-all duration-300 ease-in-out hover:bg-soft-cyan hover:shadow-lg hover:text-white rounded-[30px] h-[42px] sm:h-[50px] px-8 tracking-[0.04rem] text-dark-blue font-semibold text-base'>
                        See more
                    </button>
                </div>

                <div className='mt-6 md:mt-[60px] flex items-start lg:flex-row flex-col gap-6 justify-between'>
                    <div className='border shadow-md transition-all duration-300 hover:shadow-xl border-soft-gray rounded-[20px] sm:rounded-[30px] p-2 sm:p-[18px] lg:w-fit w-full'>
                        <Image
                            src={blogData.mainPost.image}
                            alt='featured-blog'
                            width={664}
                            height={310}
                            draggable={false}
                            className='rounded-[20px] sm:rounded-[30px] h-[250px] sm:h-full w-full object-cover'
                        />
                    </div>
                    <div className='w-full lg:max-w-[534px]'>
                        <h1 className='text-dark-blue font-helvetica font-bold text-[20px] sm:text-[27px] sm:leading-[40px] uppercase'>
                            {blogData.mainPost.title}
                        </h1>
                        <p className='mt-3 sm:mt-6 text-gray-600 text-base sm:text-[20px] sm:leading-[32px] tracking-[0.03em] font-normal'>
                            {blogData.mainPost.description}
                        </p>
                        <h3 className='mt-5 sm:mt-8 text-vibrant-blue hover:underline underline-offset-4 transition-all duration-300 ease-in-out text-base sm:text-[18px] font-semibold tracking-[0.02em]'>
                            {blogData.mainPost.date}. {blogData.mainPost.readTime}
                        </h3>
                    </div>
                </div>

                <div className='mt-6 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {blogData.subPosts.map((post) => (
                        <div key={post.id} className='shadow-md transition-all duration-300 hover:shadow-xl border border-soft-gray rounded-[20px] sm:rounded-[30px] p-2 sm:p-[18px]'>
                            <Image
                                src={post.image}
                                alt='blog'
                                width={396}
                                height={274}
                                draggable={false}
                                className='rounded-[15px] sm:rounded-[30px] w-full'
                            />
                            <h2 className='py-4 sm:py-6 text-dark-blue text-base sm:text-[18px] sm:leading-[24px] font-bold tracking-[0.04em]'>
                                {post.title}
                            </h2>
                            <div className='flex items-center justify-between gap-4 pb-2 sm:pb-0'>
                                <h3 className='text-vibrant-blue hover:underline underline-offset-4 transition-all duration-300 ease-in-out text-[16px] leading-[16px] tracking-[0.01em]'>
                                    {post.date}
                                </h3>
                                <button className='scale-110 hover:scale-95 transition-all duration-300 ease-in-out'>
                                    <Image
                                        src='/assets/blog-arrow.svg'
                                        alt='blog-arrow'
                                        draggable={false}
                                        width={29}
                                        height={29}
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurBlogs