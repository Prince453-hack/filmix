import Image from "next/image";

export default async function page({ params }) {
  const movieID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json();
  console.log(movie);

  return (
    <div className="w-full mt-10">
      <div className="p-4 md:pt-4 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          } `}
          width={500}
          height={300}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/loading.svg"
          alt="Image Not Available"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">OverView: </span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released: </span>
            {movie.release_date || movie.first_aired_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
