import { useContext } from "react";
import { TechContext } from "../../../Providers/TechContext";
import style from "./style.module.scss";
import { FaPaintBrush, FaTrashAlt } from 'react-icons/fa'; // Ícones do Font Awesome


export const TechCard = ({ card }) => {
  const { removeTech, setEditCardTech } = useContext(TechContext);

  return (
    <li className={style.card}>
      <div className={style.card_Info}>
        <h1>{card.title}</h1>
        <p>{card.status}</p>
      </div>
      <div className={style.card_buttons}>
        <button onClick={() => setEditCardTech(card)}><FaPaintBrush/></button>
        <button onClick={() => removeTech(card.id)}><FaTrashAlt/></button>
      </div>
    </li>
  );
};
