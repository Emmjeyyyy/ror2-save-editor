import React, { useState, useRef } from 'react';
import DragDrop from './components/DragDrop';
import SurvivorEditor from './components/SurvivorEditor';
import LoadoutEditor from './components/LoadoutEditor';
import ArtifactEditor from './components/ArtifactEditor';
import AchievementEditor from './components/AchievementEditor';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification';
import Syringe from './components/Syringe';
import { ParsedProfile, Tab } from './types';
import { parseProfile, generateXML, downloadProfile } from './services/profileService';
import { AlertTriangle } from 'lucide-react';

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

  const renderContent = () => {
    if (!profile) return null;

    switch (activeTab) {
      case Tab.Survivors:
        return (
          <SurvivorEditor 
            profile={profile} 
            setProfile={setProfile} 
            onShowNotification={(msg) => showNotification(msg, 'success')}
          />
        );
      case Tab.Loadout:
        return <LoadoutEditor profile={profile} setProfile={setProfile} />;
      case Tab.Artifacts:
        return <ArtifactEditor profile={profile} setProfile={setProfile} />;
      case Tab.Achievements:
        return <AchievementEditor profile={profile} setProfile={setProfile} />;
      default:
        return null;
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-black flex flex-col font-sans text-gray-200">
        <header className="py-6 border-b border-white/10 bg-ror-panel">
            <div className="container mx-auto px-6 flex items-center gap-3">
                <div className="bg-ror-accent/10 p-2 rounded-lg text-ror-accent">
                    <Syringe size={24} />
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

             <footer className="mt-10 text-gray-600 text-sm flex flex-col items-center gap-2">
                <p>Runs right in your browser. We don’t touch your data, we swear.</p>
            </footer>
        </main>
        
        {notification && (
            <Notification 
                message={notification.message} 
                type={notification.type} 
                onClose={() => setNotification(null)} 
            />
        )}
      </div>
    );
  }

  return (
    <div className="h-screen bg-black text-gray-200 flex flex-col md:flex-row overflow-hidden font-sans">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        profile={profile}
        onSave={handleSave}
        onRequestExit={() => setShowExitConfirm(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative bg-[#121212] p-2 md:p-0">
        <div className="relative p-6 md:p-10 max-w-6xl mx-auto min-h-full">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-1">{activeTab}</h1>
                <p className="text-gray-500 text-sm">
                    {activeTab === Tab.Survivors && "Manage survivors and currency"}
                    {activeTab === Tab.Loadout && "Manage skills and skins per survivor"}
                    {activeTab === Tab.Artifacts && "Toggle game modifiers"}
                    {activeTab === Tab.Achievements && "Search and unlock specific achievements"}
                </p>
            </header>

            <div>
                {renderContent()}
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

      {notification && (
        <Notification 
            message={notification.message} 
            type={notification.type} 
            onClose={() => setNotification(null)} 
        />
      )}
    </div>
  );
};

export default App;