import BreadCrumb from "@/app/components/breadCrumb";
import CardItem from "@/app/components/cardItem";
import CategorySlider from "@/app/components/categorySlider";
import SideBarCategory from "@/app/components/sideBarCategory";

export default function page({ params }: { params: { id: string } }) {
    return (
        <main className="mx-5">
            <CategorySlider />
            <BreadCrumb />
            <div className="grid grid-cols-4 gap-6 my-8 lg:mx-24 sm:mx-10 mx-4">
                <SideBarCategory />
                <div className="col-span-3 grid grid-cols-3 gap-6">
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
            </div>
        </main>
    );
}
