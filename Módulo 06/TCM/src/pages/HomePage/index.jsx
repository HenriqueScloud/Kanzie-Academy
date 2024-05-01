import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/Data";

export const HomePage = () => {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [OnModal, setOnModal] = useState(false)

    // useEffect montagem - carrega os produtos da API e joga em productList

    useEffect(()=>{
        const getProducts = async () => {
            const {data} = await api.get("/products");
            setProductList([...data])
        }
        getProducts();
    },[])

    // useEffect atualização - salva os produtos no localStorage (carregar no estado)

    const addItemCardList = (item)=>{
        const foundItem = cartList.find((i) => i.id === item.id);
        !foundItem && setCartList([...cartList, { ...item }]);
    }
    const delItemCardList = (item) =>{
        const itemDelet = cartList.find((i)=>i.id === item.id);
        itemDelet && setCartList(cartList.filter((i)=>i.id !== item.id))
    }

    // filtro de busca


    return (
        <>
            <Header setOnModal={setOnModal} cartList={cartList} />
            <main className="font_body">
            <ProductList
                productList={productList}
                addItemCardList={addItemCardList}
            />
            {OnModal && (
                <CartModal
                cartList={cartList}
                setCartList={setCartList}
                setOnModal={setOnModal}
                delItemCardList={delItemCardList}
                />
            )}
            </main>
        </>
    );
};
