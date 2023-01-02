import { Icon, PgBadgeStyled } from "./styles";
import { PgRating } from "types";
import pgGImg from "assets/pgIcons/g.png";
import pgNc17 from "assets/pgIcons/nc17.png";
import pgNotRated from "assets/pgIcons/not-rated.png";
import pg13 from "assets/pgIcons/pg13.png";
import pgPg from "assets/pgIcons/pg.png";
import pgR from "assets/pgIcons/r.png";

const renderPgIcon = (rating: PgRating) => {
  switch (rating) {
    case PgRating.g:
      return <Icon src={pgGImg} alt="pg-g" />;
    case PgRating.nc17:
      return <Icon src={pgNc17} alt="pg-nc-17" />;
    case PgRating.notRated:
      return <Icon src={pgNotRated} alt="pg-not-rated" />;
    case PgRating.pg13:
      return <Icon src={pg13} alt="pg-13" />;
    case PgRating.pg:
      return <Icon src={pgPg} alt="pg-pg" />;
    case PgRating.r:
      return <Icon src={pgR} alt="pg-r" />;
  }
};

export const PgBadge = ({ rating }: { rating: PgRating }) => {
  return <PgBadgeStyled>{renderPgIcon(rating)}</PgBadgeStyled>;
};
