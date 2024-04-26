import style from "./style.module.scss";

export const ProductCard = ({ product }) => {
    return (
      <li className={style.productCard}>
        <div className={style.productCard_header}>
          <img
            src={product.img}
            alt={product.name}
            
          />
        </div>
        <div className={style.productCard_main}>
          <h3 className="font_title_1">{product.nome}</h3>
          <span className="font_caption">{product.categoria}</span>
          <span className="font_body">
            {product.preço.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button className="btn_sm">Adicionar</button>
        </div>
      </li>
    );
};
