import { useForm } from "react-hook-form";
import { Input } from "../Inputs";
import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import style from './style.module.scss'

export const CreateTechModal = () => {

  const { register, handleSubmit } = useForm();
  const { CreateTechModal, setOnCreateModal } = useContext(TechContext);

  const submit = (formData) => {
    CreateTechModal(formData);
    setOnCreateModal(false)
  };

  return (
    <div className={style.container}>
      <section className={style.CreateTechModal}>
        <header className="headerModal">
          <h1>Cadrastro de Tecnlogias</h1>
          <button onClick={() => setOnCreateModal(false)}>X</button>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            label="Nome"
            placeholder="Material UI"
            {...register("title")}
          />
          <br />
          <label htmlFor="status">Selecionar Status</label>
          <br />
          <select
            name="status"
            id="status"
            className="input"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermendiário">Intermendiário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <br />
          <button type="submit" className="btn_primary">
            Cadastrar Tecnologia{" "}
          </button>
        </form>
      </section>
    </div>
  );
};
