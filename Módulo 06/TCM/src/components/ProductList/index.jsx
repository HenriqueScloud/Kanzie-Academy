
import style from './style.module.scss'
import { ProductCard } from './ProductCard';
export const ProductList = ({ productList, addItemCardList }) => {
    return (
        <div>
            <ul className={style.productlist}>
                {productList.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            productList={productList}
                            product={product}
                            addItemCardList={addItemCardList}
                            />
                    )
                    
                })}
            </ul>
        </div>
    );
};
