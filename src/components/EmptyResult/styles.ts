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
  margin-top: 150px;
  background: url(${empty}) center no-repeat;
  background-size: contain;

  ${Media.Tablet} {
    margin-top: 150px;
    width: 336px;
    height: 298px;
  }
  ${Media.Mobile} {
    margin-top: 120px;
    width: 202px;
    height: 180px;
  }
`;

export const Title = styled.p`
  ${H3}
  color: ${Color.Secondary};
`;
