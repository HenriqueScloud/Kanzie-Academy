import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { DataTeste } from "../../services/DataTeste";

export const HomePage = () => {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);

    // useEffect montagem - carrega os produtos da API e joga em productList

    useEffect(()=>{
        setProductList([...productList, ...DataTeste])
        setCartList([...DataTeste,...cartList]); //tirar do carirnho 
    },[])



    // useEffect atualização - salva os produtos no localStorage (carregar no estado)
    // adição, exclusão, e exclusão geral do carrinho
    // renderizações condições e o estado para exibir ou não o carrinho
    // filtro de busca
    // estilizar tudo com sass de forma responsiva

    return (
        <>
            <Header />
            <main className="font_body">
                <ProductList productList={productList} />
                <CartModal cartList={cartList} />
            </main>
        </>
    );
};
