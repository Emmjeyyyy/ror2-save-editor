import React from 'react';
import { ParsedProfile } from '../types';
import { Coins, Save, RotateCcw, Skull } from 'lucide-react';

interface GeneralEditorProps {
  profile: ParsedProfile;
  setProfile: React.Dispatch<React.SetStateAction<ParsedProfile | null>>;
  onSave: () => void;
}

const GeneralEditor: React.FC<GeneralEditorProps> = ({ profile, setProfile, onSave }) => {
  const handleCoinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    setProfile(prev => prev ? { ...prev, coins: val } : null);
  };

  const handleUnlockAll = () => {
    if (confirm("Warning: This will add hundreds of items to your profile. Proceed?")) {
        import('../constants').then(({ ALL_ACHIEVEMENTS_LIST, ACHIEVEMENTS }) => {
            setProfile(prev => {
                if (!prev) return null;
                const newSet = new Set(prev.unlockedAchievements);
                
                // Add legacy/hidden achievements list
                ALL_ACHIEVEMENTS_LIST.forEach(id => newSet.add(id));
                
                // Add all defined achievements from the structured list (Items, Survivors, Skills, etc.)
                // This ensures everything visible in the editor is definitely unlocked.
                ACHIEVEMENTS.forEach(a => newSet.add(a.id));
                
                return { ...prev, unlockedAchievements: newSet };
            });
        });
    }
  };

  return (
    <div className="space-y-8">
      {/* Currency Box */}
      <div className="bg-ror-panel border border-white/5 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Coins className="text-ror-accent" size={24} />
            Lunar Coins
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-400 mb-2">Amount</label>
            <input
              type="number"
              value={profile.coins}
              onChange={handleCoinChange}
              className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-2xl font-mono text-ror-blue focus:outline-none focus:border-ror-accent transition-colors"
            />
            <p className="text-xs text-gray-500 mt-2">
              Max safe value: 2,147,483,647
            </p>
          </div>
          
          <button 
             onClick={() => setProfile(prev => prev ? { ...prev, coins: 999999999 } : null)}
             className="px-6 py-3.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            Set Max
          </button>
        </div>
      </div>

      {/* Actions Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <button 
              onClick={handleUnlockAll}
              className="flex items-center gap-4 p-6 bg-ror-panel border border-white/5 hover:border-ror-accent/50 rounded-xl transition-all group text-left"
           >
              <div className="p-3 bg-ror-accent/10 text-ror-accent rounded-lg group-hover:bg-ror-accent group-hover:text-black transition-colors">
                  <Skull size={24} />
              </div>
              <div>
                  <div className="font-bold text-lg text-white">Unlock All</div>
                  <div className="text-sm text-gray-400">Unlock survivors, items, artifacts</div>
              </div>
           </button>

           <button 
              onClick={onSave}
              className="flex items-center gap-4 p-6 bg-ror-panel border border-white/5 hover:border-ror-blue/50 rounded-xl transition-all group text-left"
           >
              <div className="p-3 bg-ror-blue/10 text-ror-blue rounded-lg group-hover:bg-ror-blue group-hover:text-black transition-colors">
                  <Save size={24} />
              </div>
              <div>
                  <div className="font-bold text-lg text-white">Save File</div>
                  <div className="text-sm text-gray-400">Download modified .xml</div>
              </div>
           </button>
      </div>
    </div>
  );
};

export default GeneralEditor;