// import { useEffect } from "react";
import style from "./style.module.scss";
import { FaTrash } from 'react-icons/fa';
// import { BtnTotalModal } from "../BtnTotalModal/BtnTotalModal";

export const Modal = ({ setIsModalOpen, bagItems, removeBagItems, totalBagItems }) => {

    
    return (
    <div className={style.modalBackdrop}>
        <div className={style.modalBox}>
        <header className="text">
            <h1 className="title three">Carrinho</h1>
            <button onClick={() => setIsModalOpen(false)}>
            <h1>X</h1>
            </button>
        </header>

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
            <h1 className="text lg">
                Você não possui itens no carrinho !
            </h1>
            )}
        </ul>

        <div>
            
            <span className="title three">R$ {totalBagItems(bagItems)}</span>
            <button className="btn">Finalizar compra</button>
        </div>
        </div>
    </div>
    );
        

    
};
