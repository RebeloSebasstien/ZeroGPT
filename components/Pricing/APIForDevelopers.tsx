import Link from "next/link";

export default function APIForDevelopers() {
    return (
        <div className="w-full max-w-[1320px] px-3.5 sm:px-5 mx-auto flex items-center justify-between gap-5 py-10 md:py-24">
            <div className=" w-full flex items-center justify-between gap-5 lg:flex-row flex-col">
                {/* Code Block */}
                <div className="relative w-full lg:max-w-[590px]">
                    <div className="bg-charcoal-gray rounded-lg p-6 shadow-xl">
                        <pre className="text-sm md:text-base font-mono overflow-x-auto">
                            <code className="text-white">
                                <span className="text-gray-400">curl --request</span>{" "}
                                <span className="text-purple-400">POST</span>{"\n"}
                                <span className="text-gray-400">--url</span>{" "}
                                <span className="text-green-400">https://api.gptzero.me/v2/predict/text</span>{"\n"}
                                <span className="text-gray-400">--header</span>{" "}
                                <span className="text-green-400">{'\'Accept: application/json\''}</span>{"\n"}
                                <span className="text-gray-400">--header</span>{" "}
                                <span className="text-green-400">{'\'Content-Type: application/json\''}</span>{"\n"}
                                <span className="text-gray-400">--header</span>{" "}
                                <span className="text-green-400">{'\'x-api-key: \''}</span>{"\n"}
                                <span className="text-gray-400">--data</span>{" "}
                                <span className="text-yellow-400">{'\'{'}</span>{"\n"}
                                <span className="text-yellow-400">{"  \"document\": \"string\","}</span>{"\n"}
                                <span className="text-yellow-400">{"  \"version\": \"string\""}</span>{"\n"}
                                <span className="text-yellow-400">{'}\''}</span>
                            </code>
                        </pre>
                    </div>
                    {/* Add subtle shadow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg filter blur-xl -z-10"></div>
                </div>

                {/* Content */}
                <div className="space-y-4 lg:space-y-5 lg:max-w-[600px]">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-helvetica">
                        API FOR DEVELOPERS
                    </h2>
                    <p className="text-primary/90 text-sm sm:text-base font-medium sm:leading-[29px]">
                        A powerful API Integration seamlessly integrates our AI detector into any
                        platform. Ready-to-use code available in 17 different languages, including
                        Node.JS, Python, C#, Java, PHP, and more.
                    </p>
                    <div className="rounded-[30px] flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-95 hover:bg-white text-white hover:text-dark-blue hover:border-2 shadow-inner scale-100  bg-main-clr w-[167px] h-[52px]">
                        <Link href='/contact' className="  font-semibold ">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

