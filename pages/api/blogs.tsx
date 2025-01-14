import type { NextApiRequest, NextApiResponse } from 'next'

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

const blogs: Blog[] = [
    {
        id: 1,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-1.png',
        title: 'How automation and ai tools can help businesses thrive',
        description: 'Companies fund digital transformation strategies to improve their operations in multiple ways.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 2,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-2.png',
        title: 'Advancements in virtual reality beyond gaming entertainment',
        description: 'Digital Actuality (VR) has come a great distance since its inception, and the know-how is not restricted to gaming and leisure.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 3,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-3.png',
        title: 'Beyond crypto how blockchain technology is disrupting industries',
        description: 'In recent times, blockchain know-how has emerged as some of the transformative and revolutionary applied sciences of our time.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 4,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-4.png',
        title: 'Biometric technology innovations in identity verification',
        description: 'Biometric know-how has emerged as an important device for id verification in varied sectors, guaranteeing sturdy safety and',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 5,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-5.png',
        title: 'Emerging trends in wearable tech from fitness trackers to smartwatches',
        description: 'Wearable know-how has change into a vital a part of our on a regular basis lives, providing a seamless ',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 6,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-6.png',
        title: 'How do AI and machine learning platforms help to improve ROI',
        description: 'Lorem ipsum dolor sit amet consectetur lobortis pellentesque sit ullamcorpe.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 7,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-7.png',
        title: 'Edge computing redefining data processing and storage',
        description: 'Edge computing is a quickly evolving expertise that brings knowledge processing and storage nearer to the supply of know',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 8,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-8.png',
        title: 'Cybersecurity in the digital age protecting your data',
        description: 'In at the moments hyper-connected world, cybersecurity has grow to be a paramount concern for people, companies, and',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 9,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-9.png',
        title: 'The future of artificial intelligence trends and predictions',
        description: 'Synthetic Intelligence (AI) has been a game-changer lately, impacting varied industries and remodeling the best way we stay, work,',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 10,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-1.png',
        title: 'How automation and ai tools can help businesses thrive',
        description: 'Companies fund digital transformation strategies to improve their operations in multiple ways.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 11,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-2.png',
        title: 'Advancements in virtual reality beyond gaming entertainment',
        description: 'Digital Actuality (VR) has come a great distance since its inception, and the know-how is not restricted to gaming and leisure.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 12,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-3.png',
        title: 'Beyond crypto how blockchain technology is disrupting industries',
        description: 'In recent times, blockchain know-how has emerged as some of the transformative and revolutionary applied sciences of our time.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 13,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-4.png',
        title: 'Biometric technology innovations in identity verification',
        description: 'Biometric know-how has emerged as an important device for id verification in varied sectors, guaranteeing sturdy safety and',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 14,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-5.png',
        title: 'Emerging trends in wearable tech from fitness trackers to smartwatches',
        description: 'Wearable know-how has change into a vital a part of our on a regular basis lives, providing a seamless ',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 15,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-6.png',
        title: 'How do AI and machine learning platforms help to improve ROI',
        description: 'Lorem ipsum dolor sit amet consectetur lobortis pellentesque sit ullamcorpe.',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 16,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-7.png',
        title: 'Edge computing redefining data processing and storage',
        description: 'Edge computing is a quickly evolving expertise that brings knowledge processing and storage nearer to the supply of know',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 17,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-8.png',
        title: 'Cybersecurity in the digital age protecting your data',
        description: 'In at the moments hyper-connected world, cybersecurity has grow to be a paramount concern for people, companies, and',
        link: '/assets/blogs-arrow.svg',
    },
    {
        id: 18,
        date: { day: '05', month: 'July' },
        image: '/assets/blog-9.png',
        title: 'The future of artificial intelligence trends and predictions',
        description: 'Synthetic Intelligence (AI) has been a game-changer lately, impacting varied industries and remodeling the best way we stay, work,',
        link: '/assets/blogs-arrow.svg',
    },
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Blog[] | Blog | { message: string }>
) {
    if (req.method === 'GET') {
        const { id } = req.query

        if (id) {
            const blog = blogs.find(b => b.id === Number(id))
            if (blog) {
                return res.status(200).json(blog)
            }
            return res.status(404).json({ message: 'Blog not found' })
        }

        return res.status(200).json(blogs)
    }

    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
}

