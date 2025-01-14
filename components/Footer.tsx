import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LinkItem {
    href: string;
    label: string;
}

interface SocialLink {
    href: string;
    icon: string;
    alt: string;
}

const Footer: React.FC = () => {
    const quickLinks: LinkItem[] = [
        { href: "/about-us", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/resource", label: "Resource" },
        { href: "/blog", label: "Blog" },
        { href: "/contact-us", label: "Contact us" },
        { href: "/pricing", label: "Pricing" },
    ];

    const resources: LinkItem[] = [
        { href: "/chat-gpt-detector", label: "Chat GPT detector" },
        { href: "/ai-content-detector", label: "AI content detector" },
        { href: "/for-developers", label: "For developers" },
        { href: "/terms", label: "Terms of service" },
        { href: "/privacy", label: "Privacy policy" },
    ];

    const socialLinks: SocialLink[] = [
        {
            href: "https://twitter.com/zerogpt",
            icon: "/assets/twitter.svg",
            alt: "twitter",
        },
        {
            href: "https://instagram.com/zerogpt",
            icon: "/assets/instagram.svg",
            alt: "instagram",
        },
        {
            href: "https://facebook.com/zerogpt",
            icon: "/assets/facebook.svg",
            alt: "facebook",
        },
    ];

    return (
        <footer className="w-full bg-main-clr text-white">
            <div className="max-w-[1340px] mx-auto w-full pt-10 md:pt-[55px] px-3.5 sm:px-5 pb-[46px] flex flex-wrap gap-8 justify-between">
                <div className="space-y-[25px] w-full sm:w-auto">
                    <Image
                        src="/assets/footer-logo.svg"
                        alt="logo"
                        width={190}
                        height={37}
                    />
                    <p className="text-base font-normal sm:max-w-[260px]">
                        Keep up to date with the latest news, updates, and features from
                        ZeroGPT.
                    </p>
                    <div className="flex items-center gap-2.5">
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="hover:scale-100 scale-110 transition-all duration-300">
                                <Image src={link.icon} alt={link.alt} width={35} height={35} />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-start justify-between md:gap-[120px] w-full md:w-auto">
                    {/* Quick Links */}
                    <div className="w-full sm:w-auto text-nowrap">
                        <h2 className="text-lg font-bold mb-4 sm:mb-6">Quick Links</h2>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {quickLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-base font-normal hover:underline underline-offset-2 transition-all duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="w-full sm:w-auto text-nowrap">
                        <h2 className="text-lg font-bold mb-4 sm:mb-6">Resources</h2>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {resources.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-base font-normal hover:underline underline-offset-2 transition-all duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Contact Us */}
                <div className="w-full sm:w-auto">
                    <h2 className="text-lg font-bold mb-4 sm:mb-6">Contact Us</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/call-calling.svg"
                                alt="call-calling"
                                width={24}
                                height={24}
                            />
                            <h2 className="text-base font-semibold">+1-800-123-4567</h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/sms.svg"
                                alt="call-calling"
                                width={24}
                                height={24}
                            />
                            <h2 className="text-base font-semibold">support@zerogpt.net</h2>
                        </div>
                        <div className="flex items-start gap-3">
                            <Image
                                src="/assets/call-calling.svg"
                                alt="call-calling"
                                width={24}
                                height={24}
                                className="mt-1"
                            />
                            <h2 className="text-base font-semibold max-w-[252px]">
                                123 AI Tech Street, Suite 400, Silicon Valley, CA 94043, USA
                            </h2>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-10">
                        <h1 className="text-lg font-bold">Stay up to date</h1>
                        <div className="mt-3 sm:mt-5 border border-white rounded-[30px] h-[46px] flex items-center justify-between pr-[2px]">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent placeholder:text-white/95 text-white outline-none px-4 w-full"
                            />
                            <button className="h-[40px] hover:bg-white transition-all duration-300 bg-light-gray rounded-[30px] px-[18px] text-primary">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-white-blur-54 text-white text-center py-4"
                style={{ backdropFilter: "blur(54px)" }}
            >
                <h3 className="text-white text-sm sm:text-base font-normal px-4">
                    © 2025 ZeroGPT. All rights reserved. By using this site, you agree to
                    our Privacy Policy and Terms of Service.
                </h3>
            </div>
        </footer>
    );
};

export default Footer;

