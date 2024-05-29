import { useContext } from "react";
import { TechContext } from "../../../Providers/TechContext";
import style from "./style.module.scss";

export const TechCard = ({ card }) => {
  const { removeTech, setEditCardTech } = useContext(TechContext);

  return (
    <li className={style.card}>
      <div className={style.card_Info}>
        <h1>{card.title}</h1>
        <p>{card.status}</p>
      </div>
      <div className={style.card_buttons}>
        <button onClick={() => setEditCardTech(card)}>E</button>
        <button onClick={() => removeTech(card.id)}>X</button>
      </div>
    </li>
  );
};
