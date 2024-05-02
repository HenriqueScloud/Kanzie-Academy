import { Form } from "../components/Form/Form";

export const RegisterPage = ({ setUser }) => {
  return (
    <>
      <h1>register</h1>
      <Form setUser={setUser}/>
    </>
  );
};
