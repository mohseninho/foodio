import Image from "next/image";
import pic from "@/app/images/TempPics/fitfriends.jpg";
import { Banknote, Clock, MapPin, ShoppingCart } from "lucide-react";
export default function ProviderInformation() {
    return (
        <div className="w-full h-full mt-8">
            <div className="h-max grid grid-cols-4 gap-2 py-2">
                <div className="h-[100px] col-span-3 grid grid-cols-4 gap-1">
                    <div className="w-[100px] h-[100px] col-span-1 p-1 bg-white shadow-md shadow-gray-200 rounded-lg">
                        <Image
                            src={pic}
                            alt=""
                            className="w-full h-full rounded-md object-cover aspect-square border border-gray-100"
                        />
                    </div>
                    <div className="h-full col-span-3 flex flex-col justify-between items-start">
                        <span className="text-2xl font-bold text-gray-800">
                            فیت فرندز
                        </span>
                        <span className="text-base text-gray-600">
                            فست فود, ساندویچ, آبمیوه طبیعی, نوشیدنی
                        </span>
                        <div className="flex text-sm text-gray-500">
                            <MapPin size={20} />
                            <div>
                                میرداماد، جنب موزه دفینه، بازار بزرگ میرداماد،
                                مغازه اول سمت چپ ، پلاک ۶۹، فیت فرندز
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="w-full h-full rounded-xl bg-slate-300"></div>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 justify-items-center">
                <div className="col-span-1 w-full flex justify-center items-center flex-col gap-2 text-gray-800">
                    <Clock size={18} />
                    <span className="text-xs">ساعت کاری</span>
                    <span className="text-sm">باز امروز از ساعت ۱۱ تا ۲۲</span>
                </div>
                <div className="col-span-1 w-full flex justify-center items-center flex-col gap-2 text-gray-800">
                    <Banknote size={18} />
                    <span className="text-xs">شیوه‌های پرداخت</span>
                    <span className="text-sm">آنلاین، اعتبار جایزه خرید</span>
                </div>
                <div className="col-span-1 w-full flex justify-center items-center flex-col gap-2 text-gray-800">
                    <ShoppingCart size={18} />
                    <span className="text-xs">سبد خرید</span>
                    <span className="text-sm">۷۰,۰۰۰ تومان</span>
                </div>
            </div>
        </div>
    );
}
