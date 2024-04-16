import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import { App } from "./App.tsx";
import ThemeRegistry from "./shared/styles/theme/ThemeRegistry.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeRegistry options={{ key: "mui" }}>
      <App />
    </ThemeRegistry>
  </React.StrictMode>
);
