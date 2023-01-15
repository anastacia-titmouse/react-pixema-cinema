import { EmptyResultStyled, Image, Title } from "./styles";

export const EmptyResult = () => {
  return (
    <EmptyResultStyled>
      <Image />
      <Title>There's nothing here, yet!</Title>
    </EmptyResultStyled>
  );
};
