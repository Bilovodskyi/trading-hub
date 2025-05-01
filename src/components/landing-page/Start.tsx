"use client";

import React, { useRef } from "react";
import { IoLogoApple, IoLogoAmazon, IoLogoGoogle } from "react-icons/io5";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { RiNetflixFill, RiMetaFill } from "react-icons/ri";
import { CgChevronDoubleDown } from "react-icons/cg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeInWords } from "@/lib/data";
import Image from "next/image";
import { useViewportHeight } from "@/hooks/useViewPortHeight";
import { BiLinkExternal } from "react-icons/bi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StartPage() {
    const mainTitleRef = useRef<HTMLDivElement | null>(null);
    const scrollToBottomButtonRef = useRef<HTMLDivElement | null>(null);
    const stockCardOneRef = useRef<HTMLDivElement | null>(null);
    const stockCardTwoRef = useRef<HTMLDivElement | null>(null);
    const stockCardThreeRef = useRef<HTMLDivElement | null>(null);
    const stockCardFourRef = useRef<HTMLDivElement | null>(null);
    const stockCardFiveRef = useRef<HTMLDivElement | null>(null);
    const cardsContainerRef = useRef<HTMLDivElement | null>(null);
    const titleContainerRef = useRef<HTMLDivElement | null>(null);
    const mainSectionRef = useRef<HTMLDivElement | null>(null);

    const elOneSecondSceneRef = useRef<HTMLDivElement | null>(null);
    const elTwoSecondSceneRef = useRef<HTMLDivElement | null>(null);
    const elThreeSecondSceneRef = useRef<HTMLDivElement | null>(null);
    const elFourSecondSceneRef = useRef<HTMLDivElement | null>(null);
    const elFiveSecondSceneRef = useRef<HTMLDivElement | null>(null);
    const elSixSecondSceneRef = useRef<HTMLDivElement | null>(null);
    const elSevenSecondSceneRef = useRef<HTMLDivElement | null>(null);

    const thirdSceneRef = useRef<HTMLDivElement | null>(null);

    const textThirdScene = useRef<HTMLDivElement | null>(null);
    const elOneThirdSceneRef = useRef<HTMLDivElement | null>(null);
    const elTwoThirdSceneRef = useRef<HTMLDivElement | null>(null);
    const elThreeThirdSceneRef = useRef<HTMLDivElement | null>(null);

    const lastSceneRef = useRef<HTMLDivElement | null>(null);

    const viewportHeight = useViewportHeight();
    useGSAP(() => {
        if (
            !mainTitleRef.current ||
            !scrollToBottomButtonRef.current ||
            !stockCardOneRef.current ||
            !stockCardTwoRef.current ||
            !stockCardThreeRef.current ||
            !stockCardFourRef.current ||
            !stockCardFiveRef.current ||
            !cardsContainerRef.current ||
            !titleContainerRef.current ||
            !mainSectionRef.current ||
            !elOneSecondSceneRef.current ||
            !elTwoSecondSceneRef.current ||
            !elThreeSecondSceneRef.current ||
            !elFourSecondSceneRef.current ||
            !elFiveSecondSceneRef.current ||
            !elSixSecondSceneRef.current ||
            !elSevenSecondSceneRef.current ||
            !elOneThirdSceneRef.current ||
            !elTwoThirdSceneRef.current ||
            !elThreeThirdSceneRef.current ||
            !thirdSceneRef.current ||
            !textThirdScene.current ||
            !lastSceneRef.current
        )
            return;
        const initialTimeline = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power4.in",
            },
        });

        const firstAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-two",
                start: "top bottom",
                end: "top center",
                scrub: true,
            },
        });

        const secondAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-two",
                start: "top center",
                end: "top top",
                scrub: true,
            },
        });

        const thirdAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-three",
                start: "top bottom",
                end: "+=150px",
                scrub: true,
            },
        });
        const forthAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-three",
                start: "top bottom-=150px",
                end: "top center",
                scrub: true,
            },
        });
        const fifthAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-three",
                start: "top center",
                end: "top top",
                scrub: true,
            },
        });
        const sixthAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-four",
                start: "top bottom",
                end: "+=250px",
                scrub: true,
            },
            defaults: {
                ease: "power4.out",
            },
        });

        const seventhAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-four",
                start: "top bottom-=250",
                end: "bottom top",
                scrub: true,
            },
        });

        const lastAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#section-six",
                start: "top bottom",
                end: () => `+=${viewportHeight}`,
                scrub: true,
            },
        });

        const cards = [
            stockCardOneRef.current,
            stockCardTwoRef.current,
            stockCardThreeRef.current,
            stockCardFourRef.current,
            stockCardFiveRef.current,
        ];

        const secondSceneElements = [
            elOneSecondSceneRef.current,
            elTwoSecondSceneRef.current,
            elThreeSecondSceneRef.current,
            elFourSecondSceneRef.current,
            elFiveSecondSceneRef.current,
            elSixSecondSceneRef.current,
            elSevenSecondSceneRef.current,
        ];

        const thirdSceneElements = [
            elOneThirdSceneRef.current,
            elTwoThirdSceneRef.current,
            elThreeThirdSceneRef.current,
        ];

        const fadeOut = [mainTitleRef.current, scrollToBottomButtonRef.current];

        const delays = [0.5, 0.3, 0.6, 0.4, 0.2];

        initialTimeline
            .from(
                mainTitleRef.current.children,
                {
                    y: 100,
                    opacity: 0,
                    stagger: 0.1,
                },
                0
            )
            .from(
                scrollToBottomButtonRef.current.children,
                {
                    y: 50,
                    delay: 0.2,
                    opacity: 0,
                    stagger: 0.1,
                },
                0
            )
            .from(
                cards,
                {
                    y: 350,
                    duration: 1,
                    ease: "power4.out",
                    delay: (i) => delays[i],
                },
                0
            );
        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            firstAnimationTimeline
                .to(
                    cards,
                    {
                        y: -350,
                        stagger: 0.1,
                        duration: 0.5,
                        ease: "power2.out",
                    },
                    0
                )

                .to(
                    fadeOut,
                    {
                        opacity: 0,
                        duration: 0.3,
                    },
                    0
                );

            secondAnimationTimeline
                .to(
                    cards,
                    {
                        y: -250,
                        width: "70px",
                        height: "70px",
                        duration: 0.7,
                    },
                    0
                )
                .to(mainSectionRef.current, {
                    backgroundColor: "var(--foreground)",
                });

            thirdAnimationTimeline.to(
                stockCardOneRef.current,
                {
                    y: -350,
                },
                0
            );
            forthAnimationTimeline
                .to(
                    stockCardOneRef.current,
                    {
                        x: "+=400",
                    },
                    0
                )
                .to(
                    stockCardTwoRef.current,
                    {
                        x: -150,
                    },
                    0
                )
                .to(
                    [
                        stockCardThreeRef.current,
                        stockCardFourRef.current,
                        stockCardFiveRef.current,
                    ],
                    {
                        y: "+=100",
                    },
                    0
                );

            fifthAnimationTimeline
                .to(
                    [stockCardFourRef.current, stockCardFiveRef.current],
                    {
                        y: "+=100",
                    },
                    0
                )
                .to(
                    stockCardThreeRef.current,

                    {
                        x: "-=50",
                    },
                    0
                )
                .to(
                    [stockCardFourRef.current, stockCardFiveRef.current],
                    {
                        x: "+=200",
                    },
                    1
                );

            sixthAnimationTimeline.from(
                secondSceneElements,
                {
                    opacity: 0,
                    stagger: 0.5,
                    x: 50,
                },
                0
            );
        });

        mm.add("(max-width: 768px)", () => {
            firstAnimationTimeline
                .to(
                    cards,
                    {
                        y: 170,
                        stagger: 0.1,
                        duration: 0.5,
                        ease: "power2.out",
                    },
                    0
                )

                .to(
                    fadeOut,
                    {
                        opacity: 0,
                        duration: 0.3,
                    },
                    0
                );

            secondAnimationTimeline
                .to(
                    cards,
                    {
                        y: 170,
                        width: "50px",
                        height: "50px",
                        duration: 0.7,
                    },
                    0
                )
                .to(
                    mainSectionRef.current,
                    {
                        backgroundColor: "var(--foreground)",
                    },
                    1
                )
                .to(
                    stockCardFourRef.current,
                    {
                        y: "-=54",
                    },
                    1
                )
                .to(
                    stockCardTwoRef.current,
                    {
                        y: "+=54",
                    },
                    1
                );

            thirdAnimationTimeline
                .to(
                    stockCardFourRef.current,
                    {
                        x: "+=33",
                    },
                    0
                )
                .to(
                    stockCardOneRef.current,
                    {
                        x: "+=33",
                    },
                    0
                )
                .to(
                    stockCardFiveRef.current,
                    {
                        x: "-=33",
                    },
                    0
                )
                .to(
                    stockCardTwoRef.current,
                    {
                        x: "-=33",
                    },
                    0
                );
            // forthAnimationTimeline.to(
            //     cards,
            //     {
            //         width: "40px",
            //         height: "40px",
            //         duration: 0.7,
            //     },
            //     0
            // );

            // fifthAnimationTimeline
            //     .to(
            //         [stockCardFourRef.current, stockCardFiveRef.current],
            //         {
            //             y: "+=100",
            //         },
            //         0
            //     )
            //     .to(
            //         stockCardThreeRef.current,

            //         {
            //             x: "-=50",
            //         },
            //         0
            //     )
            //     .to(
            //         [stockCardFourRef.current, stockCardFiveRef.current],
            //         {
            //             x: "+=200",
            //         },
            //         1
            //     );

            // sixthAnimationTimeline.from(
            //     secondSceneElements,
            //     {
            //         opacity: 0,
            //         stagger: 0.5,
            //         x: 50,
            //     },
            //     0
            // );
        });

        seventhAnimationTimeline
            .from(
                thirdSceneElements,
                {
                    stagger: 0.04,
                    duration: 2,
                    x: "-=4000",
                },
                0
            )
            .to(
                thirdSceneRef.current,
                {
                    delay: 0.5,
                    backgroundColor: "var(--background)",
                },
                0
            )
            .from(
                textThirdScene.current.children,
                {
                    delay: 0.85,
                    stagger: 0.1,
                    opacity: 0,
                },
                0
            )
            .to(
                textThirdScene.current.children,
                {
                    delay: 1.5,
                    stagger: 0.1,
                    backgroundColor: "transparent",
                    color: "white",
                },
                0
            );

        lastAnimationTimeline
            .from(
                lastSceneRef.current,
                {
                    y: viewportHeight,
                    scaleX: 0.7,
                },
                0
            )
            .to(
                lastSceneRef.current,
                {
                    display: "flex",
                    borderRadius: "0px",
                },
                0
            );
    });
    return (
        <>
            <section
                ref={mainSectionRef}
                className="fixed top-0 left-0 right-0 bottom-0 bg-background max-md:h-dvh max-md:flex max-md:flex-col-reverse">
                <div
                    ref={titleContainerRef}
                    className="h-1/2 md:h-2/3 flex items-center justify-center md:justify-end flex-col-reverse md:flex-col gap-4 md:gap-12 md:pb-24 w-full">
                    <div
                        ref={mainTitleRef}
                        className="font-poppins text-[3rem] md:text-[8rem]">
                        <div className="md:leading-28 text-center">
                            Your Personal
                        </div>
                        <div className="md:leading-28 text-center">
                            Trading Hub
                        </div>
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
                <div
                    ref={cardsContainerRef}
                    className="h-1/2 md:h-1/3 flex max-md:flex-col-reverse px-4 py-2 justify-center w-full gap-2">
                    <div className="flex max-md:justify-center max-md:gap-4">
                        <div
                            ref={stockCardOneRef}
                            className="stock-card bg-blue !rounded-[10%]">
                            <p
                                ref={elThreeSecondSceneRef}
                                className="second-scene-text -left-[660px] ">
                                Your AI Trading
                            </p>
                            <RiMetaFill className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                            <p
                                ref={elOneSecondSceneRef}
                                className="second-scene-text -right-[180px]">
                                Hub
                            </p>
                        </div>
                        <div
                            ref={stockCardTwoRef}
                            className="stock-card bg-yellow">
                            <p
                                ref={elTwoSecondSceneRef}
                                className="second-scene-text -left-[124px]">
                                All
                            </p>
                            <IoLogoApple className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                            <p
                                ref={elFourSecondSceneRef}
                                className="second-scene-text -right-[580px]">
                                Trading Tools
                            </p>
                        </div>
                    </div>
                    <div
                        ref={stockCardThreeRef}
                        className="relative h-full max-md:hidden">
                        <svg
                            viewBox="0 0 95 83"
                            className="h-full "
                            fill="none">
                            <path
                                d="M1.09009 9.13254C1.09009 4.65077 4.72328 1.01758 9.20505 1.01758L66.1868 1.01759C69.0848 1.01759 71.7628 2.563 73.2129 5.07211L91.9285 37.4571C93.3804 39.9694 93.3804 43.0657 91.9285 45.578L73.2129 77.9631C71.7628 80.4722 69.0848 82.0176 66.1868 82.0176H9.20505C4.72328 82.0176 1.09009 78.3844 1.09009 73.9026V9.13254Z"
                                fill="#00a652"
                                stroke="#141414"
                                data-v-13822dcf=""></path>
                        </svg>
                        <p
                            ref={elSevenSecondSceneRef}
                            className="second-scene-text -left-[434px] -top-6">
                            You Might
                        </p>
                        <div className="absolute inset-0 flex items-center justify-center mr-[15%]">
                            <IoLogoAmazon className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                        </div>
                        <p
                            ref={elFiveSecondSceneRef}
                            className="second-scene-text -right-[524px] -top-6">
                            Need To Win
                        </p>
                    </div>
                    <div className="flex max-md:justify-center max-md:gap-4">
                        <div
                            ref={stockCardFourRef}
                            className="stock-card bg-purple !rounded-[10%]">
                            <p
                                ref={elSixSecondSceneRef}
                                className="second-scene-text -left-[646px]">
                                You Next Trade
                            </p>

                            <RiNetflixFill className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                        </div>
                        <div
                            ref={stockCardFiveRef}
                            className="stock-card bg-orange">
                            <IoLogoGoogle className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                        </div>
                    </div>
                </div>
                <div ref={thirdSceneRef} className="fixed inset-0">
                    <div
                        ref={elOneThirdSceneRef}
                        className="w-[2000px] h-1/3 bg-orange border border-background rounded-3xl translate-x-[2000px]"></div>
                    <div
                        ref={elThreeThirdSceneRef}
                        className="w-[2000px] h-1/3 bg-purple border border-background rounded-3xl translate-x-[2000px]"></div>
                    <div
                        ref={elTwoThirdSceneRef}
                        className="w-[2000px] h-1/3 bg-yellow border border-background rounded-3xl translate-x-[2000px]"></div>
                    <div className="absolute top-0 md:top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-1/3 px-6 md:px-0 pt-8 md:pt-0">
                        <p
                            ref={textThirdScene}
                            className="text-white !text-[1.65rem] !md:text-[2rem] font-poppins flex gap-2 flex-wrap">
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={20}
                                height={20}
                                className="w-[40px] h-[40px]"
                            />
                            {fadeInWords.map((word, i) => (
                                <span
                                    key={i}
                                    className="bg-neutral-700 rounded-full text-transparent">
                                    {word}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div
                        ref={lastSceneRef}
                        className="absolute inset-0 bg-green w-full h-screen rounded-3xl hidden">
                        <div className="h-full w-full md:w-1/2 flex flex-col justify-center px-6 md:px-24 gap-2">
                            <div className="bg-purple w-full md:w-[300px] rounded-xl p-4 border border-black text-black leading-4 flex justify-between">
                                <div>
                                    <h1>Trade Journal</h1>
                                    <h2 className="text-neutral-700 text-[.75rem]">
                                        tradejournal.one
                                    </h2>
                                </div>
                                <div className="rounded-full bg-black w-[34px] h-[34px] flex-center">
                                    <BiLinkExternal className="text-white" />
                                </div>
                            </div>
                            <div className="bg-orange w-full md:w-[300px] rounded-xl p-4 border border-black text-black leading-4 flex justify-between">
                                <div>
                                    <h1>AI Investor</h1>
                                    <h2 className="text-neutral-700 text-[.75rem]">
                                        investsquid.com
                                    </h2>
                                </div>
                                <div className="rounded-full bg-black w-[34px] h-[34px] flex-center">
                                    <BiLinkExternal className="text-white" />
                                </div>
                            </div>
                            <div className="bg-yellow w-full md:w-[300px] rounded-xl p-4 border border-black text-black leading-4 flex justify-between">
                                <div>
                                    <h1>AI Trader</h1>
                                    <h2 className="text-neutral-700 text-[.75rem]">
                                        Coming soon
                                    </h2>
                                </div>
                                <div className="rounded-full bg-black w-[34px] h-[34px] flex-center">
                                    <BiLinkExternal className="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 aspect-square relative hidden md:block">
                            <Image
                                src="/test-2.png"
                                alt="big-logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-one" className="h-screen "></section>
            <section id="section-two" className="h-screen "></section>
            <section id="section-three" className="h-screen "></section>
            <section id="section-four" className="h-screen"></section>
            <section id="section-five" className="h-screen"></section>
            <section id="section-six" className="h-screen"></section>
        </>
    );
}
