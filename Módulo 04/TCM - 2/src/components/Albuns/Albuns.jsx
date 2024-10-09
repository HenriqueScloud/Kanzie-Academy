/* eslint-disable react/jsx-key */
import { fetchAlbuns } from "../../dataBase/api";
import { Cards } from "./Cards/Cards";
import "./index.scss"

function Albuns() {


  return (
    <section className="albuns_section">
      <h1 className="albuns-title">Albuns Encontrados </h1>

      < ul className="albun__cards">
        {fetchAlbuns.length > 0 ? (
          fetchAlbuns.map((card) => {
            return <Cards key={card.id} Card={card} />;
          })
        ) : (
          <p>No albums found</p>
        )}
      
        
      


      </ul>
    </section>
  );
}

export default Albuns;
