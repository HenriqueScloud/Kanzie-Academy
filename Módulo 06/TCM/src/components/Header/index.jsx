import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import Style from "../Header/style.module.scss";

export const Header = () => {
    const [value, setValue] = useState("");

    return (
        <header className={Style.header}>
        <div>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button>
            <MdShoppingCart size={21} />
            <span>9</span>
            </button>
        </div>
        </header>
    );
};
