const Settings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-100">Settings</h1>

            <div className="bg-[#2a2d31] rounded-lg p-6 border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-100 mb-4">Theme</h2>
                <div className="space-y-3">
                    <label className="flex items-center gap-3">
                        <input 
                            type="radio"  
                            name="theme" 
                            value="light" 
                            disabled 
                            className="cursor-not-allowed opacity-50"
                        />
                        <span className="text-gray-400">Light Mode</span>
                    </label>
                    <label className="flex items-center gap-3">
                        <input 
                            type="radio" 
                            name="theme" 
                            value="dark" 
                            disabled 
                            defaultChecked
                            className="cursor-not-allowed opacity-50"
                        />
                        <span className="text-gray-400">Dark Mode</span>
                    </label>
                    <label className="flex items-center gap-3">
                        <input 
                            type="radio" 
                            name="theme" 
                            value="dark" 
                            disabled 
                            defaultChecked
                            className="cursor-not-allowed opacity-50"
                        />
                        <span className="text-gray-400">Same as Browser</span>
                    </label>
                </div>
            </div>

            <div className="bg-[#2a2d31] rounded-lg p-6 border-gray-700 pb-6">
                <h2 className="text-xl font-semibold text-gray-100 mb-4">Privacy Policy</h2>
                <div className="space-y-3">
                    <label className="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            name="privacy" 
                            disabled 
                            defaultChecked
                            className="cursor-not-allowed opacity-50"
                        />
                        <span className="text-gray-400">I agree to the Privacy Policy</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Settings;
