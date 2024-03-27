import TrashIcon from "../../../../assets/trash.svg";
import styles from "./styles.module.css";

export const EntrySection = ({ entries, removeEntry }) => {
  const entriesSubTotal = () => {
    const subTotal = entries.reduce((accumulator, current) => {
      // if (current.entryType === "entrada") {
      //   return accumulator + current.entryValue;
      // }

      // return accumulator - current.entryValue;

      return current.entryType === "entrada"
        ? accumulator + current.entryValue
        : accumulator - current.entryValue;
    }, 0);

    return subTotal;
  };

  return (
    <section className={styles.entrySection}>
      <h2 className="title2">Resumo Financeiro</h2>

      <div className={styles.entryListSubtotal}>
        <p className="text1">Soma dos valores</p>
        <p className="text1">
          {entriesSubTotal().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <ul className={styles.entryList}>
        {entries.map((entry) => {
          return (
            <li key={entry.id} className={styles.entryItem}>
              <p className="text1">
                {entry.entryValue.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              
              <div>
                <span className="text3">{entry.entryType}</span>
                <button onClick={() => removeEntry(entry.id)}>
                  <img src={TrashIcon}/>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
