import Image from "next/image";
import Link from "next/link";
import resPic from "@/app/images/TempPics/resPic.jpg";
import resLogo from "@/app/images/TempPics/resLogo.jpg";
import { Star, Truck } from "lucide-react";
export default function CardItem() {
    return (
        <Link
            href=""
            className="w-full h-[400px] grid grid-rows-5 border border-gray-200 hover:shadow-md shadow-sm rounded-lg overflow-hidden"
        >
            <div className="relative w-full row-span-2">
                <Image
                    src={resPic}
                    alt=""
                    fill
                    className="aspect-video object-cover"
                />
                <div className="absolute rounded-xl -bottom-5 p-1 bg-white left-1/2 -translate-x-1/2 shadow-md">
                    <Image
                        src={resLogo}
                        alt=""
                        width={80}
                        height={80}
                        className="w-full h-full aspect-square object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className="w-full mt-8 row-span-2 flex justify-start items-center flex-col gap-2">
                <p className="text-lg font-bold">چلو‌پز(جردن)</p>
                <span className="h-fit flex justify-center items-center text-sm">
                    <Star size={18} className="text-yellow-400 mx-1" />
                    4.2
                    <span className="text-gray-400 mx-2">(42570 امتیاز)</span>
                </span>
                <span className="w-full text-gray-400 text-center text-sm">
                    نوشیدنی شرکتی، نوشیدنی، چلو کباب
                </span>
            </div>
            <div className="w-full row-span-1 flex justify-center items-center">
                <div className="relative w-fit bg-white shadow-md rounded-full py-2 pl-4 pr-10 text-gray-500 text-sm">
                    ارسال اکسپرس
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Truck size={22}/>
                    </div>
                </div>
            </div>
        </Link>
    );
}
