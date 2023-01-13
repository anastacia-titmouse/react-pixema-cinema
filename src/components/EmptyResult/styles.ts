import { empty } from "assets";
import styled from "styled-components";
import { Color, H3, Media } from "ui";

export const EmptyResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  width: 400px;
  height: 400px;
  background: url(${empty}) center no-repeat;

  ${Media.Tablet} {
    width: 336px;
    height: 298px;
  }
  ${Media.Mobile} {
    width: 202px;
    height: 180px;
  }
`;

export const Title = styled.p`
  ${H3}
  color: ${Color.Secondary};
`;
