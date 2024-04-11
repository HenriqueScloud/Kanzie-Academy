import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";
import { Modal } from "../../components/Modal";

export const HomePage = () => {
    const [bagItems, setBagItem] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalBagItens, setTotalBagItens] =useState(0)

    const addToBag = (item) => {
        const addbagnew = {...item,idBag: crypto.randomUUID()}
        setBagItem([...bagItems, addbagnew]);
    };

    const removeBagItems = (idBag)=>{
        setBagItem(bagItems.filter((item)=>idBag!=item.idBag))
    }

    const totalBagItems = (bagItem) =>{
        return bagItem.reduce((acc,item)=>{
            setTotalBagItens(acc+=item.price);
            console.log(totalBagItens);
            return totalBagItens;
        },0)
    }

    return (
      <>
        {isModalOpen && (
          <Modal
            setIsModalOpen={setIsModalOpen}
            bagItems={bagItems}
            removeBagItems={removeBagItems}
            totalBagItems={totalBagItems}
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
