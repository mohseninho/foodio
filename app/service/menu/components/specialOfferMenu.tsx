import { Clock, Sparkles } from "lucide-react";
import SpecialOfferItem from "./specialOfferItem";

interface props {
    menuName: string;
}
export default function SpecialOfferMenu({ menuName }: props) {
    return (
        <div className="w-full rounded-lg bg-white border border-gray-200 flex justify-start items-center flex-col overflow-hidden">
            <div className="w-full flex justify-between items-center px-5 bg-pink-500">
                <span className="my-4 flex justify-center items-center gap-2 text-white font-bold text-xl">
                    <Sparkles />
                    {menuName}
                </span>
                <div className="flex justify-center items-center gap-2 text-white">
                    <div className="flex justify-center items-center text-xl">
                        <span className="flex flex-row-reverse gap-1">
                            <span>15</span>:<span>34</span>:<span>08</span>
                        </span>
                    </div>
                    <Clock />
                </div>
            </div>
            <div className="w-full h-fit grid grid-cols-2 gap-2 p-2">
                <SpecialOfferItem />
            </div>
        </div>
    );
}
