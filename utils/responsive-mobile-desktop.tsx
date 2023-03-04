import * as React from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  children: React.ReactNode | Array<React.ReactElement>;
}

export const ResponsiveMobileDesktop = ({ children }: Props) => {
  const isTabletOrMobileViewPort = useMediaQuery({ query: "(max-width: 1200px)" });
  if (isTabletOrMobileViewPort && children && Array.isArray(children)) {
    return children[0];
  }
  if (!isTabletOrMobileViewPort && children && Array.isArray(children)) {
    return children[1];
  }
  return null;
};
