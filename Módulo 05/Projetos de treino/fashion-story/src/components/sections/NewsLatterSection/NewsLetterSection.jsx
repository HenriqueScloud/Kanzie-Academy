import style from "./style.module.css";

export const NewsLatterSection = () =>{
    return (
        <form  className={style.form}>

            <label htmlFor="newslatter"  className='title2'>INSCREVA-SE NA NEWSLETTE</label>
            <input type="email" name="newslater" id="newslatter" placeholder="E-MAIL" />
            
            <button className="btn">CADASTRE-SE</button>
        </form>
    )
}