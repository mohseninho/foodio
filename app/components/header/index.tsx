import Image from "next/image";
import logo from "../../images/logo.png";
import { Button } from "@/components/ui/button";
import { Store, User } from "lucide-react";
import BreadCrumb from "../breadCrumb";
import SearchBar from "../searchBar";

interface props {
    homeLayout?: boolean;
}

export default function Header({ homeLayout }: props) {
    return (
        <>
            {homeLayout ? (
                <header className="absolute top-0 bg-transparent flex flex-col w-full z-10 px-10">
                    <div className="w-full h-fit flex justify-between items-center">
                        <div className="w-[120px] h-[120px] relative">
                            <Image src={logo} fill alt="" />
                        </div>
                        <div className="md:hidden">
                            <User />
                        </div>
                        <div className="hidden md:flex justify-center items-center gap-4">
                            <Button
                                variant="ghost"
                                className="flex justify-center items-center gap-2"
                            >
                                <Store />
                                <span>ثبت نام فروشندگان</span>
                            </Button>
                            <Button
                                variant="default"
                                className="bg-pink-600 rounded-xl text-white text-lg font-bold w-20 h-10"
                            >
                                ورود
                            </Button>
                        </div>
                    </div>
                    <BreadCrumb />
                </header>
            ) : (
                <header className="sticky top-0 w-full h-[80px] bg-white z-10 shadow-md px-5 flex justify-between items-center">
                    <Image src={logo} width={80} height={80} alt="" />
                    <SearchBar placeHolder="جست‌وجو در فودیو" />
                    <div className="md:hidden">
                        <User />
                    </div>
                    <div className="hidden md:flex justify-center items-center gap-4">
                        <Button
                            variant="ghost"
                            className="flex justify-center items-center gap-2"
                        >
                            <Store />
                            <span>ثبت نام فروشندگان</span>
                        </Button>
                        <Button
                            variant="default"
                            className="bg-pink-600 rounded-xl text-white text-lg font-bold w-20 h-10"
                        >
                            ورود
                        </Button>
                    </div>
                </header>
            )}
        </>
    );
}
