import Image from "next/image";
import logo from "../../images/logo.png";

export default function Home() {
    return (
        <header className="bg-transparent w-full h-fit flex justify-between items-center">
            <div className="w-[120px] h-[120px] relative">
                <Image src={logo} fill alt="" />
            </div>
            <button className="bg-pink-600 rounded-xl text-white text-lg font-bold px-4 py-2">ورود</button>
        </header>
    );
}
