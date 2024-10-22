import { ShoppingCart } from "lucide-react";

export default function SecondarySideBar() {
    return (
        <div className="sticky top-[100px] w-full h-fit col-span-1">
            <div className="flex justify-center items-center flex-col gap-4 text-gray-400">
                <ShoppingCart />
                <span>سبد خرید شما خالی است!</span>
            </div>
        </div>
    );
}
