import { ParsedProfile } from '../types';

export const parseProfile = (xmlString: string, fileName: string): ParsedProfile => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
  // Check for parse errors
  const parseError = xmlDoc.getElementsByTagName("parsererror");
  if (parseError.length > 0) {
    throw new Error("Invalid XML file.");
  }

  // Extract Name (Display Name)
  const nameNode = xmlDoc.getElementsByTagName("name")[0];
  const displayName = nameNode ? (nameNode.textContent || "Unknown Profile") : "Unknown Profile";

  // Extract Coins
  const coinsNode = xmlDoc.getElementsByTagName("coins")[0];
  const coins = coinsNode ? parseInt(coinsNode.textContent || "0", 10) : 0;

  // Extract Achievements
  const achievementsNode = xmlDoc.getElementsByTagName("achievementsList")[0];
  const achievementString = achievementsNode ? (achievementsNode.textContent || "") : "";
  
  // Split by any whitespace (space, tab, newline) to prevent clumping of IDs
  const unlockedAchievements = new Set(achievementString.split(/\s+/).filter(s => s.trim().length > 0));

  // Extract Unlocks from Stats
  const unlockedItems = new Set<string>();
  const statsNode = xmlDoc.getElementsByTagName("stats")[0];
  if (statsNode) {
    const unlockNodes = statsNode.getElementsByTagName("unlock");
    for (let i = 0; i < unlockNodes.length; i++) {
        const content = unlockNodes[i].textContent?.trim();
        if (content) {
            unlockedItems.add(content);
        }
    }
  }

  return {
    fileName,
    displayName,
    xmlContent: xmlString,
    coins,
    unlockedAchievements,
    unlockedItems
  };
};

export const generateXML = (originalXml: string, profile: ParsedProfile): string => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(originalXml, "text/xml");

  // Update Coins
  const coinsNode = xmlDoc.getElementsByTagName("coins")[0];
  if (coinsNode) {
    coinsNode.textContent = profile.coins.toString();
  } else {
    // If missing, try to append (though unlikely for valid save)
    const root = xmlDoc.documentElement;
    const newCoins = xmlDoc.createElement("coins");
    newCoins.textContent = profile.coins.toString();
    root.appendChild(newCoins);
  }

  // Update Achievements
  const achievementsNode = xmlDoc.getElementsByTagName("achievementsList")[0];
  const achievementsStr = Array.from(profile.unlockedAchievements).join(' ');
  
  if (achievementsNode) {
    achievementsNode.textContent = achievementsStr;
  } else {
    const root = xmlDoc.documentElement;
    const newAchievements = xmlDoc.createElement("achievementsList");
    newAchievements.textContent = achievementsStr;
    root.appendChild(newAchievements);
  }

  // Update Stats / Unlocks
  // We must preserve existing <stat> tags and only manage <unlock> tags.
  let statsNode = xmlDoc.getElementsByTagName("stats")[0];
  if (!statsNode) {
      statsNode = xmlDoc.createElement("stats");
      xmlDoc.documentElement.appendChild(statsNode);
  }

  // Remove all existing <unlock> tags to rebuild them cleanly
  const existingUnlocks = Array.from(statsNode.getElementsByTagName("unlock"));
  existingUnlocks.forEach(u => statsNode.removeChild(u));

  // Append new <unlock> tags
  profile.unlockedItems.forEach(item => {
      const el = xmlDoc.createElement("unlock");
      el.textContent = item;
      statsNode.appendChild(el);
  });

  const serializer = new XMLSerializer();
  return serializer.serializeToString(xmlDoc);
};

export const downloadProfile = (xmlContent: string, fileName: string) => {
  const blob = new Blob([xmlContent], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};