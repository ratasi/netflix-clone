import { FilmGenresProps } from "./FilmGenres.types";

export function FilmGenres(props: FilmGenresProps) {
  const { genres } = props;

  return (
    <div className="flex gap-4 text-[10px] text-white">
      {genres.map((genre) => (
        <p key={genre}>{genre}</p>
      ))}
    </div>
  );
}
