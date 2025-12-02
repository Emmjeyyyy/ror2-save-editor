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
  
  // Fix: Split by any whitespace (space, tab, newline) to prevent clumping of IDs
  // This is critical for files where achievements are separated by newlines
  const unlockedAchievements = new Set(achievementString.split(/\s+/).filter(s => s.trim().length > 0));

  return {
    fileName,
    displayName,
    xmlContent: xmlString,
    coins,
    unlockedAchievements
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