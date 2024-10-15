import CategoryItem from "../categoryItem";
import SectionTitle from "../sectionTitle";

import categoryPic1 from "../../images/irani.jpg";
import categoryPic2 from "../../images/salad.jpg";

export default function CategoryGrid() {
    return (
        <div className="w-full my-10">
            <SectionTitle title="دسته بندی ها" />
            <div className="w-full h-[250px] grid grid-cols-6 grid-rows-2 gap-8">
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
