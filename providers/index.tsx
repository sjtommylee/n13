interface Props {
  children: React.ReactNode;
}

export const RootProvider = ({ children }: Props) => {
  return <div>{children}</div>;
};
