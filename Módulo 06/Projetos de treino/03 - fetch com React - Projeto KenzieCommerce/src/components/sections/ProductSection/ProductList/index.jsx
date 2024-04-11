// import { productsArray } from "../../../../database/productsDatabase";
import styles from "./styles.module.scss";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchAPI } from "../../../../services/api";

export const ProductList = ({ addToBag }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsArray = await fetchAPI();

      setProducts([...productsArray]);
    };

    getProducts();
  }, []);

  return (
    <ul className={styles.productList}>
      {products.map((product) => {
        return (
          <ProductCard key={product.id} addToBag={addToBag} product={product} />
        );
      })}
    </ul>
  );
};
