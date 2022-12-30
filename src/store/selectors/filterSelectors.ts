import { RootState } from "../store";
import { filterInitialState } from "../features/filterSlice/filterSlice";

export const getSelectedGenresAsOptions = (state: RootState) => {
  return state.filter.selectedGenres.map((genre) => ({
    label: genre.title,
    value: genre.id,
  }));
};

export const getSelectedCountyAsOption = (state: RootState) => {
  if (state.filter.selectedCountry) {
    const { id: value, title: label } = state.filter.selectedCountry;
    return {
      value,
      label,
    };
  } else {
    return null;
  }
};

export const getFilterActivationState = (state: RootState) => {
  const {
    sortVariant: initialSortVariant,
    yearFrom: initialYarFrom,
    yearTo: initialYearTo,
    ratingFrom: initialRatingFrom,
    ratingTo: initialRatingTo,
    selectedCountry: initialSelectedCountry,
  } = filterInitialState;

  const { sortVariant, yearFrom, yearTo, ratingFrom, ratingTo, selectedGenres, selectedCountry } =
    state.filter;

  return !(
    sortVariant === initialSortVariant &&
    yearFrom === initialYarFrom &&
    yearTo === initialYearTo &&
    ratingFrom === initialRatingFrom &&
    ratingTo === initialRatingTo &&
    selectedGenres.length === 0 &&
    selectedCountry === initialSelectedCountry
  );
};
