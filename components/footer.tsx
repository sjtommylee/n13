import { LinkComponent } from "./link-component";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <div>
        <h1>Footer</h1>
      </div>
      <div>
        <h2>Links</h2>
        <LinkComponent href={"/"}>link 1</LinkComponent>
        <LinkComponent href={"/"}>link 2</LinkComponent>
        <LinkComponent href={"/"}>link 3</LinkComponent>
      </div>
    </footer>
  );
};
