import logo from "../../assets/icons/logo.png";

import style from "./style.module.css"
export const Footer = () =>{
    return(
        < >
            <footer className={style.footer}>
                <div className="container">
                    <figure >
                        <img src={logo} alt="" />
                    </figure>
                    <p>@Henrique S.</p>
                </div>
            </footer>
        </>
    )
}