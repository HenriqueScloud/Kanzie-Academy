import logo from "../../assets/icons/logo.png";
import style from "./style.module.css"

export const Header = () =>{
    return (
        <>
            <header className="container">
                <figure className={style.logoContainer}>
                <img src={logo} alt="logo" />
                </figure>
            </header>
        </>
    )
}