import { ChangeEvent } from "react";

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const Search = ({ onChange, value }: IProps) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type="search"
      placeholder="Search"
    />
  );
};
