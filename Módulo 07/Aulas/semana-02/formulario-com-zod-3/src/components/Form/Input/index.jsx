import { forwardRef } from "react"

// eslint-disable-next-line react/prop-types, react/display-name
export const Input = forwardRef( ({label,...rest},ref) => {
  
  return(
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...rest} ref={ref} />
    </div>
  )
})