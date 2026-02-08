import { useState } from "react";

const Security = () => {
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Handle password change logic here
        alert("Password changed successfully");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setShowPasswordForm(false);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Security Settings</h2>
            </div>

            <div className="bg-[#2a2d31] rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="text-lg font-semibold text-white">Change Password</h3>
                        <p className="text-gray-400 text-sm mt-1">Update your password to keep your account secure</p>
                    </div>
                    <button
                        onClick={() => setShowPasswordForm(!showPasswordForm)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
                    >
                        {showPasswordForm ? "Cancel" : "Change"}
                    </button>
                </div>

                {showPasswordForm && (
                    <form onSubmit={handleChangePassword} className="space-y-4 mt-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Current Password</label>
                            <input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                                className="w-full bg-[#1e2124] text-white px-4 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Enter current password"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="w-full bg-[#1e2124] text-white px-4 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Enter new password"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Confirm Password</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full bg-[#1e2124] text-white px-4 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Confirm new password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded transition-colors"
                        >
                            Update Password
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Security;
