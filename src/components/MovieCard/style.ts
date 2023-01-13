import styled from "styled-components";
import { Color, INPUT, S1_2 } from "ui";
import { CSSProperties } from "react";

export const linkStyle: CSSProperties = {
  display: "block",
  width: "100%",
  overflow: "hidden",
};

export const MovieCardWrapper = styled.li`
  position: relative;
`;

export const MovieCardStyled = styled.div`
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

export const DeleteButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-color: ${Color.Graphite};
  border: none;
  border-radius: 10px;
  padding: 0;
  path {
    fill: ${Color.Primary};
    transition: 0.3s fill ease-in-out;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: ${Color.Primary_Light};
    }
  }
`;
