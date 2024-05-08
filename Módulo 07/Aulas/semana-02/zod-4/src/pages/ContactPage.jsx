export const ContactPage = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <form>
        <Input
          label="nome: "
          name="name"
          id="name"
          type="text"
          placeholder="seu nome !"
          {...register("nome")}
          {...(errors.name ? <p> {errors.name.message} </p> : null)}
        />
        <Input
          label="E-mail: "
          name="email"
          id="email"
          type="email"
          placeholder="seu E-mail !"
          {...register("email")}
          {...(errors.email ? <p> {errors.email.message} </p> : null)}
        />
        <Input
          label="Senha: "
          name="password"
          id="password"
          type="password"
          placeholder="Sua senha !"
          {...register("password")}
          {...(errors.password ? <p> {errors.password.message} </p> : null)}
        />

        <select
          {...register("select")}
          {...(errors.select ? <p> {errors.select.message} </p> : null)}
        >
          <option value=""> selecione um modulo</option>
          <option value="modulo 1">modulo 1</option>
          <option value="modulo 2">modulo 2</option>
          <option value="modulo 3">modulo 3</option>
        </select>

        <button onSubmit={handleSubmit(enviar)}>Enviar</button>
      </form>
    </>
  );
};
