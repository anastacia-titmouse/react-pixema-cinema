import { createPortal } from "react-dom";
import { Background, Header, FilterStyled, Wrapper, SortSection } from "./styles";
import { useBodyScroll } from "hooks";
import { CloseButton, Tabs } from "components";

export enum SortVariant {
  rating,
  year,
}

export const Filter = () => {
  const portalElement = document.getElementById("filter-root");
  useBodyScroll(false);
  //TODO redux isOpen variable
  //TODO disable window scroll onOpenPortal

  if (portalElement) {
    return createPortal(
      <Background>
        <Wrapper>
          <FilterStyled>
            <Header>
              <h2>Filters</h2>
              <CloseButton />
            </Header>

            <SortSection>
              <p>Sort by</p>
              <Tabs
                tabs={[
                  { label: "Rating", id: SortVariant.rating },
                  { label: "Year", id: SortVariant.year },
                ]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </SortSection>
          </FilterStyled>
        </Wrapper>
      </Background>,
      portalElement,
    );
  } else {
    return null;
  }
};
