import { FilterButton, SearchStyled, SearchWrapper } from "./style";
import { setFilterVisibility, setKeyword, useTypedDispatch, useTypedSelector } from "store";
import { FilterIcon } from "assets";

export const Search = () => {
  const isFilterVisible = useTypedSelector((state) => state.search.isFilterVisible);
  const dispatch = useTypedDispatch();

  const onChange = (keyword: string) => {
    dispatch(setKeyword(keyword));
  };

  const toggleFilterVisibility = () => {
    dispatch(setFilterVisibility(!isFilterVisible));
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
      <FilterButton className="search-filter-button" onClick={toggleFilterVisibility}>
        <FilterIcon />
      </FilterButton>
    </SearchWrapper>
  );
};
