import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

interface Blog {
    id: number
    date: {
        day: string
        month: string
    }
    image: string
    title: string
    description: string
    link: string
}

const BlogsCard: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const blogsPerPage = 9

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blogs')
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs')
                }
                const data = await response.json()
                setBlogs(data)
                setIsLoading(false)
            } catch (err) {
                setError('Error fetching blogs. Please try again later.')
                setIsLoading(false)
            }
        }

        fetchBlogs()
    }, [])

    const indexOfLastBlog = currentPage * blogsPerPage
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)
    const totalPages = Math.ceil(blogs.length / blogsPerPage)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    if (isLoading) {
        return <div className="text-center py-10">Loading...</div>
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>
    }

    return (
        <div className="max-w-[1320px] px-3.5 sm:px-5 mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
                {currentBlogs.map((blog) => (
                    <Link
                        href={`/blog/${blog.id}`}
                        key={blog.id}
                        className="relative bg-white border-2 border-[#17171726] rounded-[20px] pb-[25px] py-2.5 sm:py-3.5 px-2 sm:px-[12px] hover:shadow-xl transition-all duration-300"
                    >
                        <div className="bg-[#00365D] text-white w-fit px-2 min-w-[60px] sm:min-w-[80px] h-auto py-2 sm:h-[80px] flex items-center justify-center flex-col gap-0.5 rounded-b-[10px] rounded-tr-[10px] absolute -top-1 -left-1 text-center">
                            <h3 className="text-[18px] sm:text-[27px] font-normal sm:leading-[27px]">{blog.date.day}</h3>
                            <h3 className="text-[16px] sm:text-[20px] font-normal sm:leading-[27px]">{blog.date.month}</h3>
                        </div>
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={400}
                            height={247}
                            className="w-full"
                        />
                        <div className="px-1 mt-4 sm:mt-6">
                            <h1 className="text-charcoal text-[20px] sm:text-[24px] font-semibold sm:leading-[28px] line-clamp-2">
                                {blog.title}
                            </h1>
                            <p className="text-charcoal mt-2 sm:mt-3 text-base font-normal leading-[24px] font-work-sans line-clamp-2">
                                {blog.description}
                            </p>
                            <div className="mt-3.5 sm:mt-5 text-main-clr font-bold text-base font-work-sans tracking-[-0.02em] uppercase flex items-center gap-3">
                                Read More
                                <Image
                                    src={blog.link}
                                    alt="arrow"
                                    width={16}
                                    height={10}
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-[70px] max-w-[570px] mx-auto w-full flex items-center justify-between gap-5">
                <button
                    className="w-[100px] flex items-center font-work-sans font-medium text-xl text-charcoal disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <Image
                        src="/assets/arrow-left.svg"
                        alt="arrow-left"
                        width={16}
                        height={16}
                        className="h-[20px] w-[20px] flex items-center justify-center"
                    />
                    Previous
                </button>
                <div className="flex items-center gap-3">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`w-10 sm:w-[55px] h-10 sm:h-[55px] rounded-lg sm:rounded-[15px] ${currentPage === pageNumber ? 'bg-[#0096FF] text-white' : 'bg-[#F1F1F1] text-charcoal'
                                } flex items-center justify-center font-work-sans font-medium text-xl`}
                        >
                            {pageNumber.toString().padStart(2, '0')}
                        </button>
                    ))}
                </div>
                <button
                    className=" flex items-center font-work-sans font-medium text-xl text-charcoal disabled:opacity-50"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                    <Image
                        src="/assets/arrow-right.svg"
                        alt="arrow-left"
                        width={16}
                        height={16}
                        className="h-[20px] w-[20px] flex items-center justify-center"
                    />
                </button>
            </div>
        </div>
    )
}

export default BlogsCard

