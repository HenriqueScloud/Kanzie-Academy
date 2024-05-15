import { forwardRef, useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
// eslint-disable-next-line react/prop-types, react/display-name
export const Input = forwardRef(({ label, type, ...rest },ref ) => {
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
      <input 
        {...rest} 
        type={showPassword ? "text" : type} 
        className="input" 
        ref={ref}/>
      {type == "password" ? (
        <figure onClick={onShowPassword}>
          {showPassword ?<RiEyeFill /> :<RiEyeOffFill />  }
        </figure>
      ) : null}
    </div>
  );
}); 
