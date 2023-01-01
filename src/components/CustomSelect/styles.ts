import { StylesConfig } from "react-select";
import { Color } from "ui";
import { INPUT_CSS_OBJECT } from "ui/typography";
import { ICustomSelectOption } from "./CustomSelect";

export const selectStyles: StylesConfig<ICustomSelectOption> = {
  control: (styles) => ({
    ...styles,
    ...INPUT_CSS_OBJECT,
    background: Color.Primary_INPUT_BG,
    minHeight: "56px",
    border: `1px solid ${Color.Primary_INPUT_BG}`,
    borderRadius: "10px",
    padding: "12px 20px",
    textTransform: "capitalize",
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
    gap: "12px",
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
      textTransform: "capitalize",
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
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: Color.Dark,
    borderRadius: "6px",
    padding: "4px 4px 4px 8px",
    textTransform: "capitalize",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    ...INPUT_CSS_OBJECT,
    color: Color.White,
    padding: 0,
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ":hover": {
      backgroundColor: "transparent",
    },
    ":active": {
      backgroundColor: "transparent",
    },
    ":focus": {
      backgroundColor: "transparent",
    },
  }),
};
