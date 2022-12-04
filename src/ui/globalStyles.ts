import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
html[theme = "dark"] {
    ${darkTheme}
}

html[theme = "light"] {
    ${lightTheme}
}
`;
