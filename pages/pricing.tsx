import ChooseYourPlan from '@/components/ChooseYourPlan'
import APIForDevelopers from '@/components/Pricing/APIForDevelopers'
import EnterpriseAndTeamPlans from '@/components/Pricing/EnterpriseAndTeamPlans'
import React from 'react'

const pricing = () => {
    return (
        <>
            <div
                className="w-full pt-[120px] sm:pt-[190px] pb-[60px] px-3.5 sm:px-5 rounded-b-[30px]"
                style={{
                    background:
                        "linear-gradient(270deg, rgba(217, 238, 255, 0.5) 0%, rgba(168, 216, 255, 0.5) 100%)",
                }}
            >
                <div className="max-w-[1340px] mx-auto w-full text-center">
                    <h1 className="text-dark-blue font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[58px] max-w-[680px] mx-auto uppercase">
                        Words that matter start with the right plan
                    </h1>

                </div>
            </div>

            <ChooseYourPlan/>
            <EnterpriseAndTeamPlans/>
            <APIForDevelopers/>
        </>
    )
}

export default pricing