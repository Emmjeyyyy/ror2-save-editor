import React, { useState, useMemo } from 'react';
import { ParsedProfile } from '../types';
import { ACHIEVEMENTS } from '../constants';
import { Search, CheckSquare, Square } from 'lucide-react';

interface AchievementEditorProps {
  profile: ParsedProfile;
  setProfile: React.Dispatch<React.SetStateAction<ParsedProfile | null>>;
}

const AchievementEditor: React.FC<AchievementEditorProps> = ({ profile, setProfile }) => {
  const [search, setSearch] = useState('');

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter(a => {
        // Exclude categories handled in other tabs
        if (a.category === 'Artifact') return false;
        if (a.category === 'Survivor') return false;
        if (a.category === 'Skill') return false;
        if (a.category === 'Skin Unlock') return false;

        const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase());
        return matchesSearch;
    });
  }, [search]);

  const toggleAchievement = (id: string) => {
    setProfile(prev => {
        if (!prev) return null;
        const newSet = new Set(prev.unlockedAchievements);
        if (newSet.has(id)) newSet.delete(id);
        else newSet.add(id);
        return { ...prev, unlockedAchievements: newSet };
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] min-h-[400px]">
      <div className="flex flex-col sm:flex-row gap-4 mb-4 flex-shrink-0">
        <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
                type="text" 
                placeholder="Search achievements..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-ror-panel border border-white/10 text-white rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-ror-accent transition-colors placeholder:text-gray-600"
            />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="grid grid-cols-1 gap-2">
            {filteredAchievements.map(achievement => {
                const isUnlocked = profile.unlockedAchievements.has(achievement.id);
                return (
                    <div 
                        key={achievement.id}
                        onClick={() => toggleAchievement(achievement.id)}
                        className={`
                            flex items-center gap-4 p-4 rounded-lg border cursor-pointer select-none transition-all
                            ${isUnlocked 
                                ? 'bg-ror-panel border-ror-blue/30' 
                                : 'bg-black/20 border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'}
                        `}
                    >
                        <div className={isUnlocked ? 'text-ror-blue' : 'text-gray-600'}>
                            {isUnlocked ? <CheckSquare size={24} /> : <Square size={24} />}
                        </div>
                        <div className="flex-1">
                            <div className={`font-bold ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                                {achievement.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-0.5">{achievement.description}</div>
                        </div>
                        {isUnlocked && (
                            <div className="bg-ror-blue/10 text-ror-blue px-2 py-1 text-xs font-bold rounded hidden sm:block">
                                Unlocked
                            </div>
                        )}
                    </div>
                );
            })}
            {filteredAchievements.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-gray-800 rounded-xl text-gray-600">
                    No achievements found.
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default AchievementEditor;