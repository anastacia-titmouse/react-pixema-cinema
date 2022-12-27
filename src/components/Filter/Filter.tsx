import { createPortal } from "react-dom";
import { Background, Header, FilterStyled, Wrapper, Section, InputGroup } from "./styles";
import { useBodyScroll } from "hooks";
import { CloseButton, Divider, Input, Tabs, Label, CustomSelect } from "components";
import { useState, useEffect } from "react";

export enum SortVariant {
  rating,
  year,
}

export enum MovieType {
  movie = "movie",
  series = "series",
  episode = "episode",
}

export const Filter = ({ isVisible }: { isVisible: boolean }) => {
  const portalElement = document.getElementById("filter-root");
  const [movieType, setMovieType] = useState(MovieType.movie);

  useBodyScroll(!isVisible);
  //TODO move isVisible from props to redux
  //TODO redux isOpen variable
  //TODO disable window scroll onOpenPortal

  if (portalElement && isVisible) {
    return createPortal(
      <Background>
        <Wrapper>
          <FilterStyled>
            <Header>
              <h2>Filters</h2>
              <CloseButton />
            </Header>

            <Section>
              <Label>Sort by</Label>
              <Tabs
                tabs={[
                  { label: "Rating", id: SortVariant.rating },
                  { label: "Year", id: SortVariant.year },
                ]}
                onChange={(value) => {
                  //TODO handle change
                }}
              />
            </Section>

            <Divider />

            <Section>
              <Label>Full or short movie name</Label>
              <Input placeholder="Your text" />
            </Section>

            <Section>
              <Label>Years</Label>
              <InputGroup>
                <Input placeholder="From" />
                <Input placeholder="To" />
              </InputGroup>
            </Section>

            <Section>
              <Label>Type</Label>
              <CustomSelect
                options={[
                  { value: MovieType.movie, label: "Movie" },
                  { value: MovieType.series, label: "Series" },
                  { value: MovieType.episode, label: "Episode" },
                ]}
              />
            </Section>
          </FilterStyled>
        </Wrapper>
      </Background>,
      portalElement,
    );
  } else {
    return null;
  }
};
