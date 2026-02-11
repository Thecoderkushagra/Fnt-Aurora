import React, { useState } from "react";

const MasterCtl = ({
  onUpdatePassword,
  onCreateAdmin,
  onFetchAdmins,
  onDeleteAdmin,
}) => {
  const [masterId, setMasterId] = useState("");

  // Change password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // Create admin
  const [adminReq, setAdminReq] = useState({
    userName: "",
    password: "",
    fullName: "",
    email: "",
  });
  const [createMessage, setCreateMessage] = useState("");

  // Admin list
  const [admins, setAdmins] = useState([]);
  const [loadingAdmins, setLoadingAdmins] = useState(false);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setPwMessage("");
    if (!masterId || !newPassword) return setPwMessage("Provide master id and new password");
    if (newPassword !== confirmPassword) return setPwMessage("Passwords do not match");

    const payload = { Id: masterId, password: newPassword };
    if (onUpdatePassword) {
      try {
        const res = await onUpdatePassword(payload);
        setPwMessage(res?.message || "Password update request prepared");
      } catch (err) {
        setPwMessage(err?.message || "Error");
      }
    } else {
      console.log("update-master-password payload:", payload);
      setPwMessage("Prepared payload (see console)");
    }
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    setCreateMessage("");
    if (!masterId) return setCreateMessage("Provide master id in header field");
    if (!adminReq.userName || !adminReq.password) return setCreateMessage("userName and password required");

    const payload = { ...adminReq };
    if (onCreateAdmin) {
      try {
        const res = await onCreateAdmin({ Id: masterId, request: payload });
        setCreateMessage(res?.message || "Create admin request prepared");
        // optionally refresh list
      } catch (err) {
        setCreateMessage(err?.message || "Error");
      }
    } else {
      console.log("create-admin payload:", { Id: masterId, request: payload });
      setCreateMessage("Prepared payload (see console)");
    }
    setAdminReq({ userName: "", password: "", fullName: "", email: "" });
  };

  const handleFetchAdmins = async () => {
    setLoadingAdmins(true);
    try {
      if (onFetchAdmins) {
        const res = await onFetchAdmins();
        setAdmins(Array.isArray(res) ? res : []);
      } else {
        console.log("get-all-admin invoked (no handler)");
        setAdmins([]);
      }
    } catch (err) {
      console.error(err);
      setAdmins([]);
    }
    setLoadingAdmins(false);
  };

  const handleDeleteAdmin = async (id) => {
    if (!masterId) return alert("Provide master id in header field");
    if (!confirm("Delete this admin?")) return;
    if (onDeleteAdmin) {
      try {
        await onDeleteAdmin({ Id: masterId, id });
        setAdmins((s) => s.filter((a) => a.id !== id && a._id !== id));
      } catch (err) {
        alert(err?.message || "Error deleting");
      }
    } else {
      console.log("delete-this-admin payload:", { Id: masterId, id });
      setAdmins((s) => s.filter((a) => a.id !== id && a._id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#212529] p-6 rounded-lg">
        <label className="block mb-2 text-sm text-gray-300">Master Id (X-User-Id header)</label>
        <input value={masterId} onChange={(e) => setMasterId(e.target.value)} className="w-full p-2 rounded bg-gray-800 text-gray-100" placeholder="master id" />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleUpdatePassword} className="bg-[#212529] p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Change Master Password</h3>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full p-2 mb-3 rounded bg-gray-800 text-gray-100" placeholder="New password" />
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 mb-3 rounded bg-gray-800 text-gray-100" placeholder="Confirm password" />
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-green-600 rounded">Update</button>
            <button type="button" onClick={() => { setNewPassword(""); setConfirmPassword(""); setPwMessage(""); }} className="px-4 py-2 bg-gray-600 rounded">Clear</button>
          </div>
          {pwMessage && <p className="mt-3 text-sm text-gray-300">{pwMessage}</p>}
        </form>

        <form onSubmit={handleCreateAdmin} className="bg-[#212529] p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Create Admin</h3>
          <input value={adminReq.userName} onChange={(e) => setAdminReq({ ...adminReq, userName: e.target.value })} className="w-full p-2 mb-2 rounded bg-gray-800 text-gray-100" placeholder="userName" />
          <input value={adminReq.password} onChange={(e) => setAdminReq({ ...adminReq, password: e.target.value })} className="w-full p-2 mb-2 rounded bg-gray-800 text-gray-100" placeholder="password" />
          <input value={adminReq.fullName} onChange={(e) => setAdminReq({ ...adminReq, fullName: e.target.value })} className="w-full p-2 mb-2 rounded bg-gray-800 text-gray-100" placeholder="fullName" />
          <input value={adminReq.email} onChange={(e) => setAdminReq({ ...adminReq, email: e.target.value })} className="w-full p-2 mb-3 rounded bg-gray-800 text-gray-100" placeholder="email" />
          <div className="flex gap-2">
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded">Create</button>
            <button type="button" onClick={() => setAdminReq({ userName: "", password: "", fullName: "", email: "" })} className="px-4 py-2 bg-gray-600 rounded">Clear</button>
          </div>
          {createMessage && <p className="mt-3 text-sm text-gray-300">{createMessage}</p>}
        </form>
      </section>

      <section className="bg-[#212529] p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Admins</h3>
          <div className="flex gap-2">
            <button onClick={handleFetchAdmins} className="px-3 py-1 bg-indigo-600 rounded">{loadingAdmins ? "Loading..." : "Refresh"}</button>
            <button onClick={() => { setAdmins([]); }} className="px-3 py-1 bg-gray-600 rounded">Clear</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-300">
                <th className="py-2">ID</th>
                <th className="py-2">UserName</th>
                <th className="py-2">Email</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.length === 0 && (
                <tr><td colSpan={4} className="py-4 text-gray-400">No admins loaded</td></tr>
              )}
              {admins.map((a) => (
                <tr key={a.id || a._id} className="border-t border-gray-700">
                  <td className="py-2 text-gray-200">{a.id || a._id}</td>
                  <td className="py-2 text-gray-200">{a.userName || a.user_name || a.user}</td>
                  <td className="py-2 text-gray-200">{a.email || "-"}</td>
                  <td className="py-2">
                    <button onClick={() => handleDeleteAdmin(a.id || a._id)} className="px-2 py-1 bg-red-600 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MasterCtl;
