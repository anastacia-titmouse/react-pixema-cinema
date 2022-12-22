import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { resetCSS } from "./resetCSS";
import { Color } from "ui";

export const GlobalStyles = createGlobalStyle`
${resetCSS}

html[theme = "dark"] {
    ${darkTheme}
}

html[theme = "light"] {
    ${lightTheme}
}

#root {
      display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  width: 100%;
  background: ${Color.Primary_BG};
}
`;
