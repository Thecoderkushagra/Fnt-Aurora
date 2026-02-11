import { Eye, Play, ThumbsUp } from "lucide-react";
import { dummyData } from "../assets/data";

const formatNumber = (n) => {
  if (!n && n !== 0) return "0";
  const num = Number(String(n).replace(/,/g, "")) || 0;
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return String(num);
};

const MyVideos = () => {
  const movies = dummyData.trending || [];
  const series = dummyData.anime || [];

  const totalVideos = movies.length + series.length;
  const totalViews = [...movies, ...series].reduce((sum, video) => {
    const v = Number(String(video.views || 0).replace(/,/g, "")) || 0;
    return sum + v;
  }, 0);
  const totalLikes = [...movies, ...series].reduce((sum, video) => sum + (Number(video.rating) || 0), 0);

  const fallbackThumb = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><rect width='100%' height='100%' fill='%23212829'/><text x='50%' y='50%' fill='%23ffffff' font-size='24' font-family='Arial' text-anchor='middle' alignment-baseline='middle'>No Image</text></svg>";

  return (
    <div className="my-videos space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">My Videos</h2>
          <p className="text-sm text-gray-300 mt-2">A quick look at your uploads and stats</p>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-[#1f2937] to-[#111827] p-4 rounded-lg shadow-sm">
          <div className="flex text-sm text-gray-300 gap-2"> <Play size={16}/> Total Videos</div>
          <div className="text-3xl font-bold mt-2">{totalVideos}</div>
        </div>
        <div className="bg-gradient-to-r from-[#1f2937] to-[#111827] p-4 rounded-lg shadow-sm">
          <div className=" flex text-sm text-gray-300 gap-2"><Eye size={17}/> Total Views</div>
          <div className="text-3xl font-bold mt-2">{formatNumber(totalViews)}</div>
        </div>
        <div className="bg-gradient-to-r from-[#1f2937] to-[#111827] p-4 rounded-lg shadow-sm">
          <div className=" flex text-sm text-gray-300 gap-2"><ThumbsUp size={16}/> Total Likes</div>
          <div className="text-3xl font-bold mt-2">{formatNumber(totalLikes)}</div>
        </div>
      </div>

      {/* Movies */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Movies</h3>
        {movies.length === 0 ? (
          <div className="text-gray-400">No movies uploaded yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <article key={movie.id} className="bg-[#0f1720] rounded-lg overflow-hidden hover:bg-[#212529] transition-transform shadow">
                <div className="relative">
                  <img
                    src={movie.thumbnail || fallbackThumb}
                    alt={movie.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute left-2 top-2 bg-black/50 text-xs px-2 py-1 rounded text-gray-200">{movie.year || "--"}</div>
                </div>
                <div className="p-3">
                  <h4 className="font-medium truncate">{movie.title}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(movie.genre || []).slice(0, 3).map((g, i) => (
                      <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-200">{g}</span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-300">
                    <span>{formatNumber(movie.views)} views</span>
                    <span>{movie.rating ?? "-"}★</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Series */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Series</h3>
        {series.length === 0 ? (
          <div className="text-gray-400">No series uploaded yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {series.map((anime) => (
              <article key={anime.id} className="bg-[#0f1720] rounded-lg overflow-hidden hover:bg-[#212529] transition-transform shadow">
                <div className="relative">
                  <img
                    src={anime.thumbnail || fallbackThumb}
                    alt={anime.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute left-2 top-2 bg-black/50 text-xs px-2 py-1 rounded text-gray-200">{anime.year || "--"}</div>
                </div>
                <div className="p-3">
                  <h4 className="font-medium truncate">{anime.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{anime.studio || "Unknown studio"}</p>
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-300">
                    <span>{anime.episodes ?? "-"} eps</span>
                    <span>{anime.rating ?? "-"}★</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyVideos;
