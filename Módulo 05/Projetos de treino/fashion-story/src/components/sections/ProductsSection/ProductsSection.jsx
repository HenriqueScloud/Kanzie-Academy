import { ProductCard } from "./ProductCard/ProductCard";
import { products } from "../../../data/ProdutoDataBase";
import style from "./style.module.css";


export const ProductSection = () =>{
    return (
        <section className={style.productSection}>
            <h2 className='title2'>PRODUTOS EM DESTAQUE</h2>
            <ul>
                
                {products.map(({id,image,title,price}) => <ProductCard key={id} image={image} title={title} price={price} /> )}
            </ul>
        </section>
    )
}