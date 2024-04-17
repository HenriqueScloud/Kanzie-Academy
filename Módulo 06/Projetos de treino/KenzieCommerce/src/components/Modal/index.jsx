import style from "./style.module.scss";
import { ModalList } from "./ModalList/ModalList";


export const Modal = ({ setIsModalOpen, bagItems, removeBagItems, addToBag, }) => {
    const subTotal = () => {
        const valueTot = bagItems.reduce((acc, item) => acc + (item.price * item.quantaty), 0);
        return valueTot;
    };
    // faça o total dentro do modal sempre que for efetuar um carrinho. esse metodo funciona melhor que deixa o tatal dentro de uma variavel de estado global.

    return (
        <div className={style.modalBackdrop}>
        <div className={style.modalBox}>
            <header className="text">
            <h1 className="title three">Carrinho</h1>
            <button onClick={() => setIsModalOpen(false)}>
                <h1>X</h1>
            </button>
            </header>

            <ModalList
            removeBagItems={removeBagItems}
            bagItems={bagItems}
            addToBag={addToBag}
            />

            <div>
            <span className="title three">
                {subTotal().toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                })}
            </span>
            <button className="btn">Finalizar compra</button>
            </div>
        </div>
        </div>
    );
};
