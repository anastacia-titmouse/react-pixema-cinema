import { FilterButton, SearchForm, SearchStyled } from "./style";
import {
  getFilterActivationState,
  setFilterVisibility,
  setKeyword,
  useTypedDispatch,
  useTypedSelector,
} from "store";
import { FilterIcon } from "assets";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const Search = () => {
  const isFilterVisible = useTypedSelector((state) => state.filter.isFilterVisible);
  const isFilterActive = useTypedSelector(getFilterActivationState);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const onChange = (keyword: string) => {
    dispatch(setKeyword(keyword));
  };

  const toggleFilterVisibility = () => {
    dispatch(setFilterVisibility(!isFilterVisible));
  };

  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/${ROUTE.SEARCH}`);
      }}
      className={isFilterActive ? "filter-active" : ""}
    >
      <SearchStyled
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder="Search"
      />
      <FilterButton className="search-filter-button" onClick={toggleFilterVisibility} type="button">
        <FilterIcon />
      </FilterButton>
    </SearchForm>
  );
};
