import styled from "styled-components";
import { Color } from "ui";

export const MovieCardStyled = styled.li`
  display: grid;
  row-gap: 25px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  color: ${Color.Primary_TX};
`;

export const SubTitle = styled.h4`
  color: ${Color.Light};
`;

export const CardPoster = styled.img`
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 266/357;
  object-fit: cover;
`;
