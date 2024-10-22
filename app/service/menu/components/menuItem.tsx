import Image from "next/image";
import pic from "@/app/images/TempPics/jo.jpeg";
import { Button } from "@/components/ui/button";

export default function MenuItem() {
    return (
        <div className="bg-gray-50 rounded-lg col-span-1 w-full p-4 flex justify-center items-center gap-5 flex-col">
            <div className="w-full grid grid-cols-5 gap-4">
                <div className="col-span-3 w-full h-full flex justify-start items-start flex-col gap-2">
                    <div className="overflow-ellipsis line-clamp-1">
                        جو دوسر فوری آماده
                    </div>
                    <div className="overflow-ellipsis line-clamp-3 w-full text-sm text-gray-400">
                        ۴۵۰ گرم جو دوسر فوری
                        آماده
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
