import { MdDelete } from "react-icons/md";
import style from "../CartItemCard/style.module.scss";
import { useContext } from "react";
import { TodoContext } from "../../../providers/TodoContext";

export const CartItemCard = ({ card }) => {
  const { delItemCardList } = useContext(TodoContext);
  return (
    <li className={style.CartItemCard}>
      <div>
        <img src={card.img} alt={card.title} />
      </div>
      <main>
        <h3 className="font_title_3">{card.title}</h3>
        <span className="font_body">
          {card.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </main>
      <aside className="unico">
        <button> - </button>
        <p> 1 </p>
        <button> + </button>
      </aside>

      <button className="qtd"
        aria-label="delete"
        title="Remover item"
        onClick={() => delItemCardList(card)}
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
