import { Play, Plus } from "lucide-react";
import { myAssets } from "../assets/MyAssets";
import { dummyData } from "../assets/data";
const Home = () => {
    return (
        <>
            {/* cover image section */}
            <div 
                className="h-[65vh] md:h-[65vh] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${myAssets.coverimg})` }}
            >
                <div className="h-full w-full bg-black/60 flex flex-col justify-end items-start text-white text-start px-4 sm:px-8 md:px-[60px]">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                        Demon Slayer
                    </h1>
                    <p className="max-w-[700px] text-sm sm:text-base mt-2">
                        Set in Taishō era Japan, the series follows Tanjiro Kamado, a teenage boy who joins the Demon Slayer Corps—an organization consisting of humans seeking to hunt down demons—after his family is slaughtered and his sister Nezuko is turned into a demon.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 mb-4 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 text-black bg-[#3295ffff] rounded font-semibold w-full sm:w-[130px] hover:bg-[#2380ea] transition">
                            <Play size={20} /> Play
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#8a8a8a13] border-2 border-white rounded font-semibold w-full sm:w-[150px] hover:bg-white/20 transition">
                            <Plus size={20} /> My List
                        </button>
                    </div>
                </div>
            </div>

            {/* explore section */}
            <div className="mt-[15px] px-4 sm:px-8 md:px-[60px] py-10">
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-5">
                    Trending Now
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyData.trending.map((item) => (
                        <div key={item.id} className="bg-[#212529] rounded overflow-hidden">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-60 object-cover" />
                            <div className="p-3">
                                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                                <p className="text-gray-400 text-xs">{item.duration} • {item.views}</p>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-yellow-400 text-xs">⭐ {item.rating}</span>
                                    <span className="text-gray-400 text-xs">{item.genre.join(", ")}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[15px] px-4 sm:px-8 md:px-[60px] py-10">
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-5">
                    Anime
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyData.anime.map((item) => (
                        <div key={item.id} className="bg-[#212529] rounded overflow-hidden">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-60 object-cover" />
                            <div className="p-3">
                                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                                <p className="text-gray-400 text-xs">{item.episodes} Episodes • {item.studio}</p>
                                <span className="text-yellow-400 text-xs">⭐ {item.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[15px] px-4 sm:px-8 md:px-[60px] py-10">
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-5">
                    Popular on Aurora
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyData.popular.map((item) => (
                        <div key={item.id} className="bg-[#212529] rounded overflow-hidden">
                            <img src={item.thumbnail} alt={item.title} className="w-full h-60 object-cover" />
                            <div className="p-3">
                                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                                <p className="text-gray-400 text-xs">{item.duration} • {item.views}</p>
                                <span className="text-yellow-400 text-xs">⭐ {item.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Home;