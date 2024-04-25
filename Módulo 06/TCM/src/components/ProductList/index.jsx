
import style from './style.module.scss'
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList }) => {
    return (
        <ul className={style.productlist}>
            {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </ul>
    );
};
