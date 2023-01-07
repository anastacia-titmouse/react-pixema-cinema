import { FilterButton, SearchForm, SearchStyled } from "./style";
import {
  getFilterActivationState,
  setFilterVisibility,
  setKeyword as setStoreKeyword,
  useTypedDispatch,
  useTypedSelector,
  applyFilter,
} from "store";
import { FilterIcon } from "assets";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useState } from "react";

export const Search = () => {
  const storeKeyword = useTypedSelector((state) => state.filter.keyword);
  const [keyword, setKeyword] = useState(storeKeyword);
  const isFilterVisible = useTypedSelector((state) => state.filter.isFilterVisible);
  const isFilterActive = useTypedSelector(getFilterActivationState);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const toggleFilterVisibility = () => {
    dispatch(setFilterVisibility(!isFilterVisible));
  };

  return (
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setStoreKeyword(keyword));
        dispatch(applyFilter());
        navigate(`${ROUTE.SEARCH}`);
      }}
      className={isFilterActive ? "filter-active" : ""}
    >
      <SearchStyled
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder="Search"
      />
      <FilterButton className="search-filter-button" onClick={toggleFilterVisibility} type="button">
        <FilterIcon />
      </FilterButton>
    </SearchForm>
  );
};
