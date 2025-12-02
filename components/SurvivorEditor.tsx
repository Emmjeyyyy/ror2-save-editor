import React from 'react';
import { ParsedProfile } from '../types';
import { SURVIVORS } from '../constants';
import { Lock, Unlock } from 'lucide-react';

interface SurvivorEditorProps {
  profile: ParsedProfile;
  setProfile: React.Dispatch<React.SetStateAction<ParsedProfile | null>>;
}

const SurvivorEditor: React.FC<SurvivorEditorProps> = ({ profile, setProfile }) => {
  const toggleSurvivor = (achievementId: string) => {
    if (!achievementId) return; 

    setProfile(prev => {
      if (!prev) return null;
      const newSet = new Set(prev.unlockedAchievements);
      if (newSet.has(achievementId)) {
        newSet.delete(achievementId);
      } else {
        newSet.add(achievementId);
      }
      return { ...prev, unlockedAchievements: newSet };
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SURVIVORS.map(survivor => {
        const isUnlocked = survivor.requiredAchievement === '' || profile.unlockedAchievements.has(survivor.requiredAchievement);
        const isDefault = survivor.requiredAchievement === '';

        return (
          <div 
            key={survivor.id}
            onClick={() => !isDefault && toggleSurvivor(survivor.requiredAchievement)}
            className={`
              relative p-5 rounded-xl border transition-all duration-200 group
              ${isUnlocked 
                ? 'bg-ror-panel border-white/10 hover:border-ror-accent/50 cursor-pointer' 
                : 'bg-black/40 border-white/5 opacity-70 hover:opacity-100 hover:border-white/20 cursor-pointer'}
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                 <div className={`
                    w-10 h-10 flex items-center justify-center rounded-lg text-lg font-bold
                    ${isUnlocked ? 'bg-ror-accent text-black' : 'bg-gray-800 text-gray-500'}
                 `}>
                    {survivor.name.charAt(0)}
                 </div>
                 <div>
                    <h3 className={`font-bold ${isUnlocked ? 'text-white' : 'text-gray-400'}`}>{survivor.name}</h3>
                 </div>
              </div>
              <div className={`p-1.5 rounded-full ${isUnlocked ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                {isUnlocked ? <Unlock size={14} /> : <Lock size={14} />}
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-4 h-10 leading-snug">
                {survivor.description}
            </p>

            <div className="flex justify-between items-center pt-3 border-t border-white/5">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-600 font-mono">
                        {survivor.id}
                    </span>
                    {!isDefault && (
                         <span className="text-[10px] text-gray-700 font-mono" title="Required Achievement">
                             {survivor.requiredAchievement}
                         </span>
                    )}
                </div>
                {isDefault ? (
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Default</span>
                ) : (
                     <div className={`h-2 w-2 rounded-full ${isUnlocked ? 'bg-green-500' : 'bg-red-500'}`}></div>
                )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SurvivorEditor;