import { useDispatch } from "react-redux";
import { setKeyword } from "store";
import { FilterButton, SearchStyled, SearchWrapper } from "./style";
import { FilterIcon } from "../../assets";

export const Search = () => {
  const dispatch = useDispatch();

  const onChange = (keyword: string) => {
    dispatch(setKeyword(keyword));
  };

  const filtered = true;

  return (
    <SearchWrapper className={filtered ? "filtered" : ""}>
      <SearchStyled
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="Search"
      />
      <FilterButton className="search-filter-button">
        <FilterIcon />
      </FilterButton>
    </SearchWrapper>
  );
};
