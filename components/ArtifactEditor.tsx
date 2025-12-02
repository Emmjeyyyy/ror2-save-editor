import React from 'react';
import { ParsedProfile } from '../types';
import { ACHIEVEMENTS } from '../constants';
import { Hexagon } from 'lucide-react';

interface ArtifactEditorProps {
  profile: ParsedProfile;
  setProfile: React.Dispatch<React.SetStateAction<ParsedProfile | null>>;
}

const ArtifactEditor: React.FC<ArtifactEditorProps> = ({ profile, setProfile }) => {
  const artifacts = ACHIEVEMENTS.filter(a => a.category === 'Artifact');

  const toggleArtifact = (id: string) => {
    setProfile(prev => {
      if (!prev) return null;
      const newSet = new Set(prev.unlockedAchievements);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return { ...prev, unlockedAchievements: newSet };
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artifacts.map(artifact => {
        const isUnlocked = profile.unlockedAchievements.has(artifact.id);

        return (
          <div
            key={artifact.id}
            onClick={() => toggleArtifact(artifact.id)}
            className={`
              relative p-5 rounded-xl border transition-all duration-200 group
              ${isUnlocked
                ? 'bg-purple-900/20 border-purple-500/50 hover:border-purple-400 cursor-pointer'
                : 'bg-black/40 border-white/5 opacity-70 hover:opacity-100 hover:border-white/20 cursor-pointer'}
            `}
          >
            <div className="flex items-center gap-3 mb-4">
                <div className={`
                w-10 h-10 flex items-center justify-center rounded-lg transition-colors
                ${isUnlocked ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-500'}
                `}>
                <Hexagon size={20} />
                </div>
                <div>
                <h3 className={`font-bold ${isUnlocked ? 'text-purple-200' : 'text-gray-400'}`}>{artifact.name}</h3>
                <p className="text-xs text-gray-500">{isUnlocked ? 'Unlocked' : 'Locked'}</p>
                </div>
            </div>

            <p className="text-sm text-gray-400 leading-snug">
                {artifact.description}
            </p>
            
            {isUnlocked && (
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ArtifactEditor;