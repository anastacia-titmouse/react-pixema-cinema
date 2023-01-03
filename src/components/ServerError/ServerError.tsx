import { ServerErrorStyled } from "./styles";

export const ServerError = ({ text }: { text?: string | null }) => {
  if (text) {
    return <ServerErrorStyled>{text}</ServerErrorStyled>;
  } else {
    return null;
  }
};
