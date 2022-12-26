import { css } from "styled-components";
import { Color } from "ui";
export const resetCSS = css`
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  img,
  ol,
  ul,
  li,
  form,
  label,
  aside,
  figure,
  figcaption,
  footer,
  header,
  nav {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    background: ${Color.Primary_BG};
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  .MuiPopover-root,
  .MuiPaper-root {
    background-color: transparent !important;
    //sx={{ borderRadius: "10px" }} not working
    border-radius: 10px !important;
  }
`;
