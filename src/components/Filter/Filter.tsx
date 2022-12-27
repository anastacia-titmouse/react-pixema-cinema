import { createPortal } from "react-dom";
import { FilterBackground, FilterHeaderStyled, FilterStyled, FilterWrapper } from "./styles";
import { useBodyScroll } from "hooks";
import { CloseButton } from "components";

export const Filter = () => {
  const portalElement = document.getElementById("filter-root");
  useBodyScroll(false);
  //TODO redux isOpen variable
  //TODO disable window scroll onOpenPortal

  if (portalElement) {
    return createPortal(
      <FilterBackground>
        <FilterWrapper>
          <FilterStyled>
            <FilterHeaderStyled>
              <h2>Filters</h2>
              <CloseButton />
            </FilterHeaderStyled>
          </FilterStyled>
        </FilterWrapper>
      </FilterBackground>,
      portalElement,
    );
  } else {
    return null;
  }
};
