import Image from "next/image";
import React from "react";

interface CardStyle {
    background: string;
    textColor: string;
    borderGradient: string;
    iconPath: string;
}

interface PricingPlan {
    id: string;
    name: string;
    badge: string | null;
    description: string;
    price: number;
    billingPeriod: string;
    yearlyDiscount: string | null;
    features: string[];
    buttonText: string;
    buttonColor: string;
    buttonMargin: string;  
    cardStyle: CardStyle;
}

const pricingPlans: PricingPlan[] = [
    {
        id: "basic",
        name: "Basic",
        badge: null,
        description: "Access Basic AI detection.",
        price: 0,
        billingPeriod: "Per member, per Month",
        yearlyDiscount: null,
        features: [
            "10,000 words per month",
            "Basic AI Scan",
            "5 Free Advanced Scans"
        ],
        buttonText: "Choose Plan",
        buttonColor: "bg-black",
        buttonMargin: "mt-[182px]",  
        cardStyle: {
            background: "bg-white",
            textColor: "text-black",
            borderGradient: "linear-gradient(90.28deg, #001C80 0.26%, #153ABF 30.33%, #2B59FF 99.79%)",
            iconPath: "/assets/plan-arrow-black.svg"
        }
    },
    {
        id: "premium",
        name: "Professional",
        badge: "Premium",
        description: "Access all of our premium features. investors with a big portfolio.",
        price: 49,
        billingPeriod: "Per member, per Month",
        yearlyDiscount: "Save $132/yearBilled $155.88 annually",
        features: [
            "300,000 words per month",
            "All of Essential",
            "Advanced Scan",
            "AI Vocabulary",
            "Plagiarism",
            "Writing Feedback"
        ],
        buttonText: "Choose Plan",
        buttonColor: "bg-[#0AA9CC]",
        buttonMargin: "mt-9",  
        cardStyle: {
            background: "bg-[#000B6B]",
            textColor: "text-white !important",
            borderGradient: "linear-gradient(90.28deg, #001C80 0.26%, #153ABF 30.33%, #2B59FF 99.79%)",
            iconPath: "/assets/plan-arrow-white.svg"
        }
    },
    {
        id: "professional",
        name: "Professional",
        badge: null,
        description: "For teams and enterprises.",
        price: 24,
        billingPeriod: "Per member, per Month",
        yearlyDiscount: "Save $252/yearBilled $299.88 annually",
        features: [
            "500,000 words per month",
            "All of Premium",
            "Up to 10,000,000 words in overage",
            "Teams Collaboration",
            "Military grade security"
        ],
        buttonText: "Choose Plan",
        buttonColor: "bg-black",
        buttonMargin: "mt-[75px]",   
        cardStyle: {
            background: "bg-white",
            textColor: "text-black",
            borderGradient: "linear-gradient(90.28deg, #001C80 0.26%, #153ABF 30.33%, #2B59FF 99.79%)",
            iconPath: "/assets/plan-arrow-black.svg"
        }
    }
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
    return (
        <div className="relative p-[2.5px] rounded-lg overflow-hidden w-full lg:w-[412px]">
            <div
                className="absolute inset-0 rounded-[10px]"
                style={{ background: plan.cardStyle.borderGradient }}
            />
            <div className={`relative ${plan.cardStyle.background} rounded-[10px] z-10 h-full px-3.5 md:px-5 lg:px-8 xl:px-11 pb-5 pt-4 sm:pt-12`}>
                {plan.badge && (
                    <h2 className="sm:mt-0 mt-5 bg-light-blue rounded-[4px] py-0.5 px-2 w-fit text-navy-blue text-base font-normal font-poppins">
                        {plan.badge}
                    </h2>
                )}
                <h2 className="mt-4 bg-off-white rounded-md py-1.5 px-4 w-fit text-midnight-blue text-base font-semibold tracking-[0.01em] uppercase leading-[31.33px] font-poppins">
                    {plan.name}
                </h2>
                <p className={`mt-[17px] ${plan.cardStyle.textColor} text-base leading-[25px] font-poppins font-light`}>
                    {plan.description}
                </p>
                <div className={`my-5 sm:my-7 py-5 w-full border-t border-b ${plan.cardStyle.background === 'bg-white' ? 'border-deep-blue/30' : 'border-white/40'}`}>
                    <h1 className={`${plan.cardStyle.textColor} text-[50px] sm:text-[60px] font-poppins font-semibold tracking-[-0.52px]`}>
                        ${plan.price}
                    </h1>
                    <h3 className={`${plan.cardStyle.textColor}/80 text-sm sm:text-base font-poppins font-semibold`}>
                        {plan.billingPeriod}
                    </h3>
                    {plan.yearlyDiscount && (
                        <h3 className={`${plan.cardStyle.textColor}/80 text-sm sm:text-base font-poppins font-semibold`}>
                            {plan.yearlyDiscount}
                        </h3>
                    )}
                </div>
                <div className="space-y-4">
                    {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                            <Image
                                src={plan.cardStyle.iconPath}
                                alt="icons"
                                width={22}
                                height={22}
                                className="w-[16px] h-[16px] sm:w-[19px] sm:h-[19px]"
                            />
                            <h3 className={`${plan.cardStyle.textColor} text-sm sm:text-base font-normal font-poppins`}>
                                {feature}
                            </h3>
                        </div>
                    ))}
                </div>
                <button className={`${plan.buttonMargin} ${plan.buttonColor} transition-all duration-300 ease-in-out hover:scale-95 hover:bg-white hover:text-dark-blue hover:border shadow-inner scale-100 w-full h-[56px] rounded-[30px] text-white font-bold text-base`}>
                    {plan.buttonText}
                </button>
            </div>
        </div>
    );
};

const ChooseYourPlan: React.FC = () => {
    return (
        <div className="px-3.5 sm:px-5 max-w-[1320px] mx-auto w-full pt-12 pb-16 md:py-20">
            <h1 className="text-[26px] sm:text-3xl md:text-[40px] text-dark-blue font-extrabold text-center uppercase">
                Choose Your Plan
            </h1>
            <div className="mt-10 md:mt-[58px] grid grid-cols-1 md:grid-cols-2 lg:flex items-end justify-between  gap-5">
                {pricingPlans.map((plan) => (
                    <PricingCard key={plan.id} plan={plan} />
                ))}
            </div>
        </div>
    );
};

export default ChooseYourPlan;