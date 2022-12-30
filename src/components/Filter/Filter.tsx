import { createPortal } from "react-dom";
import {
  Background,
  Content,
  FilterStyled,
  Footer,
  Header,
  InputGroup,
  Section,
  Wrapper,
} from "./styles";
import { useDisableBodyScroll } from "hooks";
import {
  Button,
  CloseButton,
  CustomSelect,
  Divider,
  ICustomSelectOption,
  Input,
  Label,
  Tabs,
} from "components";
import {
  fetchCountries,
  fetchGenres,
  setFilterVisibility,
  setSelectedGenreIds,
  useTypedDispatch,
  useTypedSelector,
  getSelectedGenresAsOptions,
  getSelectedCountyAsOption,
  setSelectedCountry,
  SortVariant,
  setSortVariant,
  setYearFrom,
  setYearTo,
  setRatingFrom,
  setRatingTo,
  cleanFilter,
} from "store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { SingleValue, MultiValue } from "react-select";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

export const Filter = ({ isVisible }: { isVisible: boolean }) => {
  const portalElement = document.getElementById("filter-root");
  useDisableBodyScroll(!isVisible);

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const isGenresLoading = useTypedSelector((state) => state.filter.isGenresLoading);
  const genres = useTypedSelector((state) => state.filter.genres);
  const selectedGenres = useTypedSelector(getSelectedGenresAsOptions);

  const isCountriesLoading = useTypedSelector((state) => state.filter.isCountriesLoading);
  const countries = useTypedSelector((state) => state.filter.countries);
  const selectedCountry = useTypedSelector(getSelectedCountyAsOption);

  const sortVariant = useTypedSelector((state) => state.filter.sortVariant);
  const yearFrom = useTypedSelector((state) => state.filter.yearFrom);
  const yearTo = useTypedSelector((state) => state.filter.yearTo);
  const ratingFrom = useTypedSelector((state) => state.filter.ratingFrom);
  const ratingTo = useTypedSelector((state) => state.filter.ratingTo);

  const handleGenreChange = (options: MultiValue<ICustomSelectOption>) => {
    dispatch(
      setSelectedGenreIds(
        options.map((option) => ({
          id: option.value,
          title: option.label,
        })),
      ),
    );
  };

  const handleCountryChange = (option: SingleValue<ICustomSelectOption>) => {
    if (option === null) {
      dispatch(setSelectedCountry(null));
    } else {
      dispatch(setSelectedCountry({ id: option.value, title: option.label }));
    }
  };

  const closeFilter = () => {
    dispatch(setFilterVisibility(false));
  };

  useEffect(() => {
    if (isVisible) {
      dispatch(fetchGenres()).finally();
      dispatch(fetchCountries()).finally();
    }
  }, [dispatch, isVisible]);

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
                          value={sortVariant}
                          onChange={(value) => {
                            dispatch(setSortVariant(value));
                          }}
                        />
                      </Section>

                      <Divider />

                      <Section>
                        <Label>Genre</Label>
                        <CustomSelect
                          isMulti
                          isDisabled={isGenresLoading}
                          options={genres.map((genre) => ({
                            value: genre.id,
                            label: genre.title,
                          }))}
                          onChange={(newValues) => {
                            handleGenreChange(newValues as MultiValue<ICustomSelectOption>);
                          }}
                          value={selectedGenres}
                        />
                      </Section>

                      <Section>
                        <Label>Years</Label>
                        <InputGroup>
                          <Input
                            placeholder="From"
                            value={yearFrom ?? ""}
                            type="number"
                            min="1895"
                            onChange={(e) => {
                              dispatch(setYearFrom(e.target.value));
                            }}
                          />
                          <Input
                            placeholder="To"
                            value={yearTo ?? ""}
                            type="number"
                            min="1895"
                            onChange={(e) => {
                              dispatch(setYearTo(e.target.value));
                            }}
                          />
                        </InputGroup>
                      </Section>

                      <Section>
                        <Label>Rating</Label>
                        <InputGroup>
                          <Input
                            placeholder="From"
                            value={ratingFrom ?? ""}
                            type="number"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => {
                              dispatch(setRatingFrom(e.target.value));
                            }}
                          />
                          <Input
                            placeholder="To"
                            value={ratingTo ?? ""}
                            type="number"
                            min="0"
                            max="10"
                            step="0.1"
                            onChange={(e) => {
                              dispatch(setRatingTo(e.target.value));
                            }}
                          />
                        </InputGroup>
                      </Section>

                      <Section>
                        <Label>Country</Label>
                        <CustomSelect
                          isDisabled={isCountriesLoading}
                          options={countries.map((country) => ({
                            value: country.id,
                            label: country.title,
                          }))}
                          value={selectedCountry}
                          onChange={(option) => {
                            handleCountryChange(option as SingleValue<ICustomSelectOption>);
                          }}
                        />
                      </Section>
                    </Content>

                    <Footer>
                      <InputGroup>
                        <Button
                          onClick={() => {
                            dispatch(cleanFilter());
                          }}
                        >
                          Clear Filter
                        </Button>
                        <Button
                          onClick={(e) => {
                            dispatch(setFilterVisibility(false));
                            navigate(`/${ROUTE.SEARCH}`);
                          }}
                          className="primary"
                        >
                          Show Results
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
