import "./styles/index.scss";
import { useState } from "react";
import { ModalExemplo } from "./components/ModalExemplo";

function App() {
  const [isVisible, setVisible] = useState(false);

  console.log(isVisible);
  return (
    <main className="container">
      <h1>Ciclo de Vida de Componentes</h1>

      {/* <button className="btn lg" onClick={() => setVisible(!isVisible)}> */}
      <button className="btn lg" onClick={() => setVisible(true)}>
        Abrir Modal
      </button>

      {/* RENDERIZAÇÃO CONDICIONAL COM TERNARIO */}
      {isVisible ? <ModalExemplo setVisible={setVisible} /> : null}
    </main>
  );
}

export default App;
