import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, S1_4 } from "ui";

export const LinkStyled = styled(Link)`
  ${S1_4};
  color: ${Color.Primary};

  &:hover {
    color: ${Color.Primary_Light};
  }

  &.password {
    color: ${Color.Secondary};

    &:hover {
      color: ${Color.Primary};
    }
  }
`;
