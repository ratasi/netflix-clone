import { Movie } from "@prisma/client";

export type ListMoviesProps = {
  movies: Movie[];
};
