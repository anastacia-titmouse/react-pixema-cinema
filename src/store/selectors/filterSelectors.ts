import { RootState } from "../store";
import { filterInitialState } from "../features/filterSlice/filterSlice";
import { ICustomSelectOption } from "components";

export const getFilterActivationState = (state: RootState) => {
  const { yearOfRelease: initialYarOfRelease, type: initialType } = filterInitialState;

  const { yearOfRelease, type } = state.filter;

  return !(yearOfRelease === initialYarOfRelease && type === initialType);
};

export const getMovieTypeAsOption = (state: RootState): ICustomSelectOption | null => {
  if (state.filter.type === null) {
    return null;
  } else {
    return {
      label: state.filter.type,
      value: state.filter.type,
    };
  }
};
