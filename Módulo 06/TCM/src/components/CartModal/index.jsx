import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";


export const CartModal = ({ cartList }) => {
    const total = cartList.reduce((prevValue, product) => {
        return prevValue + product.price;
    }, 0);

    return (
        <div className={style.cardModal_Container}>
            <section role="dialog" className={style.cardModal}>
            <header className={style.modal_header}>
                <h2 className="font_title_3">Carrinho de compras</h2>
                <button aria-label="close" title="Fechar">
                <MdClose size={21} />
                </button>
            </header>
            <main className={style.modal_main}>
                <ul>
                {cartList.map((product) => (
                    <CartItemCard key={product.id} product={product} />
                ))}
                </ul>
            </main>
            <footer className={style.modal_footer}>
                <div>
                    <span>Total</span>
                    <span>
                        {total.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        })}
                    </span>
                </div>
                <button>Remover todos</button>
            </footer>
            </section>
        </div>
    );
};
