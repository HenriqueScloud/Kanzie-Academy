import { ProductCard } from "./ProductCard/ProductCard";

import ProductImage1 from "../../../assets/image/Rectangle 4.png";
import ProductImage2 from "../../../assets/image/Rectangle 6.png";
import ProductImage3 from "../../../assets/image/Rectangle 7.png";
import ProductImage4 from "../../../assets/image/Rectangle 8.png";


export const ProductSection = () =>{
    return (
        <section>
            <h2>PRODUTOS EM DESTAQUE</h2>
            <ul>
            {/* desafio de criar um loop para  repetir a div abaixo */}
                <ProductCard image={ProductImage1} title='Blaze Branco Elegante' price='490,00' />
                <ProductCard image={ProductImage2} title='Sapatos Amarelos' price='340,00' />
                <ProductCard image={ProductImage3} title='Blazer Laranja' price='320,00' />
                <ProductCard image={ProductImage4} title='Calça Preta' price='140,00' />

            </ul>
        </section>
    )
}