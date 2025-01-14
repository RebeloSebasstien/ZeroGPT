"use client";
import { useState } from "react";
import Image from "next/image";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How does ZeroGPT work?",
        answer:
            "It uses cutting-edge algorithms to analyze text patterns and identify AI generation.",
    },
    {
        question: "How does ZeroGPT detect AI-generated content?",
        answer:
            "Our advanced detection system analyzes various text patterns and linguistic markers to identify AI-generated content with high accuracy.",
    },
    {
        question: "Which Language is supported",
        answer:
            "We support multiple languages including English and many other major world languages.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we implement industry-standard security measures to protect all user data and maintain strict privacy protocols.",
    },
    {
        question: "Can I export my data",
        answer:
            "Yes, you can easily export your data in multiple formats through our user-friendly interface.",
    },
    {
        question: "Which Language is supported",
        answer:
            "Yes, we implement industry-standard security measures to protect all user data and maintain strict privacy protocols.",
    },
];

const FrequentlyAskedQuestions = () => {
    const [openIndices, setOpenIndices] = useState<number[]>([0]);

    const toggleFaq = (index: number) => {
        setOpenIndices((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="bg-light-blue-gray py-10 md:py-20">
            <div className="max-w-[1330px] mx-auto px-3.5 sm:px-4">
                <h1 className="text-[25px] md:text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-charcoal uppercase text-center">
                    Frequently Asked Questions
                </h1>
                <p className="mt-1 text-charcoal text-sm sm:text-base font-normal sm:leading-[27px] text-center">
                    The most commonly asked questions that we receive at Toth-Felty
                    Insurance and our answers.
                </p>

                <div className="mt-10 grid md:grid-cols-2 gap-3 sm:gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-[14px] shadow-md hover:shadow-xl transition-all duration-300  ${openIndices.includes(index)
                                    ? "bg-slate-blue"
                                    : "bg-white border border-charcoal/30"
                                }`}
                        >
                            <div
                                className="py-4 sm:py-6 px-4 sm:px-5 flex items-center justify-between gap-4 cursor-pointer"
                                onClick={() => toggleFaq(index)}
                                role="button"
                                tabIndex={0}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        toggleFaq(index);
                                    }
                                }}
                            >
                                <h3
                                    className={`font-helvetica font-extrabold text-base sm:text-lg ${openIndices.includes(index)
                                            ? "text-white"
                                            : "text-charcoal"
                                        }`}
                                >
                                    {faq.question}
                                </h3>
                                <div className="w-4 h-4 relative">
                                    <Image
                                        src={
                                            openIndices.includes(index)
                                                ? "/assets/open-faq-arrow.svg"
                                                : "/assets/close-faq-arrow.svg"
                                        }
                                        alt="arrow"
                                        width={15}
                                        draggable="false"
                                        height={14}
                                        className={`transform transition-transform duration-300 ${openIndices.includes(index) ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>
                            </div>
                            {openIndices.includes(index) && (
                                <div className="border-t border-white/30">
                                    <div className="p-4 sm:p-5 md:pr-[50px]">
                                        <p className="text-white text-sm sm:text-base font-normal">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FrequentlyAskedQuestions;
