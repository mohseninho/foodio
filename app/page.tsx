import CategoryGrid from "./components/categoryGrid";
import CategorySlider from "./components/categorySlider";
import MainHero from "./components/mainHero";
export default function page() {
    return (
        <main>
            <MainHero />
            <CategorySlider />
            <CategoryGrid />
        </main>
    );
}
