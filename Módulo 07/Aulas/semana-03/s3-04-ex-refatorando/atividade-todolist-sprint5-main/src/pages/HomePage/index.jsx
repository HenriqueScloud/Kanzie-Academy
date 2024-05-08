import { useState } from "react";
import { FruitForm } from "../../components/FruitForm";
import { FruitList } from "../../components/FruitList";

export const HomePage = () => {
   const [fruitList, setFruitList] = useState([]);

   const addFruit = (fruit) => {
      const newFruit = { ...fruit, id: crypto.randomUUID() };
      setFruitList([...fruitList, newFruit]);
   };

   return (
      <main>
         <FruitForm addFruit={addFruit} />
         <FruitList fruitList={fruitList} setFruitList={setFruitList} />
      </main>
   );
};
