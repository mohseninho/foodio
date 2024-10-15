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

export default function CategorySlider() {
    return (
        <Carousel
            opts={{
                align: "start",
                direction: "rtl",
            }}
            className="w-full my-10"
        >
            <CarouselContent className="h-[120px]">
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={res} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={attari} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={beauty} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={bread} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={coffe} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={conf} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={diary} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={flower} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={fruit} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={icecream} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={nut} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={other} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/12">
                    <div className="w-full h-full bg-gray-100 border border-gray-200 rounded-2xl flex justify-center items-center flex-col px-2 pb-2">
                        <Image src={protein} width={100} height={100} alt="" />
                        <p>رستوران</p>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    );
}
