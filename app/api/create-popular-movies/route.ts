import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { movies } = await req.json();

  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return new NextResponse("Movies data is required", { status: 400 });
  }

  try {
    const createdMovies = await Promise.all(
      movies.map(async (movie) => {
        const {
          title,
          movieVideo,
          trailerVideo,
          thumbnailUrl,
          genre,
          age,
          duration,
          ranking,
        } = movie;

        if (
          !title ||
          !movieVideo ||
          !trailerVideo ||
          !thumbnailUrl ||
          !genre ||
          !age ||
          !duration ||
          !ranking
        ) {
          throw new Error(`Missing data for movie: ${title}`);
        }

        return await db.popularMovie.create({
          data: {
            title,
            ranking,
            thumbnailUrl,
            genre,
            age,
            duration,
            trailerVideo,
            movieVideo,
          },
        });
      })
    );

    return NextResponse.json(createdMovies, { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
