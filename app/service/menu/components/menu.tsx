import MenuItem from "./menuItem";

interface props {
    menuName: String;
}

export default function Menu({ menuName }: props) {
    return (
        <div className="col-start-2 col-span-2 rounded-lg bg-white border border-gray-200 flex justify-start items-center flex-col">
            <span className="my-4 flex justify-center items-center">
                {menuName}
            </span>
            <div className="w-full h-fit grid grid-cols-2 gap-2 p-2">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    );
}
