import { Star } from "lucide-react";
import CommentBadge from "../commentBadge";

export default function Comment() {
    return (
        <div className="w-full grid grid-cols-7 gap-4 border-b-[1px] border-gray-300 py-5">
            <div className="col-span-2 w-full flex justify-start items-start flex-col gap-2">
                <span className="text-lg font-bold">علی</span>
                <span className="text-sm">30 مهر 1403</span>
                <div className="border border-gray-200 bg-white rounded-lg flex justify-center items-center gap-1 px-2 py-1">
                    <Star size={12} className="text-yellow-400" />
                    <span className="leading-4">5</span>
                </div>
            </div>
            <div className="w-full col-span-5 flex justify-center items-start flex-col">
                <p className="h-fit text-sm text-gray-800 text-justify">
                    عالی بود واقعا خیلی زیبا تزئین کرده بودن …از چیزی که تصور
                    میکردم و انتظار داشتم خیلی خیلی بهتر بود.ممنونم ازتون
                    امیدوارم خدا بهتون برکت بده
                </p>
                <div className="w-full my-4 flex justify-start items-start gap-2">
                    <CommentBadge badge="روبان" />
                    <CommentBadge badge="دسته گل داوودی سفید" />
                </div>
                <div className="w-fit h-fit p-2 rounded-xl border border-gray-300 bg-white flex justify-start items-start flex-col gap-4">
                    <span className="text-sm font-bold text-pink-600">
                        پاسخ مدیر فروشگاه
                    </span>
                    <p className="text-xs text-justify">ممنونم از لطف شما</p>
                </div>
            </div>
        </div>
    );
}
