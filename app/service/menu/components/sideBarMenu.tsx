import Image from "next/image";
import pic from "@/app/images/TempPics/fitfriends.jpg";
import { Star } from "lucide-react";
export default function SideBarMenu() {
    return (
        <div className="w-full col-span-1 flex justify-start items-start flex-col gap-4">
            <div className="h-fit flex justify-start items-center gap-4">
                <div className="w-[80px] h-[80px] p-1 bg-white shadow-md shadow-gray-200 rounded-lg">
                    <Image
                        src={pic}
                        alt=""
                        className="w-full h-full rounded-md object-cover aspect-square border border-gray-100"
                    />
                </div>
                <div className="h-full py-2 flex flex-col justify-between items-start">
                    <div className="flex justify-center items-center gap-1">
                        <Star size={16} className="text-yellow-500" />
                        <span className="text-sm flex justify-center items-center gap-2">4.5 <span className="text-gray-400">(۳۴,۸۴۳ امتیاز)</span></span>
                    </div>
                    <span className="text-xl font-bold">فیت فرندز</span>
                </div>
            </div>
        </div>
    );
}
