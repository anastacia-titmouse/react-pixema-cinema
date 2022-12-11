interface IProps {
  id: string;
  title: string;
  img: string;
  genre: string;
  year: string;
}
export const MovieCard = ({ title, img, genre, year }: IProps) => {
  console.log(MovieCard);
  return (
    <li>
      <img src={img} alt={title} />
      <h3>
        {title}:{year}
      </h3>
      <h4>{genre}</h4>
    </li>
  );
};
