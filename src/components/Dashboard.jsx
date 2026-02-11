import React, { useMemo, useState } from "react";

const sampleVideos = [
  { id: 1, title: "The Silent Sea", publisher: "Ocean Studios", views: 12456, status: "published", uploaded: "2026-01-12" },
  { id: 2, title: "Midnight Runner", publisher: "Skyline Films", views: 3402, status: "pending", uploaded: "2026-02-01" },
  { id: 3, title: "Space Echoes", publisher: "Nova Pictures", views: 89234, status: "published", uploaded: "2026-01-03" },
  { id: 4, title: "Hidden River", publisher: "Aurora Media", views: 212, status: "rejected", uploaded: "2026-02-07" },
  { id: 5, title: "Lost in Neon", publisher: "Pixel House", views: 980, status: "pending", uploaded: "2026-02-08" },
];

export default function Dashboard() {
  const [videos, setVideos] = useState(sampleVideos);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const totals = useMemo(() => {
    const totalVideos = videos.length;
    const totalViews = videos.reduce((s, v) => s + v.views, 0);
    const pending = videos.filter(v => v.status === "pending").length;
    const published = videos.filter(v => v.status === "published").length;
    return { totalVideos, totalViews, pending, published };
  }, [videos]);

  function setStatus(id, status) {
    setVideos(prev => prev.map(v => v.id === id ? { ...v, status } : v));
  }

  const visible = videos.filter(v => {
    if (statusFilter !== "all" && v.status !== statusFilter) return false;
    if (!query) return true;
    return v.title.toLowerCase().includes(query.toLowerCase()) || v.publisher.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="min-h-[540px] text-gray-100">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
          <p className="text-sm text-gray-300">Overview of platform activity and content moderation</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#2d3748] px-3 py-2 rounded text-gray-200">Export CSV</button>
          <button className="bg-[#2563eb] px-3 py-2 rounded text-white">Create Report</button>
        </div>
      </header>

      <section className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-[#212529] p-4 rounded shadow">
          <div className="text-sm text-gray-300">Total Videos</div>
          <div className="text-2xl font-bold">{totals.totalVideos}</div>
        </div>
        <div className="bg-[#212529] p-4 rounded shadow">
          <div className="text-sm text-gray-300">Total Views</div>
          <div className="text-2xl font-bold">{totals.totalViews.toLocaleString()}</div>
        </div>
        <div className="bg-[#212529] p-4 rounded shadow">
          <div className="text-sm text-gray-300">Published</div>
          <div className="text-2xl font-bold">{totals.published}</div>
        </div>
        <div className="bg-[#212529] p-4 rounded shadow">
          <div className="text-sm text-gray-300">Pending Review</div>
          <div className="text-2xl font-bold text-amber-400">{totals.pending}</div>
        </div>
      </section>

      <section className="bg-[#212529] rounded p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search title or publisher" className="px-3 py-2 rounded bg-[#121416] text-gray-200" />
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="px-3 py-2 rounded bg-[#121416] text-gray-200">
              <option value="all">All</option>
              <option value="published">Published</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="text-sm text-gray-300">Showing {visible.length} of {videos.length}</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left text-gray-100">
            <thead>
              <tr className="text-sm text-gray-300 border-b border-gray-700">
                <th className="py-2 px-3">Title</th>
                <th className="py-2 px-3">Publisher</th>
                <th className="py-2 px-3">Views</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Uploaded</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map(v => (
                <tr key={v.id} className="border-b border-gray-800 hover:bg-[#181a1c]">
                  <td className="py-3 px-3">{v.title}</td>
                  <td className="py-3 px-3 text-gray-300">{v.publisher}</td>
                  <td className="py-3 px-3">{v.views.toLocaleString()}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-1 rounded text-xs ${v.status === 'published' ? 'bg-green-700 text-green-100' : v.status === 'pending' ? 'bg-amber-700 text-amber-100' : 'bg-red-700 text-red-100'}`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-300">{v.uploaded}</td>
                  <td className="py-3 px-3 flex gap-2">
                    {v.status !== 'published' && <button onClick={() => setStatus(v.id, 'published')} className="bg-green-600 px-2 py-1 rounded text-sm">Approve</button>}
                    {v.status !== 'rejected' && <button onClick={() => setStatus(v.id, 'rejected')} className="bg-red-600 px-2 py-1 rounded text-sm">Reject</button>}
                    <button onClick={() => setVideos(prev => prev.filter(x => x.id !== v.id))} className="bg-gray-700 px-2 py-1 rounded text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-6 text-center text-gray-400">No videos found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
