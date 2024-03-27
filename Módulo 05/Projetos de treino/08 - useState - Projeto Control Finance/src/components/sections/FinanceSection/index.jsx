import { RegisterSection } from "./RegisterSection";
import { EntrySection } from "./EntrySection";
import { useState } from "react";

export const FinanceSection = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entryData) => {
    const newEntry = { ...entryData, id: crypto.randomUUID() };
    /*
    {
        id: "80e3edd7-efa7-476e-b7ad-c999d1513f3e"
        entryValue: '25',
        entryType: 'entrada'
      }
    */
    // UTILIZANDO ESTADOS, NÃO POSSO USAR METODOS QUE MODIFICAM O ARRAY DIRETAMENTE
    // entries.push(newEntry);
    // UTILIZAMOS O SPREAD PARA ADICIONAR UM NOVO ITEM AO ARRAY


    
    const newEntries = [...entries, newEntry];
    setEntries(newEntries);
  };

  const removeEntry = (entryId) => {
    const filteredEntries = entries.filter((entry) => entry.id !== entryId);

    setEntries(filteredEntries);
  };

  console.log(entries);

  return (
    <section>
      <RegisterSection addEntry={addEntry} />
      <EntrySection entries={entries} removeEntry={removeEntry} />
    </section>
  );
};
