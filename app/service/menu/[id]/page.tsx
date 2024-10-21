import BreadCrumb from "@/app/components/breadCrumb";
import SideBarMenu from "../components/sideBarMenu";
import Menu from "../components/menu";

export default function page() {
    return (
        <main className="mx-5">
            <BreadCrumb />
            <div className="mt-20 grid grid-cols-4 gap-6 my-8 lg:mx-24 sm:mx-10 mx-4">
                <SideBarMenu />
                <Menu menuName="منوی رژیمی" />
                <Menu menuName="چلو پلو ایرانی" />
            </div>
        </main>
    );
}
