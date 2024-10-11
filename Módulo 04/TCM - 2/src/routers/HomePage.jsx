
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { useContext } from "react";
import { TodoContext } from "../providers/TodoContext";
export function HomePage(){
  const { Theme } = useContext(TodoContext);
  const html = document.querySelector("html");

  Theme == false
    ? html.classList.add("darkMode")
    : html.classList.remove("darkMode");

  return (
    <main>
      <Header />
      <Main />
    </main>
  );

}