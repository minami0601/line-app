import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";

import ProviderIndex from "./ProviderIndex";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ProviderIndex />
    </StyledEngineProvider>
  </StrictMode>
);
