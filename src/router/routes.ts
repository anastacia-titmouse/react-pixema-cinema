export enum ROUTES {
  HOME = "",
  TRENDS = "trends",
  FAVORITES = "favorites",
  SETTINGS = "settings",
  MOVIE_DETAILS = "single/:imdbId",
  SEARCH = "search",
  SIGN_IN = "sign-in",
  SIGN_UP = "sign-up",
  RESET_PASSWORD = "reset-password",
}

class Route {
  get HOME() {
    return Route.addPublicUrlSuffix(ROUTES.HOME);
  }

  get TRENDS() {
    return Route.addPublicUrlSuffix(ROUTES.TRENDS);
  }

  get FAVORITES() {
    return Route.addPublicUrlSuffix(ROUTES.FAVORITES);
  }

  get SETTINGS() {
    return Route.addPublicUrlSuffix(ROUTES.SETTINGS);
  }

  get MOVIE_DETAILS() {
    return Route.addPublicUrlSuffix(ROUTES.MOVIE_DETAILS);
  }

  get SEARCH() {
    return Route.addPublicUrlSuffix(ROUTES.SEARCH);
  }

  get SIGN_IN() {
    return Route.addPublicUrlSuffix(ROUTES.SIGN_IN);
  }

  get SIGN_UP() {
    return Route.addPublicUrlSuffix(ROUTES.SIGN_UP);
  }

  get RESET_PASSWORD() {
    return Route.addPublicUrlSuffix(ROUTES.RESET_PASSWORD);
  }

  public static addPublicUrlSuffix(route: string): string {
    return `${process.env.PUBLIC_URL}/${route}`;
  }
}

export const ROUTE = new Route();
