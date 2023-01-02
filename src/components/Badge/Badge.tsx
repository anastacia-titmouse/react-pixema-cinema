import { BadgeStyled } from "./styles";

export const Badge = ({ text, accent = false }: { text: string; accent?: boolean }) => {
  return <BadgeStyled className={accent ? "badge-accent" : ""}>{text}</BadgeStyled>;
};
