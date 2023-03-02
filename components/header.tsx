interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div className="bg-black text-white">
        <h1>Header</h1>
      </div>
    </header>
  );
};
