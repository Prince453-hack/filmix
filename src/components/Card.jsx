import Image from "next/image";
import Link from "next/link";
import { BiLike } from "react-icons/bi";

export default function Card({ result }) {
  console.log(
    `https://image.tmdb.org/t/p/original/${
      result.poster_path || result.backdrop_path
    }`
  );
  return (
    <div className="cursor-pointer sm:p-3 hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          } `}
          width={500}
          height={300}
          className="sm:rounded-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/loading.svg"
          alt="Image Not Available"
          style={{
            maxWidth: "100%",
            maxHeight: "auto",
          }}
        />

        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="truncate text-lg font-bold py-2">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-sm">
            {result.release_date || result.first_air_date}
            <BiLike className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
