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
  InputStyled,
  Label,
} from "components";
import {
  setFilterVisibility,
  useTypedDispatch,
  useTypedSelector,
  cleanFilter,
  setType,
  setYearOfRelease,
  applyFilter,
  getMovieTypeAsOption,
} from "store";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { MovieTypes } from "types";
import { SingleValue } from "react-select";

export const Filter = ({ isVisible }: { isVisible: boolean }) => {
  const portalElement = document.getElementById("filter-root");
  useDisableBodyScroll(!isVisible);

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const yearOfRelease = useTypedSelector((state) => state.filter.yearOfRelease);
  const movieType = useTypedSelector(getMovieTypeAsOption);

  const closeFilter = () => {
    dispatch(setFilterVisibility(false));
  };

  const handleMovieTypeChange = (option: SingleValue<ICustomSelectOption>) => {
    if (option === null) {
      dispatch(setType(null));
    } else {
      dispatch(setType(option.value as MovieTypes));
    }
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
                        <Label>Type</Label>
                        <CustomSelect
                          value={movieType}
                          options={[
                            { label: "Movie", value: MovieTypes.movie },
                            { label: "Episode", value: MovieTypes.episode },
                            { label: "Series", value: MovieTypes.series },
                          ]}
                          isClearable
                          onChange={(option) => {
                            handleMovieTypeChange(option as SingleValue<ICustomSelectOption>);
                          }}
                        />
                      </Section>

                      <Divider />

                      <Section>
                        <Label>Year Of Release</Label>
                        <InputStyled
                          placeholder="Year Of Release"
                          value={yearOfRelease ?? ""}
                          type="number"
                          min="1895"
                          onChange={(e) => {
                            dispatch(setYearOfRelease(e.target.value));
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
                            dispatch(applyFilter());
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
