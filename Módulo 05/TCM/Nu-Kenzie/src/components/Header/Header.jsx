import icon from  '../../assets/Nu Kenzie.png';
import style from './style.module.css'
export const Header = () =>{
    return(
        
        <header className={style.header}>
            <nav className={style.container}>
                <img src={icon} alt="logo-Nu-kenzie" />
            </nav>
        </header>
        
    )
}