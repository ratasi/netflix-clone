import { Movie } from "@prisma/client";

export type ActionsButtonsProps = {
  movieId: string;
  movie: Movie;
  isMyList: boolean;
};
