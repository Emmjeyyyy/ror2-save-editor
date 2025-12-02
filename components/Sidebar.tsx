import React from 'react';
import { ParsedProfile, Tab } from '../types';
import { Users, Hexagon, Trophy, User as UserIcon, X, Download, Zap } from 'lucide-react';
import Syringe from './Syringe';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  profile: ParsedProfile;
  onSave: () => void;
  onRequestExit: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, profile, onSave, onRequestExit }) => {
  const tabs = [
    { id: Tab.Survivors, icon: Users, label: 'Survivors' },
    { id: Tab.Loadout, icon: Zap, label: 'Loadout' },
    { id: Tab.Artifacts, icon: Hexagon, label: 'Artifacts' },
    { id: Tab.Achievements, icon: Trophy, label: 'Achievements' },
  ];

  return (
    <aside className="w-full md:w-64 bg-ror-panel border-r border-white/10 flex-shrink-0 flex flex-col z-20">
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
         <div className="text-ror-accent">
            <Syringe size={24} />
         </div>
         <span className="font-bold text-lg text-white">Save Editor</span>
      </div>
      
      <nav className="flex-1 p-3 space-y-1 overflow-hidden">
          {tabs.map((item) => (
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
                  onClick={onRequestExit}
                  className="flex-1 flex items-center justify-center p-2 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                  title="Close File"
               >
                   <X size={18} />
               </button>
               <button 
                  onClick={onSave}
                  className="flex-[3] flex items-center justify-center gap-2 p-2 bg-ror-blue text-black font-bold hover:bg-blue-300 rounded-lg transition-all"
               >
                   <Download size={18} /> Save
               </button>
           </div>
      </div>
    </aside>
  );
};

export default Sidebar;