import { useState } from 'react';
import axios from 'axios';

const UploadSeries = () => {
  const [formMode, setFormMode] = useState('series'); // 'series' or 'episode'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Series form state
  const [seriesForm, setSeriesForm] = useState({
    seriesName: '',
    seriesDesc: '',
    genres: [],
    publisherName: '',
  });

  // Episode form state
  const [episodeForm, setEpisodeForm] = useState({
    seriesId: '',
    episodeNumber: '',
    videoFile: null,
    videoTitle: '',
    videoDescription: '',
  });

  const genreOptions = ['ACTION', 'DRAMA', 'COMEDY', 'HORROR', 'ROMANCE', 'THRILLER', 'DOCUMENTARY'];

  // Handle series form changes
  const handleSeriesChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'genres') {
      setSeriesForm(prev => ({
        ...prev,
        genres: checked
          ? [...prev.genres, value]
          : prev.genres.filter(g => g !== value)
      }));
    } else {
      setSeriesForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle episode form changes
  const handleEpisodeChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setEpisodeForm(prev => ({
        ...prev,
        videoFile: files[0]
      }));
    } else {
      setEpisodeForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Submit series
  const submitSeries = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        seriesName: seriesForm.seriesName,
        seriesDesc: seriesForm.seriesDesc,
        genres: seriesForm.genres,
        publisherName: seriesForm.publisherName,
        totalEpisodes: 1
      };

      const response = await axios.post('/api/series/create', payload);
      setSuccess(`Series created successfully! ID: ${response.data.id}`);
      setSeriesForm({ seriesName: '', seriesDesc: '', genres: [], publisherName: '' });
      setFormMode('episode');
      setEpisodeForm(prev => ({ ...prev, seriesId: response.data.id }));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create series');
    } finally {
      setLoading(false);
    }
  };

  // Submit episode
  const submitEpisode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('seriesId', episodeForm.seriesId);
      formData.append('episodeNumber', episodeForm.episodeNumber);
      formData.append('videoFile', episodeForm.videoFile);
      formData.append('videoTitle', episodeForm.videoTitle);
      formData.append('videoDescription', episodeForm.videoDescription);

      const response = await axios.post('/api/episodes/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setSuccess(`Episode ${episodeForm.episodeNumber} uploaded successfully!`);
      setEpisodeForm({ seriesId: '', episodeNumber: '', videoFile: null, videoTitle: '', videoDescription: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload episode');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-white">Publisher Studio</h1>
            <p className="text-sm text-gray-400">Create series and upload episodes with ease</p>
          </div>

          <div className="bg-gray-800/60 px-3 py-2 rounded-md">
            <nav className="flex gap-1">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${formMode === 'series' ? 'bg-indigo-600 text-white shadow' : 'text-gray-300 hover:bg-gray-700/50'}`}
                onClick={() => setFormMode('series')}
                disabled={loading}
              >
                Create Series
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${formMode === 'episode' ? 'bg-indigo-600 text-white shadow' : 'text-gray-300 hover:bg-gray-700/50'}`}
                onClick={() => setFormMode('episode')}
                disabled={loading}
              >
                Add Episode
              </button>
            </nav>
          </div>
        </div>

        {error && <div className="mb-4 text-red-300 bg-red-900/30 p-3 rounded">{error}</div>}
        {success && <div className="mb-4 text-green-200 bg-emerald-900/20 p-3 rounded">{success}</div>}

        {formMode === 'series' ? (
          <form onSubmit={submitSeries} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-300 font-medium">Series Name *</label>
                <input
                  type="text"
                  name="seriesName"
                  value={seriesForm.seriesName}
                  onChange={handleSeriesChange}
                  required
                  placeholder="Enter series name"
                  className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs text-gray-300 font-medium">Publisher Name *</label>
                <input
                  type="text"
                  name="publisherName"
                  value={seriesForm.publisherName}
                  onChange={handleSeriesChange}
                  required
                  placeholder="Enter publisher name"
                  className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-300 font-medium">Series Description *</label>
              <textarea
                name="seriesDesc"
                value={seriesForm.seriesDesc}
                onChange={handleSeriesChange}
                required
                placeholder="Enter series description"
                rows="4"
                className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs text-gray-300 font-medium">Genres</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {genreOptions.map(genre => (
                  <label key={genre} className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm cursor-pointer ${seriesForm.genres.includes(genre) ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
                    <input
                      type="checkbox"
                      id={genre}
                      name="genres"
                      value={genre}
                      checked={seriesForm.genres.includes(genre)}
                      onChange={handleSeriesChange}
                      className="hidden"
                    />
                    <span>{genre}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button type="submit" disabled={loading} className="bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2 rounded-md text-white font-semibold shadow hover:opacity-95">
                {loading ? 'Creating...' : 'Create Series'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={submitEpisode} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-300 font-medium">Series ID *</label>
                <input
                  type="text"
                  name="seriesId"
                  value={episodeForm.seriesId}
                  onChange={handleEpisodeChange}
                  required
                  placeholder="Enter series ID (create series first if new)"
                  className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs text-gray-300 font-medium">Episode Number *</label>
                <input
                  type="number"
                  name="episodeNumber"
                  value={episodeForm.episodeNumber}
                  onChange={handleEpisodeChange}
                  required
                  min="1"
                  placeholder="Enter episode number"
                  className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-300 font-medium">Video File *</label>
              <div className="mt-2 flex items-center gap-3">
                <label className="cursor-pointer bg-gray-900/60 px-4 py-2 rounded-md text-sm text-gray-200 hover:bg-gray-800">
                  Choose File
                  <input
                    type="file"
                    name="videoFile"
                    onChange={handleEpisodeChange}
                    required
                    accept="video/*"
                    className="hidden"
                  />
                </label>
                <div className="text-sm text-gray-300">{episodeForm.videoFile ? episodeForm.videoFile.name : 'No file selected'}</div>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-300 font-medium">Video Title *</label>
              <input
                type="text"
                name="videoTitle"
                value={episodeForm.videoTitle}
                onChange={handleEpisodeChange}
                required
                placeholder="Enter video title"
                className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs text-gray-300 font-medium">Video Description</label>
              <textarea
                name="videoDescription"
                value={episodeForm.videoDescription}
                onChange={handleEpisodeChange}
                placeholder="Enter video description"
                rows="4"
                className="mt-2 w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-end">
              <button type="submit" disabled={loading} className="bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-2 rounded-md text-white font-semibold shadow hover:opacity-95">
                {loading ? 'Uploading...' : 'Upload Episode'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UploadSeries;
