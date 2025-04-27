"use client";

import React, { useRef } from "react";
import { IoLogoApple, IoLogoAmazon, IoLogoGoogle } from "react-icons/io5";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { RiNetflixFill, RiMetaFill } from "react-icons/ri";
import { CgChevronDoubleDown } from "react-icons/cg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            !elSevenSecondSceneRef.current
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
                end: "bottom top",
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

        sixthAnimationTimeline.to(
            secondSceneElements,
            {
                opacity: 1,
                stagger: 0.02,
            },
            0
        );
    });
    return (
        <>
            <section
                ref={mainSectionRef}
                className="fixed top-0 left-0 right-0 bottom-0 bg-background">
                <div
                    ref={titleContainerRef}
                    className="h-2/3 flex items-center justify-end flex-col gap-12 pb-24 w-full">
                    <div
                        ref={mainTitleRef}
                        className="font-poppins text-[8rem]">
                        <div className="leading-28 text-center">
                            Your Personal
                        </div>
                        <div className="leading-28 text-center">
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
                    className="h-1/3 flex px-4 py-2 justify-center w-full gap-2">
                    <div
                        ref={stockCardOneRef}
                        className="h-full aspect-square flex-none bg-[#478bff] rounded-full flex-center border border-background">
                        <p
                            ref={elThreeSecondSceneRef}
                            className="absolute -left-[660px] text-black font-poppins !text-[5rem] whitespace-nowrap opacity-0">
                            Your AI Trading
                        </p>
                        <RiMetaFill className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                        <p
                            ref={elOneSecondSceneRef}
                            className="absolute -right-[180px] text-black font-poppins !text-[5rem] opacity-0">
                            Hub
                        </p>
                    </div>
                    <div
                        ref={stockCardTwoRef}
                        className="h-full aspect-square flex-none bg-[#ffc412] rounded-[10%] flex-center border border-background">
                        <p
                            ref={elTwoSecondSceneRef}
                            className="absolute -left-[124px] text-black font-poppins !text-[5rem] whitespace-nowrap opacity-0">
                            All
                        </p>
                        <IoLogoApple className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                        <p
                            ref={elFourSecondSceneRef}
                            className="absolute -right-[580px] text-black font-poppins !text-[5rem] whitespace-nowrap opacity-0">
                            Trading Tools
                        </p>
                    </div>
                    <div ref={stockCardThreeRef} className="relative h-full">
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
                            className="absolute -left-[434px] -top-6 text-black font-poppins !text-[5rem] whitespace-nowrap opacity-0">
                            You Might
                        </p>
                        <div className="absolute inset-0 flex items-center justify-center mr-[15%]">
                            <IoLogoAmazon className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                        </div>
                        <p
                            ref={elFiveSecondSceneRef}
                            className="absolute -right-[524px] -top-6 text-black font-poppins !text-[5rem] whitespace-nowrap opacity-0">
                            Need To Win
                        </p>
                    </div>

                    <div
                        ref={stockCardFourRef}
                        className="h-full aspect-square flex-none bg-[#7a78ff] rounded-[10%] flex-center border border-background">
                        <p
                            ref={elSixSecondSceneRef}
                            className="absolute -left-[646px] text-black font-poppins !text-[5rem] whitespace-nowrap opacity-0">
                            You Next Trade
                        </p>

                        <RiNetflixFill className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                    </div>
                    <div
                        ref={stockCardFiveRef}
                        className="h-full aspect-square flex-none bg-[#ff6d38] rounded-full flex-center border border-background">
                        <IoLogoGoogle className="absolute inset-0 m-auto w-3/5 h-3/5 text-background" />
                    </div>
                </div>
            </section>
            <section id="section-one" className="h-screen "></section>
            <section id="section-two" className="h-screen "></section>
            <section id="section-three" className="h-screen "></section>
            <section id="section-four" className="h-screen "></section>
        </>
    );
}
