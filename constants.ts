

import { SurvivorDef, AchievementDef } from './types';

// Using wiki.gg redirects to ensure images load without local file issues. 
// If you prefer local images, replace strings with 'public/commando.webp' etc.
export const SURVIVORS: SurvivorDef[] = [
  { id: 'Commando', name: 'Commando', description: 'The reliable all-rounder.', requiredAchievement: '', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Commando.png/120px-Commando.png' },
  { id: 'Huntress', name: 'Huntress', description: 'High mobility glass cannon.', requiredAchievement: '', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Huntress.png/120px-Huntress.png' },
  { id: 'Bandit2', name: 'Bandit', description: 'High damage backstabber.', requiredAchievement: 'CompleteThreeStages', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Bandit.png/120px-Bandit.png' },
  { id: 'Toolbot', name: 'MUL-T', description: 'Versatile tank with dual equipment.', requiredAchievement: 'RepeatFirstTeleporter', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/MUL-T.png/120px-MUL-T.png' },
  { id: 'Engi', name: 'Engineer', description: 'Static defense powerhouse.', requiredAchievement: 'Complete30StagesCareer', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Engineer.png/120px-Engineer.png' },
  { id: 'Mage', name: 'Artificer', description: 'Burst damage mage.', requiredAchievement: 'FreeMage', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Artificer.png/120px-Artificer.png' },
  { id: 'Merc', name: 'Mercenary', description: 'High skill melee assassin.', requiredAchievement: 'CompleteUnknownEnding', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Mercenary.png/120px-Mercenary.png' },
  { id: 'Treebot', name: 'REX', description: 'Health-sacrificing plant robot.', requiredAchievement: 'RescueTreebot', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/REX.png/120px-REX.png' },
  { id: 'Loader', name: 'Loader', description: 'Heavy hitting grappler.', requiredAchievement: 'DefeatSuperRoboBallBoss', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Loader.png/120px-Loader.png' },
  { id: 'Croco', name: 'Acrid', description: 'Poison spreading beast.', requiredAchievement: 'BeatArena', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Acrid.png/120px-Acrid.png' },
  { id: 'Captain', name: 'Captain', description: 'Commander of the UES Safe Travels.', requiredAchievement: 'CompleteMainEnding', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Captain.png/120px-Captain.png' },
  { id: 'Railgunner', name: 'Railgunner', description: 'Long-range sniper (SotV DLC).', requiredAchievement: '', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Railgunner.png/120px-Railgunner.png' }, 
  { id: 'VoidSurvivor', name: 'Void Fiend', description: 'Corrupted survivor (SotV DLC).', requiredAchievement: 'CompleteVoidEnding', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Void_Fiend.png/120px-Void_Fiend.png' },
  { id: 'Seeker', name: 'Seeker', description: 'Soul-manipulating brawler (SotS DLC).', requiredAchievement: '', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Seeker.png/120px-Seeker.png' },
  { id: 'Chef', name: 'Chef', description: 'Master of culinary combat (SotS DLC).', requiredAchievement: 'ActivateChef', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/CHEF.png/120px-CHEF.png?9c5cbf' },
  { id: 'FalseSon', name: 'The False Son', description: 'Herald of the path (SotS DLC).', requiredAchievement: 'UnlockFalseSon', iconUrl: 'https://riskofrain2.wiki.gg/images/False_Son.png' },
  { id: 'Drifter', name: 'Drifter', description: 'Scavenging brawler (Modded).', requiredAchievement: 'FreeDrifter', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Drifter.png/120px-Drifter.png?76c399' },
  { id: 'DroneTech', name: 'Operator', description: 'Drone specialist (Modded).', requiredAchievement: '', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Operator.png/120px-Operator.png?27bdc6' },
];

export const ACHIEVEMENTS: AchievementDef[] = [
  // White Items
  { id: 'RepeatedlyDuplicateItems', name: '...Maybe One More.', description: 'Duplicate the same item 7 times in a row with a 3D Printer.', category: 'Item' },
  { id: 'KillEliteMonster', name: 'Elite Slayer', description: 'Defeat an Elite-type monster.', category: 'Item' },
  { id: 'KillBossQuick', name: 'Keyed Up', description: 'Defeat the teleporter boss in under 15 seconds.', category: 'Item' },
  { id: 'FailShrineChance', name: '"Is This Bugged?"', description: 'Fail the shrine of chance 3 times in a row.', category: 'Item' },
  { id: 'Discover10UniqueTier1', name: 'The Basics', description: 'Discover 10 unique white items.', category: 'Item' },
  { id: 'Die5Times', name: 'Learning Process', description: 'Die 5 times.', category: 'Item' },
  { id: 'CompleteTeleporterWithoutInjury', name: 'Flawless', description: 'Fully charge a teleporter without getting hit.', category: 'Item' },
  { id: 'CompleteTeleporter', name: 'Advancement', description: 'Complete a teleporter event.', category: 'Item' },

  // Green Items
  { id: 'AttackSpeed', name: 'Rapidfire', description: 'Reach +200% attack speed.', category: 'Item' },
  { id: 'MultiCombatShrine', name: 'Warmonger', description: 'Complete three Combat Shrines in a single stage.', category: 'Item' },
  { id: 'MoveSpeed', name: 'Going Fast Recommended', description: 'Reach +300% movespeed (includes sprinting)', category: 'Item' },
  { id: 'KillTotalEnemies', name: 'Slaughter', description: 'Defeat 3000 enemies.', category: 'Item' },
  { id: 'KillElitesMilestone', name: 'Cut Down', description: 'Defeat 500 Elite monsters', category: 'Item' },
  { id: 'Discover5Equipment', name: 'Experimenting', description: 'Pick up 5 different types of Equipment.', category: 'Item' },
  { id: 'CompletePrismaticTrial', name: 'Prismatically Aligned', description: 'Complete a Prismatic Trial.', category: 'Item' },
  { id: 'KillElementalLemurians', name: 'Death Do Us Part', description: 'Discover the hidden chamber in the Abandoned Aqueduct.', category: 'Item' },
  { id: 'ChargeTeleporterWhileNearDeath', name: 'Glorious Battle', description: 'Charge the teleporter with less than 10% health.', category: 'Item' },
  { id: 'AutomationActivation', name: 'Automation Activation', description: 'Activate 6 turrets in a single run.', category: 'Item' },

  // Red Items
  { id: 'FindUniqueNewtStatues', name: 'Newtist', description: 'Discover and activate 8 unique Newt Altars.', category: 'Item' },
  { id: 'Complete20Stages', name: 'The Long Road', description: 'Complete 20 stages in a single run.', category: 'Item' },
  { id: 'HardEliteBossKill', name: 'Deicide', description: 'Defeat an Elite boss on Monsoon difficulty', category: 'Item' },
  { id: 'StayAlive1', name: 'The Lone Survivor', description: 'Stay alive for 30 consecutive minutes.', category: 'Item' },
  { id: 'CompleteThreeStagesWithoutHealing', name: 'Naturopath', description: 'Without healing, reach and complete the 3rd teleporter event.', category: 'Item' },
  { id: 'HardHitter', name: 'Macho', description: 'Deal 5,000 damage in one attack.', category: 'Item' },
  { id: 'FindDevilAltar', name: 'Her Concepts', description: 'Find the altar to N\'kuhana.', category: 'Item' },
  { id: 'LoopOnce', name: 'Deja Vu?', description: 'Loop back to the first stage.', category: 'Item' },

  // Lunar Items
  { id: 'CompleteMainEndingHard', name: 'The Calm', description: 'Beat the game on Monsoon difficulty.', category: 'Item' },
  { id: 'SuicideHermitCrabs', name: 'The Demons And The Crabs', description: 'Kill 20 Hermit Crabs by chasing them off the edge of the map.', category: 'Item' },
  { id: 'NeverBackDown', name: 'Never Back Down', description: 'In 4 consecutive stages don\'t leave the teleport radius until it is fully charged.', category: 'Item' },
  { id: 'KillBossQuantityInRun', name: 'Blockade Breaker', description: 'Kill 15 boss enemies in a single run.', category: 'Item' },
  { id: 'CarryLunarItems', name: 'Moon Worshipper', description: 'Carry 5 Lunar items in a single run.', category: 'Item' },
  { id: 'UseThreePortals', name: 'Cosmic Explorer', description: 'Discover and enter three unique portals.', category: 'Item' },
  { id: 'MajorMultikill', name: 'Multikill!', description: 'Kill 15 enemies simultaneously.', category: 'Item' },

  // Equipment
  { id: 'BurnToDeath', name: 'Warm For Life', description: 'Die three times while burning.', category: 'Item' },
  { id: 'TotalDronesRepaired', name: 'Mechanic', description: 'Repair 30 drones or turrets.', category: 'Item' },
  { id: 'TotalMoneyCollected', name: 'Funded!', description: 'Collect $30,480 total gold.', category: 'Item' },
  { id: 'FindTimedChest', name: '[REDACTED]', description: 'Open the Timed Security Chest on Rallypoint Delta.', category: 'Item' },
  { id: 'KillGoldTitanInOneCycle', name: 'Blackout', description: 'Defeat the Guardian of Gilded Coast without any beacons deactivating.', category: 'Item' },
  { id: 'MaxHealingShrine', name: 'One with the Woods', description: 'Fully upgrade a Shrine of the Woods.', category: 'Item' },
  { id: 'LogCollector', name: 'Bookworm', description: 'Collect 10 Monster or Environment Logs.', category: 'Item' },
  { id: 'CompleteMultiBossShrine', name: 'Ascendant', description: 'Defeat the teleporter bosses after activating 2 Shrines of the Mountain.', category: 'Item' },
  { id: 'CleanupDuty', name: 'Cleanup Duty', description: 'Destroy 20 flying rocks in Sky Meadow.', category: 'Item' },
  { id: 'Die20Times', name: 'I Love Dying!', description: 'Die 20 times.', category: 'Item' },
  { id: 'DefeatFalseSon', name: 'King of the Hill', description: 'Journey to the Prime Meridian and defeat the False Son.', category: 'Item' },

  // Commando
  { id: 'CommandoFastFirstStageClear', name: 'Commando: Godspeed', description: 'Fully charge the first-stage teleporter before the timer hits 5 minutes.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Tactical_Slide.png/64px-Tactical_Slide.png' },
  { id: 'CommandoKillOverloadingWorm', name: 'Commando: Rolling Thunder', description: 'Land the killing blow on an Overloading Worm.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Phase_Blast.png/64px-Phase_Blast.png' },
  { id: 'CommandoNonLunarEndurance', name: 'Commando: Incorruptible', description: 'Clear 20 stages in a single run without picking up any Lunar items.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Frag_Grenade.png/64px-Frag_Grenade.png' },
  { id: 'CommandoClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Hornet.png/64px-Hornet.png' },
  { id: 'CommandoClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Helot.png/64px-Helot.png' },
  { id: 'CommandoPurge', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Commandeered.png/64px-Commandeered.png' },

  // Huntress
  { id: 'HuntressCollectCrowbars', name: 'Huntress: One Shot, One Kill', description: 'Collect and carry 12 Crowbars at once.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Flurry.png/64px-Flurry.png' },
  { id: 'HuntressAllGlaiveBouncesKill', name: 'Huntress: Finishing Touch', description: 'Land a killing blow with every possible hit of a single glaive.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Ballista.png/64px-Ballista.png' },
  { id: 'HuntressMaintainFullHealthOnFrozenWall', name: 'Huntress: Piercing Wind', description: 'Start and finish Rallypoint Delta or Scorched Acres without falling below 100% health.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Phase_Blink.png/64px-Phase_Blink.png' },
  { id: 'HuntressClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Arctic.png/64px-Arctic.png' },
  { id: 'HuntressClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Woodland.png/64px-Woodland.png' },
  { id: 'HuntressPurge', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Predator.png/64px-Predator.png' },

  // Bandit
  { id: 'CompleteThreeStages', name: 'Warrior', description: 'Unlock Bandit', category: 'Survivor' },
  { id: 'Bandit2ConsecutiveReset', name: 'Bandit: Classic Man', description: "Successfully use 'Lights Out' to reset your cooldowns 15 times in a row.", category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Desperado.png/64px-Desperado.png' },
  { id: 'Bandit2StackSuperBleed', name: 'Bandit: Sadist', description: "Kill a monster with 20 stacks of Hemorrhage.", category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Serrated_Shiv.png/64px-Serrated_Shiv.png' },
  { id: 'Bandit2RevolverFinale', name: 'Bandit: B&E', description: "Kill the final boss with 'Lights Out'.", category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Blast.png/64px-Blast.png' },
  { id: 'Bandit2ClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Chilly.png/64px-Chilly.png' },
  { id: 'Bandit2ClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Outlaw.png/64px-Outlaw.png' },
  { id: 'Bandit2Decompile', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Pirated.png/64px-Pirated.png' },

  // MUL-T
  { id: 'RepeatFirstTeleporter', name: 'Verified', description: 'Unlock MUL-T', category: 'Survivor' },
  { id: 'ToolbotGuardTeleporter', name: 'MUL-T: Pest Control', description: 'Defeat two Beetle Queens without leaving the teleporter zone.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Scrap_Launcher.png/64px-Scrap_Launcher.png' },
  { id: 'ToolbotKillImpBossWithBfg', name: 'MUL-T: Gotcha!', description: 'Land the killing blow on an Imp Overlord with the Preon Accumulator.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Power-Saw.png/64px-Power-Saw.png' },
  { id: 'ToolbotBeatArenaLater', name: 'MUL-T: Seventh Day', description: 'Clear the Void Fields on Stage 7 or later.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Power_Mode.png/64px-Power_Mode.png' },
  { id: 'ToolbotClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Janitor.png/64px-Janitor.png' },
  { id: 'ToolbotClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Frail.png/64px-Frail.png' },
  { id: 'ToolbotPurge', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Birdhouse.png/64px-Birdhouse.png' },

  // Engineer
  { id: 'Complete30StagesCareer', name: 'Engineering Perfection', description: 'Unlock Engineer', category: 'Survivor' },
  { id: 'EngiArmy', name: 'Engineer: Better With Friends', description: 'Recruit 12 minions at one time.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Spider_Mines.png/64px-Spider_Mines.png' },
  { id: 'EngiKillBossQuick', name: 'Engineer: 100% Calculated', description: 'Defeat the teleporter boss in less than 5 seconds after it spawns.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Thermal_Harpoons.png/64px-Thermal_Harpoons.png' },
  { id: 'EngiClearTeleporterWithZeroMonsters', name: 'Engineer: Zero Sum', description: 'Finish charging the teleporter with zero monsters remaining.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/TR58_Carbonizer_Turret.png/64px-TR58_Carbonizer_Turret.png' },
  { id: 'EngiClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/EOD_Tech.png/64px-EOD_Tech.png' },
  { id: 'EngiClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/HC_Tech.png/64px-HC_Tech.png' },
  { id: 'EngiPurge', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Salvaged.png/64px-Salvaged.png' },

  // Artificer
  { id: 'FreeMage', name: 'Pause', description: 'Unlock Artificer', category: 'Survivor' },
  { id: 'MageMultiKill', name: 'Artificer: Massacre', description: 'Perform a multikill of 20 enemies.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Plasma_Bolt.png/64px-Plasma_Bolt.png' },
  { id: 'MageAirborneMultiKill', name: 'Artificer: Orbital Bombardment', description: 'Kill 15 enemies before touching the ground.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Ion_Surge.png/64px-Ion_Surge.png' },
  { id: 'MageFastBoss', name: 'Artificer: Chunked!', description: 'Fully defeat the teleport boss in a one-second burst of damage.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Cast_Nano-Spear.png/64px-Cast_Nano-Spear.png' },
  { id: 'MageClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Chrome.png/64px-Chrome.png' },
  { id: 'MageClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Meridian.png/64px-Meridian.png' },
  { id: 'MageDecompile', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Struct.png/64px-Struct.png' },

  // Mercenary
  { id: 'CompleteUnknownEnding', name: 'True Respite', description: 'Unlock Mercenary', category: 'Survivor' },
  { id: 'MercCompleteTrialWithFullHealth', name: 'Mercenary: Ethereal', description: 'Complete a Prismatic Trial without falling below 100% health.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Slicing_Winds.png/64px-Slicing_Winds.png' },
  { id: 'MercXSkillsInYSeconds', name: 'Mercenary: Flash of Blades', description: 'Use 20 abilities in 10 seconds.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Focused_Assault.png/64px-Focused_Assault.png' },
  { id: 'MercDontTouchGround', name: 'Mercenary: Demon of the Skies', description: 'Kill 15 enemies before touching the ground.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Rising_Thunder.png/64px-Rising_Thunder.png' },
  { id: 'MercClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Oni.png/64px-Oni.png' },
  { id: 'MercClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Frail.png/64px-Frail.png' },
  { id: 'MercPurge', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Murder.png/64px-Murder.png' },

  // REX
  { id: 'RescueTreebot', name: 'Power Plant', description: 'Unlock REX', category: 'Survivor' },
  { id: 'TreebotLowHealthTeleporter', name: 'REX: Bushwhacked', description: 'Complete an entire teleporter event while under 50% health.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/DIRECTIVE_Drill.png/64px-DIRECTIVE_Drill.png' },
  { id: 'TreebotBigHeal', name: 'REX: Full of Life', description: 'As REX, heal for 1000 health at once.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/DIRECTIVE_Harvest.png/64px-DIRECTIVE_Harvest.png' },
  { id: 'TreebotDunkClayBoss', name: 'REX: Dunked', description: 'Kill a Clay Dunestrider on Abandoned Aqueduct by throwing it into a pit.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Bramble_Volley.png/64px-Bramble_Volley.png' },
  { id: 'TreebotClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Smoothie.png/64px-Smoothie.png' },
  { id: 'TreebotClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Verdant.png/64px-Verdant.png' },
  { id: 'TreebotDecompile', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Merge_Branch.png/64px-Merge_Branch.png' },

  // Loader
  { id: 'DefeatSuperRoboBallBoss', name: 'Guidance Offline', description: 'Unlock Loader', category: 'Survivor' },
  { id: 'LoaderSpeedRun', name: 'Loader: Swing By', description: 'Reach and proceed through the Celestial Portal in 25 minutes or less.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Spiked_Fist.png/64px-Spiked_Fist.png' },
  { id: 'LoaderBigSlam', name: 'Loader: Earthshatter', description: 'Land a Charged Gauntlet hit at 300mph or higher.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Thunder_Gauntlet.png/64px-Thunder_Gauntlet.png' },
  { id: 'LoaderKillLoaders', name: 'Loader: The Thunderdome', description: "Kill three other Loaders in the Bulwark's ambry.", category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Thunderslam.png/64px-Thunderslam.png' },
  { id: 'LoaderClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Classic.png' },
  { id: 'LoaderClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Neoteric.png' },
  { id: 'LoaderDecompile', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Unloaded.png' },

  // Acrid
  { id: 'BeatArena', name: '...To Be Left Alone', description: 'Unlock Acrid', category: 'Survivor' },
  { id: 'CrocoTotalInfectionsMilestone', name: 'Acrid: Pandemic', description: 'Inflict Poison 1000 total times.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Blight.png/64px-Blight.png' },
  { id: 'CrocoKillScavenger', name: 'Acrid: Bad Medecine', description: 'Land the final blow on a Scavenger.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Ravenous_Bite.png/64px-Ravenous_Bite.png' },
  { id: 'CrocoKillWeakEnemiesMilestone', name: 'Acrid: Easy Prey', description: 'Land the killing blow on 50 total enemies that have 1 hit point left.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Frenzied_Leap.png/64px-Frenzied_Leap.png' },
  { id: 'CrocoClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Albino.png' },
  { id: 'CrocoClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Iguania.png' },
  { id: 'CrocoPurge', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Rewild.png' },

  // Captain
  { id: 'CompleteMainEnding', name: 'Washed Away', description: 'Unlock Captain', category: 'Survivor' },
  { id: 'CaptainVisitSeveralStages', name: 'Captain: Wanderlust', description: 'Visit 10 different environments in a single run', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Beacon_Resupply.png/64px-Beacon_Resupply.png' },
  { id: 'CaptainBuyMegaDrone', name: 'Captain: Worth Every Penny', description: 'Repair and recruit a TC-280 Prototype.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Beacon_Hacking.png/64px-Beacon_Hacking.png' },
  { id: 'CaptainSupplyDropFinale', name: 'Captain: Smushed', description: 'Kill the final boss using a Supply Beacon.', category: 'Skill', iconUrl: "https://riskofrain2.wiki.gg/images/thumb/OGM-72_'DIABLO'_Strike.png/64px-OGM-72_'DIABLO'_Strike.png" },
  { id: 'CaptainClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Admiral.png/64px-Admiral.png' },
  { id: 'CaptainClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Colonel.png/64px-Colonel.png' },
  { id: 'CaptainDecompile', name: 'Alloyed', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Private.png/64px-Private.png'  },

  // Railgunner
  { id: 'RailgunnerConsecutiveWeakPoints', name: 'Railgunner: Marksman', description: 'Fire 30 consecutive sniper shots without missing a Weak Point.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/HH44_Marksman.png/64px-HH44_Marksman.png' },
  { id: 'RailgunnerDealMassiveDamage', name: 'Railgunner: Annihilator', description: 'Deal 1,000,000 damage in one shot.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Cryocharge.png/64px-Cryocharge.png' },
  { id: 'RailgunnerAirborneMultiKill', name: 'Railgunner: Trickshot', description: 'Get 3 kills with a single Supercharge shot while airborne.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Polar_Field_Device.png/64px-Polar_Field_Device.png' },
  { id: 'RailgunnerClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Marksman.png' },
  { id: 'RailgunnerClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Deadeye.png/64px-Deadeye.png' },

  // Void Fiend
  { id: 'CompleteVoidEnding', name: 'Dragged Below', description: 'Unlock Void Fiend', category: 'Survivor' },
  { id: 'VoidSurvivorClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Purified.png' },
  { id: 'VoidSurvivorClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Sanctified.png/64px-Sanctified.png' },

  // Seeker
  { id: 'SeekerAirMultiHit', name: 'Seeker: Airborne Souls', description: 'Hit three or more airborne enemies with a single use of the exploding third hit of Spirit Punch.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Soul_Spiral.png/64px-Soul_Spiral.png' },
  { id: 'SeekerPerfect20Meditation', name: 'Seeker: Tranquility', description: 'As Seeker, use Meditate to restore 50% of your health.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Meditate.png/64px-Meditate.png' },
  { id: 'NukeSojourn', name: 'Seeker: Sojourn', description: 'As Seeker, kill 15 enemies with a single usage of Sojourn.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Sojourn.png/64px-Sojourn.png' },
  { id: 'SeekerClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Beyond.png/64px-Beyond.png' },
  { id: 'SeekerClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/SeekerMeridian.png' },

  // False Son
  { id: 'UnlockFalseSon', name: 'Purified Freedom', description: 'Unlock The False Son', category: 'Survivor' },
  { id: 'FalseSonLaserMultiKill', name: 'False Son: Stare Them Down', description: 'Kill 15 enemies with one activation of Laser of the Father.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Laser_of_the_Father.png/64px-Laser_of_the_Father.png' },
  { id: 'FalseSonKillMithrixWithGoldenGal', name: 'False Son: Inheritance', description: 'As False Son, defeat Mithrix while holding the Halcyon Seed.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Lunar_Spikes.png/64px-Lunar_Spikes.png' },
  { id: 'FalseSonGrowthChallenge', name: 'False Son: Unbound', description: 'As False Son, maintain maximum growth for 10 seconds.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Step_of_the_Brothers.png/64px-Step_of_the_Brothers.png' },
  { id: 'FalseSonClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Unchained.png/64px-Unchained.png' },
  { id: 'FalseSonClearMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/FalseSonMeridian.png' },

  // Chef
  { id: 'ActivateChef', name: 'Order Up!', description: 'Unlock Chef', category: 'Survivor' },
  { id: 'BarbecueQuantityBisonInRun', name: 'Chef: Barbecued Bison Recipe Complete', description: 'Complete 10 recipes by searing an oiled bison with Sear.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Sear.png/64px-Sear.png' },
  { id: 'BurnMithrix', name: 'Chef: Creme Brulee', description: 'As Chef, defeat Mithrix while he is burning.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Glaze.png/64px-Glaze.png' },
  { id: 'RolyPolyHitFiveAirEnemies', name: 'Chef: Rolling Pin', description: 'As Chef, hit 5 airborne enemies with a single Roll.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Roll.png/64px-Roll.png' },
  { id: 'ChefClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/PRES-10.png/64px-PRES-10.png' },
  { id: 'ChefMeridianEvent', name: 'Meridian', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/ChefMeridian.png' },

  // Drifter (Alloyed Collective DLC)
  { id: 'FreeDrifter', name: 'Drifter', description: 'Unlock Drifter', category: 'Survivor' },
  { id: 'DrifterJunkCubeAchievement', name: 'Drifter: Trash Compactor', description: 'As Drifter, carry 20 temporary items at once.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Junk_Cube.png/64px-Junk_Cube.png'  },
  { id: 'DrifterTornadoSlamAchievement', name: 'Drifter: In The Bag', description: '	As Drifter, defeat a boss from the challenge of the Mountain by tossing a Shrine of the Mountain.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Tornado_Slam.png/64px-Tornado_Slam.png'  },
  { id: 'DrifterTinkerAchievement', name: 'Drifter: Recycling', description: 'As Drifter, claim the contents of the lost backpack in the vault of Solutional Haunt.', category: 'Skill', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Tinker.png/64px-Tinker.png'  },
  { id: 'DrifterClearGameMonsoon', name: 'Mastery', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock', iconUrl: 'https://riskofrain2.wiki.gg/images/thumb/Collector.png/64px-Collector.png' },

  // Operator (DroneTech) (Alloyed Collective DLC)
  { 
    id: 'DroneTechTrickshot', 
    name: 'Operator: That All You Got?', 
    description: 'As Operator, kill 4 different types of monsters with a single ricochet.', 
    category: 'Skill', 
    iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/CMD-SWARM.png' 
  },
  { 
    id: 'DroneTechDefeatVultureBossWhileAirborne', 
    name: 'Operator: Not So Different', 
    description: 'As Operator, defeat the Teleporter boss on Conduit Canyon without touching the ground.', 
    category: 'Skill', 
    iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/FIREWALL.png' 
  },
  { 
    id: 'DroneTechJuggleLemurian', 
    name: 'Operator: That Just Happened', 
    description: 'As Operator, keep an Elder Lemurian airborne for 10 seconds.', 
    category: 'Skill', 
    iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Amp_Core.png' 
  },
  { 
    id: 'DroneTechUniqueDrones', 
    name: 'Operator: Putting Together a Team', 
    description: 'As Operator, recruit 5 different drones.', 
    category: 'Skill', 
    iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Transport_Drone_Mk_2.png' 
  },
  { 
    id: 'DroneTechClearGameMonsoon', 
    name: 'Mastery', 
    description: 'As Operator, beat the game or obliterate on Monsoon.', 
    category: 'Skin Unlock', 
    iconUrl: 'https://riskofrain2.wiki.gg/wiki/Special:FilePath/Drone_Division.png' 
  },
  // Artifacts
  { id: 'ObtainArtifactBomb', name: 'Trial of Spite', description: 'Complete the Trial of Spite.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Spite.png' },
  { id: 'ObtainArtifactCommand', name: 'Trial of Command', description: 'Complete the Trial of Command.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Command.png' },
  { id: 'ObtainArtifactDelusion', name: 'Trial of Delusion', description: 'Complete the Trial of Delusion.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Delusion.png' },
  { id: 'ObtainArtifactDevotion', name: 'Trial of Devotion', description: 'Complete the Trial of Devotion.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Devotion.png' },
  { id: 'ObtainArtifactEliteOnly', name: 'Trial of Honor', description: 'Complete the Trial of Honor.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Honor.png' },
  { id: 'ObtainArtifactEnigma', name: 'Trial of Enigma', description: 'Complete the Trial of Enigma.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Enigma.png' },
  { id: 'ObtainArtifactFriendlyFire', name: 'Trial of Chaos', description: 'Complete the Trial of Chaos.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Chaos.png' },
  { id: 'ObtainArtifactGlass', name: 'Trial of Glass', description: 'Complete the Trial of Glass.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Glass.png' },
  { id: 'ObtainArtifactMixEnemy', name: 'Trial of Dissonance', description: 'Complete the Trial of Dissonance.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Dissonance.png' },
  { id: 'ObtainArtifactMonsterTeamGainsItems', name: 'Trial of Evolution', description: 'Complete the Trial of Evolution.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Evolution.png' },
  { id: 'ObtainArtifactRandomSurvivorOnRespawn', name: 'Trial of Metamorphosis', description: 'Complete the Trial of Metamorphosis.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Metamorphosis.png' },
  { id: 'ObtainArtifactSacrifice', name: 'Trial of Sacrifice', description: 'Complete the Trial of Sacrifice.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Sacrifice.png' },
  { id: 'ObtainArtifactShadowClone', name: 'Trial of Vengeance', description: 'Complete the Trial of Vengeance.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Vengeance.png' },
  { id: 'ObtainArtifactSingleMonsterType', name: 'Trial of Kin', description: 'Complete the Trial of Kin.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Kin.png' },
  { id: 'ObtainArtifactSwarms', name: 'Trial of Swarms', description: 'Complete the Trial of Swarms.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Swarms.png' },
  { id: 'ObtainArtifactTeamDeath', name: 'Trial of Death', description: 'Complete the Trial of Death.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Death.png' },
  { id: 'ObtainArtifactWeakAssKnees', name: 'Trial of Frailty', description: 'Complete the Trial of Frailty.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Frailty.png' },
  { id: 'ObtainArtifactWispOnDeath', name: 'Trial of Soul', description: 'Complete the Trial of Soul.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Soul.png' },
  { id: 'ObtainArtifactRebirth', name: 'Experienced Rebirth', description: 'Gain the power of another life by offering to the Shrine of Rebirth.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Rebirth.png' },
  { id: 'ObtainArtifactPrestige', name: 'Trial of Prestige', description: 'Complete the Trial of Prestige.', category: 'Artifact', iconUrl: 'https://riskofrain2.wiki.gg/images/Artifact_of_Prestige.png' },
];

// Comprehensive list extracted from user XML for "Unlock All" functionality.
export const ALL_ACHIEVEMENTS_LIST = [
  "AttackSpeed", "AutomationActivation", "BeatArena", "BurnToDeath", "CaptainBuyMegaDrone", "CaptainClearGameMonsoon", 
  "CaptainVisitSeveralStages", "CompleteMainEnding", "CompleteMainEndingHard", "CarryLunarItems", 
  "ChargeTeleporterWhileNearDeath", "CleanupDuty", "CommandoClearGameMonsoon", "CommandoFastFirstStageClear", 
  "CommandoKillOverloadingWorm", "CommandoNonLunarEndurance", "Complete20Stages", "Complete30StagesCareer", 
  "CompleteMultiBossShrine", "CompletePrismaticTrial", "CompleteTeleporter", "CompleteTeleporterWithoutInjury", 
  "CompleteThreeStages", "CompleteThreeStagesWithoutHealing", "CompleteUnknownEnding", "CrocoClearGameMonsoon", 
  "CrocoKillScavenger", "CrocoKillWeakEnemiesMilestone", "CrocoTotalInfectionsMilestone", "DefeatSuperRoboBallBoss", 
  "Die20Times", "Die5Times", "Discover10UniqueTier1", "Discover5Equipment", "EngiArmy", "EngiClearGameMonsoon", 
  "EngiClearTeleporterWithZeroMonsters", "EngiKillBossQuick", "FailShrineChance", "FindDevilAltar", "FindTimedChest", 
  "FindUniqueNewtStatues", "FreeMage", "HardEliteBossKill", "HardHitter", "HuntressAllGlaiveBouncesKill", 
  "HuntressClearGameMonsoon", "HuntressCollectCrowbars", "HuntressMaintainFullHealthOnFrozenWall", 
  "KillBossQuantityInRun", "KillBossQuick", "KillElementalLemurians", "KillEliteMonster", "KillElitesMilestone", 
  "KillGoldTitanInOneCycle", "KillTotalEnemies", "LoaderBigSlam", "LoaderClearGameMonsoon", "LoaderSpeedRun", 
  "LogCollector", "LoopOnce", "MageAirborneMultiKill", "MageClearGameMonsoon", "MageFastBoss", "MageMultiKill", 
  "MajorMultikill", "MaxHealingShrine", "MercClearGameMonsoon", "MercCompleteTrialWithFullHealth", "MercDontTouchGround", 
  "MoveSpeed", "MultiCombatShrine", "NeverBackDown", "RepeatFirstTeleporter", "RepeatedlyDuplicateItems", 
  "RescueTreebot", "StayAlive1", "SuicideHermitCrabs", "ToolbotClearGameMonsoon", "ToolbotGuardTeleporter", 
  "ToolbotKillImpBossWithBfg", "TotalDronesRepaired", "TotalMoneyCollected", "TreebotClearGameMonsoon", 
  "TreebotDunkClayBoss", "TreebotLowHealthTeleporter", "UseThreePortals", "ObtainArtifactBomb", "ObtainArtifactCommand", 
  "ObtainArtifactEliteOnly", "ObtainArtifactEnigma", "ObtainArtifactFriendlyFire", "ObtainArtifactGlass", 
  "ObtainArtifactMixEnemy", "ObtainArtifactMonsterTeamGainsItems", "ObtainArtifactRandomSurvivorOnRespawn", 
  "ObtainArtifactSacrifice", "ObtainArtifactShadowClone", "ObtainArtifactSingleMonsterType", "ObtainArtifactSwarms", 
  "ObtainArtifactTeamDeath", "ObtainArtifactWeakAssKnees", "ObtainArtifactWispOnDeath", "Bandit2ClearGameMonsoon", 
  "Bandit2ConsecutiveReset", "Bandit2RevolverFinale", "Bandit2StackSuperBleed", "ToolbotBeatArenaLater", 
  "MercXSkillsInYSeconds", "TreebotBigHeal", "LoaderKillLoaders", "CaptainSupplyDropFinale", "RailgunnerDealMassiveDamage", 
  "CompleteVoidEnding", "RailgunnerClearGameMonsoon", "VoidSurvivorClearGameMonsoon", "RailgunnerAirborneMultiKill", 
  "RailgunnerConsecutiveWeakPoints", "ObtainArtifactDelusion", "ObtainArtifactDevotion", "SeekerAirMultiHit", 
  "DefeatFalseSon", "UnlockFalseSon", "ActivateChef", "CommandoClearMeridianEvent", "HuntressClearMeridianEvent", 
  "Bandit2ClearMeridianEvent", "ToolbotClearMeridianEvent", "EngiClearMeridianEvent", "MageClearMeridianEvent", 
  "MercClearMeridianEvent", "TreebotClearMeridianEvent", "LoaderClearMeridianEvent", "CrocoClearMeridianEvent", 
  "CaptainClearMeridianEvent", "RailgunnerClearMeridianEvent", "VoidSurvivorClearMeridianEvent", "SeekerClearGameMonsoon", 
  "FalseSonLaserMultiKill", "FalseSonClearGameMonsoon", "BarbecueQuantityBisonInRun", "ChefClearGameMonsoon", 
  "ObtainArtifactRebirth", "FalseSonKillMithrixWithGoldenGal", "FalseSonGrowthChallenge", "SeekerPerfect20Meditation", 
  "BurnMithrix", "NukeSojourn", "RolyPolyHitFiveAirEnemies", "SeekerClearMeridianEvent", "FalseSonClearMeridianEvent", 
  "ChefMeridianEvent", "FreeDrifter", "DroneTechTrickshot", "DroneTechDefeatVultureBossWhileAirborne", 
  "DroneTechJuggleLemurian", "DroneTechUniqueDrones", "DroneTechClearGameMonsoon", "DrifterJunkCubeAchievement", 
  "DrifterTornadoSlamAchievement", "DrifterTinkerAchievement", "DrifterClearGameMonsoon", "BeatVoidFields",
  "ObtainArtifactPrestige"
];

// Comprehensive list of Unlock Tokens for stats section (Items, Equip, Survivors, Artifacts, Skins)
// These tokens are required for the item to actually drop in-game, independent of the achievement being "complete".
export const ALL_UNLOCKS = [
  // --- Survivors ---
  "Characters.Huntress", "Characters.Bandit2", "Characters.Toolbot", "Characters.Engi",
  "Characters.Mage", "Characters.Merc", "Characters.Treebot", "Characters.Loader",
  "Characters.Croco", "Characters.Captain", "Characters.Railgunner", "Characters.VoidSurvivor",
  "Characters.Seeker", "Characters.Chef", "Characters.FalseSon", "Characters.Drifter", "Characters.DroneTech",

  // --- Artifacts ---
  "Artifacts.Bomb", "Artifacts.Command", "Artifacts.Delusion", "Artifacts.Devotion",
  "Artifacts.EliteOnly", "Artifacts.Enigma", "Artifacts.FriendlyFire", "Artifacts.Glass",
  "Artifacts.MixEnemy", "Artifacts.MonsterTeamGainsItems", "Artifacts.RandomSurvivorOnRespawn",
  "Artifacts.Sacrifice", "Artifacts.ShadowClone", "Artifacts.SingleMonsterType", "Artifacts.Swarms",
  "Artifacts.TeamDeath", "Artifacts.WeakAssKnees", "Artifacts.WispOnDeath", "Artifacts.Rebirth", "Artifacts.Prestige",

  // --- Items (Common/White) ---
  "Items.Bear", "Items.Hoof", "Items.Crowbar", "Items.Medkit", "Items.Firework", 
  "Items.SecondarySkillMagazine", "Items.TreasureCache", "Items.BossDamageBonus", "Items.CritGlasses", 
  "Items.PersonalShield", "Items.Mushroom", "Items.AttackSpeedOnCrit", "Items.BleedOnHit", 
  "Items.SprintOutOfCombat", "Items.FallBoots", "Items.WardOnLevel", "Items.Phasing", 
  "Items.HealOnCrit", "Items.HealWhileSafe", "Items.EquipmentMagazine", "Items.NovaOnHeal", 
  "Items.ShockNearby", "Items.Infusion", "Items.WarCryOnMultiKill", "Items.Clover", 
  "Items.Bandolier", "Items.ChainLightning", "Items.BounceNearby", "Items.StickyBomb", 
  "Items.StunChanceOnHit", "Items.BarrierOnOverHeal", "Items.GoldOnHit", "Items.Thorns", 
  "Items.DroneWeapons", "Items.Icicle", "Items.GhostOnKill", "Items.MageAttunement", 
  "Items.FlatHealth", "Items.Tooth", "Items.Pearl", "Items.ShinyPearl", "Items.BonusGoldPackOnKill",
  "Items.Squid", "Items.LaserTurbine", "Items.Seed", "Items.HardenedGlass", "Items.FocusConvergence",
  "Items.TitanGoldDuringTP", "Items.SprintWisp", "Items.BarrierOnKill", "Items.ArmorPlate",
  "Items.TpHealingNova", "Items.FightBonusAtLowHealth",

  // --- Items (Uncommon/Green) ---
  "Items.Feather", "Items.SlowOnHit", "Items.EquipmentMagazine", "Items.HealOnCrit",
  "Items.ExecuteLowHealthElite", "Items.EnergizedOnEquipmentUse", "Items.JumpBoost",
  "Items.Missile", "Items.ExplodeOnDeath", "Items.StrengthOfFallen", "Items.PrimarySkillShuriken",
  "Items.FreeChest", "Items.MoveSpeedOnKill", "Items.AttackSpeedOnCrit", "Items.TPHealingNova",

  // --- Items (Legendary/Red) ---
  "Items.ExtraLife", "Items.BounceNearby", "Items.ShockNearby", "Items.NovaOnHeal",
  "Items.GhostOnKill", "Items.ReduceAliens", "Items.Plant", "Items.IncreaseHealing",
  "Items.KillEliteMonster", "Items.HeadHunter", "Items.AlienHead", "Items.Talisman",
  "Items.UtilitySkillMagazine", "Items.LaserTurbine", "Items.Behemoth", "Items.Dagger",
  "Items.ImmuneToDebuff", "Items.CaptainDefenseMatrix",

  // --- Items (Void) ---
  "Items.VoidBear", "Items.VoidMegaCrabItem", "Items.VoidCoin", "Items.VoidMan",
  "Items.MissileVoid", "Items.ChainLightningVoid", "Items.VoidCritGlasses", "Items.VoidBackpack",
  "Items.VoidBleedOnHit", "Items.VoidTripleJump", "Items.VoidBarnacle",

  // --- Equipment ---
  "Equipment.CommandMissile", "Equipment.Fruit", "Equipment.DroneBackup", "Equipment.Meteor",
  "Equipment.Blackhole", "Equipment.CritOnUse", "Equipment.BFG", "Equipment.Jetpack",
  "Equipment.Lightning", "Equipment.PassiveHealing", "Equipment.BurnNearby", "Equipment.Scanner",
  "Equipment.Gateway", "Equipment.FireBallDash", "Equipment.Recycle", "Equipment.Cleanse",
  "Equipment.Tonic", "Equipment.GainArmor", "Equipment.LifestealOnHit", "Equipment.TeamWarCry",
  "Equipment.DeathProjectile", "Equipment.Saw",

  // --- Skins (Mastery & Alt) ---
  "Skins.Commando.Alt1", "Skins.Huntress.Alt1", "Skins.Bandit2.Alt1", "Skins.Toolbot.Alt1",
  "Skins.Engi.Alt1", "Skins.Mage.Alt1", "Skins.Merc.Alt1", "Skins.Treebot.Alt1",
  "Skins.Loader.Alt1", "Skins.Croco.Alt1", "Skins.Captain.Alt1", "Skins.Railgunner.Alt1",
  "Skins.VoidSurvivor.Alt1", "Skins.Seeker.Alt1", "Skins.Chef.Alt1", "Skins.FalseSon.Alt1",
  "Skins.Drifter.Alt1", "Skins.DroneTech.Alt1"
];
