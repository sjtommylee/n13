import React from "react";

type Theme = {};
export type BoxProps = {};

declare const createBox: <
  Theme,
  Props = {
    children?: React.ReactNode;
  }
>(
  BaseComponent?: React.ComponentType<any>
) => React.ForwardRefExoticComponent<React.RefAttributes<unknown>> & {
  defaultProps?:
    | Partial<
        React.PropsWithoutRef<BoxProps & Omit<Props, keyof BoxProps>> & React.RefAttributes<unknown>
      >
    | undefined;
};
