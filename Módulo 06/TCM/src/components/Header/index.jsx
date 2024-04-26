import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import Style from "../Header/style.module.scss";

export const Header = ({ setOnModal, cartList }) => {
  const [valueTotal, setValueTotal] = useState("");



  return (
    <header className={Style.header}>
      <div>
        <img src={Logo} alt="Logo Kenzie Burguer" />
        <button onClick={() => setOnModal(true)}>
          <MdShoppingCart size={21} />
          <span>{cartList.length}</span>
        </button>
      </div>
    </header>
  );
};
