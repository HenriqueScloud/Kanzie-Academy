import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
// eslint-disable-next-line react/prop-types
export const Input = ({ label, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    type = "text";
  };
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <br />
      <input {...rest} type={showPassword ? "text" : type} className="input" />
      {type == "password" ? (
        <figure onClick={onShowPassword}>
          {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
        </figure>
      ) : null}
    </div>
  );
};
