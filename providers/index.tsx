import { useIsMounted } from "@/hooks/use-is-mounted";
import { ThemeProvider } from "next-themes";
import { SWRConfig } from "swr";
interface Props {
  children: React.ReactNode;
}

const fetchJSON = () => {
  // TODO - refactor this into separate .ts file
  return {};
};

export const RootProvider = ({ children }: Props) => {
  const isMounted = useIsMounted();
  return (
    <SWRConfig
      value={{
        fetcher: fetchJSON,
        onError: (err) => {
          console.log(err);
        },
      }}
    >
      {isMounted() && <ThemeProvider>{children}</ThemeProvider>}
    </SWRConfig>
  );
};
