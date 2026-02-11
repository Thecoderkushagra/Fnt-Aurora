import { useState } from "react";
import MyVideos from "../components/MyVideos";
import UploadMovie from "../components/UploadMovie";
import UploadSeries from "../components/UploadSeries";
import Overview from "../components/ProfOverview";
import Security from "../components/ProfSecurity";

const Publihser = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("my-videos");

    return (
        <div className="min-h-screen text-gray-100 p-6 flex gap-6">
            <aside className="w-64 bg-[#212529] rounded-lg p-4 flex-shrink-0 h-fit sticky top-6">
                <nav className="space-y-2">
                    <button onClick={() => setActiveTab("my-videos")} className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        My Videos
                    </button>
                    <button onClick={() => setActiveTab("upload-movie")} className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        Upload Movie
                    </button>
                    <button onClick={() => setActiveTab("upload-series")} className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        Upload Series
                    </button>
                    <button onClick={() => setProfileOpen(!profileOpen)} className="flex gap-2 w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-white transition-colors">
                        My Profile
                    </button>
                    {profileOpen &&
                        <div>
                            <button onClick={() => setActiveTab("overview")} className="w-full text-left px-7 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                                Overview
                            </button>
                            <button onClick={() => setActiveTab("security")} className="w-full text-left px-7 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                                Change Password
                            </button>
                        </div>}
                </nav>
            </aside>

            <main className="bg-[#212529] rounded-lg p-8 flex-grow ">
                {activeTab === "my-videos" && <MyVideos />}
                {activeTab === "upload-movie" && <UploadMovie />}
                {activeTab === "upload-series" && <UploadSeries />}

                {activeTab === "overview" && <Overview />}
                {activeTab === "security" && <Security />}

            </main>
        </div>
    );
}
export default Publihser;