import { useContext } from "react";
import { Input } from "../Inputs";
import { TechContext } from "../../Providers/TechContext";
import { useForm } from "react-hook-form";
import style from './style.module.scss'

export const EditTechModal = () => {
  const { setEditCardTech, editCardTech, EditCardTech } =
    useContext(TechContext);

  const {register, handleSubmit}=useForm({
    values: {
      title: editCardTech.title,
      status: editCardTech.status
    }
  })

  const submit = (formData) =>{
    EditCardTech(formData);
  }

  return (
    <div className={style.container}>
      <section className={style.EditTechModal}>
        <header>
          <h1>Editar Tecnlogias</h1>
          <button onClick={() => setEditCardTech(null)}>X</button>
        </header>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            label="Nome"
            placeholder="Material UI"
            {...register("title")}
          />
          <br />
          <label htmlFor="status"> Status</label>
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
            Editar Tecnologia{" "}
          </button>
        </form>
      </section>
    </div>
  );
};
