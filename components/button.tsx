import React from "react";
import { cva, VariantProps } from "class-variance-authority";

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof themeVariant> {}

const themeVariant = cva("", {
  variants: {},
});

const Button = React.forwardRef<HTMLButtonElement, Props>(({ className, ...props }, ref) => {
  return <button className="">button</button>;
});

Button.displayName = "Button";

export { Button, themeVariant };
