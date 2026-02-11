import { useState } from "react";

const UploadMovie = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        videoFile: null,
        thumbnail: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add API call here
        setFormData({
            title: "",
            description: "",
            videoFile: null,
            thumbnail: null
        });
    };

    return (
        <div className="bg-[#212529] rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Upload Movie</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter movie title"
                        className="w-full bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter movie description"
                        rows="4"
                        className="w-full bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-300 font-medium">Video File *</label>
                    <div className="mt-2 flex items-center gap-3">
                        <label className="cursor-pointer bg-gray-900/60 px-4 py-2 rounded-md text-sm text-gray-200 hover:bg-gray-800">
                            Choose File
                            <input
                                type="file"
                                name="videoFile"
                                onChange={handleFileChange}
                                required
                                accept="video/*"
                                className="hidden"
                            />
                        </label>
                        <div className="text-sm text-gray-300">{formData.videoFile ? formData.videoFile.name : 'No file selected'}</div>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                        Thumbnail
                    </label>
                    <input
                        type="file"
                        name="thumbnail"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="w-full bg-gray-700 text-gray-300 px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                        required
                    />
                    {formData.thumbnail && (
                        <p className="text-gray-400 text-sm mt-1">{formData.thumbnail.name}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                    Upload Movie
                </button>
            </form>
        </div>
    );
};

export default UploadMovie;
