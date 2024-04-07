import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";

export const HomePage = () => {

  const [bagItem,setbagItem] = useState([])

  const  addToBag= (item) =>{
    setbagItem([...bagItem, item]);
  }
  console.log(bagItem.length);







  return (
    <>
      <Header bagItensCount={bagItem.length} />
      <main className="container">
        <ProductSection addToBag={addToBag}/>
      </main>
    </>
  );
};
