import styles from "./styles.module.css";
import { useState } from "react";

export const RegisterSection = ({ addEntry }) => {
  const [entryValue, setEntryValue] = useState("");
  const [entryType, setEntryType] = useState("entrada");

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("evento do form disparado!");

    /*
      {
        entryValue: '25',
        entryType: 'entrada'
      }
    */
    const newEntry = { entryValue, entryType };
    // console.log(newEntry);
    addEntry(newEntry);
  };

  // console.log(entryType);

  return (
    <section className={styles.registerSection}>
      <div>
        <h2 className="title2">Registro de valor</h2>
        <p className="text1">
          Digite o valor e em seguida aperto no botão referente ao tipo do valor
        </p>
      </div>

      <form onSubmit={submitHandler} className={styles.addEntryForm}>
        <div>
          <label className="text1" htmlFor="entryValue">
            Valor
          </label>
          <input
            className="text2"
            name="entryValue"
            type="number"
            min={0}
            placeholder="R$ 00,00"
            step={0.1}
            onChange={(event) => setEntryValue(event.target.valueAsNumber)}
          />
        </div>
        <div>
          <label className="text1" htmlFor="entryType">
            Tipo de valor
          </label>
          <select
            name="entrySelect"
            id="entrySelect"
            className="text2"
            onChange={(event) => setEntryType(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>

        <button className="btn">Inserir registro</button>
      </form>
    </section>
  );
};
