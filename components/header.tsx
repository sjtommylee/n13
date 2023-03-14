"use-client";

import classNames from "clsx";
interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const base = classNames(className, "Header", "");
  return (
    <header className={base}>
      <div className="">
        <h1 className="text-red-500">Header</h1>
      </div>
    </header>
  );
};
