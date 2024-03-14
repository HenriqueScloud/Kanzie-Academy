import logo from "../../assets/icon/FashionStoreLogo.svg"
import style from './style.module.css'

export const Header = () =>{
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" />
        </header>
    )
}