import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import Style from "../Header/style.module.scss";

export const Header = () => {
    const [value, setValue] = useState("");

    return (
        <header className={Style.header}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div>
                <button>
                    <MdShoppingCart size={21} />
                    <span>0</span>
                </button>
                <form>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">
                    <MdSearch size={21} />
                </button>
                </form>
            </div>
        </header>
    );
};
