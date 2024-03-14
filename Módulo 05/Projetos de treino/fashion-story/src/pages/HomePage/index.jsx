import { BannnerSection } from "../../components/sections/BannerSection/BannerSection";
import { ProductSection } from "../../components/sections/ProductsSection/ProductsSection";
import { NewsLatterSection } from "../../components/sections/NewsLatterSection/NewsLetterSection";
import { DefaultTemplate } from "../../components/DefaultTemplate/index";

export const HomePage = () =>{
    return (
        <>
            <DefaultTemplate>
                <BannnerSection />
                <ProductSection/>
                <NewsLatterSection />
            </DefaultTemplate>
        </>
    )
}