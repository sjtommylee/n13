import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
interface Props {
  children: React.ReactNode;
}

const fetchJSON = () => {
  return {};
};

export const RootProvider = ({ children }: Props) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJSON,
        onError: (err) => {
          console.log(err);
        },
      }}
    >
      <ThemeProvider>{children}</ThemeProvider>;
    </SWRConfig>
  );
};
