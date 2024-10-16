import { Search } from "lucide-react";

interface props {
    placeHolder: string;
}
export default function SearchBar({ placeHolder }: props) {
    return (
        <div className="relative w-[400px] h-[50px]">
            <input
                type="text"
                className="w-full h-full pr-10 pl-4 bg-gray-200 text-gray-400 border shadow-sm rounded-xl focus:bg-white"
                placeholder={placeHolder}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search color="#9ca3af" size={20} />
            </div>
        </div>
    );
}
