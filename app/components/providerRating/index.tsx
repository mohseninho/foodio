import { Star } from "lucide-react";

export default function ProviderRating() {
    return (
        <div className="w-full h-fit flex justify-start items-center flex-col gap-2">
            <div className="w-full grid grid-cols-4 gap-2 items-center">
                <div className="col-span-1 flex justify-end items-center gap-1">
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                </div>
                <div className="col-span-3 w-full h-[2px] relative bg-gray-200">
                    <div className="absolute right-0 w-[90%] h-[2px] bg-green-700"></div>
                </div>
            </div>
            <div className="w-full  grid grid-cols-4 gap-2 items-center">
                <div className="col-span-1 flex justify-end items-center gap-1">
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                </div>
                <div className="col-span-3 w-full h-[2px] relative bg-gray-200">
                    <div className="absolute right-0 w-[50%] h-[2px] bg-green-600"></div>
                </div>
            </div>
            <div className="w-full  grid grid-cols-4 gap-2 items-center">
                <div className="col-span-1 flex justify-end items-center gap-1">
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                </div>
                <div className="col-span-3 w-full h-[2px] relative bg-gray-200">
                    <div className="absolute right-0 w-[30%] h-[2px] bg-green-500"></div>
                </div>
            </div>
            <div className="w-full  grid grid-cols-4 gap-2 items-center">
                <div className="col-span-1 flex justify-end items-center gap-1">
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                </div>
                <div className="col-span-3 w-full h-[2px] relative bg-gray-200">
                    <div className="absolute right-0 w-[35%] h-[2px] bg-red-300"></div>
                </div>
            </div>
            <div className="w-full  grid grid-cols-4 gap-2 items-center">
                <div className="col-span-1 flex justify-end items-center gap-1">
                    <Star size={16} className="text-gray-300 p-0 m-0" />
                </div>
                <div className="col-span-3 w-full h-[2px] relative bg-gray-200">
                    <div className="absolute right-0 w-[10%] h-[2px] bg-red-500"></div>
                </div>
            </div>
        </div>
    );
}
