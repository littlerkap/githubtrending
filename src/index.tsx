import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import BaseStyles from "@primer/components/lib/BaseStyles";
import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "@primer/components/lib/ThemeProvider";
import reportWebVitals from "./reportWebVitals";

// Create a react query client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider colorMode="day">
      <BaseStyles>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BaseStyles>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
