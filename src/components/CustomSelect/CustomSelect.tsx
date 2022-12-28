import Select from "react-select";
import { selectStyles } from "./styles";

export const CustomSelect = ({
  options,
  isMulti,
}: {
  options: { label: string; value: string }[];
  isMulti?: boolean;
}) => {
  return (
    <Select
      isMulti={isMulti}
      options={options}
      components={{ Input: () => null, IndicatorSeparator: () => null }}
      styles={selectStyles}
    />
  );
};
