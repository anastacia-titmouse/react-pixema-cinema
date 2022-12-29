import { RootState } from "../store";

export const getSelectedGenresAsOptions = (state: RootState) => {
  return state.search.selectedGenres.map((genre) => ({
    label: genre.title,
    value: genre.id,
  }));
};

export const getSelectedCountyAsOption = (state: RootState) => {
  if (state.search.selectedCountry) {
    const { id: value, title: label } = state.search.selectedCountry;
    return {
      value,
      label,
    };
  } else {
    return null;
  }
};
