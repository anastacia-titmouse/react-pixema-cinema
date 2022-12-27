import { StylesConfig } from "react-select";
import { Color } from "ui";
import { INPUT_CSS_OBJECT } from "ui/typography";

export const selectStyles: StylesConfig<{ label: string; value: string }> = {
  control: (styles) => ({
    ...styles,
    ...INPUT_CSS_OBJECT,
    background: Color.Primary_INPUT_BG,
    height: "56px",
    border: `1px solid ${Color.Primary_INPUT_BG}`,
    borderRadius: "10px",
    padding: "0 20px",
    ":active": {
      borderColor: Color.Primary,
    },
    ":hover": {
      borderColor: Color.Primary,
    },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: Color.Primary_TEXT,
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: "0",
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "10px",
    background: Color.Primary_INPUT_BG,
  }),
  menuList: (styles) => ({
    ...styles,
    ...INPUT_CSS_OBJECT,
    borderRadius: "10px",
    background: Color.Primary_INPUT_BG,
  }),
  singleValue: (styles) => ({
    ...styles,
    ...INPUT_CSS_OBJECT,
    color: Color.Primary_TEXT,
  }),
  option: (styles, state) => {
    return {
      ...styles,
      height: "56px",
      lineHeight: "56px",
      padding: "0 20px",
      borderBottom: `1px solid ${Color.Primary_INPUT_BORDER}`,
      backgroundColor: "transparent",
      ":hover": {
        color: Color.Primary,
      },
      ":active": {
        color: Color.Primary,
      },
      ":focus": {
        color: Color.Primary,
      },
    };
  },
};
