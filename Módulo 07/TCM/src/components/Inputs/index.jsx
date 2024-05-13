
// eslint-disable-next-line react/prop-types
export const Input = ({label, ...rest}) =>{

  return(
    <>
      <label htmlFor={label}>{label}</label><br />
      <input {...rest}/>
    </>
  )

}