import { BlockMoviesProps } from "./BlockMovies.types";
import { CarouselMovie } from "./CarouselMovie";

export function BlockMovies(props: BlockMoviesProps) {
  const { title, movies, isMyList } = props;

  if (!movies || movies.length === 0) return null;

  return (
    <div className="-top-16 relative px-[4%] md:pt-20 md:pb-20 overflow-auto bg-[#171717]">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <CarouselMovie movies={movies} isMyList={isMyList} />
    </div>
  );
}
