import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { DataTeste } from "../../services/DataTeste";

export const HomePage = () => {
    const [productList, setProductList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [OnModal, setOnModal] = useState(false)

    // useEffect montagem - carrega os produtos da API e joga em productList

    useEffect(()=>{
        setProductList([...productList, ...DataTeste])
    },[])



    // useEffect atualização - salva os produtos no localStorage (carregar no estado)





    // adição, exclusão, e exclusão geral do carrinho

    const addItemCardList = (Item)=>{
        // const itemExist = cartList.includes((item)=> item.id === Item.id);
        return setCartList([...cartList, {...Item}]);
    }
    const delItemCardList = (item) =>{
        const itemDelet = cartList.find((i)=>i.id === item.id);
        itemDelet && setCartList(cartList.filter((i)=>i.id !== item.id))
    }





    // renderizações condições e o estado para exibir ou não o carrinho (concluido)



    // filtro de busca





    // estilizar tudo com sass de forma responsiva

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
              setOnModal={setOnModal}
              delItemCardList={delItemCardList}
            />
          )}
        </main>
      </>
    );
};
