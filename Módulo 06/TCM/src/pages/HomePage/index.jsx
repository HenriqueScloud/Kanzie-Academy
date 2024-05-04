import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/Data";
export const HomePage = () => {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [OnModal, setOnModal] = useState(false)
    useEffect(()=>{
        const getProducts = async () => {
            const {data} = await api.get("/products");
            setProductList([...data])
        }
        getProducts();
    },[])
    const addItemCardList = (item)=>{
        const foundItem = cartList.find((i) => i.id === item.id);
        !foundItem && setCartList([...cartList, { ...item }]);
    }
    const delItemCardList = (item) =>{
        const itemDelet = cartList.find((i)=>i.id === item.id);
        itemDelet && setCartList(cartList.filter((i)=>i.id !== item.id))
    }
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
