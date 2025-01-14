import Image from 'next/image'
import React from 'react'
import { CustomSelect } from './CustomSelect'

const EnterpriseAndTeamPlans = () => {
    const options = [
        { value: 'Month', label: 'Month' },
        { value: 'Year', label: 'Year' },
    ]
    return (
        <div className='bg-light-grayish-blue py-10 md:py-20 px-3.5 sm:px-5'>
            <div className='max-w-[1290px] mx-auto w-full flex lg:items-center justify-between lg:flex-row flex-col gap-10'>
                <div>
                    <h1 className='text-xl sm:text-3xl xl:text-4xl text-primary font-helvetica font-bold uppercase'>Enterprise and Team Plans</h1>
                    <p className='text-primary/90 text-sm sm:text-base font-medium pt-4'>Purchase multiple plans at once for your organization.</p>
                    <div className='mt-4 xl:mt-9 space-y-3 sm:space-y-4'>
                        <div className='flex items-center gap-1'>
                            <Image src='/assets/check-fill.svg' alt="checkbox-black" width={25} height={25} />
                            <p className='text-black font-normal text-sm sm:text-base font-poppins'>Everything you get with a Professional plan, for everyone.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Image src='/assets/check-fill.svg' alt="checkbox-black" width={25} height={25} />
                            <p className='text-black font-normal text-sm sm:text-base font-poppins'>Shared team credits</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Image src='/assets/check-fill.svg' alt="checkbox-black" width={25} height={25} />
                            <p className='text-black font-normal text-sm sm:text-base font-poppins'>Unified billing</p>
                        </div>
                    </div>
                    <button className='mt-5 sm:mt-8 bg-main-clr transition-all duration-300 ease-in-out hover:scale-95 hover:bg-white hover:text-dark-blue hover:border-2 shadow-inner scale-100  rounded-[30px] h-[45px] sm:h-[52px] w-[167px] text-white text-base font-semibold uppercase'>Contact Us</button>
                </div>

                <div className='w-full lg:max-w-[587px] bg-custom-light-blue rounded py-6 md:py-9 px-3.5 md:px-10' style={{ boxShadow: '0px 2px 8px -2px #00000033, 0px 0px 1.5px 0px #00000033', backdropFilter: "blur(16px)" }}>
                    <h2 className='text-dark-ash-gray text-xl sm:text-2xl font-medium tracking-[0.2px]'>Professional Plan</h2>
                    <div className='mt-5 flex items-center justify-between gap-4 w-full max-w-[350px]'>
                        <h3 className='text-dark-ash-gray font-medium text-sm tracking-[0.3px]'>Billing Cycle</h3>
                        <h3 className='text-dark-ash-gray font-medium text-sm tracking-[0.3px]'>Seats</h3>
                    </div>
                    <div className='mt-2 max-w-[350px] w-full bg-white border border-custom-light-gray rounded-md flex items-center justify-between gap-5'>
                        <CustomSelect options={options} />
                        <input type='text' placeholder='0' className=' placeholder:px-3 px-2 w-[52px] mx-auto outline-none h-[38px] rounded-md border border-custom-light-gray' />
                    </div>

                    <div className='mt-6 bg-white/40 rounded-md sm:max-w-[503px] lg:mx-auto px-3.5 xl:px-6 py-5'>
                        <div className='flex items-end gap-2'>
                            <h2 className='text-dark-ash-gray text-xl sm:text-2xl font-medium leading-[28px]'>$49.98</h2>
                            <p className='text-primary text-xs sm:text-sm leading-[20px] font-medium mb-[1px]'>Per member, per Month</p>
                        </div>
                        <p className='text-dark-blue text-sm font-medium leading-[16px] tracking-[0.3px] mt-3 sm:mt-2'>Save $132/yearBilled $155.88 annually</p>
                        <button className='mt-6 transition-all duration-300 ease-in-out hover:scale-95 hover:bg-white hover:text-dark-blue hover:border-2 shadow-inner scale-100  bg-dark-ash-gray rounded-[10px] h-[44px] w-[156px] text-white text-base font-medium'>Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseAndTeamPlans