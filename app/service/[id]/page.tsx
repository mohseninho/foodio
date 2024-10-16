import BreadCrumb from "@/app/components/breadCrumb";
import CategorySlider from "@/app/components/categorySlider";
import SideBarCategory from "@/app/components/sideBarCategory";

export default function page({ params }: { params: { id: string } }) {
    return (
        <main className="mx-5">
            <CategorySlider />
            <BreadCrumb />
            <div className="grid grid-cols-4 gap-10 my-8">
                <SideBarCategory />
                <div className="col-span-3 bg-red-400 grid grid-cols-3 gap-10"></div>
            </div>
        </main>
    );
}
