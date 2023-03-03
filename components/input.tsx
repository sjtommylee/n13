import * as React from "react";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  return <input className={""} />;
});
Input.displayName = "Input";
