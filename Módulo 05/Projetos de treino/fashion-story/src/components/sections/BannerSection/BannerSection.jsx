
import bannerImg from "../../../assets/image/banner.png"

export const BannnerSection = () =>{
    return (
        <section>
            <div>
                <img src={bannerImg} alt="Imagem do produto" />
                <div>
                    <h1>FASHION STORY</h1>
                    <p>Fique por dentro das nossas últimas promoções e novidades </p>
                    <button>CONFIRA AS OFERTAS</button>
                </div>
            </div>
        </section>
    )
}