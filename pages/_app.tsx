import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes";
import { MenuProvider } from "../context/menu";
import { EntriesProvider } from "../context/entries/EntriesProvider";
import { UIProvider } from "../context/ui/UIProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <MenuProvider>
          <NextUIProvider theme={darkTheme}>
            <Component {...pageProps} />
          </NextUIProvider>
        </MenuProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
