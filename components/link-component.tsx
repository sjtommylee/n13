import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
  target?: string;
  className?: string;
}

export const LinkComponent: React.FC<Props> = ({
  href,
  children,
  className,
  isExternal,
  target,
}) => {
  const extraClass = className ?? "";
  // TODO: set regex for href match. its going to be match | isExternal (bool)
  const isExternalEnabled = isExternal;

  if (isExternalEnabled) {
    return (
      <a target={target} className={extraClass}>
        {children}
      </a>
    );
  }

  return (
    <Link className={extraClass} href={href}>
      {children}
    </Link>
  );
};
