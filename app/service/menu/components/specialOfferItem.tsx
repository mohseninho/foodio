import Image from "next/image";
import pic from "@/app/images/TempPics/jo.jpeg";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/app/components/discountBadge";

export default function SpecialOfferItem() {
    return (
        <div className="bg-gray-50 rounded-lg col-span-1 w-full p-4 flex justify-center items-center gap-5 flex-col">
            <div className="w-full grid grid-cols-5 gap-4">
                <div className="col-span-3 w-full h-full flex justify-start items-start flex-col gap-2">
                    <div className="overflow-ellipsis line-clamp-1">
                        جو دوسر فوری آماده
                    </div>
                    <div className="overflow-ellipsis line-clamp-3 w-full text-sm text-gray-400">
                        ۴۵۰ گرم جو دوسر فوری آماده
                    </div>
                </div>
                <div className="w-[100px] h-[100px] col-span-2">
                    <Image
                        src={pic}
                        alt=""
                        className="w-full h-full rounded-lg object-cover aspect-square"
                    />
                </div>
            </div>
            <div className="w-full flex justify-center items-start flex-col gap-2 mb-2">
                <span className="text-red-500 text-xs">
                    <span className="text-lg">1 </span>عدد باقی مانده
                </span>
                <div className="w-full h-[2px] rounded-sm bg-red-500"></div>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <DiscountBadge />
                    <div className="flex justify-center items-start flex-col">
                        <span className="text-gray-400 text-xs line-through">200000</span>
                        <span className="text-gray-500 text-sm">
                            <span className="text-gray-700 text-base">
                                200000
                            </span>{" "}
                            تومان
                        </span>
                    </div>
                </div>
                <Button
                    variant={"default"}
                    className="w-[100px] rounded-full text-gray-400 bg-gray-200 hover:bg-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                >
                    افزودن
                </Button>
            </div>
        </div>
    );
}
