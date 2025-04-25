import Image from "next/image";
import React from "react";

export default function Navbar() {
    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 text-white z-50">
            <div className="flex items-center gap-3 bg-[#222] p-1 rounded-md">
                <Image src="/logo.png" alt="logo" width={42} height={42} />
                <p>Trading Hub</p>
                <div className="pl-4 flex items-center gap-6 text-[.8rem]">
                    <button>About</button>
                    <button>Contact</button>
                    <button className="border border-[#c7ff69] py-2 px-3 rounded-full">
                        GitHub
                    </button>
                </div>
            </div>
        </div>
    );
}
