import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <div className="max-md:hidden fixed top-4 left-1/2 -translate-x-1/2 text-white z-50">
            <div className="flex items-center gap-3 bg-[#222] p-1 rounded-md">
                <Image src="/logo.png" alt="logo" width={42} height={42} />
                <p>Trading Hub</p>
                <div className="pl-4 flex items-center gap-6 text-[.8rem]">
                    <Link
                        href="https://bilovodskyi-portfolio.netlify.app"
                        target="_blank">
                        Portfolio
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/bohdan-bilovodskyi-0437241b7/"
                        target="_blank">
                        LinkedIn
                    </Link>
                    <Link
                        href="https://github.com/Bilovodskyi"
                        target="_blank"
                        className="border border-[#c7ff69] py-2 px-3 rounded-full hover:bg-[#c7ff69] transition-colors duration-150 cursor-pointer hover:text-black">
                        GitHub
                    </Link>
                </div>
            </div>
        </div>
    );
}
