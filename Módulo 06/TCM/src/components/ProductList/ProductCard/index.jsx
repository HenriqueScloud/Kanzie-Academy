import style from "./style.module.scss";
export const ProductCard = ({ product, productList, addItemCardList }) => {
  return (
    <li className={style.productCard}>
      <div className={style.productCard_header}>
        <img src={product.img}
          alt={product.name} />
      </div>
      <div className={style.productCard_main}>
        <h3 className="font_title_1">{product.name}</h3>
        <span className="font_caption">{product.category}</span>
        <span className="font_body">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="btn_sm" onClick={() => addItemCardList(product)}>
          Adicionar
        </button>
      </div>
    </li>
  );
};
