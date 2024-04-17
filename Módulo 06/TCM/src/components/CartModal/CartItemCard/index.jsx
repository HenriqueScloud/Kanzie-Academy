import { MdDelete } from "react-icons/md";
import style from "../CartItemCard/style.module.scss"

export const CartItemCard = ({ product }) => {
    return (
        <li className={style.CartItemCard}>
            <div>
                <img src={product.img} alt={product.name}/>
                <h3>{product.name}</h3>
            </div>
            <button aria-label="delete" title="Remover item">
                <MdDelete size={21} />
            </button>
        </li>
    );
};
