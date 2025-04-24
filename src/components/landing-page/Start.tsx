"use client";

import React, { useRef } from "react";
import { IoLogoApple, IoLogoAmazon, IoLogoGoogle } from "react-icons/io5";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { RiNetflixFill, RiMetaFill } from "react-icons/ri";
import { CgChevronDoubleDown } from "react-icons/cg";

gsap.registerPlugin(useGSAP);

export default function StartPage() {
    const mainTitleRef = useRef<HTMLDivElement | null>(null);
    const scrollToBottomButtonRef = useRef<HTMLDivElement | null>(null);
    const stockCardOneRef = useRef<HTMLDivElement | null>(null);
    const stockCardTwoRef = useRef<HTMLDivElement | null>(null);
    const stockCardThreeRef = useRef<HTMLDivElement | null>(null);
    const stockCardFourRef = useRef<HTMLDivElement | null>(null);
    const stockCardFiveRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (
            !mainTitleRef.current ||
            !scrollToBottomButtonRef.current ||
            !stockCardOneRef.current ||
            !stockCardTwoRef.current ||
            !stockCardThreeRef.current ||
            !stockCardFourRef.current ||
            !stockCardFiveRef.current
        )
            return;
        const initialTimeline = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power4.in",
            },
        });

        initialTimeline.from(
            mainTitleRef.current.children,
            {
                y: 100,
                opacity: 0,
                stagger: 0.1,
            },
            0
        );
        initialTimeline.from(
            scrollToBottomButtonRef.current.children,
            {
                y: 50,
                delay: 0.2,
                opacity: 0,
                stagger: 0.1,
            },
            0
        );
        initialTimeline.from(
            stockCardOneRef.current,
            {
                y: 350,
                delay: 0.5,
                duration: 1,
                ease: "power4.out",
            },
            0
        );
        initialTimeline.from(
            stockCardTwoRef.current,
            {
                y: 350,
                delay: 0.3,
                duration: 1,
                ease: "power4.out",
            },
            0
        );
        initialTimeline.from(
            stockCardThreeRef.current,
            {
                y: 350,
                delay: 0.6,
                duration: 1,
                ease: "power4.out",
            },
            0
        );
        initialTimeline.from(
            stockCardFourRef.current,
            {
                y: 350,
                delay: 0.4,
                duration: 1,
                ease: "power4.out",
            },
            0
        );
        initialTimeline.from(
            stockCardFiveRef.current,
            {
                y: 350,
                delay: 0.2,
                duration: 1,
                ease: "power4.out",
            },
            0
        );
    });
    return (
        <section className="md:h-screen bg-">
            <div className="h-2/3 flex items-center justify-end flex-col gap-12 pb-24">
                <div ref={mainTitleRef} className="font-poppins text-[8rem]">
                    <div className="leading-28 text-center">Your Personal</div>
                    <div className="leading-28 text-center">Trading Hub</div>
                </div>
                <div
                    ref={scrollToBottomButtonRef}
                    className="flex flex-col gap-4">
                    <p>Find the essential tools you need.</p>
                    <button className="text-center bg-[#c7ff69] rounded-full py-3 px-4 text-black flex-center gap-2">
                        <CgChevronDoubleDown className="text-[1.2rem]" />
                        <p>Scroll to Bottom</p>
                        <CgChevronDoubleDown className="text-[1.2rem]" />
                    </button>
                </div>
            </div>
            <div className="h-1/3 flex px-4 py-2 justify-between">
                <div
                    ref={stockCardOneRef}
                    className="h-full aspect-square flex-none bg-[#478bff] rounded-full flex-center">
                    <RiMetaFill className="text-background text-[14rem]" />
                </div>
                <div
                    ref={stockCardTwoRef}
                    className="h-full aspect-square flex-none bg-[#ffc412] rounded-4xl flex-center">
                    <IoLogoApple className="text-background text-[14rem]" />
                </div>
                <div ref={stockCardThreeRef} className="relative h-full">
                    <svg viewBox="0 0 95 83" className="h-full" fill="none">
                        <path
                            d="M1.09009 9.13254C1.09009 4.65077 4.72328 1.01758 9.20505 1.01758L66.1868 1.01759C69.0848 1.01759 71.7628 2.563 73.2129 5.07211L91.9285 37.4571C93.3804 39.9694 93.3804 43.0657 91.9285 45.578L73.2129 77.9631C71.7628 80.4722 69.0848 82.0176 66.1868 82.0176H9.20505C4.72328 82.0176 1.09009 78.3844 1.09009 73.9026V9.13254Z"
                            fill="#00a652"
                            data-v-13822dcf=""></path>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center mr-12">
                        <IoLogoAmazon className="text-background text-[14rem]" />
                    </div>
                </div>

                <div
                    ref={stockCardFourRef}
                    className="h-full aspect-square flex-none bg-[#7a78ff] rounded-4xl flex-center">
                    <RiNetflixFill className="text-background text-[12rem]" />
                </div>
                <div
                    ref={stockCardFiveRef}
                    className="h-full aspect-square flex-none bg-[#ff6d38] rounded-full flex-center">
                    <IoLogoGoogle className="text-background text-[14rem]" />
                </div>
            </div>
        </section>
    );
}
