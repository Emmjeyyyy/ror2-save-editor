
import { SurvivorDef, AchievementDef } from './types';

export const SURVIVORS: SurvivorDef[] = [
  { id: 'Commando', name: 'Commando', description: 'The reliable all-rounder.', requiredAchievement: '' },
  { id: 'Huntress', name: 'Huntress', description: 'High mobility glass cannon.', requiredAchievement: '' },
  { id: 'Bandit2', name: 'Bandit', description: 'High damage backstabber.', requiredAchievement: 'CompleteThreeStages' },
  { id: 'Toolbot', name: 'MUL-T', description: 'Versatile tank with dual equipment.', requiredAchievement: 'RepeatFirstTeleporter' },
  { id: 'Engi', name: 'Engineer', description: 'Static defense powerhouse.', requiredAchievement: 'Complete30StagesCareer' },
  { id: 'Mage', name: 'Artificer', description: 'Burst damage mage.', requiredAchievement: 'FreeMage' },
  { id: 'Merc', name: 'Mercenary', description: 'High skill melee assassin.', requiredAchievement: 'CompleteUnknownEnding' },
  { id: 'Treebot', name: 'REX', description: 'Health-sacrificing plant robot.', requiredAchievement: 'RescueTreebot' },
  { id: 'Loader', name: 'Loader', description: 'Heavy hitting grappler.', requiredAchievement: 'DefeatSuperRoboBallBoss' },
  { id: 'Croco', name: 'Acrid', description: 'Poison spreading beast.', requiredAchievement: 'BeatArena' },
  { id: 'Captain', name: 'Captain', description: 'Commander of the UES Safe Travels.', requiredAchievement: 'CompleteMainEnding' },
  { id: 'Railgunner', name: 'Railgunner', description: 'Long-range sniper (SotV DLC).', requiredAchievement: '' }, 
  { id: 'VoidSurvivor', name: 'Void Fiend', description: 'Corrupted survivor (SotV DLC).', requiredAchievement: 'CompleteVoidEnding' },
  { id: 'Seeker', name: 'Seeker', description: 'Soul-manipulating brawler (SotS DLC).', requiredAchievement: '' },
  { id: 'Chef', name: 'Chef', description: 'Master of culinary combat (SotS DLC).', requiredAchievement: 'ActivateChef' },
  { id: 'FalseSon', name: 'The False Son', description: 'Herald of the path (SotS DLC).', requiredAchievement: 'UnlockFalseSon' },
  { id: 'Drifter', name: 'Drifter', description: 'Scavenging brawler (Modded).', requiredAchievement: 'FreeDrifter' },
  { id: 'DroneTech', name: 'Operator', description: 'Drone specialist (Modded).', requiredAchievement: '' },
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
  { id: 'CommandoFastFirstStageClear', name: 'Commando: Godspeed', description: 'Fully charge the first-stage teleporter before the timer hits 5 minutes.', category: 'Skill' },
  { id: 'CommandoKillOverloadingWorm', name: 'Commando: Rolling Thunder', description: 'Land the killing blow on an Overloading Worm.', category: 'Skill' },
  { id: 'CommandoNonLunarEndurance', name: 'Commando: Incorruptible', description: 'Clear 20 stages in a single run without picking up any Lunar items.', category: 'Skill' },
  { id: 'CommandoClearGameMonsoon', name: 'Commando Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'CommandoClearMeridianEvent', name: 'Commando Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'CommandoPurge', name: 'Commando Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Huntress
  { id: 'HuntressCollectCrowbars', name: 'Huntress: One Shot, One Kill', description: 'Collect and carry 12 Crowbars at once.', category: 'Skill' },
  { id: 'HuntressAllGlaiveBouncesKill', name: 'Huntress: Finishing Touch', description: 'Land a killing blow with every possible hit of a single glaive.', category: 'Skill' },
  { id: 'HuntressMaintainFullHealthOnFrozenWall', name: 'Huntress: Piercing Wind', description: 'Start and finish Rallypoint Delta or Scorched Acres without falling below 100% health.', category: 'Skill' },
  { id: 'HuntressClearGameMonsoon', name: 'Huntress Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'HuntressClearMeridianEvent', name: 'Huntress Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'HuntressPurge', name: 'Huntress Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Bandit
  { id: 'CompleteThreeStages', name: 'Warrior', description: 'Unlock Bandit', category: 'Survivor' },
  { id: 'Bandit2ConsecutiveReset', name: 'Bandit: Classic Man', description: "Successfully use 'Lights Out' to reset your cooldowns 15 times in a row.", category: 'Skill' },
  { id: 'Bandit2StackSuperBleed', name: 'Bandit: Sadist', description: "Kill a monster with 20 stacks of Hemorrhage.", category: 'Skill' },
  { id: 'Bandit2RevolverFinale', name: 'Bandit: B&E', description: "Kill the final boss with 'Lights Out'.", category: 'Skill' },
  { id: 'Bandit2ClearGameMonsoon', name: 'Bandit Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'Bandit2ClearMeridianEvent', name: 'Bandit Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'Bandit2Decompile', name: 'Bandit Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // MUL-T
  { id: 'RepeatFirstTeleporter', name: 'Verified', description: 'Unlock MUL-T', category: 'Survivor' },
  { id: 'ToolbotGuardTeleporter', name: 'MUL-T: Pest Control', description: 'Defeat two Beetle Queens without leaving the teleporter zone.', category: 'Skill' },
  { id: 'ToolbotKillImpBossWithBfg', name: 'MUL-T: Gotcha!', description: 'Land the killing blow on an Imp Overlord with the Preon Accumulator.', category: 'Skill' },
  { id: 'ToolbotBeatArenaLater', name: 'MUL-T: Seventh Day', description: 'Clear the Void Fields on Stage 7 or later.', category: 'Skill' },
  { id: 'ToolbotClearGameMonsoon', name: 'MUL-T Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'ToolbotClearMeridianEvent', name: 'MUL-T Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'ToolbotPurge', name: 'MUL-T Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Engineer
  { id: 'Complete30StagesCareer', name: 'Engineering Perfection', description: 'Unlock Engineer', category: 'Survivor' },
  { id: 'EngiArmy', name: 'Engineer: Better With Friends', description: 'Recruit 12 minions at one time.', category: 'Skill' },
  { id: 'EngiKillBossQuick', name: 'Engineer: 100% Calculated', description: 'Defeat the teleporter boss in less than 5 seconds after it spawns.', category: 'Skill' },
  { id: 'EngiClearTeleporterWithZeroMonsters', name: 'Engineer: Zero Sum', description: 'Finish charging the teleporter with zero monsters remaining.', category: 'Skill' },
  { id: 'EngiClearGameMonsoon', name: 'Engineer Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'EngiClearMeridianEvent', name: 'Engineer Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'EngiPurge', name: 'Engineer Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Artificer
  { id: 'FreeMage', name: 'Pause', description: 'Unlock Artificer', category: 'Survivor' },
  { id: 'MageMultiKill', name: 'Artificer: Massacre', description: 'Perform a multikill of 20 enemies.', category: 'Skill' },
  { id: 'MageAirborneMultiKill', name: 'Artificer: Orbital Bombardment', description: 'Kill 15 enemies before touching the ground.', category: 'Skill' },
  { id: 'MageFastBoss', name: 'Artificer: Chunked!', description: 'Fully defeat the teleport boss in a one-second burst of damage.', category: 'Skill' },
  { id: 'MageClearGameMonsoon', name: 'Artificer Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'MageClearMeridianEvent', name: 'Artificer Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'MageDecompile', name: 'Artificer Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Mercenary
  { id: 'CompleteUnknownEnding', name: 'True Respite', description: 'Unlock Mercenary', category: 'Survivor' },
  { id: 'MercCompleteTrialWithFullHealth', name: 'Mercenary: Ethereal', description: 'Complete a Prismatic Trial without falling below 100% health.', category: 'Skill' },
  { id: 'MercXSkillsInYSeconds', name: 'Mercenary: Flash of Blades', description: 'Use 20 abilities in 10 seconds.', category: 'Skill' },
  { id: 'MercDontTouchGround', name: 'Mercenary: Demon of the Skies', description: 'Kill 15 enemies before touching the ground.', category: 'Skill' },
  { id: 'MercClearGameMonsoon', name: 'Mercenary Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'MercClearMeridianEvent', name: 'Mercenary Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'MercPurge', name: 'Mercenary Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // REX
  { id: 'RescueTreebot', name: 'Power Plant', description: 'Unlock REX', category: 'Survivor' },
  { id: 'TreebotLowHealthTeleporter', name: 'REX: Bushwhacked', description: 'Complete an entire teleporter event while under 50% health.', category: 'Skill' },
  { id: 'TreebotBigHeal', name: 'REX: Bushwhacked (Alt)', description: 'Complete an entire teleporter event while under 50% health.', category: 'Skill' },
  { id: 'TreebotDunkClayBoss', name: 'REX: Dunked', description: 'Kill a Clay Dunestrider on Abandoned Aqueduct by throwing it into a pit.', category: 'Skill' },
  { id: 'TreebotClearGameMonsoon', name: 'REX Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'TreebotClearMeridianEvent', name: 'REX Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'TreebotDecompile', name: 'REX Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Loader
  { id: 'DefeatSuperRoboBallBoss', name: 'Guidance Offline', description: 'Unlock Loader', category: 'Survivor' },
  { id: 'LoaderSpeedRun', name: 'Loader: Swing By', description: 'Reach and proceed through the Celestial Portal in 25 minutes or less.', category: 'Skill' },
  { id: 'LoaderBigSlam', name: 'Loader: Earthshatter', description: 'Land a Charged Gauntlet hit at 300mph or higher.', category: 'Skill' },
  { id: 'LoaderKillLoaders', name: 'Loader: The Thunderdome', description: "Kill three other Loaders in the Bulwark's ambry.", category: 'Skill' },
  { id: 'LoaderClearGameMonsoon', name: 'Loader Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'LoaderClearMeridianEvent', name: 'Loader Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'LoaderDecompile', name: 'Loader Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Acrid
  { id: 'BeatArena', name: '...To Be Left Alone', description: 'Unlock Acrid', category: 'Survivor' },
  { id: 'CrocoTotalInfectionsMilestone', name: 'Acrid: Pandemic', description: 'Inflict Poison 1000 total times.', category: 'Skill' },
  { id: 'CrocoKillScavenger', name: 'Acrid: Bad Medecine', description: 'Land the final blow on a Scavenger.', category: 'Skill' },
  { id: 'CrocoKillWeakEnemiesMilestone', name: 'Acrid: Easy Prey', description: 'Land the killing blow on 50 total enemies that have 1 hit point left.', category: 'Skill' },
  { id: 'CrocoClearGameMonsoon', name: 'Acrid Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'CrocoClearMeridianEvent', name: 'Acrid Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'CrocoPurge', name: 'Acrid Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Captain
  { id: 'CompleteMainEnding', name: 'Washed Away', description: 'Unlock Captain', category: 'Survivor' },
  { id: 'CaptainVisitSeveralStages', name: 'Captain: Wanderlust', description: 'Visit 10 different environments in a single run', category: 'Skill' },
  { id: 'CaptainBuyMegaDrone', name: 'Captain: Worth Every Penny', description: 'Repair and recruit a TC-280 Prototype.', category: 'Skill' },
  { id: 'CaptainSupplyDropFinale', name: 'Captain: Smushed', description: 'Kill the final boss using a Supply Beacon.', category: 'Skill' },
  { id: 'CaptainClearGameMonsoon', name: 'Captain Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'CaptainClearMeridianEvent', name: 'Captain Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },
  { id: 'CaptainDecompile', name: 'Captain Alloyed Skin', description: 'Purge/Decompile from Alloyed Collective DLC.', category: 'Skin Unlock' },

  // Railgunner
  { id: 'RailgunnerConsecutiveWeakPoints', name: 'Railgunner: Marksman', description: 'Fire 30 consecutive sniper shots without missing a Weak Point.', category: 'Skill' },
  { id: 'RailgunnerDealMassiveDamage', name: 'Railgunner: Annihilator', description: 'Deal 1,000,000 damage in one shot.', category: 'Skill' },
  { id: 'RailgunnerAirborneMultiKill', name: 'Railgunner: Trickshot', description: 'Get 3 kills with a single Supercharge shot while airborne.', category: 'Skill' },
  { id: 'RailgunnerClearGameMonsoon', name: 'Railgunner Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'RailgunnerClearMeridianEvent', name: 'Railgunner Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },

  // Void Fiend
  { id: 'CompleteVoidEnding', name: 'Dragged Below', description: 'Unlock Void Fiend', category: 'Survivor' },
  { id: 'VoidSurvivorClearGameMonsoon', name: 'Void Fiend Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'VoidSurvivorClearMeridianEvent', name: 'Void Fiend Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },

  // Seeker
  { id: 'SeekerAirMultiHit', name: 'Seeker: Airborne Souls', description: 'Hit three or more airborne enemies with a single use of the exploding third hit of Spirit Punch.', category: 'Skill' },
  { id: 'SeekerPerfect20Meditation', name: 'Seeker: Tranquility', description: 'As Seeker, use Meditate to restore 50% of your health.', category: 'Skill' },
  { id: 'NukeSojourn', name: 'Seeker: Sojourn', description: 'As Seeker, kill 15 enemies with a single usage of Sojourn.', category: 'Skill' },
  { id: 'SeekerClearGameMonsoon', name: 'Seeker Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'SeekerClearMeridianEvent', name: 'Seeker Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },

  // False Son
  { id: 'UnlockFalseSon', name: 'Purified Freedom', description: 'Unlock The False Son', category: 'Survivor' },
  { id: 'FalseSonLaserMultiKill', name: 'False Son: Stare Them Down', description: 'Kill 15 enemies with one activation of Laser of the Father.', category: 'Skill' },
  { id: 'FalseSonKillMithrixWithGoldenGal', name: 'False Son: Inheritance', description: 'As False Son, defeat Mithrix while holding the Halcyon Seed.', category: 'Skill' },
  { id: 'FalseSonGrowthChallenge', name: 'False Son: Unbound', description: 'As False Son, maintain maximum growth for 10 seconds.', category: 'Skill' },
  { id: 'FalseSonClearGameMonsoon', name: 'False Son Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'FalseSonClearMeridianEvent', name: 'False Son Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },

  // Chef
  { id: 'ActivateChef', name: 'Order Up!', description: 'Unlock Chef', category: 'Survivor' },
  { id: 'BarbecueQuantityBisonInRun', name: 'Chef: Barbecued Bison Recipe Complete', description: 'Complete 10 recipes by searing an oiled bison with Sear.', category: 'Skill' },
  { id: 'BurnMithrix', name: 'Chef: Creme Brulee', description: 'As Chef, defeat Mithrix while he is burning.', category: 'Skill' },
  { id: 'RolyPolyHitFiveAirEnemies', name: 'Chef: Rolling Pin', description: 'As Chef, hit 5 airborne enemies with a single Roll.', category: 'Skill' },
  { id: 'ChefClearGameMonsoon', name: 'Chef Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },
  { id: 'ChefMeridianEvent', name: 'Chef Meridian Skin', description: 'Complete the Event on Prime Meridian.', category: 'Skin Unlock' },

  // Drifter (Modded)
  { id: 'FreeDrifter', name: 'Drifter', description: 'Unlock Drifter', category: 'Survivor' },
  { id: 'DrifterJunkCubeAchievement', name: 'Drifter: Cube', description: 'As Drifter, execute a boss with Consume.', category: 'Skill' },
  { id: 'DrifterTornadoSlamAchievement', name: 'Drifter: Spin to Win', description: 'As Drifter, kill 5 enemies with one Tornado Slam.', category: 'Skill' },
  { id: 'DrifterTinkerAchievement', name: 'Drifter: Recycling', description: 'As Drifter, generate 20 scrap.', category: 'Skill' },
  { id: 'DrifterClearGameMonsoon', name: 'Drifter Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },

  // Operator (DroneTech) (Modded)
  { id: 'DroneTechTrickshot', name: 'Operator: Trickshot', description: 'As Operator, land a trickshot.', category: 'Skill' },
  { id: 'DroneTechDefeatVultureBossWhileAirborne', name: 'Operator: Dogfight', description: 'As Operator, defeat an Alloy Worship Unit while airborne.', category: 'Skill' },
  { id: 'DroneTechJuggleLemurian', name: 'Operator: Juggler', description: 'As Operator, juggle a Lemurian for 5 seconds.', category: 'Skill' },
  { id: 'DroneTechUniqueDrones', name: 'Operator: Army', description: 'As Operator, have 6 unique drone types active.', category: 'Skill' },
  { id: 'DroneTechClearGameMonsoon', name: 'Operator Mastery Skin', description: 'Beat the game or obliterate on Monsoon.', category: 'Skin Unlock' },

  // Artifacts
  { id: 'ObtainArtifactBomb', name: 'Trial of Spite', description: 'Complete the Trial of Spite.', category: 'Artifact' },
  { id: 'ObtainArtifactCommand', name: 'Trial of Command', description: 'Complete the Trial of Command.', category: 'Artifact' },
  { id: 'ObtainArtifactDelusion', name: 'Trial of Delusion', description: 'Complete the Trial of Delusion.', category: 'Artifact' },
  { id: 'ObtainArtifactDevotion', name: 'Trial of Devotion', description: 'Complete the Trial of Devotion.', category: 'Artifact' },
  { id: 'ObtainArtifactEliteOnly', name: 'Trial of Honor', description: 'Complete the Trial of Honor.', category: 'Artifact' },
  { id: 'ObtainArtifactEnigma', name: 'Trial of Enigma', description: 'Complete the Trial of Enigma.', category: 'Artifact' },
  { id: 'ObtainArtifactFriendlyFire', name: 'Trial of Chaos', description: 'Complete the Trial of Chaos.', category: 'Artifact' },
  { id: 'ObtainArtifactGlass', name: 'Trial of Glass', description: 'Complete the Trial of Glass.', category: 'Artifact' },
  { id: 'ObtainArtifactMixEnemy', name: 'Trial of Dissonance', description: 'Complete the Trial of Dissonance.', category: 'Artifact' },
  { id: 'ObtainArtifactMonsterTeamGainsItems', name: 'Trial of Evolution', description: 'Complete the Trial of Evolution.', category: 'Artifact' },
  { id: 'ObtainArtifactRandomSurvivorOnRespawn', name: 'Trial of Metamorphosis', description: 'Complete the Trial of Metamorphosis.', category: 'Artifact' },
  { id: 'ObtainArtifactSacrifice', name: 'Trial of Sacrifice', description: 'Complete the Trial of Sacrifice.', category: 'Artifact' },
  { id: 'ObtainArtifactShadowClone', name: 'Trial of Vengeance', description: 'Complete the Trial of Vengeance.', category: 'Artifact' },
  { id: 'ObtainArtifactSingleMonsterType', name: 'Trial of Kin', description: 'Complete the Trial of Kin.', category: 'Artifact' },
  { id: 'ObtainArtifactSwarms', name: 'Trial of Swarms', description: 'Complete the Trial of Swarms.', category: 'Artifact' },
  { id: 'ObtainArtifactTeamDeath', name: 'Trial of Death', description: 'Complete the Trial of Death.', category: 'Artifact' },
  { id: 'ObtainArtifactWeakAssKnees', name: 'Trial of Frailty', description: 'Complete the Trial of Frailty.', category: 'Artifact' },
  { id: 'ObtainArtifactWispOnDeath', name: 'Trial of Soul', description: 'Complete the Trial of Soul.', category: 'Artifact' },
  { id: 'ObtainArtifactRebirth', name: 'Experienced Rebirth', description: 'Gain the power of another life by offering to the Shrine of Rebirth.', category: 'Artifact' },
  { id: 'ObtainArtifactPrestige', name: 'Trial of Prestige', description: 'Complete the Trial of Prestige.', category: 'Artifact' },
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
