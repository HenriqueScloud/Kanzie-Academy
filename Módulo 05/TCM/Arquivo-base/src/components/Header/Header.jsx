import icon from  '../../assets/Nu Kenzie.png';
import style from './style.module.css'
// import { ThemeDarkMode } from './Theme';
// import { theme } from './Theme';


export const Header = () =>{

    return(
        
        <header className={style.header}>
            <nav className={style.container}>
                <img src={icon} alt="logo-Nu-kenzie" />
                {/* <button onChange={()=>theme} className='header__theme-btn`'></button> */}
            </nav>
        </header>
        
    )
}