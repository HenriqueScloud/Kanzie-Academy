import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
import { Modal } from "../../components/Modal";

export const HomePage = () => {

    const [bagItems, setBagItem] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addToBag = (item) => {


        //fazer procura de item no carrinho

        const foundItem = bagItems.find((bagitem)=>bagitem.id === item.id)
        // fazer verificação caso esteja no carrinho

        if(foundItem){
            // existe no carrinho e add+1
            const updatedbag = bagItems.map((bagItem)=>{
                if(bagItem.id===item.id){
                    return {...bagItem, quantaty: bagItem.quantaty + 1}
                }

                return bagItem
            })

            setBagItem(updatedbag)
        }else{
            //nao esta na carrinho e criua com o qtd 1
            setBagItem([...bagItems,{...item, quantaty: 1}]);
        }

    };

    const removeBagItems = (id)=>{

        const foundItem = bagItems.find((bagitem) => bagitem.id === id);


        if (foundItem && foundItem.quantaty > 1){
            const updatedbag = bagItems.map((bagItem) => {

                return bagItem.id === id 
                ? {...bagItem, quantaty: bagItem.quantaty -1}
                :bagItem;

            });

            setBagItem(updatedbag)
        }else{
            setBagItem(bagItems.filter((item)=>id!=item.id))
        }
    }


    return (
        <>
            {isModalOpen && (
            <Modal
                setIsModalOpen={setIsModalOpen}
                bagItems={bagItems}
                removeBagItems={removeBagItems}
                addToBag={addToBag}
            />
            )}

            <Header
            bagItemsCount={bagItems.length}
            setIsModalOpen={setIsModalOpen}
            />
            <main className="container">
            <ProductSection addToBag={addToBag} />
            </main>
        </>
    );
};
