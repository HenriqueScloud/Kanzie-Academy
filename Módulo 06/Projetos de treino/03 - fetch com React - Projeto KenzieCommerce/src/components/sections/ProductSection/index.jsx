import styles from "./styles.module.scss";
import { ProductList } from "./ProductList";

/*
  DESAFIO:
  -> Utilizar a API https://hardware-fake-api.onrender.com/api/hardwares para trazer
  os dados dos produtos
*/

export const ProductSection = ({ addToBag }) => {
  return (
    <section className={styles.productSection}>
      <h2 className="title two">Produtos em Destaque</h2>

      <ProductList addToBag={addToBag} />
    </section>
  );
};
