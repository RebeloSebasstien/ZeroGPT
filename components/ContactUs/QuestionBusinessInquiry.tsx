'use client'
import { FormEvent, useState } from 'react'
import Image from 'next/image'

interface FormData {
    firstName: string
    lastName: string
    phone: string
    email: string
    message: string
}

const QuestionBusinessInquiry = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <div className='py-12 md:py-20 w-full px-3.5'>
            <h1 className='text-charcoal text-2xl md:text-4xl font-semibold text-center'>Question / Business inquiry</h1>
            <div className='mt-8 sm:mt-10 max-w-[343px] mx-auto w-full flex items-center justify-center gap-4'>
                <div className='w-[50px] h-[50px] rounded-xl border border-dark-gray/30 flex items-center justify-center'>
                    <Image src='/assets/email.svg' alt='email' width={30} height={30} />
                </div>
                <div>
                    <h1 className='text-charcoal text-lg font-bold'>Email Us:</h1>
                    <h4 className='text-charcoal text-lg'>support@zerogpt.net</h4>
                </div>
            </div>

            <div className='mt-8 sm:mt-[50px] border border-charcoal/25 max-w-[671px] mx-auto w-full rounded-xl sm:rounded-3xl px-4 py-7 md:p-7'>
                <h1 className='text-center text-charcoal text-[28px] sm:text-[31px] font-semibold'>Get a Quote </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="firstName" className="mb-2 block text-base sm:text-lg font-normal text-charcoal">
                                First Name<span className='text-blue-sapphire'>*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                required
                                className="w-full rounded-lg bg-grayish-white px-4 h-[50px] sm:h-[60px] placeholder:text-charcoal/50 focus:outline-none focus:ring-1 focus:ring-dark-blue/30"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="mb-2 block text-base sm:text-lg font-normal text-charcoal">
                                Last Name<span className='text-blue-sapphire'>*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                required
                                className="w-full rounded-lg bg-grayish-white px-4 h-[50px] sm:h-[60px] placeholder:text-charcoal/50 focus:outline-none focus:ring-1 focus:ring-dark-blue/30"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="phone" className="mb-2 block text-base sm:text-lg font-normal text-charcoal">
                                Phone Number<span className='text-blue-sapphire'>*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                required
                                className="w-full rounded-lg bg-grayish-white px-4 h-[50px] sm:h-[60px] placeholder:text-charcoal/50 focus:outline-none focus:ring-1 focus:ring-dark-blue/30"
                                placeholder="Enter your phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="mb-2 block text-base sm:text-lg font-normal text-charcoal">
                                Email Address<span className='text-blue-sapphire'>*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full rounded-lg bg-grayish-white px-4 h-[50px] sm:h-[60px] placeholder:text-charcoal/50 focus:outline-none focus:ring-1 focus:ring-dark-blue/30"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-base sm:text-lg font-normal text-charcoal">
                            Comment or Message<span className='text-blue-sapphire'>*</span>
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="w-full rounded-lg bg-grayish-white px-4 py-4  h-[133px] resize-none placeholder:text-charcoal/50 focus:outline-none focus:ring-1 focus:ring-dark-blue/30"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl sm:rounded-[30px] bg-main-clr h-[60px] sm:h-[66px] text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-95 scale-100"
                    >
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default QuestionBusinessInquiry