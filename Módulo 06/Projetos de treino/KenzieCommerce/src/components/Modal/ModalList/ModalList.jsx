import style from "../style.module.scss";
import { FaTrash } from "react-icons/fa";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export const ModalList = ({ removeBagItems, bagItems, addToBag }) => {
    return (
        <ul className={style.bagList}>
        {bagItems.length > 0 ? (
            bagItems.map((bagItem) => {
            return (
                <li key={bagItem.id}>
                <div>
                    <figure>
                    <img src={bagItem.img} alt="imagem" />
                    </figure>

                    <div className={style.bagCardDetaiuls}>
                    <h1>{bagItem.name}</h1>
                    <div className={style.btnQuantaty}>
                        <p className="text sm">Quantidade:</p>
                        <div>
                        <button onClick={() => removeBagItems(bagItem.id)}>
                            <FaAngleLeft />
                        </button>
                        <span>{bagItem.quantaty}</span>
                        <button onClick={() => addToBag(bagItem)}>
                            <FaAngleRight />
                        </button>
                        </div>
                    </div>
                    </div>

                    <span className="text">
                    <strong>
                        {(bagItem.price * bagItem.quantaty).toLocaleString(
                        "pt-BR",
                        {
                            style: "currency",
                            currency: "BRL",
                        }
                        )}
                    </strong>
                    </span>
                </div>

                <span onClick={() => removeBagItems(bagItem.id)}>
                    <FaTrash />
                </span>
                </li>
            );
            })
        ) : (
            <h1 className="text lg">Você não possui itens no carrinho !</h1>
        )}
        </ul>
    );
};
