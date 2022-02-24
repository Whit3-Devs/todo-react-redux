import React from "react";
import ReactDOM from "react-dom";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// Router Dom
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store/storeIndex";
// Import Components
import App from "./App";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: '$blue400', //  $blue600 on dark mode
      primary: '$blue800',
      primaryDark: '$blue600',
      primaryShadow: '$blue100',

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "$blue800",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      primaryLight: '$blue600', //  $blue600 on dark mode
      primary: '$blue200',
      primaryDark: '$blue600',
      primaryShadow: '$blue600',

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "$blue200",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme.className,
            dark: darkTheme.className,
          }}
        >
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </NextThemesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
