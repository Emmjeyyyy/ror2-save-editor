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
  const [filter, setFilter] = useState<'All' | 'Survivor' | 'Item' | 'Skill' | 'Skin Unlock'>('All');

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter(a => {
        if (a.category === 'Artifact') return false;
        const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'All' || a.category === filter;
        return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

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
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4">
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
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {['All', 'Survivor', 'Item', 'Skill', 'Skin Unlock'].map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors whitespace-nowrap
                        ${filter === cat 
                            ? 'bg-ror-accent text-black' 
                            : 'bg-ror-panel text-gray-400 hover:text-white hover:bg-gray-800'}
                    `}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
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
            <div className="col-span-full text-center py-12 border-2 border-dashed border-gray-800 rounded-xl text-gray-600">
                No achievements found matching criteria.
            </div>
        )}
      </div>
    </div>
  );
};

export default AchievementEditor;