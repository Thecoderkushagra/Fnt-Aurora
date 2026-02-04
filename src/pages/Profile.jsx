import { useState } from 'react';
import { Camera, Save, X, User, Mail, Phone, Calendar, MapPin, Globe, FileText, Activity, Clock } from 'lucide-react';

const Profile = () => {
    const initialProfile = {
        fullName: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "+1 (555) 123-4567",
        dob: "1990-05-15",
        address: "123 Main St",
        city: "Springfield",
        country: "USA",
        bio: "Frontend engineer with a love for clean UI.",
        memberSince: "2021-04-12",
        accountType: "Premium",
        lastLogin: "2026-01-28 09:42",
        activityCount: 128,
        avatar: null,
    };

    const [profile, setProfile] = useState(initialProfile);
    const [editedProfile, setEditedProfile] = useState(initialProfile);
    const [isEditing, setIsEditing] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [errors, setErrors] = useState({});

    const MAX_BIO_LENGTH = 500;

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setErrors({ ...errors, avatar: "File size must be less than 5MB" });
                return;
            }
            if (!file.type.startsWith('image/')) {
                setErrors({ ...errors, avatar: "Please upload an image file" });
                return;
            }
            
            setEditedProfile({ ...editedProfile, avatar: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);
            };
            reader.readAsDataURL(file);
            setErrors({ ...errors, avatar: null });
        }
    };

    const handleInputChange = (field, value) => {
        setEditedProfile({ ...editedProfile, [field]: value });
        
        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors({ ...errors, [field]: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!editedProfile.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(editedProfile.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        const phoneRegex = /^\+?[\d\s\-()]+$/;
        if (editedProfile.phone && !phoneRegex.test(editedProfile.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }
        
        if (editedProfile.bio.length > MAX_BIO_LENGTH) {
            newErrors.bio = `Bio must be ${MAX_BIO_LENGTH} characters or less`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            setProfile(editedProfile);
            setIsEditing(false);
            // Here you would typically make an API call to save the profile
            console.log("Profile saved:", editedProfile);
        }
    };

    const handleCancel = () => {
        setEditedProfile(profile);
        setAvatarPreview(null);
        setErrors({});
        setIsEditing(false);
    };

    const getAccountTypeBadgeColor = (type) => {
        switch(type) {
            case 'Premium': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
            case 'Admin': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
            default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const currentProfile = isEditing ? editedProfile : profile;

    return (
        <div className="min-h-screen text-gray-100 p-6 flex gap-6">
            <aside className="w-64 bg-[#212529] rounded-lg p-4 flex-shrink-0 h-fit sticky top-6">
                <nav className="space-y-2">
                    <button className="w-full text-left px-3 py-2 rounded bg-gray-700 text-white font-medium">
                        Overview
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        Settings
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        Security
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 text-gray-300 transition-colors">
                        Billing
                    </button>
                </nav>
            </aside>

            <main className="bg-[#212529] rounded-lg p-8 flex-grow max-w-4xl">
                {/* Profile Overview Section */}
                <div className="mb-8 pb-8 border-b border-gray-700">
                    <div className="flex items-start gap-8">
                        {/* Avatar Section */}
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                                {avatarPreview || profile.avatar ? (
                                    <img 
                                        src={avatarPreview || URL.createObjectURL(profile.avatar)} 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <User size={48} className="text-white" />
                                )}
                            </div>
                            
                            {isEditing && (
                                <label className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                    <Camera size={24} className="text-white" />
                                    <input 
                                        type="file" 
                                        accept="image/*" 
                                        onChange={handleAvatarChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                            {errors.avatar && (
                                <p className="text-red-400 text-xs mt-2 absolute whitespace-nowrap">{errors.avatar}</p>
                            )}
                        </div>

                        {/* Profile Info */}
                        <div className="flex-grow">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">{currentProfile.fullName}</h1>
                                    <p className="text-gray-400 flex items-center gap-2 mb-2">
                                        <Mail size={16} />
                                        {currentProfile.email}
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getAccountTypeBadgeColor(currentProfile.accountType)}`}>
                                            {currentProfile.accountType}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            Member since {formatDate(currentProfile.memberSince)}
                                        </span>
                                    </div>
                                </div>
                                
                                {!isEditing && (
                                    <button 
                                        onClick={() => setIsEditing(true)}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
                                    >
                                        Edit Profile
                                    </button>
                                )}
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                                        <Clock size={16} />
                                        <span className="text-sm">Last Login</span>
                                    </div>
                                    <p className="text-lg font-semibold">{currentProfile.lastLogin}</p>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                                        <Activity size={16} />
                                        <span className="text-sm">Activity Count</span>
                                    </div>
                                    <p className="text-lg font-semibold">{currentProfile.activityCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Information Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                    
                    <div className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                <User size={16} />
                                Full Name
                            </label>
                            <input 
                                type="text"
                                value={currentProfile.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                    isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                } ${errors.fullName ? 'border-red-500' : ''}`}
                            />
                            {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                <Mail size={16} />
                                Email Address
                            </label>
                            <input 
                                type="email"
                                value={currentProfile.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                    isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                } ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                <Phone size={16} />
                                Phone Number
                            </label>
                            <input 
                                type="tel"
                                value={currentProfile.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                    isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                } ${errors.phone ? 'border-red-500' : ''}`}
                            />
                            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                <Calendar size={16} />
                                Date of Birth
                            </label>
                            <input 
                                type="date"
                                value={currentProfile.dob}
                                onChange={(e) => handleInputChange('dob', e.target.value)}
                                disabled={!isEditing}
                                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                    isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                }`}
                            />
                        </div>

                        {/* Location Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Address */}
                            <div className="md:col-span-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                    <MapPin size={16} />
                                    Address
                                </label>
                                <input 
                                    type="text"
                                    value={currentProfile.address}
                                    onChange={(e) => handleInputChange('address', e.target.value)}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                        isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                    }`}
                                />
                            </div>

                            {/* City */}
                            <div>
                                <label className="text-sm font-medium text-gray-300 mb-2 block">
                                    City
                                </label>
                                <input 
                                    type="text"
                                    value={currentProfile.city}
                                    onChange={(e) => handleInputChange('city', e.target.value)}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                        isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                    }`}
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                    <Globe size={16} />
                                    Country
                                </label>
                                <input 
                                    type="text"
                                    value={currentProfile.country}
                                    onChange={(e) => handleInputChange('country', e.target.value)}
                                    disabled={!isEditing}
                                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                                        isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                    }`}
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                                <FileText size={16} />
                                Bio / Description
                            </label>
                            <textarea 
                                value={currentProfile.bio}
                                onChange={(e) => handleInputChange('bio', e.target.value)}
                                disabled={!isEditing}
                                rows={4}
                                maxLength={MAX_BIO_LENGTH}
                                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                                    isEditing ? 'border-gray-600' : 'border-transparent cursor-not-allowed opacity-70'
                                } ${errors.bio ? 'border-red-500' : ''}`}
                            />
                            <div className="flex justify-between items-center mt-1">
                                {errors.bio && <p className="text-red-400 text-sm">{errors.bio}</p>}
                                <p className={`text-sm ml-auto ${
                                    currentProfile.bio.length > MAX_BIO_LENGTH * 0.9 
                                        ? 'text-yellow-400' 
                                        : 'text-gray-400'
                                }`}>
                                    {currentProfile.bio.length} / {MAX_BIO_LENGTH}
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        {isEditing && (
                            <div className="flex gap-3 pt-4">
                                <button 
                                    onClick={handleSave}
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
                                >
                                    <Save size={18} />
                                    Save Changes
                                </button>
                                <button 
                                    onClick={handleCancel}
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-medium"
                                >
                                    <X size={18} />
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Profile;