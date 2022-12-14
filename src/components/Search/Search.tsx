import { useDispatch } from "react-redux";
import { setKeyword } from "../../store/index";

export const Search = () => {
  const dispatch = useDispatch();

  const onChange = (keyword: string) => {
    dispatch(setKeyword(keyword));
    //TODO debounce
  };

  return (
    <input
      onChange={(e) => {
        onChange(e.target.value);
      }}
      type="search"
      placeholder="Search"
    />
  );
};
