import { dummyData } from "../assets/data";

const MyList = () => {
    return (
        <div>
            <div className="px-4 sm:px-8 md:px-[60px] py-10">

                <h2 className="text-white text-xl sm:text-2xl font-bold mb-5">
                    My List
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
        </div>
    );
}
export default MyList;