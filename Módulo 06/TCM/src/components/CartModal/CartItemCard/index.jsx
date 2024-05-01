import { MdDelete } from "react-icons/md";
import style from "../CartItemCard/style.module.scss"

export const CartItemCard = ({ product, delItemCardList }) => {
  return (
    <li className={style.CartItemCard}>
      <div>
        <img 
        src={product.img} 
        alt={product.name} 
        />
      </div>
      <main>
        <h3 className="font_title_3">{product.name}</h3>
        <span className="font_body">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </main>
      <button
        aria-label="delete"
        title="Remover item"
        onClick={() => delItemCardList(product)}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
