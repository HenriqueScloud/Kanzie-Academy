import { createContext, useState } from "react";

export const FruitContext = createContext({})
export const FruitProviders =({children})=>{
  // constantes globais
  const [fruitList, setFruitList] = useState([]); //contextapi

  const addFruit = (fruit) => {
    const newFruit = { ...fruit, id: crypto.randomUUID() };
    setFruitList([...fruitList, newFruit]);
  }; //contextapi

  const removeFruit = (fruitId) => {
    const newFruitList = fruitList.filter((fruit) => fruit.id !== fruitId);
    setFruitList(newFruitList);
  }; //

  return (
    <FruitContext.Provider
      value={{
        // valores globais
        addFruit,
        fruitList,
        setFruitList,
        removeFruit
      }}
    >
      {children}
    </FruitContext.Provider>
  );
}