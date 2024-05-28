import { useContext } from "react";
import { useForm } from "react-hook-form"
import { TodoContext } from "../../providers/TodoContext";

export const CreateTodoForm = () => {
    const { register, handleSubmit } = useForm();

    const { createTodo } = useContext(TodoContext);

    const submit = (formData) => {
        createTodo(formData);
        console.log(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Título" type="text" {...register("title")} />
            <textarea placeholder="Conteúdo" {...register("content")} />
            <button type="submit">Criar nota</button>
        </form>
    )
}