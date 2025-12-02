import React, { useState } from 'react';
import { ParsedProfile, SurvivorDef } from '../types';
import { SURVIVORS, ACHIEVEMENTS, ALL_ACHIEVEMENTS_LIST, ALL_UNLOCKS } from '../constants';
import { Lock, Unlock, Skull } from 'lucide-react';

interface SurvivorEditorProps {
  profile: ParsedProfile;
  setProfile: React.Dispatch<React.SetStateAction<ParsedProfile | null>>;
  onShowNotification: (message: string) => void;
}

const SurvivorIcon: React.FC<{ survivor: SurvivorDef, isUnlocked: boolean }> = ({ survivor, isUnlocked }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`
        w-12 h-12 rounded-lg shadow-lg overflow-hidden shrink-0 flex items-center justify-center
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
        <div className="text-xl font-bold text-ror-dark">
            {survivor.name.charAt(0)}
        </div>
      )}
    </div>
  );
};

const SurvivorEditor: React.FC<SurvivorEditorProps> = ({ profile, setProfile, onShowNotification }) => {

  const handleCoinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value) || 0;
    setProfile(prev => prev ? { ...prev, coins: val } : null);
  };

  const handleUnlockAll = () => {
    setProfile(prev => {
        if (!prev) return null;

        // 1. Create clones of existing sets to modify based on PREVIOUS state
        const newAchievementsSet = new Set(prev.unlockedAchievements);
        const newUnlocksSet = new Set(prev.unlockedItems);

        // 2. Add all raw achievement IDs (legacy & comprehensive list)
        ALL_ACHIEVEMENTS_LIST.forEach(id => newAchievementsSet.add(id));

        // 3. Add all structured achievement IDs (Items, Skills, Skins, Artifacts)
        ACHIEVEMENTS.forEach(a => newAchievementsSet.add(a.id));

        // 4. Explicitly ensure all Survivor requirements are met (Characters & their tokens)
        SURVIVORS.forEach(s => {
            // Unlock the achievement required to see the character
            if (s.requiredAchievement) {
                newAchievementsSet.add(s.requiredAchievement);
            }
            // Unlock the specific character token for gameplay availability
            newUnlocksSet.add(`Characters.${s.id}`);
        });

        // 5. Add all generic unlock tokens (Items, Equipment, Artifacts, etc)
        ALL_UNLOCKS.forEach(u => newUnlocksSet.add(u));

        return { 
            ...prev, 
            unlockedAchievements: newAchievementsSet, 
            unlockedItems: newUnlocksSet 
        };
    });
    
    console.log("Unlock All executed.");
    onShowNotification("Success! All items, survivors, and artifacts unlocked.");
  };

  const toggleSurvivor = (e: React.MouseEvent, survivor: typeof SURVIVORS[0]) => {
    e.stopPropagation();
    const achievementId = survivor.requiredAchievement;
    const unlockId = `Characters.${survivor.id}`; // Common pattern for survivor unlock tokens

    if (!achievementId && survivor.id !== 'Commando' && survivor.id !== 'Huntress') return; 

    setProfile(prev => {
      if (!prev) return null;
      const newAchievementsSet = new Set(prev.unlockedAchievements);
      const newUnlocksSet = new Set(prev.unlockedItems);
      
      // Calculate associated content (Skills and Skins) based on name matching
      const lookupName = survivor.name.replace(/^The\s+/, '');
      const associatedContent = ACHIEVEMENTS.filter(a => 
          (a.category === 'Skill' || a.category === 'Skin Unlock') &&
          a.name.startsWith(lookupName)
      );
      
      // Check if currently unlocked
      const isUnlocked = (survivor.requiredAchievement === '' || newAchievementsSet.has(survivor.requiredAchievement));

      if (isUnlocked) {
        // Locking survivor
        if (survivor.requiredAchievement) newAchievementsSet.delete(survivor.requiredAchievement);
        newUnlocksSet.delete(unlockId);
        associatedContent.forEach(a => newAchievementsSet.delete(a.id));
      } else {
        // Unlocking survivor
        if (survivor.requiredAchievement) newAchievementsSet.add(survivor.requiredAchievement);
        newUnlocksSet.add(unlockId);
        associatedContent.forEach(a => newAchievementsSet.add(a.id));
      }
      
      return { ...prev, unlockedAchievements: newAchievementsSet, unlockedItems: newUnlocksSet };
    });
  };

  return (
    <div className="space-y-8">
      {/* General Settings Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Currency Box */}
        <div className="bg-ror-panel border border-white/5 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <img 
                src="https://riskofrain2.wiki.gg/images/thumb/LunarCoin.png/23px-LunarCoin.png?726607" 
                alt="Lunar Coin" 
                className="w-6 h-6 object-contain"
              />
              Lunar Coins
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-400 mb-2">Amount</label>
              <input
                type="number"
                value={profile.coins}
                onChange={handleCoinChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-3 px-4 text-2xl font-mono text-ror-blue focus:outline-none focus:border-ror-accent transition-colors"
              />
            </div>
            
            <button 
               onClick={() => setProfile(prev => prev ? { ...prev, coins: 2147483647 } : null)}
               className="w-full sm:w-auto px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              Set Max
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
              Max safe value: 2,147,483,647
          </p>
        </div>

        {/* Unlock All Button */}
        <button 
          onClick={handleUnlockAll}
          className="flex items-center gap-4 p-6 bg-ror-panel border border-white/5 hover:border-ror-accent/50 rounded-xl transition-all group text-left shadow-lg h-full hover:shadow-ror-accent/10 active:scale-[0.98] cursor-pointer"
        >
          <div className="p-3 bg-ror-accent/10 text-ror-accent rounded-lg group-hover:bg-ror-accent group-hover:text-black transition-colors">
              <Skull size={24} />
          </div>
          <div>
              <div className="font-bold text-lg text-white">Unlock All</div>
              <div className="text-sm text-gray-400">Instantly unlock every item, survivor, and artifact</div>
          </div>
        </button>
      </div>

      {/* Survivors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {SURVIVORS.map(survivor => {
          // Check both Achievement ID and Unlock Token to determine status
          const achievementUnlocked = survivor.requiredAchievement === '' || profile.unlockedAchievements.has(survivor.requiredAchievement);
          
          const isSurvivorUnlocked = achievementUnlocked;
          const isDefault = survivor.requiredAchievement === '';

          return (
            <div 
              key={survivor.id}
              className={`
                relative flex flex-col rounded-xl border transition-all duration-300
                ${isSurvivorUnlocked 
                  ? 'bg-ror-panel border-white/10' 
                  : 'bg-black/40 border-white/5 opacity-80'}
              `}
            >
              {/* Main Survivor Card Header */}
              <div 
                  onClick={(e) => !isDefault && toggleSurvivor(e, survivor)}
                  className={`p-5 cursor-pointer ${!isSurvivorUnlocked && !isDefault ? 'hover:bg-white/5' : ''} rounded-xl`}
              >
                  <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                      <SurvivorIcon survivor={survivor} isUnlocked={isSurvivorUnlocked} />
                      <div>
                          <h3 className={`font-bold text-lg ${isSurvivorUnlocked ? 'text-white' : 'text-gray-400'}`}>{survivor.name}</h3>
                          <div className="flex items-center gap-2">
                               {isDefault ? (
                                  <span className="text-[10px] bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">Default</span>
                              ) : (
                                  <div className={`flex items-center gap-1 text-xs ${isSurvivorUnlocked ? 'text-green-400' : 'text-red-400'}`}>
                                      {isSurvivorUnlocked ? <Unlock size={12} /> : <Lock size={12} />}
                                      <span>{isSurvivorUnlocked ? 'Unlocked' : 'Locked'}</span>
                                  </div>
                              )}
                          </div>
                      </div>
                  </div>
                  </div>

                  <p className="text-sm text-gray-400 h-10 leading-snug line-clamp-2">
                      {survivor.description}
                  </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SurvivorEditor;