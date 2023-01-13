import { EmptyResultStyled, Image, Title } from "./styles";

export const EmptyResult = () => {
  return (
    <EmptyResultStyled>
      <Image />
      <Title>There'snothing here, yet!</Title>
    </EmptyResultStyled>
  );
};
