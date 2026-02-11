import React, { useState } from "react";

const AdminCtl = () => {
  const [activeTab, setActiveTab] = useState("logs");

  // Forms state
  const [newAdminName, setNewAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [deleteAdminId, setDeleteAdminId] = useState("");

  const [pubForm, setPubForm] = useState({ userName: "", password: "", email: "" });
  const [pubList, setPubList] = useState([]);
  const [viewerList, setViewerList] = useState([]);
  const [logs, setLogs] = useState([]);

  // Placeholder handlers - to be wired to service layer later
  const handleLoadLogs = () => {
    // TODO: replace with service call
    setLogs([
      { id: "1", action: "Created publisher", time: "2026-02-01 10:00" },
      { id: "2", action: "Deleted viewer", time: "2026-02-02 14:30" },
    ]);
  };

  const handleUpdateAdminName = (e) => {
    e.preventDefault();
    console.log("update-admin-name", newAdminName);
  };

  const handleUpdateAdminPassword = (e) => {
    e.preventDefault();
    console.log("update-admin-password", adminPassword);
  };

  const handleDeleteAdmin = (e) => {
    e.preventDefault();
    if (!deleteAdminId) return;
    if (!confirm(`Delete admin with ID ${deleteAdminId}?`)) return;
    console.log("delete-admin", deleteAdminId);
  };

  const handleCreatePublisher = (e) => {
    e.preventDefault();
    console.log("create-publisher", pubForm);
  };

  const handleLoadPublishers = () => {
    // TODO: replace with service call
    setPubList([
      { id: "pub-1", userName: "publisher_one", email: "one@pub.com" },
      { id: "pub-2", userName: "publisher_two", email: "two@pub.com" },
    ]);
  };

  const handleDeletePublisher = (id) => {
    if (!confirm(`Delete publisher ${id}?`)) return;
    console.log("delete-publisher", id);
  };

  const handleLoadViewers = () => {
    // TODO: replace with service call
    setViewerList([
      { id: "v-1", userName: "viewer_one" },
      { id: "v-2", userName: "viewer_two" },
    ]);
  };

  const handleDeleteViewer = (id) => {
    if (!confirm(`Delete viewer ${id}?`)) return;
    console.log("delete-viewer", id);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-2">Admin Controller</h2>

      <div className="flex gap-4">
        <nav className="w-48 bg-[#212529] rounded p-3">
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${activeTab === "logs" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                onClick={() => setActiveTab("logs")}
              >
                Action Logs
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${activeTab === "admin" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                onClick={() => setActiveTab("admin")}
              >
                Admin Settings
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${activeTab === "pub" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                onClick={() => setActiveTab("pub")}
              >
                Publishers
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${activeTab === "viewer" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                onClick={() => setActiveTab("viewer")}
              >
                Viewers
              </button>
            </li>
          </ul>
        </nav>

        <section className="flex-1 bg-[#212529] rounded p-6">
          {activeTab === "logs" && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <button onClick={handleLoadLogs} className="px-3 py-2 bg-indigo-600 rounded">Load Logs</button>
                <span className="text-sm text-gray-300">Shows recent admin action logs</span>
              </div>

              <div className="overflow-auto max-h-64">
                {logs.length === 0 ? (
                  <div className="text-sm text-gray-400">No logs loaded.</div>
                ) : (
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="text-gray-300">
                        <th className="px-2 py-1">ID</th>
                        <th className="px-2 py-1">Action</th>
                        <th className="px-2 py-1">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {logs.map((l) => (
                        <tr key={l.id} className="border-t border-gray-700">
                          <td className="px-2 py-1 text-gray-200">{l.id}</td>
                          <td className="px-2 py-1 text-gray-200">{l.action}</td>
                          <td className="px-2 py-1 text-gray-200">{l.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {activeTab === "admin" && (
            <div className="space-y-6">
              <form onSubmit={handleUpdateAdminName} className="space-y-2">
                <label className="block text-sm text-gray-300">Update Admin Username</label>
                <div className="flex gap-2">
                  <input value={newAdminName} onChange={(e) => setNewAdminName(e.target.value)} placeholder="new username" className="flex-1 px-3 py-2 bg-[#121314] rounded" />
                  <button className="px-3 py-2 bg-green-600 rounded">Update</button>
                </div>
              </form>

              <form onSubmit={handleUpdateAdminPassword} className="space-y-2">
                <label className="block text-sm text-gray-300">Change Password</label>
                <div className="flex gap-2">
                  <input value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="new password" type="password" className="flex-1 px-3 py-2 bg-[#121314] rounded" />
                  <button className="px-3 py-2 bg-yellow-600 rounded">Change</button>
                </div>
              </form>

              <form onSubmit={handleDeleteAdmin} className="space-y-2">
                <label className="block text-sm text-gray-300">Delete Admin (ID)</label>
                <div className="flex gap-2">
                  <input value={deleteAdminId} onChange={(e) => setDeleteAdminId(e.target.value)} placeholder="admin id to delete" className="flex-1 px-3 py-2 bg-[#121314] rounded" />
                  <button className="px-3 py-2 bg-red-600 rounded">Delete</button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "pub" && (
            <div className="space-y-4">
              <form onSubmit={handleCreatePublisher} className="grid grid-cols-3 gap-2">
                <input className="px-3 py-2 bg-[#121314] rounded" value={pubForm.userName} onChange={(e) => setPubForm({ ...pubForm, userName: e.target.value })} placeholder="username" />
                <input className="px-3 py-2 bg-[#121314] rounded" type="password" value={pubForm.password} onChange={(e) => setPubForm({ ...pubForm, password: e.target.value })} placeholder="password" />
                <input className="px-3 py-2 bg-[#121314] rounded" value={pubForm.email} onChange={(e) => setPubForm({ ...pubForm, email: e.target.value })} placeholder="email" />
                <div className="col-span-3 flex gap-2">
                  <button className="px-3 py-2 bg-indigo-600 rounded">Create Publisher</button>
                  <button type="button" onClick={handleLoadPublishers} className="px-3 py-2 bg-gray-600 rounded">Load Publishers</button>
                </div>
              </form>

              <div className="overflow-auto max-h-56">
                {pubList.length === 0 ? (
                  <div className="text-sm text-gray-400">No publishers loaded.</div>
                ) : (
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="text-gray-300">
                        <th className="px-2 py-1">ID</th>
                        <th className="px-2 py-1">Username</th>
                        <th className="px-2 py-1">Email</th>
                        <th className="px-2 py-1">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pubList.map((p) => (
                        <tr key={p.id} className="border-t border-gray-700">
                          <td className="px-2 py-1 text-gray-200">{p.id}</td>
                          <td className="px-2 py-1 text-gray-200">{p.userName}</td>
                          <td className="px-2 py-1 text-gray-200">{p.email}</td>
                          <td className="px-2 py-1">
                            <button onClick={() => handleDeletePublisher(p.id)} className="px-2 py-1 bg-red-600 rounded text-sm">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {activeTab === "viewer" && (
            <div className="space-y-4">
              <div className="flex gap-2 mb-2">
                <button onClick={handleLoadViewers} className="px-3 py-2 bg-gray-600 rounded">Load Viewers</button>
                <span className="text-sm text-gray-300">Load all viewers</span>
              </div>

              <div className="overflow-auto max-h-56">
                {viewerList.length === 0 ? (
                  <div className="text-sm text-gray-400">No viewers loaded.</div>
                ) : (
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="text-gray-300">
                        <th className="px-2 py-1">ID</th>
                        <th className="px-2 py-1">Username</th>
                        <th className="px-2 py-1">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {viewerList.map((v) => (
                        <tr key={v.id} className="border-t border-gray-700">
                          <td className="px-2 py-1 text-gray-200">{v.id}</td>
                          <td className="px-2 py-1 text-gray-200">{v.userName}</td>
                          <td className="px-2 py-1">
                            <button onClick={() => handleDeleteViewer(v.id)} className="px-2 py-1 bg-red-600 rounded text-sm">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminCtl;
