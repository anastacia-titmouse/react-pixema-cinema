import Select from "react-select";
import { selectStyles } from "./styles";

export const CustomSelect = ({ options }: { options: { label: string; value: string }[] }) => {
  return (
    <Select
      options={options}
      components={{ Input: () => null, IndicatorSeparator: () => null }}
      styles={selectStyles}
    />
  );
};
