
import style from "./style.module.css";

export const NewsLatterSection = () =>{
    return (
        <form  className={style.newslatterSection}>

            <label htmlFor="newslatter"  className='title2'>INSCREVA-SE NA NEWSLETTE</label>
            <input type="email" name="newslater" id="newslatter" placeholder="E-MAIL" />
            
            <button>CADASTRE-SE</button>
        </form>
    )
}