import Image from "next/image";
import pic from "@/app/images/TempPics/fitfriends.jpg";
import { Banknote, Clock, MapPin, ShoppingCart, Star } from "lucide-react";
import ProviderRating from "../providerRating";
import CommentSection from "../commentSection";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
export default function ProviderInformation() {
    return (
        <div className="w-full h-full mt-0">
            <div className="sticky top-0 pt-10 pb-2 z-10 bg-white flex justify-start items-center flex-col">
                <DialogPrimitive.Close className="absolute right-0 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <Cross2Icon className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
                <div className="w-full grid grid-cols-4 gap-2 py-2">
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
                                    میرداماد، جنب موزه دفینه، بازار بزرگ
                                    میرداماد، مغازه اول سمت چپ ، پلاک ۶۹، فیت
                                    فرندز
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full h-full rounded-xl bg-slate-300"></div>
                    </div>
                </div>
                <div className="w-full mt-8 grid grid-cols-3 gap-2 justify-items-center">
                    <div className="col-span-1 w-full flex justify-center items-center flex-col gap-2 text-gray-800">
                        <Clock size={18} />
                        <span className="text-xs">ساعت کاری</span>
                        <span className="text-sm">
                            باز امروز از ساعت ۱۱ تا ۲۲
                        </span>
                    </div>
                    <div className="col-span-1 w-full flex justify-center items-center flex-col gap-2 text-gray-800">
                        <Banknote size={18} />
                        <span className="text-xs">شیوه‌های پرداخت</span>
                        <span className="text-sm">
                            آنلاین، اعتبار جایزه خرید
                        </span>
                    </div>
                    <div className="col-span-1 w-full flex justify-center items-center flex-col gap-2 text-gray-800">
                        <ShoppingCart size={18} />
                        <span className="text-xs">سبد خرید</span>
                        <span className="text-sm">۷۰,۰۰۰ تومان</span>
                    </div>
                </div>
            </div>
            <div className="h-fit grid grid-cols-7 my-6">
                <div className="h-full col-span-2 flex justify-end items-start flex-col gap-2">
                    <div className="flex justify-start items-end gap-2">
                        <Star className="text-yellow-400" />
                        <span className="text-2xl leading-5">4.4</span>
                    </div>
                    <div className="text-gray-400 text-sm">
                        از مجموع{" "}
                        <span className="text-gray-700 font-bold">۲,۳۳۰</span>{" "}
                        امتیاز و{" "}
                        <span className="text-gray-700 font-bold">۳۴۸</span> نظر
                    </div>
                </div>
                <div className="col-span-5">
                    <ProviderRating />
                </div>
            </div>
            <CommentSection />
        </div>
    );
}
