import Image from "next/image";
import logo from "../../images/logo.png";
import { Button } from "@/components/ui/button";
import { Store } from "lucide-react";

export default function Header() {
    return (
        <header className="absolute px-10 z-10 bg-transparent w-full h-fit flex justify-between items-center">
            <div className="w-[120px] h-[120px] relative">
                <Image src={logo} fill alt="" />
            </div>
            <div className="flex justify-center items-center gap-4">
                <Button variant="ghost" className="flex justify-center items-center gap-2">
                    <Store />
                     <span>ثبت نام فروشندگان</span>
                </Button>
                <Button
                    variant="default"
                    className="bg-pink-600 rounded-xl text-white text-lg font-bold w-20 h-10"
                >
                    ورود
                </Button>
            </div>
        </header>
    );
}
