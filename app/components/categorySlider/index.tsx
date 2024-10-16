"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import res from "@/app/images/CategorySliderPics/restaurant-desktop.png";
import attari from "@/app/images/CategorySliderPics/attari-desktop.png";
import beauty from "@/app/images/CategorySliderPics/beauti-desktop.png";
import bread from "@/app/images/CategorySliderPics/bread-desktop.png";
import coffe from "@/app/images/CategorySliderPics/coffe-desktop.png";
import conf from "@/app/images/CategorySliderPics/confectionary-desktop.png";
import diary from "@/app/images/CategorySliderPics/dairy-desktop.png";
import flower from "@/app/images/CategorySliderPics/flower-desktop.png";
import fruit from "@/app/images/CategorySliderPics/fruit-desktop.png";
import icecream from "@/app/images/CategorySliderPics/icecream-desktop.png";
import nut from "@/app/images/CategorySliderPics/nuts-desktop.png";
import protein from "@/app/images/CategorySliderPics/protein-desktop.png";
import other from "@/app/images/CategorySliderPics/other-desktop.png";
import { useBreakpoints, useMediaQuery } from "@/app/constants/hooks";
import Link from "next/link";

export default function CategorySlider() {
    const { isXxs, isXs, isSm, isMd, isLg } = useBreakpoints();
    let isPageWide = useMediaQuery("(min-width: 1050px)");
    function setSize():  string | undefined {
        if (isXxs) return "basis-1/3";
        if (isXs) return "basis-1/3";
        if (isSm) return "basis-1/3";
        if (isMd) return "basis-1/6";
        if (isLg) return "basis-1/12";
        else return "";
    }
    return (
        <Carousel
            opts={{
                align: "start",
                direction: "rtl",
            }}
            className="w-full my-10"
        >
            <CarouselContent className="h-[120px]">
                <CarouselItem className={setSize()}>
                    <Link href="service/resturant" className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={res} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </Link>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <Link href="service/coffe" className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={attari} width={100} height={100} alt="" />
                        <p>کافه</p>
                    </Link>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={beauty} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={bread} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={coffe} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={conf} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={diary} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={flower} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={fruit} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={icecream} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={nut} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={other} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className={setSize()}>
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={protein} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
            </CarouselContent>
            {isPageWide ? (
                <>
                    <CarouselNext />
                    <CarouselPrevious />
                </>
            ) : null}
        </Carousel>
    );
}
