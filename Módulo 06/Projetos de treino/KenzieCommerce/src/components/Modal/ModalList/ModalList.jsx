import style from "../style.module.scss";
import { FaTrash } from "react-icons/fa";

export const ModalList = ({ removeBagItems, bagItems }) => {
    return (
        <ul className={style.bagList}>
        {bagItems.length > 0 ? (
            bagItems.map(({ idBag, name, img, price }) => {
            return (
                <li key={idBag}>
                    <figure>
                        <img src={img} alt="imagem" />
                    </figure>
                    <div className={style.bagCardDetaiuls}>
                        <h1>{name}</h1>
                        <span className="text">
                        <strong>R${price}</strong>
                        </span>
                    </div>
                    <span onClick={() => removeBagItems(idBag)}>
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
