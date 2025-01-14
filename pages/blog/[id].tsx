import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import EmbraceAIDetection from '@/components/AboutUs/EmbraceAIDetection'

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

export default function BlogPost() {
  const router = useRouter()
  const { id } = router.query
  const [blog, setBlog] = useState<Blog | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return

      try {
        const response = await fetch(`/api/blogs?id=${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch blog')
        }
        const data = await response.json()
        setBlog(data)
        setIsLoading(false)
      } catch (err) {
        setError('Error fetching blog. Please try again later.')
        setIsLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  if (!blog) {
    return <div className="text-center py-10">Blog not found</div>
  }

  return (
    <main className="max-w-[1320px] sm:px-5 px-3.5 mx-auto w-full pt-[100px] sm:pt-[150px] pb-10">
      <Link
        href="/blog"
        className="flex items-center gap-2 mb-4 text-main-clr text-lg font-work-sans"
      >
        <Image
          src="/assets/arrow-left.svg"
          alt="Back"
          width={12}
          height={12}
          className="rotate-180"
          />
          Back to Blogs
      </Link>

      <article className="bg-white">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={600}
          className="h-[300px] sm:h-[400px] object-cover rounded-[20px] bg-top"
        />

        <h1 className="text-charcoal text-xl sm:text-[25px] md:text-[32px] font-semibold leading-tight my-4">
          {blog.title}
        </h1>
        <p className="text-charcoal text-base sm:text-lg font-normal leading-relaxed font-work-sans">
          {blog.description}
        </p>
      </article>

      <EmbraceAIDetection/>
    </main>
  )
}

