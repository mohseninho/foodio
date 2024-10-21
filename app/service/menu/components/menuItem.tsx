import Image from "next/image";
import pic from "@/app/images/TempPics/jo.jpeg";
import { Button } from "@/components/ui/button";

export default function MenuItem() {
    return (
        <div className="bg-gray-100 rounded-lg col-span-1 w-full p-4 flex justify-center items-center gap-5 flex-col">
            <div className="w-full flex justify-between items-center">
                <div className="flex justify-center items-start flex-col gap-2">
                    <span>جو دوسر فوری آماده</span>
                    <span className="text-sm text-gray-400">
                        ۴۵۰ گرم جو دوسر فوری آماده
                    </span>
                </div>
                <Image
                    src={pic}
                    alt=""
                    className="w-[100px] h-[100px] rounded-lg object-cover aspect-square"
                />
            </div>
            <div className="w-full flex justify-between items-center">
                <span className="text-gray-500 text-sm">
                    <span className="text-gray-700 text-base">200000</span>{" "}
                    تومان
                </span>
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
