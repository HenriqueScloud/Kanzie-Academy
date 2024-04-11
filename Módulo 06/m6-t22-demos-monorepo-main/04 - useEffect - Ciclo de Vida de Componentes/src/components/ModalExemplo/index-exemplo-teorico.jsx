import { useState, useEffect } from "react";

export const ModalExemplo = ({ setVisible }) => {
  const [counter, setCounter] = useState(0);

  /*
    useEffect
    1. onMount -> Executa uma função quando a MONTAGEM do componente acontece
    2. onUpdate -> Executa uma função quando uma ATUALIZAÇÃO do componente acontece
    3. onDismount -> Executa uma função quando a DESMONTAGEM do componente acontece
  */

  /* 
    1. onMount -> Executa uma função quando a MONTAGEM do componente acontece (apenas 1x)
    Usos: Sincronização com serviços externos (API)
    */
  useEffect(() => {
    console.log("componente montado, executar uma função");
  }, []);

  /* 
    2. onUpdate -> Executa uma função quando uma ATUALIZAÇÃO do componente acontece
    */
  useEffect(() => {
    console.log("estado counter foi atualizado, vai ser disparada uma função");
  }, [counter]);

  /* 
    3. onDismount -> Executa uma função quando a DESMONTAGEM do componente acontece
    */
  useEffect(() => {
    return () => {
      console.log("componente desmontado");
    };
  }, []);

  return (
    <div className="modal">
      <h2>Modal</h2>

      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum minima
        facilis in, cumque tempore quos unde saepe tempora laborum? Error ex,
        nobis praesentium cupiditate deleniti hic sequi laboriosam neque
        asperiores!
      </article>

      <button className="btn lg" onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <button className="btn lg" onClick={() => setVisible(false)}>
        Fechar Modal
      </button>
    </div>
  );
};
