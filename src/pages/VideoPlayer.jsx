import { myAssets } from '../assets/MyAssets';
import { useState } from 'react';

const VideoPlayer = () => {
    const [selectedVideo, setSelectedVideo] = useState(0);

    // Sample related videos data - replace with your actual data
    const relatedVideos = [
        {
            id: 1,
            title: "Related Video 1",
            thumbnail: myAssets.bgimg, // Replace with actual thumbnail
            duration: "15:30"
        },
        {
            id: 2,
            title: "Related Video 2",
            thumbnail: myAssets.bgimg,
            duration: "12:45"
        },
        {
            id: 3,
            title: "Related Video 3",
            thumbnail: myAssets.bgimg,
            duration: "20:15"
        },
        {
            id: 4,
            title: "Related Video 4",
            thumbnail: myAssets.bgimg,
            duration: "18:20"
        },
        {
            id: 5,
            title: "Related Video 5",
            thumbnail: myAssets.bgimg,
            duration: "18:20"
        },
        {
            id: 6,
            title: "Related Video 6",
            thumbnail: myAssets.bgimg,
            duration: "15:45"
        }
    ];

    return (
        <div className="min-h-screen bg-[#181a1b] px-4 sm:px-4 md:px-[60px] py-10">
            <div className='flex flex-col lg:flex-row gap-5'>
                {/* Main Video Section */}
                <div className="flex-1">
                    <div className="video-wrapper bg-black rounded-lg overflow-hidden">
                        <video 
                            className="w-full aspect-video" 
                            controls 
                            autoPlay 
                            muted
                        >
                            <source src={myAssets.thisVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>                
                    </div>
                </div>

                {/* Sidebar - Related Videos */}
                <aside className='w-full lg:w-[380px] bg-[#212529] rounded-lg overflow-hidden max-h-[565px]'>
                    <div className='bg-[#2c3034] px-4 py-3 border-b border-gray-700'>
                        <h2 className='text-white font-semibold text-lg'>Related Videos</h2>
                    </div>
                    <div className='overflow-y-auto max-h-[565px] custom-scrollbar'>
                        {relatedVideos.map((video, index) => (
                            <div 
                                key={video.id}
                                onClick={() => setSelectedVideo(index)}
                                className={`flex gap-3 p-3 cursor-pointer transition-colors duration-200 border-b border-gray-700 last:border-b-0
                                    ${selectedVideo === index ? 'bg-[#2c3034]' : 'hover:bg-[#2a2d31]'}`}
                            >
                                <div className='relative flex-shrink-0'>
                                    <div className='w-[160px] h-[90px] bg-gray-700 rounded overflow-hidden'>
                                        <img 
                                            src={video.thumbnail} 
                                            alt={video.title}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <span className='absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded'>
                                        {video.duration}
                                    </span>
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <h3 className='text-white text-sm font-medium line-clamp-2 mb-1'>
                                        {video.title}
                                    </h3>
                                    <p className='text-gray-400 text-xs'>Channel Name</p>
                                    <p className='text-gray-500 text-xs mt-1'>1.2M views • 2 days ago</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </aside>
            </div>

            {/* Video Details Section */}
            <div className='mt-5 bg-[#212529] rounded-lg p-5'>
                <h1 className='text-white text-2xl font-bold mb-3'>Epic Adventure: The Journey Begins</h1>
                <div className='flex flex-wrap items-center gap-4 mb-4'>
                    <p className='text-gray-400 text-sm'>
                        Genre: Action, Adventure | Duration: 2h 30m | Release Year: 2024
                    </p>
                    <div className='flex gap-2 ml-auto'>
                        <button className='bg-[#2c3034] hover:bg-[#3a3f44] text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'>
                            👍 Like
                        </button>
                        <button className='bg-[#2c3034] hover:bg-[#3a3f44] text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'>
                            💾 Save
                        </button>
                        <button className='bg-[#2c3034] hover:bg-[#3a3f44] text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium'>
                            ↗️ Share
                        </button>
                    </div>
                </div>
                <p className='text-gray-300 text-base leading-relaxed max-w-5xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #212529;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #4a5158;
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #5a6168;
                }
            `}</style>
        </div>
    );
};

export default VideoPlayer;