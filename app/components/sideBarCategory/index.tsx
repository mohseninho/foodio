import SideBarItem from "../sideBarItem";
import pic from "@/app/images/irani.jpg";

export default function SideBarCategory() {
    return (
        <div className="h-fit rounded-lg shadow-sm col-span-1 p-4 border border-gray-200">
            <div className="bg-gray-100 rounded-md p-3">
                <span className="text-base font-bold text-gray-700">
                    همه دسته‌بندی‌ها
                </span>
            </div>
            <div className="mt-4 flex justify-start items-center gap-4 flex-col">
                <SideBarItem name="فست‌فود" pic={pic} isMenu />
                <SideBarItem name="ایرانی" pic={pic} isMenu />
                <SideBarItem name="کباب" pic={pic} isMenu />
                <SideBarItem name="صبحانه" pic={pic} />
            </div>
        </div>
    );
}
