import Image from "next/image";
import pic from "@/app/images/TempPics/fitfriends.jpg";
import { CircleAlert, Star } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProviderInformation from "@/app/components/providerInformation";

export default function SideBarMenu() {
    return (
        <div className="sticky top-[100px] w-full h-fit col-span-1 flex justify-start items-start flex-col gap-4">
            <div className="h-[80px] flex justify-start items-center gap-4">
                <div className="w-[80px] h-[80px] p-1 bg-white shadow-md shadow-gray-200 rounded-lg">
                    <Image
                        src={pic}
                        alt=""
                        className="w-full h-full rounded-md object-cover aspect-square border border-gray-100"
                    />
                </div>
                <div className="h-full py-2 flex flex-col justify-between items-start">
                    <div className="flex justify-center items-center gap-1">
                        <Star size={16} className="text-yellow-500" />
                        <span className="text-sm flex justify-center items-center gap-2">
                            4.5{" "}
                            <span className="text-gray-400">
                                (۳۴,۸۴۳ امتیاز)
                            </span>
                        </span>
                    </div>
                    <span className="text-2xl font-bold">فیت فرندز</span>
                </div>
            </div>

            <Dialog>
                <DialogTrigger className="w-full">
                    <div className="w-full py-3 bg-white hover:bg-white shadow-sm rounded-full flex justify-center items-center gap-1 text-green-500 hover:text-green-500 text-base">
                        <CircleAlert size={18} />
                        اطلاعات و نظرات
                    </div>
                </DialogTrigger>
                <DialogContent className="overflow-y-scroll">
                    <ProviderInformation />
                </DialogContent>
            </Dialog>
        </div>
    );
}
