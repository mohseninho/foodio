import Image from "next/image";
import HeroPic from "@/app/images/heroPic.png";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
export default function MainHero() {
    return (
        <div className="w-full md:h-[680px] h-[400px] pt-28 rounded-br-[70px] bg-gray-100 grid grid-cols-2">
            <div className="flex justify-center items-start flex-col gap-5 md:pr-10">
                <div className="flex justify-center items-start flex-col gap-1">
                    <h1 className="text-5xl font-bold">
                        سفارش آنلاین <span className="text-pink-600">غذا</span>
                    </h1>
                    <p className="text-gray-600">
                        سفارش آنلاین غذا ، میوه، نان، شیرینی و ...
                    </p>
                </div>
                <div className="z-10 relative md:w-[400px] w-[320px] md:h-14 h-12">
                    <input
                        type="text"
                        className="w-full h-full pr-14 pl-16 text-gray-400 bg-white border shadow-sm rounded-full"
                        placeholder="ابتدا آدرستان را انتخاب کنید."
                    />
                    <Button
                        variant="default"
                        className="absolute left-1 top-1/2 -translate-y-1/2 bg-pink-600 rounded-full p-0 md:w-12 md:h-12 w-10 h-10"
                    >
                        <Search />
                    </Button>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2">
                        <MapPin color="#9ca3af" />
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image src={HeroPic} fill alt="" />
            </div>
        </div>
    );
}
