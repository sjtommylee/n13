import React from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const variants = {};

const Button = React.forwardRef<HTMLButtonElement, Props>(({ className, ...props }, ref) => {
  return <button>button</button>;
});

Button.displayName = "Button";

export { Button, variants };
