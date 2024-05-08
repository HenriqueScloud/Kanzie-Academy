export const Inputs = ({title, id, placeholder, type, setvalue, value}) => {
  return (
    <>
      <label htmlFor={title}>{title}: </label>
      <input  type={type}
              id={id}
              placeholder={placeholder}
              value={value}
              required
              />
    </>
  );
};
