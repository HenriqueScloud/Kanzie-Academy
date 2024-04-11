import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductSection } from "../../components/sections/ProductSection";

export const HomePage = () => {
  const [bagItems, setBagItem] = useState([]);

  const addToBag = (item) => {
    setBagItem([...bagItems, item]);
  };

  // console.log(bagItems.length);

  return (
    <>
      <Header bagItemsCount={bagItems.length} />
      <main className="container">
        <ProductSection addToBag={addToBag} />
      </main>
    </>
  );
};
