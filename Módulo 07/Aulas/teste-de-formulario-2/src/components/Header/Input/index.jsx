// import { forwardRef } from "react";

import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
export const Input = forwardRef(({ label, ...rest }, ref) => {

  return (
    <div>
      <label>
        {label}
        <input ref={ref} {...rest} />
      </label>
    </div>
  );
});
