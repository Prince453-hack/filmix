import Image from "next/image";

export default async function page({ params }) {
  const movieID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json();
  console.log(movie);

  return (
    <div className="w-full">
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
          <p>
            <span>OverView: </span> {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
