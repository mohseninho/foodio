import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface props {
    title: string;
    image: StaticImageData;
}
export default function CategoryItem({ title, image }: props) {
    return (
        <Button
            variant="ghost"
            className="w-full h-[100px] relative rounded-xl p-1 bg-white shadow-md"
        >
            <Image
                src={image}
                alt=""
                className="w-full h-full object-cover aspect-video rounded-lg"
            />
            <div className="absolute rounded-tl-xl rounded-br-xl bg-white w-[100px] h-1/3 right-0 bottom-0 flex justify-between items-center pr-2 pl-1 hover:pl-0 transition-all duration-150">
                <p className="text-base text-gray-800 overflow-ellipsis ">{title}</p>
                <ChevronLeft color="#db2777" size={20}/>
            </div>
        </Button>
    );
}
