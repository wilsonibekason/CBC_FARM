import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/root/CIC.css";
import { CIC } from "./views";
import { BrowserRouter as Router, BrowserRouterProps } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import { Toaster } from "react-hot-toast";
import {
  ReactQueryDevtools,
  ReactQueryDevtoolsPanel,
} from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ChakraProvider,
  ChakraProviderProps,
  extendBaseTheme,
  extendTheme,
} from "@chakra-ui/react";

import { IconsProvider } from "./services/context/icons/IconsContext";
import { IconProvider } from "./services/context/icons/IconContext";

const client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: true } },
});

const theme = extendTheme({});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <QueryClientProvider client={client}>
          <IconsProvider>
            <IconProvider>
              <ChakraProvider theme={theme}>
                <CIC />
              </ChakraProvider>
            </IconProvider>
          </IconsProvider>
          <Toaster />
          <ReactQueryDevtools
            initialIsOpen={false}
            panelPosition={"bottom"}
            position={"bottom-right"}
          />
        </QueryClientProvider>
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);
