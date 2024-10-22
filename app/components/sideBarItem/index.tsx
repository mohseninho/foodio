import { Button } from "@/components/ui/button";
import { ChevronLeft, Ghost } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface props {
    name: string;
    pic: StaticImageData;
    isMenu?: boolean;
}

export default function SideBarItem({ name, pic, isMenu }: props) {
    return (
        <Button
            variant={"ghost"}
            className="w-full h-10 p-0 m-0 bg-transparent flex justify-between items-center group"
        >
            <div className="flex justify-start items-center gap-2">
                <Image
                    src={pic}
                    alt=""
                    width={35}
                    height={35}
                    className="object-cover aspect-square rounded-md"
                />
                <p>{name}</p>
            </div>
            {isMenu && (
                <ChevronLeft
                    size={20}
                    className="text-gray-300 group-hover:text-gray-500 transition-all duration-150"
                />
            )}
        </Button>
    );
}
