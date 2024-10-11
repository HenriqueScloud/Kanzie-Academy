import FiltroGenero from "../FilterGenero/FilterGenero";
import Albuns from "../Albuns/Albuns";
import { CartModal } from "../CartModal";
import { TodoContext } from "../../providers/TodoContext";
import { useContext } from "react";

function Main() {
  const { OnModal } =
    useContext(TodoContext);
  return (
    <main className="darkMode">
      <FiltroGenero />
      <Albuns />

      {OnModal && (
        <CartModal
          
        />
      )}
    </main>
  );
}

export default Main;
