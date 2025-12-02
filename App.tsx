import React, { useState, useRef } from 'react';
import DragDrop from './components/DragDrop';
import SurvivorEditor from './components/SurvivorEditor';
import ArtifactEditor from './components/ArtifactEditor';
import AchievementEditor from './components/AchievementEditor';
import { ParsedProfile, Tab } from './types';
import { parseProfile, generateXML, downloadProfile } from './services/profileService';
import { CloudRain, Users, Trophy, AlertTriangle, Download, X, User as UserIcon, Hexagon, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [profile, setProfile] = useState<ParsedProfile | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Survivors);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const notificationTimer = useRef<number | null>(null);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    if (notificationTimer.current) {
        window.clearTimeout(notificationTimer.current);
    }
    setNotification({ message, type });
    notificationTimer.current = window.setTimeout(() => {
        setNotification(null);
        notificationTimer.current = null;
    }, 4000);
  };

  const handleFileLoad = (content: string, name: string) => {
    try {
      const parsed = parseProfile(content, name);
      setProfile(parsed);
      setActiveTab(Tab.Survivors);
      showNotification("Profile loaded successfully!", "success");
    } catch (e) {
      console.error(e);
      showNotification("Error parsing file. Please ensure it is a valid RoR2 XML profile.", "error");
    }
  };

  const handleSave = () => {
    if (!profile) return;
    const newXml = generateXML(profile.xmlContent, profile);
    downloadProfile(newXml, profile.fileName);
  };

  const handleReset = () => {
    setProfile(null);
    setShowExitConfirm(false);
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-black flex flex-col font-sans text-gray-200">
        <header className="py-6 border-b border-white/10 bg-ror-panel">
            <div className="container mx-auto px-6 flex items-center gap-3">
                <div className="bg-ror-accent/10 p-2 rounded-lg text-ror-accent">
                    <CloudRain size={24} />
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">RoR2 <span className="text-ror-accent">Save Editor</span></h1>
            </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-6">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Modify Your Save Profile
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto text-lg">
                    Unlock survivors, edit lunar coins, and manage artifacts for Risk of Rain 2.
                </p>
            </div>
            
            <div className="w-full max-w-2xl">
                <DragDrop onFileLoaded={handleFileLoad} />
            </div>

             <footer className="mt-20 text-gray-600 text-sm">
                Runs right in your browser. We don’t touch your data, we swear.
            </footer>
        </main>
        
        {/* Notification Toast for Load Error */}
        {notification && (
            <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
                <div className={`
                    flex items-center gap-4 px-5 py-4 rounded-xl border shadow-2xl backdrop-blur-md min-w-[320px]
                    ${notification.type === 'success' 
                        ? 'bg-ror-panel/95 border-ror-green/30 shadow-ror-green/10' 
                        : 'bg-ror-panel/95 border-red-500/30 shadow-red-500/10'}
                `}>
                    <div className={`
                        p-2 rounded-full flex-shrink-0
                        ${notification.type === 'success' ? 'bg-ror-green/10 text-ror-green' : 'bg-red-500/10 text-red-500'}
                    `}>
                        {notification.type === 'success' ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
                    </div>
                    <div className="flex-1">
                        <h4 className={`font-bold text-sm ${notification.type === 'success' ? 'text-ror-green' : 'text-red-400'}`}>
                            {notification.type === 'success' ? 'Operation Successful' : 'Error'}
                        </h4>
                        <p className="text-sm text-gray-300 leading-tight mt-0.5">{notification.message}</p>
                    </div>
                    <button 
                        onClick={() => setNotification(null)}
                        className="text-gray-500 hover:text-white transition-colors p-1"
                    >
                        <X size={18} />
                    </button>
                </div>
            </div>
        )}
      </div>
    );
  }

  return (
    <div className="h-screen bg-black text-gray-200 flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-ror-panel border-r border-white/10 flex-shrink-0 flex flex-col z-20">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
           <CloudRain className="text-ror-accent" size={24} />
           <span className="font-bold text-lg text-white">Save Editor</span>
        </div>
        
        <nav className="flex-1 p-3 space-y-1 overflow-hidden">
            {[
                { id: Tab.Survivors, icon: Users, label: 'Survivors' },
                { id: Tab.Artifacts, icon: Hexagon, label: 'Artifacts' },
                { id: Tab.Achievements, icon: Trophy, label: 'Achievements' },
            ].map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                        ${activeTab === item.id 
                            ? 'bg-ror-accent text-black font-bold' 
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                    `}
                >
                    <item.icon size={20} />
                    <span className="text-sm font-medium">{item.label}</span>
                </button>
            ))}
        </nav>

        <div className="p-4 border-t border-white/10 bg-black/20 mt-auto">
             <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-gray-800 rounded-full">
                    <UserIcon size={16} className="text-gray-400" />
                 </div>
                 <div className="overflow-hidden">
                     <div className="text-sm font-bold text-white truncate" title={profile.displayName}>{profile.displayName}</div>
                     <div className="text-xs truncate text-gray-500" title={profile.fileName}>{profile.fileName}</div>
                 </div>
             </div>
             
             <div className="flex gap-2">
                 <button 
                    onClick={() => setShowExitConfirm(true)}
                    className="flex-1 flex items-center justify-center p-2 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                    title="Close File"
                 >
                     <X size={18} />
                 </button>
                 <button 
                    onClick={handleSave}
                    className="flex-[3] flex items-center justify-center gap-2 p-2 bg-ror-blue text-black font-bold hover:bg-blue-300 rounded-lg transition-all"
                 >
                     <Download size={18} /> Save
                 </button>
             </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative bg-[#121212] p-2 md:p-0">
        <div className="relative p-6 md:p-10 max-w-6xl mx-auto min-h-full">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-1">{activeTab}</h1>
                <p className="text-gray-500 text-sm">
                    {activeTab === Tab.Survivors && "Manage survivors, skins, and currency"}
                    {activeTab === Tab.Artifacts && "Toggle game modifiers"}
                    {activeTab === Tab.Achievements && "Search and unlock specific achievements"}
                </p>
            </header>

            <div>
                {activeTab === Tab.Survivors && (
                    <SurvivorEditor 
                      profile={profile} 
                      setProfile={setProfile} 
                      onShowNotification={(msg) => showNotification(msg, 'success')}
                    />
                )}
                {activeTab === Tab.Artifacts && (
                    <ArtifactEditor profile={profile} setProfile={setProfile} />
                )}
                {activeTab === Tab.Achievements && (
                    <AchievementEditor profile={profile} setProfile={setProfile} />
                )}
            </div>
        </div>
      </main>

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-ror-panel border border-white/10 p-6 rounded-2xl max-w-md w-full shadow-2xl">
                <div className="flex items-center gap-3 text-red-400 mb-4">
                    <div className="p-2 bg-red-400/10 rounded-full">
                        <AlertTriangle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">Unsaved Changes</h3>
                </div>
                <p className="text-gray-300 mb-8">
                    Are you sure you want to close this file? Any unsaved changes will be lost.
                </p>
                <div className="flex gap-3 justify-end">
                    <button 
                        onClick={() => setShowExitConfirm(false)}
                        className="px-5 py-2.5 text-gray-300 hover:bg-white/5 rounded-lg font-medium transition-colors"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleReset}
                        className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-red-500/20"
                    >
                        Confirm Exit
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
            <div className={`
                flex items-center gap-4 px-5 py-4 rounded-xl border shadow-2xl backdrop-blur-md min-w-[320px]
                ${notification.type === 'success' 
                    ? 'bg-ror-panel/95 border-ror-green/30 shadow-ror-green/10' 
                    : 'bg-ror-panel/95 border-red-500/30 shadow-red-500/10'}
            `}>
                <div className={`
                    p-2 rounded-full flex-shrink-0
                    ${notification.type === 'success' ? 'bg-ror-green/10 text-ror-green' : 'bg-red-500/10 text-red-500'}
                `}>
                    {notification.type === 'success' ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
                </div>
                <div className="flex-1">
                    <h4 className={`font-bold text-sm ${notification.type === 'success' ? 'text-ror-green' : 'text-red-400'}`}>
                        {notification.type === 'success' ? 'Operation Successful' : 'Error'}
                    </h4>
                    <p className="text-sm text-gray-300 leading-tight mt-0.5">{notification.message}</p>
                </div>
                <button 
                    onClick={() => setNotification(null)}
                    className="text-gray-500 hover:text-white transition-colors p-1"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default App;