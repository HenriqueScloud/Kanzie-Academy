import { useContext } from "react";
import "./index.scss";
import { TodoContext } from "../../../providers/TodoContext";


// eslint-disable-next-line react/prop-types
export function Cards({Card}) {  
  const { addItemCardList } = useContext(TodoContext);
  return (
    <li className="albun__card" key={Card.id}>
      <img src={Card.img} alt="Imagem do Album 1" className="albun__card-img" />
      <div className="albun__card-description">
        <h1 className="albun__card-title">{Card.title}</h1>
        <div className="albun__card-details">
          <p className="albun__card-detail--autor">{Card.band}</p>
          <span className="albun__card-detail--genre">{Card.genre}</span>
        </div>
        <div className="albun__card-price">
          <p className="albun__card-price-valor">
            R$ <span className="albun__card-price-value">{Card.price}</span>
          </p>
          <button
            className="albun__card-price-btn"
            onClick={() =>
              addItemCardList(Card)
            }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </li>
  );
}
