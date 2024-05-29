import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { TechCard } from "./TechCard";
import style from "./style.module.scss";

export const TechList = () => {
  const { techList,setOnCreateModal } = useContext(TechContext);
  return (
    <section className={style.TechList}>
      <header className={style.TechList_Header}>
        <h1>Tecnologias</h1>
        <button onClick={() => setOnCreateModal(true)}>+</button>
      </header>

      {techList.length == 0 ? (
        <h1 className={style.TechList_OffCards}>
          Você ainda não possui tecnologias cadrastradas
        </h1>
      ) : <ul className={style.TechList_List}>
        {techList.map((card) => (
          // eslint-disable-next-line react/jsx-key
          <TechCard card={card} key={card.id} />
        ))}
      </ul>}

      
    </section>
  );
};
