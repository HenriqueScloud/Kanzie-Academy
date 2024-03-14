import bannerImg from "../../../assets/image/banner.png";
import style from "./style.module.css";

export const BannnerSection = () => {
    return (
        <section className={style.bannerSection}>
        <img src={bannerImg} alt="Imagem do produto" />
        <div>
            <h1 className='title1'>FASHION STORY</h1>
            <p  className='paragraph'>Fique por dentro das nossas últimas promoções e novidades </p>
            <button>CONFIRA AS OFERTAS</button>
        </div>
        </section>
    );
};
