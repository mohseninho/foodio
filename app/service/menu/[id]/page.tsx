import BreadCrumb from "@/app/components/breadCrumb";
import SideBarMenu from "../components/sideBarMenu";
import Menu from "../components/menu";
import SecondarySideBar from "../components/secondarySideBar";
import SpecialOfferMenu from "../components/specialOfferMenu";

export default function page() {
    return (
        <main className="mx-5">
            <BreadCrumb />
            <div className="mt-20 grid grid-cols-4 gap-6 my-8 lg:mx-24 sm:mx-10 mx-4">
                <SideBarMenu />
                <div className="w-full col-start-2 col-span-2 flex justify-start items-center flex-col gap-4">
                    <SpecialOfferMenu menuName="فود پارتی" />
                    <Menu menuName="منوی رژیمی" />
                    <Menu menuName="چلو پلو ایرانی" />
                </div>
                <SecondarySideBar />
            </div>
        </main>
    );
}
