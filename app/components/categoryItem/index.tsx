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
            className="w-full h-full relative rounded-xl p-1 bg-white shadow-md"
        >
            <Image
                src={image}
                alt=""
                className="w-full h-full aspect-video rounded-lg"
            />
            <div className="absolute rounded-tl-xl rounded-br-xl bg-white w-7/12 h-1/3 right-0 bottom-0 flex justify-between items-center pr-5 pl-1 hover:pl-0 transition-all duration-150">
                <p className="text-base text-gray-800">{title}</p>
                <ChevronLeft color="#db2777" />
            </div>
        </Button>
    );
}
