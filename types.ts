export interface ParsedProfile {
  fileName: string;
  displayName: string;
  xmlContent: string;
  coins: number;
  unlockedAchievements: Set<string>;
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
  General = 'General',
  Survivors = 'Survivors',
  Artifacts = 'Artifacts',
  Achievements = 'Achievements',
}