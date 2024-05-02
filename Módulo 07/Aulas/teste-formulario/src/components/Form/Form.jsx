import { Inputs } from "./Inputs/Inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Form = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // console.log();
    navigate("/");
    setUser({name, email, password})
  };

  return (
    <>
      <form>
        <h1>formulario de registro </h1>
        <Inputs
          type="text"
          title="name"
          placeholder="Seu nome"
          id="name"
          value={name}
          setvalue={setName}
        />
        <br />
        <Inputs
          type="email"
          title="email"
          placeholder="Seu email"
          id="email"
          value={email}
          setvalue={setEmail}
        />
        <br />
        <Inputs
          type="password"
          title="Senha"
          placeholder="Crie sua senha"
          id="senha"
          value={password}
          setvalue={setpassword}
        />
        <br />
        <input type="submit" onClick={submit} />
      </form>
    </>
  );
};
