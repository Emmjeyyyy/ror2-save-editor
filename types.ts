export interface ParsedProfile {
  fileName: string;
  displayName: string;
  xmlContent: string;
  coins: number;
  unlockedAchievements: Set<string>;
  unlockedItems: Set<string>;
}

export interface SurvivorDef {
  id: string;
  name: string;
  description: string;
  requiredAchievement: string;
  iconUrl?: string;
}

export interface AchievementDef {
  id: string;
  name: string;
  description: string;
  category: 'Survivor' | 'Item' | 'Artifact' | 'Skill' | 'Skin' | 'Skin Unlock' | 'Challenge';
}

export enum Tab {
  Survivors = 'Survivors',
  Artifacts = 'Artifacts',
  Achievements = 'Achievements',
}