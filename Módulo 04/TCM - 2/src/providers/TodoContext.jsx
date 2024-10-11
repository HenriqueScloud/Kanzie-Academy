import { createContext, useState } from "react";

export const TodoContext = createContext({});
export const TodoProvider = ({ children }) => {
  const [Theme, setTheme] = useState(false);
  const [cartList, setCartList] = useState([]);

  const [OnModal, setOnModal] = useState(false);
  

  const addItemCardList = (item) => {
    if (cartList.some((i) => i.id == item.id)) {
      console.log('ja existe');

      setCartList([...cartList, { ...item, qtd: item.qtd + 1 }]);
    } else {
      setCartList([...cartList, { ...item }]);
    }
  };
  const delItemCardList = (item) => {
    const itemDelet = cartList.find((i) => i.id === item.id);
    itemDelet && setCartList(cartList.filter((i) => i.id !== item.id));
  };

  return (
    <TodoContext.Provider
      value={{
        Theme,
        setTheme,
        OnModal,
        setOnModal,
        cartList,
        setCartList,
        addItemCardList,
        delItemCardList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
