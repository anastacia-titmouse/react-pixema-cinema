import { createPortal } from "react-dom";
import {
  Background,
  Header,
  FilterStyled,
  Wrapper,
  Section,
  InputGroup,
  Content,
  Footer,
} from "./styles";
import { useDisableBodyScroll } from "hooks";
import { CloseButton, Divider, Input, Tabs, Label, CustomSelect, Button } from "components";
import { setFilterVisibility, useTypedDispatch } from "store";
import { AnimatePresence, motion } from "framer-motion";

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
  useDisableBodyScroll(!isVisible);
  const dispatch = useTypedDispatch();

  const closeFilter = () => {
    dispatch(setFilterVisibility(false));
  };

  if (portalElement) {
    return createPortal(
      <AnimatePresence>
        {isVisible && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "linear", duration: 0.2 }}
          >
            <Background>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                <Wrapper>
                  <FilterStyled>
                    <Header>
                      <h2>Filters</h2>
                      <CloseButton onClick={closeFilter} />
                    </Header>

                    <Content>
                      <Section>
                        <Label>Sort by</Label>
                        <Tabs
                          tabs={[
                            { label: "Rating", id: SortVariant.rating },
                            { label: "Year", id: SortVariant.year },
                          ]}
                          onChange={(value) => {
                            //TODO change filter type handler
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
                        <Label>Rating</Label>
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
                    </Content>

                    <Footer>
                      <InputGroup>
                        <Button
                          onClick={() => {
                            //TODO submit handler
                          }}
                        >
                          text
                        </Button>
                      </InputGroup>
                    </Footer>
                  </FilterStyled>
                </Wrapper>
              </motion.div>
            </Background>
          </motion.div>
        )}
      </AnimatePresence>,
      portalElement,
    );
  } else {
    return null;
  }
};
