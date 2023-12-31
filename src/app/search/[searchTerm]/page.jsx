import Results from "@/components/Results";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}`
  );

  if (!res.ok) {
    throw new Error("Error Fetching Data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No Result Found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
