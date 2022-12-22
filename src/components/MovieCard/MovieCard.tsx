import { CardPoster, Title, SubTitle } from "./style";


interface IProps {
  id: string;
  title: string;
  img: string;
  genre: string;
  year: string;
}
export const MovieCard = ({ title, img, genre, year }: IProps) => {
  return (
    <li>
      <CardPoster src={img} alt={title} />
      <Title>
        {title}:{year}
      </Title>
      <SubTitle>{genre}</SubTitle>
    </li>
  );
};
