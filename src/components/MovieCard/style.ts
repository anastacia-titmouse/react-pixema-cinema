import styled from "styled-components";
import { Color, S1_2 } from "ui";
import { CSSProperties } from "react";
import { INPUT } from "../../ui/typography";

export const linkStyle: CSSProperties = {
  display: "block",
  width: "100%",
  overflow: "hidden",
};

export const MovieCardStyled = styled.li`
  display: grid;
  row-gap: 25px;
  grid-template-rows: max-content auto;
`;

export const Text = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${Color.Primary_TX};
  ${S1_2}
`;

export const SubTitle = styled.h4`
  color: ${Color.Light};
  ${INPUT}
`;

export const CardPoster = styled.img`
  border-radius: 20px;
  width: 100%;
  aspect-ratio: 266/357;
  object-fit: cover;
`;
