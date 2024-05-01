
import { ProductCard2 } from './ProductCard2/ProductCard2';
import style from './style.module.scss'

export const ProductList = ({ productList, addItemCardList }) => {


    return (
        <div>
            <ul className={style.productlist}>
                {productList.map((product) => {
                    return (
                        <ProductCard2 
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
