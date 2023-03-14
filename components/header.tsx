"use-client";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={""}>
      <div className="">
        <h1 className="">Header</h1>
      </div>
    </header>
  );
};
