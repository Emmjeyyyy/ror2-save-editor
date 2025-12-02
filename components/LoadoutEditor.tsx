

import React, { useState } from 'react';
import { ParsedProfile, SurvivorDef, AchievementDef } from '../types';
import { SURVIVORS, ACHIEVEMENTS } from '../constants';
import { Zap, Palette } from 'lucide-react';

interface LoadoutEditorProps {
  profile: ParsedProfile;
  setProfile: React.Dispatch<React.SetStateAction<ParsedProfile | null>>;
}

const SurvivorIcon: React.FC<{ survivor: SurvivorDef, isUnlocked: boolean }> = ({ survivor, isUnlocked }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`
        w-10 h-10 rounded-lg shadow-lg overflow-hidden shrink-0 flex items-center justify-center
        ${isUnlocked ? 'ring-1 ring-ror-accent/50' : 'grayscale opacity-50 ring-1 ring-white/10'}
        ${error ? 'bg-ror-accent' : 'bg-black/20'}
    `}>
      {!error ? (
        <img 
            src={survivor.iconUrl} 
            alt={survivor.name} 
            className="w-full h-full object-cover" 
            onError={() => setError(true)}
            referrerPolicy="no-referrer"
        />
      ) : (
        <div className="text-sm font-bold text-ror-dark">
            {survivor.name.charAt(0)}
        </div>
      )}
    </div>
  );
};

const SkillCard: React.FC<{ 
    item: AchievementDef; 
    isUnlocked: boolean; 
    toggle: (id: string) => void;
    type: 'Skill' | 'Skin'
}> = ({ item, isUnlocked, toggle, type }) => {
    const [imgError, setImgError] = useState(false);
    
    // Fallback name if icon fails or is missing
    const displayName = item.name.includes(':') ? item.name.split(':')[1].trim() : item.name;

    return (
        <div 
            onClick={() => toggle(item.id)}
            className={`
                group relative flex flex-col items-center gap-2 p-3 rounded-xl border transition-all cursor-pointer select-none
                ${isUnlocked 
                    ? 'bg-ror-panel border-white/20 hover:border-white/40' 
                    : 'bg-black/40 border-white/5 opacity-60 hover:opacity-100 hover:border-white/10'}
            `}
            title={item.description}
        >
            <div className={`
                relative w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center
                ${isUnlocked ? 'ring-2 ring-ror-accent shadow-lg shadow-ror-accent/10' : 'grayscale ring-1 ring-white/10'}
            `}>
                {!imgError && item.iconUrl ? (
                    <img 
                        src={item.iconUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                        referrerPolicy="no-referrer"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-xs text-center p-1 font-bold text-gray-500">
                        {displayName.substring(0, 3).toUpperCase()}
                    </div>
                )}
                
                {/* Overlay indicating lock status on hover if locked */}
                {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                       {/* Lock icon could go here, but opacity conveys it well */}
                    </div>
                )}
            </div>
            
            <div className="text-center w-full">
                <div className={`text-xs font-bold truncate w-full ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                    {displayName}
                </div>
            </div>
        </div>
    );
};

const LoadoutEditor: React.FC<LoadoutEditorProps> = ({ profile, setProfile }) => {

  const toggleAchievement = (id: string) => {
    setProfile(prev => {
      if (!prev) return null;
      const newSet = new Set(prev.unlockedAchievements);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return { ...prev, unlockedAchievements: newSet };
    });
  };

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 pb-10">
          {SURVIVORS.map(survivor => {
              const lookupName = survivor.name.replace(/^The\s+/, '');
              const survivorContent = ACHIEVEMENTS.filter(a => 
                  (a.category === 'Skill' || a.category === 'Skin Unlock') &&
                  a.name.startsWith(lookupName)
              );

              const skills = survivorContent.filter(a => a.category === 'Skill');
              const skins = survivorContent.filter(a => a.category === 'Skin Unlock');
              
              const isSurvivorUnlocked = survivor.requiredAchievement === '' || profile.unlockedAchievements.has(survivor.requiredAchievement);
              
              if (skills.length === 0 && skins.length === 0) return null;

              return (
                  <div key={survivor.id} className={`rounded-xl border p-5 transition-all flex flex-col ${isSurvivorUnlocked ? 'bg-ror-panel border-white/10' : 'bg-black/40 border-white/5 opacity-60'}`}>
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                          <SurvivorIcon survivor={survivor} isUnlocked={isSurvivorUnlocked} />
                          <h3 className={`font-bold ${isSurvivorUnlocked ? 'text-white' : 'text-gray-500'}`}>{survivor.name}</h3>
                      </div>

                      <div className="space-y-6 flex-1">
                        {skills.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 text-ror-blue mb-3 text-xs font-bold uppercase tracking-wider opacity-80">
                                    <Zap size={14} /> Skills
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {skills.map(skill => (
                                        <SkillCard 
                                            key={skill.id}
                                            item={skill}
                                            isUnlocked={profile.unlockedAchievements.has(skill.id)}
                                            toggle={toggleAchievement}
                                            type="Skill"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {skins.length > 0 && (
                             <div>
                                <div className="flex items-center gap-2 text-purple-400 mb-3 text-xs font-bold uppercase tracking-wider opacity-80">
                                    <Palette size={14} /> Skins
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {skins.map(skin => (
                                        <SkillCard 
                                            key={skin.id}
                                            item={skin}
                                            isUnlocked={profile.unlockedAchievements.has(skin.id)}
                                            toggle={toggleAchievement}
                                            type="Skin"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                      </div>
                  </div>
              )
          })}
      </div>
  );
};

export default LoadoutEditor;