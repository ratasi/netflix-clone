import { Movie } from "@prisma/client";

export type BlockMoviesProps = {
  title: string;
  movies: Movie[];
  isMyList: boolean;
};
