import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LinkComponent } from "./link-component";

type Size = "sm" | "md" | "lg";

export interface Props {
  title: string;
  description: string;
  size: Size;
  href?: string | unknown;
}

export const Card: React.FC<Props> = ({ title, description, size = "md", href }) => {
  return (
    <div>
      <h1>Card</h1>
    </div>
  );
};
