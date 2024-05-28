import { useForm } from "react-hook-form";
import { TodoContext } from "../../providers/TodoContext";
import { useContext } from "react";

export const EditTodoForm = () => {
    const { editingTodo, editTodo } = useContext(TodoContext);

    const { register, handleSubmit } = useForm({
        values: {
            title: editingTodo.title,
            content: editingTodo.content,
        }
    });
    

    const submit = (formData) => {
        editTodo(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input placeholder="Título" type="text" {...register("title")} />
            <textarea placeholder="Conteúdo" {...register("content")} />
            <button type="submit">Editar nota</button>
        </form>
    )
}