"use client";
import CategoryItem from "../categoryItem";
import SectionTitle from "../sectionTitle";

import categoryPic1 from "../../images/irani.jpg";
import categoryPic2 from "../../images/salad.jpg";
import { useBreakpoints } from "@/app/constants/hooks";

export default function CategoryGrid() {
    const { isXxs, isXs, isSm, isMd, isLg } = useBreakpoints();

    function setSize(): string | undefined {
        if (isXxs) return "grid-cols-2";
        if (isXs) return "grid-cols-2";
        if (isSm) return "grid-cols-2";
        if (isMd) return "grid-cols-4";
        if (isLg) return "grid-cols-6";
        else return "";
    }

    return (
        <div className="w-full my-10">
            <SectionTitle title="دسته بندی ها" />
            <div className={`w-full grid ${setSize()} sm:gap-8 gap-4`}>
                <CategoryItem title="ایرانی" image={categoryPic1} />
                <CategoryItem title="فست‌فود" image={categoryPic1} />
                <CategoryItem title="کباب" image={categoryPic2} />
                <CategoryItem title="پیتزا" image={categoryPic1} />
                <CategoryItem title="برگر" image={categoryPic1} />
                <CategoryItem title="ساندویچ" image={categoryPic2} />
                <CategoryItem title="سوخاری" image={categoryPic2} />
                <CategoryItem title="پاستا" image={categoryPic1} />
                <CategoryItem title="سالاد" image={categoryPic1} />
                <CategoryItem title="دریایی" image={categoryPic1} />
                <CategoryItem title="بین‌الملل" image={categoryPic2} />
                <CategoryItem title="گیلانی" image={categoryPic2} />
            </div>
        </div>
    );
}
