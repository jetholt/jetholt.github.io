// Global variables
var globalIsPremade = false; // If it's a premade character like Caius, Smokeskin-Killer, etc
var globalRace = "";
var globalBirthsign = "";
var globalClassName = "";
var globalClassSpecialization = "";
var globalClassAttributes = [];
var globalClassSkills = [];
var globalObjective = "";
var globalStipulations = [];

const RacesType = Object.freeze({
    ARGONIAN: "Argonian",
    BRETON: "Breton",
    DARK_ELF: "Dark Elf",
    HIGH_ELF: "High Elf",
    IMPERIAL: "Imperial",
    KHAJIIT: "Khajiit",
    NORD: "Nord",
    ORC: "Orc",
    REDGUARD: "Redguard",
    WOOD_ELF: "Wood Elf",
    AYLEID: "Ayleid",
    CATHAY: "Cathay",
    CATHAY_RAHT: "Cathay-raht",
    CHIMERI_QUEY: "Chimeri-Quey",
    DAGI_RAHT: "Dagi-raht",
    DUADRI: "Duadri",
    IMGA: "Imga",
    KEPTU_QUEY: "Keptu-Quey",
    MALAHK_ORC: "Malahk Orc",
    NAGA: "Naga",
    OHMES: "Ohmes",
    OHMES_RAHT: "Ohmes-raht",
    REACHMAN: "Reachman",
    RIVERFOLK: "Riverfolk",
    SEA_ELF: "Sea Elf",
    SUTHAY: "Suthay",
    TOJAY: "Tojay",
    YNESAI: "Ynesai" 
});

const SpecializationType = Object.freeze({
    COMBAT: "Combat",
    MAGIC: "Magic",
    STEALTH: "Stealth"
});

const AttributesType = Object.freeze({
    STRENGTH: "Strength",
    INTELLIGENCE: "Intelligence",
    WILLPOWER: "Willpower",
    AGILITY: "Agility",
    SPEED: "Speed",
    ENDURANCE: "Endurance",
    PERSONALITY: "Personality",
    LUCK: "Luck"
});

const SkillsType = Object.freeze({
    ARMORER: "Armorer",
    ATHLETICS: "Athletics",
    AXE: "Axe",
    BLOCK: "Block",
    BLUNT_WEAPON: "Blunt Weapon",
    HEAVY_ARMOR: "Heavy Armor",
    LONG_BLADE: "Long Blade",
    MEDIUM_ARMOR: "Medium Armor",
    SPEAR: "Spear",
    ALCHEMY: "Alchemy",
    ALTERATION: "Alteration",
    CONJURATION: "Conjuration",
    DESTRUCTION: "Destruction",
    ENCHANT: "Enchant",
    ILLUSION: "Illusion",
    MYSTICISM: "Mysticism",
    RESTORATION: "Restoration",
    UNARMORED: "Unarmored",
    ACROBATICS: "Acrobatics",
    HAND_TO_HAND: "Hand-to-Hand",
    LIGHT_ARMOR: "Light Armor",
    MARKSMAN: "Marksman",
    MERCANTILE: "Mercantile",
    SECURITY: "Security",
    SHORT_BLADE: "Short Blade",
    SNEAK: "Sneak",
    SPEECHCRAFT: "Speechcraft"
});

const BirthsignType = Object.freeze({
    WARRIOR: "The Warrior",
    MAGE: "The Mage",
    THIEF: "The Thief",
    SERPENT: "The Serpent",
    LADY: "The Lady",
    STEED: "The Steed",
    LORD: "The Lord",
    APPRENTICE: "The Apprentice",
    ATRONACH: "The Atronach",
    RITUAL: "The Ritual",
    LOVER: "The Lover",
    SHADOW: "The Shadow",
    TOWER: "The Tower"
});

const ClassesType = Object.freeze({
    "Acrobat": {
        "name": "Acrobat",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.ENDURANCE],
        "majors": [SkillsType.ACROBATICS, SkillsType.ATHLETICS, SkillsType.MARKSMAN, SkillsType.SNEAK, SkillsType.UNARMORED],
        "minors": [SkillsType.SPEECHCRAFT, SkillsType.ALTERATION, SkillsType.SPEAR, SkillsType.HAND_TO_HAND, SkillsType.LIGHT_ARMOR],
    },
    "Agent": {
        "name": "Agent",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.AGILITY],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.SNEAK, SkillsType.ACROBATICS, SkillsType.LIGHT_ARMOR, SkillsType.SHORT_BLADE],
        "minors": [SkillsType.MERCANTILE, SkillsType.CONJURATION, SkillsType.BLOCK, SkillsType.UNARMORED, SkillsType.ILLUSION],
    },
    "Archer": {
        "name": "Archer",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.AGILITY, AttributesType.STRENGTH],
        "majors": [SkillsType.MARKSMAN, SkillsType.LONG_BLADE, SkillsType.BLOCK, SkillsType.ATHLETICS, SkillsType.LIGHT_ARMOR],
        "minors": [SkillsType.UNARMORED, SkillsType.SPEAR, SkillsType.RESTORATION, SkillsType.SNEAK, SkillsType.MEDIUM_ARMOR],
    },
    "Assassin": {
        "name": "Assassin",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.SPEED, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.SNEAK, SkillsType.MARKSMAN, SkillsType.LIGHT_ARMOR, SkillsType.SHORT_BLADE, SkillsType.ACROBATICS],
        "minors": [SkillsType.SECURITY, SkillsType.LONG_BLADE, SkillsType.ALCHEMY, SkillsType.BLOCK, SkillsType.ATHLETICS],
    },
    "Barbarian": {
        "name": "Barbarian",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.SPEED],
        "majors": [SkillsType.AXE, SkillsType.MEDIUM_ARMOR, SkillsType.BLUNT_WEAPON, SkillsType.ATHLETICS, SkillsType.BLOCK],
        "minors": [SkillsType.ACROBATICS, SkillsType.LIGHT_ARMOR, SkillsType.ARMORER, SkillsType.MARKSMAN, SkillsType.UNARMORED],
    },
	"Bard": {
        "name": "Bard",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.ALCHEMY, SkillsType.ACROBATICS, SkillsType.LONG_BLADE, SkillsType.BLOCK],
        "minors": [SkillsType.MERCANTILE, SkillsType.ILLUSION, SkillsType.MEDIUM_ARMOR, SkillsType.ENCHANT, SkillsType.SECURITY],
    },
    "Battlemage": {
        "name": "Battlemage",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.STRENGTH],
        "majors": [SkillsType.ALTERATION, SkillsType.DESTRUCTION, SkillsType.CONJURATION, SkillsType.AXE, SkillsType.HEAVY_ARMOR],
        "minors": [SkillsType.MYSTICISM, SkillsType.LONG_BLADE, SkillsType.MARKSMAN, SkillsType.ENCHANT, SkillsType.ALCHEMY],
    },
    "Crusader": {
        "name": "Crusader",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.AGILITY, AttributesType.STRENGTH],
        "majors": [SkillsType.BLUNT_WEAPON, SkillsType.LONG_BLADE, SkillsType.DESTRUCTION, SkillsType.HEAVY_ARMOR, SkillsType.BLOCK],
        "minors": [SkillsType.RESTORATION, SkillsType.ARMORER, SkillsType.HAND_TO_HAND, SkillsType.MEDIUM_ARMOR, SkillsType.ALCHEMY],
    },
    "Healer": {
        "name": "Healer",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.WILLPOWER, AttributesType.PERSONALITY],
        "majors": [SkillsType.RESTORATION, SkillsType.MYSTICISM, SkillsType.ALTERATION, SkillsType.HAND_TO_HAND, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.ILLUSION, SkillsType.ALCHEMY, SkillsType.UNARMORED, SkillsType.LIGHT_ARMOR, SkillsType.BLUNT_WEAPON],
    },
    "Knight": {
        "name": "Knight",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.PERSONALITY],
        "majors": [SkillsType.LONG_BLADE, SkillsType.AXE, SkillsType.SPEECHCRAFT, SkillsType.HEAVY_ARMOR, SkillsType.BLOCK],
        "minors": [SkillsType.RESTORATION, SkillsType.MERCANTILE, SkillsType.MEDIUM_ARMOR, SkillsType.ENCHANT, SkillsType.ARMORER],
    },
    "Mage": {
        "name": "Mage",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.WILLPOWER],
        "majors": [SkillsType.MYSTICISM, SkillsType.DESTRUCTION, SkillsType.ALTERATION, SkillsType.ILLUSION, SkillsType.RESTORATION],
        "minors": [SkillsType.ENCHANT, SkillsType.ALCHEMY, SkillsType.UNARMORED, SkillsType.SHORT_BLADE, SkillsType.CONJURATION],
    },
    "Monk": {
        "name": "Monk",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.WILLPOWER],
        "majors": [SkillsType.HAND_TO_HAND, SkillsType.UNARMORED, SkillsType.ATHLETICS, SkillsType.ACROBATICS, SkillsType.SNEAK],
        "minors": [SkillsType.BLOCK, SkillsType.MARKSMAN, SkillsType.LIGHT_ARMOR, SkillsType.RESTORATION, SkillsType.BLUNT_WEAPON],
    },
    "Nightblade": {
        "name": "Nightblade",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.WILLPOWER, AttributesType.SPEED],
        "majors": [SkillsType.MYSTICISM, SkillsType.ILLUSION, SkillsType.ALTERATION, SkillsType.SNEAK, SkillsType.SHORT_BLADE],
        "minors": [SkillsType.LIGHT_ARMOR, SkillsType.UNARMORED, SkillsType.DESTRUCTION, SkillsType.MARKSMAN, SkillsType.SECURITY],
    },
    "Pilgrim": {
        "name": "Pilgrim",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.ENDURANCE],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.MARKSMAN, SkillsType.RESTORATION, SkillsType.MEDIUM_ARMOR],
        "minors": [SkillsType.ILLUSION, SkillsType.HAND_TO_HAND, SkillsType.SHORT_BLADE, SkillsType.BLOCK, SkillsType.ALCHEMY],
    },
    "Rogue": {
        "name": "Rogue",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.SPEED, AttributesType.PERSONALITY],
        "majors": [SkillsType.SHORT_BLADE, SkillsType.MERCANTILE, SkillsType.AXE, SkillsType.LIGHT_ARMOR, SkillsType.HAND_TO_HAND],
        "minors": [SkillsType.BLOCK, SkillsType.MEDIUM_ARMOR, SkillsType.SPEECHCRAFT, SkillsType.ATHLETICS, SkillsType.LONG_BLADE],
    },
    "Scout": {
        "name": "Scout",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.SPEED, AttributesType.ENDURANCE],
        "majors": [SkillsType.SNEAK, SkillsType.LONG_BLADE, SkillsType.MEDIUM_ARMOR, SkillsType.ATHLETICS, SkillsType.BLOCK],
        "minors": [SkillsType.MARKSMAN, SkillsType.ALCHEMY, SkillsType.ALTERATION, SkillsType.LIGHT_ARMOR, SkillsType.UNARMORED],
    },
    "Sorcerer": {
        "name": "Sorcerer",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.ENDURANCE],
        "majors": [SkillsType.ENCHANT, SkillsType.CONJURATION, SkillsType.MYSTICISM, SkillsType.DESTRUCTION, SkillsType.ALTERATION],
        "minors": [SkillsType.ILLUSION, SkillsType.MEDIUM_ARMOR, SkillsType.HEAVY_ARMOR, SkillsType.MARKSMAN, SkillsType.SHORT_BLADE],
    },
    "Spellsword": {
        "name": "Spellsword",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.WILLPOWER, AttributesType.ENDURANCE],
        "majors": [SkillsType.BLOCK, SkillsType.RESTORATION, SkillsType.LONG_BLADE, SkillsType.DESTRUCTION, SkillsType.ALTERATION],
        "minors": [SkillsType.BLUNT_WEAPON, SkillsType.ENCHANT, SkillsType.ALCHEMY, SkillsType.MEDIUM_ARMOR, SkillsType.AXE],
    },
    "Thief": {
        "name": "Thief",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.SPEED, AttributesType.AGILITY],
        "majors": [SkillsType.SECURITY, SkillsType.SNEAK, SkillsType.ACROBATICS, SkillsType.LIGHT_ARMOR, SkillsType.SHORT_BLADE],
        "minors": [SkillsType.MARKSMAN, SkillsType.SPEECHCRAFT, SkillsType.HAND_TO_HAND, SkillsType.MERCANTILE, SkillsType.ATHLETICS],
    },
    "Warrior": {
        "name": "Warrior",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.LONG_BLADE, SkillsType.MEDIUM_ARMOR, SkillsType.HEAVY_ARMOR, SkillsType.ATHLETICS, SkillsType.BLOCK],
        "minors": [SkillsType.ARMORER, SkillsType.SPEAR, SkillsType.MARKSMAN, SkillsType.AXE, SkillsType.BLUNT_WEAPON],
    },
    "Witchhunter": {
        "name": "Witchhunter",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.AGILITY],
        "majors": [SkillsType.CONJURATION, SkillsType.ENCHANT, SkillsType.ALCHEMY, SkillsType.LIGHT_ARMOR, SkillsType.MARKSMAN],
        "minors": [SkillsType.UNARMORED, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.SNEAK, SkillsType.MYSTICISM],
    },
	"Alchemist": {
        "name": "Alchemist",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.LUCK],
        "majors": [SkillsType.ALCHEMY, SkillsType.ALTERATION, SkillsType.CONJURATION, SkillsType.ENCHANT, SkillsType.MYSTICISM],
        "minors": [SkillsType.UNARMORED, SkillsType.SPEECHCRAFT, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND]
    },
    "Apothecary": {
        "name": "Apothecary",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.AGILITY],
        "majors": [SkillsType.ALCHEMY, SkillsType.SECURITY, SkillsType.MERCANTILE, SkillsType.BLUNT_WEAPON, SkillsType.DESTRUCTION],
        "minors": [SkillsType.LIGHT_ARMOR, SkillsType.BLOCK, SkillsType.ENCHANT, SkillsType.RESTORATION, SkillsType.SPEECHCRAFT]
    },
    "Bookseller": {
        "name": "Bookseller",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.SECURITY, SkillsType.MYSTICISM, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.UNARMORED, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.LIGHT_ARMOR]
    },
    "Buoyant Armiger": {
        "name": "Buoyant Armiger",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.WILLPOWER],
        "majors": [SkillsType.MARKSMAN, SkillsType.LIGHT_ARMOR, SkillsType.DESTRUCTION, SkillsType.SHORT_BLADE, SkillsType.SNEAK],
        "minors": [SkillsType.RESTORATION, SkillsType.ATHLETICS, SkillsType.BLOCK, SkillsType.ACROBATICS, SkillsType.SPEECHCRAFT]
    },
    "Caravaner": {
        "name": "Caravaner",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.ENDURANCE],
        "majors": [SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.SECURITY, SkillsType.ACROBATICS, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.UNARMORED, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.LIGHT_ARMOR]
    },
    "Champion": {
        "name": "Champion",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.SPEED],
        "majors": [SkillsType.AXE, SkillsType.BLOCK, SkillsType.MEDIUM_ARMOR, SkillsType.LIGHT_ARMOR, SkillsType.MARKSMAN],
        "minors": [SkillsType.ATHLETICS, SkillsType.RESTORATION, SkillsType.ACROBATICS, SkillsType.SNEAK, SkillsType.ALTERATION]
    },
    "Clothier": {
        "name": "Clothier",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.AGILITY],
        "majors": [SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.SECURITY, SkillsType.ACROBATICS, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.UNARMORED, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.LIGHT_ARMOR]
    },
    "Commoner": {
        "name": "Commoner",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.ENDURANCE],
        "majors": [SkillsType.HAND_TO_HAND, SkillsType.UNARMORED, SkillsType.ATHLETICS, SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE],
        "minors": [SkillsType.SECURITY, SkillsType.BLOCK, SkillsType.SHORT_BLADE, SkillsType.SNEAK, SkillsType.ACROBATICS]
    },
    "Dreamer": {
        "name": "Dreamer",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.SPEED],
        "majors": [SkillsType.MARKSMAN, SkillsType.LIGHT_ARMOR, SkillsType.BLUNT_WEAPON, SkillsType.SHORT_BLADE, SkillsType.SNEAK],
        "minors": [SkillsType.BLOCK, SkillsType.ACROBATICS, SkillsType.ATHLETICS, SkillsType.SECURITY, SkillsType.HAND_TO_HAND]
    },
    "Drillmaster": {
        "name": "Drillmaster",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.AGILITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.BLOCK, SkillsType.ACROBATICS, SkillsType.UNARMORED, SkillsType.ATHLETICS, SkillsType.HAND_TO_HAND],
        "minors": [SkillsType.LONG_BLADE, SkillsType.SHORT_BLADE, SkillsType.BLUNT_WEAPON, SkillsType.AXE, SkillsType.SPEAR]
    },
    "Enchanter": {
        "name": "Enchanter",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.WILLPOWER],
        "majors": [SkillsType.ENCHANT, SkillsType.BLUNT_WEAPON, SkillsType.ALCHEMY, SkillsType.DESTRUCTION, SkillsType.UNARMORED],
        "minors": [SkillsType.ALTERATION, SkillsType.ILLUSION, SkillsType.CONJURATION, SkillsType.MYSTICISM, SkillsType.RESTORATION]
    },
    "Enforcer": {
        "name": "Enforcer",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.SPEED],
        "majors": [SkillsType.SHORT_BLADE, SkillsType.LIGHT_ARMOR, SkillsType.MARKSMAN, SkillsType.SNEAK, SkillsType.DESTRUCTION],
        "minors": [SkillsType.SECURITY, SkillsType.ATHLETICS, SkillsType.MERCANTILE, SkillsType.BLOCK, SkillsType.ALTERATION]
    },
    "Farmer": {
        "name": "Farmer",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.PERSONALITY, AttributesType.ENDURANCE],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.ATHLETICS, SkillsType.UNARMORED],
        "minors": [SkillsType.MERCANTILE, SkillsType.LIGHT_ARMOR, SkillsType.SHORT_BLADE, SkillsType.SPEAR, SkillsType.ACROBATICS]
    },
    "Gondolier": {
        "name": "Gondolier",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.STRENGTH, AttributesType.PERSONALITY],
        "majors": [SkillsType.MERCANTILE, SkillsType.SPEECHCRAFT, SkillsType.SNEAK, SkillsType.HAND_TO_HAND, SkillsType.UNARMORED],
        "minors": [SkillsType.SECURITY, SkillsType.SHORT_BLADE, SkillsType.RESTORATION, SkillsType.BLOCK, SkillsType.LIGHT_ARMOR]
    },
    "Guard": {
        "name": "Guard",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.LONG_BLADE, SkillsType.BLUNT_WEAPON, SkillsType.BLOCK, SkillsType.HEAVY_ARMOR, SkillsType.MEDIUM_ARMOR],
        "minors": [SkillsType.ATHLETICS, SkillsType.HAND_TO_HAND, SkillsType.SPEECHCRAFT, SkillsType.ACROBATICS, SkillsType.SECURITY]
    },
    "Guild Guide": {
        "name": "Guild Guide",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.WILLPOWER],
        "majors": [SkillsType.MYSTICISM, SkillsType.RESTORATION, SkillsType.MERCANTILE, SkillsType.SPEECHCRAFT, SkillsType.SNEAK],
        "minors": [SkillsType.CONJURATION, SkillsType.ENCHANT, SkillsType.SECURITY, SkillsType.SHORT_BLADE, SkillsType.UNARMORED]
    },
    "Herder": {
        "name": "Herder",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.ENDURANCE],
        "majors": [SkillsType.LIGHT_ARMOR, SkillsType.MARKSMAN, SkillsType.SPEAR, SkillsType.RESTORATION, SkillsType.ATHLETICS],
        "minors": [SkillsType.ACROBATICS, SkillsType.BLOCK, SkillsType.AXE, SkillsType.MEDIUM_ARMOR, SkillsType.SNEAK]
    },
    "Hunter": {
        "name": "Hunter",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.SPEED],
        "majors": [SkillsType.LIGHT_ARMOR, SkillsType.MARKSMAN, SkillsType.SHORT_BLADE, SkillsType.SNEAK, SkillsType.ATHLETICS],
        "minors": [SkillsType.ACROBATICS, SkillsType.BLOCK, SkillsType.AXE, SkillsType.MEDIUM_ARMOR, SkillsType.RESTORATION]
    },
    "Mabrigash": {
        "name": "Mabrigash",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.WILLPOWER, AttributesType.ENDURANCE],
        "majors": [SkillsType.RESTORATION, SkillsType.DESTRUCTION, SkillsType.ALTERATION, SkillsType.BLOCK, SkillsType.AXE],
        "minors": [SkillsType.UNARMORED, SkillsType.SPEECHCRAFT, SkillsType.SNEAK, SkillsType.MYSTICISM, SkillsType.ATHLETICS]
    },
    "Master-at-Arms": {
        "name": "Master-at-Arms",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.SPEAR, SkillsType.SHORT_BLADE, SkillsType.LONG_BLADE, SkillsType.AXE, SkillsType.BLUNT_WEAPON],
        "minors": [SkillsType.BLOCK, SkillsType.HEAVY_ARMOR, SkillsType.LIGHT_ARMOR, SkillsType.MEDIUM_ARMOR, SkillsType.HAND_TO_HAND]
    },
    "Merchant": {
        "name": "Merchant",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.RESTORATION, SkillsType.ARMORER, SkillsType.SECURITY],
        "minors": [SkillsType.LIGHT_ARMOR, SkillsType.UNARMORED, SkillsType.BLUNT_WEAPON, SkillsType.LONG_BLADE, SkillsType.MEDIUM_ARMOR]
    },
    "Miner": {
        "name": "Miner",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.AXE, SkillsType.UNARMORED, SkillsType.LIGHT_ARMOR],
        "minors": [SkillsType.HAND_TO_HAND, SkillsType.HEAVY_ARMOR, SkillsType.RESTORATION, SkillsType.ARMORER, SkillsType.SPEAR]
    },
    "Necromancer": {
        "name": "Necromancer",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.WILLPOWER],
        "majors": [SkillsType.CONJURATION, SkillsType.DESTRUCTION, SkillsType.ILLUSION, SkillsType.MYSTICISM, SkillsType.ENCHANT],
        "minors": [SkillsType.BLUNT_WEAPON, SkillsType.ACROBATICS, SkillsType.SNEAK, SkillsType.UNARMORED, SkillsType.ALTERATION]
    },
    "Noble": {
        "name": "Noble",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.PERSONALITY, AttributesType.LUCK],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.SHORT_BLADE, SkillsType.SECURITY, SkillsType.ATHLETICS],
        "minors": [SkillsType.LIGHT_ARMOR, SkillsType.BLOCK, SkillsType.RESTORATION, SkillsType.SNEAK, SkillsType.ACROBATICS]
    },
    "Ordinator": {
        "name": "Ordinator",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.WILLPOWER, AttributesType.STRENGTH],
        "majors": [SkillsType.BLUNT_WEAPON, SkillsType.LONG_BLADE, SkillsType.DESTRUCTION, SkillsType.HEAVY_ARMOR, SkillsType.BLOCK],
        "minors": [SkillsType.RESTORATION, SkillsType.ALCHEMY, SkillsType.MEDIUM_ARMOR, SkillsType.ACROBATICS, SkillsType.HAND_TO_HAND]
    },
    "Ordinator Guard": {
        "name": "Ordinator Guard",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.WILLPOWER, AttributesType.STRENGTH],
        "majors": [SkillsType.BLUNT_WEAPON, SkillsType.LONG_BLADE, SkillsType.DESTRUCTION, SkillsType.HEAVY_ARMOR, SkillsType.BLOCK],
        "minors": [SkillsType.RESTORATION, SkillsType.SECURITY, SkillsType.MEDIUM_ARMOR, SkillsType.ACROBATICS, SkillsType.HAND_TO_HAND]
    },
    "Pauper": {
        "name": "Pauper",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.LUCK, AttributesType.WILLPOWER],
        "majors": [SkillsType.SNEAK, SkillsType.ATHLETICS, SkillsType.UNARMORED, SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE],
        "minors": [SkillsType.SHORT_BLADE, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.ACROBATICS]
    },
    "Pawnbroker": {
        "name": "Pawnbroker",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.LUCK],
        "majors": [SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.SECURITY, SkillsType.ATHLETICS, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.UNARMORED, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.ACROBATICS]
    },
    "Priest": {
        "name": "Priest",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.WILLPOWER, AttributesType.PERSONALITY],
        "majors": [SkillsType.RESTORATION, SkillsType.MYSTICISM, SkillsType.ALTERATION, SkillsType.BLUNT_WEAPON, SkillsType.UNARMORED],
        "minors": [SkillsType.CONJURATION, SkillsType.SPEECHCRAFT, SkillsType.LIGHT_ARMOR, SkillsType.ALCHEMY, SkillsType.DESTRUCTION]
    },
    "Publican": {
        "name": "Publican",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.LIGHT_ARMOR, SkillsType.SECURITY],
        "minors": [SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.MEDIUM_ARMOR, SkillsType.SPEAR]
    },
    "Savant": {
        "name": "Savant",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.ALCHEMY, SkillsType.UNARMORED, SkillsType.ATHLETICS],
        "minors": [SkillsType.SECURITY, SkillsType.BLOCK, SkillsType.SHORT_BLADE, SkillsType.SNEAK, SkillsType.ACROBATICS]
    },
    "Sharpshooter": {
        "name": "Sharpshooter",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.AGILITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.MARKSMAN, SkillsType.MEDIUM_ARMOR, SkillsType.DESTRUCTION, SkillsType.ENCHANT, SkillsType.SNEAK],
        "minors": [SkillsType.RESTORATION, SkillsType.ATHLETICS, SkillsType.SECURITY, SkillsType.ACROBATICS, SkillsType.SPEECHCRAFT]
    },
    "Shipmaster": {
        "name": "Shipmaster",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.MERCANTILE, SkillsType.SPEECHCRAFT, SkillsType.SHORT_BLADE, SkillsType.ATHLETICS, SkillsType.SNEAK],
        "minors": [SkillsType.BLOCK, SkillsType.MYSTICISM, SkillsType.SECURITY, SkillsType.UNARMORED, SkillsType.LIGHT_ARMOR]
    },
    "Slave": {
        "name": "Slave",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.ENDURANCE, AttributesType.LUCK],
        "majors": [SkillsType.SNEAK, SkillsType.ACROBATICS, SkillsType.ATHLETICS, SkillsType.HEAVY_ARMOR, SkillsType.HAND_TO_HAND],
        "minors": [SkillsType.RESTORATION, SkillsType.BLOCK, SkillsType.ARMORER, SkillsType.MERCANTILE, SkillsType.SPEECHCRAFT]
    },
    "Smith": {
        "name": "Smith",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.UNARMORED, SkillsType.HAND_TO_HAND, SkillsType.ARMORER],
        "minors": [SkillsType.AXE, SkillsType.HEAVY_ARMOR, SkillsType.LIGHT_ARMOR, SkillsType.LONG_BLADE, SkillsType.MEDIUM_ARMOR]
    },
    "Smuggler": {
        "name": "Smuggler",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.SPEED, AttributesType.PERSONALITY],
        "majors": [SkillsType.BLUNT_WEAPON, SkillsType.SNEAK, SkillsType.MERCANTILE, SkillsType.SHORT_BLADE, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.ATHLETICS, SkillsType.AXE, SkillsType.HAND_TO_HAND, SkillsType.LONG_BLADE, SkillsType.SPEAR]
    },
    "Trader": {
        "name": "Trader",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.PERSONALITY],
        "majors": [SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.SPEECHCRAFT, SkillsType.MYSTICISM, SkillsType.SECURITY],
        "minors": [SkillsType.UNARMORED, SkillsType.BLOCK, SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.LIGHT_ARMOR]
    },
    "Warlock": {
        "name": "Warlock",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.LUCK, AttributesType.WILLPOWER],
        "majors": [SkillsType.DESTRUCTION, SkillsType.ILLUSION, SkillsType.SHORT_BLADE, SkillsType.LIGHT_ARMOR, SkillsType.RESTORATION],
        "minors": [SkillsType.ATHLETICS, SkillsType.SPEECHCRAFT, SkillsType.ACROBATICS, SkillsType.ALTERATION, SkillsType.SNEAK]
    },
    "Wise Woman": {
        "name": "Wise Woman",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.WILLPOWER, AttributesType.PERSONALITY],
        "majors": [SkillsType.RESTORATION, SkillsType.MYSTICISM, SkillsType.ALTERATION, SkillsType.HAND_TO_HAND, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.ILLUSION, SkillsType.BLUNT_WEAPON, SkillsType.LIGHT_ARMOR, SkillsType.ALCHEMY, SkillsType.UNARMORED]
    },
    "Witch": {
        "name": "Witch",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.LUCK, AttributesType.WILLPOWER],
        "majors": [SkillsType.MYSTICISM, SkillsType.ILLUSION, SkillsType.CONJURATION, SkillsType.UNARMORED, SkillsType.SHORT_BLADE],
        "minors": [SkillsType.LIGHT_ARMOR, SkillsType.SPEECHCRAFT, SkillsType.ACROBATICS, SkillsType.ALTERATION, SkillsType.SNEAK]
    },
    "Artist": {
        "name": "Artist",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.ALCHEMY, SkillsType.BLUNT_WEAPON, SkillsType.SHORT_BLADE, SkillsType.SPEECHCRAFT, SkillsType.SECURITY],
        "minors": [SkillsType.ALTERATION, SkillsType.ILLUSION, SkillsType.MERCANTILE, SkillsType.HAND_TO_HAND, SkillsType.UNARMORED]
    },
    "Astrologer": {
        "name": "Astrologer",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.MYSTICISM, SkillsType.MERCANTILE, SkillsType.SPEECHCRAFT, SkillsType.CONJURATION, SkillsType.ILLUSION],
        "minors": [SkillsType.RESTORATION, SkillsType.UNARMORED, SkillsType.ENCHANT, SkillsType.SNEAK, SkillsType.ALTERATION]
    },
    "Baker": {
        "name": "Baker",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.ALCHEMY, SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.LIGHT_ARMOR],
        "minors": [SkillsType.BLOCK, SkillsType.MEDIUM_ARMOR, SkillsType.SPEAR, SkillsType.HAND_TO_HAND, SkillsType.BLUNT_WEAPON]
    },
    "Banker": {
        "name": "Banker",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.SNEAK, SkillsType.ILLUSION, SkillsType.SECURITY],
        "minors": [SkillsType.UNARMORED, SkillsType.LONG_BLADE, SkillsType.MEDIUM_ARMOR, SkillsType.SHORT_BLADE, SkillsType.LIGHT_ARMOR]
    },
    "Barrister": {
        "name": "Barrister",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.SECURITY, SkillsType.HAND_TO_HAND, SkillsType.UNARMORED],
        "minors": [SkillsType.SHORT_BLADE, SkillsType.SNEAK, SkillsType.ACROBATICS, SkillsType.BLOCK, SkillsType.ILLUSION]
    },
    "Broker": {
        "name": "Broker",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.LUCK],
        "majors": [SkillsType.MERCANTILE, SkillsType.SPEECHCRAFT, SkillsType.SECURITY, SkillsType.SHORT_BLADE, SkillsType.UNARMORED],
        "minors": [SkillsType.HAND_TO_HAND, SkillsType.SNEAK, SkillsType.ATHLETICS, SkillsType.MYSTICISM, SkillsType.ILLUSION]
    },
    "Carpenter": {
        "name": "Carpenter",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.MERCANTILE, SkillsType.HAND_TO_HAND, SkillsType.BLUNT_WEAPON, SkillsType.AXE, SkillsType.UNARMORED],
        "minors": [SkillsType.ACROBATICS, SkillsType.ATHLETICS, SkillsType.SHORT_BLADE, SkillsType.BLOCK, SkillsType.ARMORER]
    },
    "Cook": {
        "name": "Cook",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.AGILITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.ALCHEMY, SkillsType.SHORT_BLADE, SkillsType.MERCANTILE, SkillsType.HAND_TO_HAND, SkillsType.BLUNT_WEAPON],
        "minors": [SkillsType.SECURITY, SkillsType.RESTORATION, SkillsType.ATHLETICS, SkillsType.SNEAK, SkillsType.SPEAR]
    },
    "Courtesan": {
        "name": "Courtesan",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.ATHLETICS, SkillsType.UNARMORED, SkillsType.HAND_TO_HAND],
        "minors": [SkillsType.SHORT_BLADE, SkillsType.SNEAK, SkillsType.RESTORATION, SkillsType.SECURITY, SkillsType.ACROBATICS]
    },
    "Dockworker": {
        "name": "Dockworker",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.ATHLETICS, SkillsType.HAND_TO_HAND, SkillsType.BLUNT_WEAPON, SkillsType.MERCANTILE, SkillsType.UNARMORED],
        "minors": [SkillsType.BLOCK, SkillsType.SPEECHCRAFT, SkillsType.SHORT_BLADE, SkillsType.ACROBATICS, SkillsType.LIGHT_ARMOR]
    },
    "Fisherman": {
        "name": "Fisherman",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.SPEAR, SkillsType.ATHLETICS, SkillsType.HAND_TO_HAND, SkillsType.SHORT_BLADE, SkillsType.UNARMORED],
        "minors": [SkillsType.LIGHT_ARMOR, SkillsType.MERCANTILE, SkillsType.BLOCK, SkillsType.ACROBATICS, SkillsType.SPEECHCRAFT]
    },
    "Fletcher": {
        "name": "Fletcher",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.PERSONALITY],
        "majors": [SkillsType.MERCANTILE, SkillsType.UNARMORED, SkillsType.MARKSMAN, SkillsType.SHORT_BLADE, SkillsType.LIGHT_ARMOR],
        "minors": [SkillsType.HAND_TO_HAND, SkillsType.ACROBATICS, SkillsType.MEDIUM_ARMOR, SkillsType.ARMORER, SkillsType.SNEAK]
    },
    "Jeweler": {
        "name": "Jeweler",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.MERCANTILE, SkillsType.UNARMORED, SkillsType.HAND_TO_HAND, SkillsType.SHORT_BLADE, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.ILLUSION, SkillsType.ENCHANT, SkillsType.ALCHEMY, SkillsType.ARMORER, SkillsType.SECURITY]
    },
    "Lamp Knight": {
        "name": "Lamp Knight",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.WILLPOWER],
        "majors": [SkillsType.HEAVY_ARMOR, SkillsType.BLUNT_WEAPON, SkillsType.ENCHANT, SkillsType.BLOCK, SkillsType.RESTORATION],
        "minors": [SkillsType.ALTERATION, SkillsType.MEDIUM_ARMOR, SkillsType.ATHLETICS, SkillsType.LONG_BLADE, SkillsType.ARMORER]
    },
    "Naturalist": {
        "name": "Naturalist",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.AGILITY],
        "majors": [SkillsType.ALCHEMY, SkillsType.ALTERATION, SkillsType.MERCANTILE, SkillsType.RESTORATION, SkillsType.ENCHANT],
        "minors": [SkillsType.SHORT_BLADE, SkillsType.ATHLETICS, SkillsType.SECURITY, SkillsType.UNARMORED, SkillsType.BLUNT_WEAPON]
    },
    "Potter": {
        "name": "Potter",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.PERSONALITY, AttributesType.ENDURANCE],
        "majors": [SkillsType.MERCANTILE, SkillsType.UNARMORED, SkillsType.HAND_TO_HAND, SkillsType.SHORT_BLADE, SkillsType.ATHLETICS],
        "minors": [SkillsType.ALCHEMY, SkillsType.SPEECHCRAFT, SkillsType.BLUNT_WEAPON, SkillsType.ACROBATICS, SkillsType.ARMORER]
    },
    "Ratcatcher": {
        "name": "Ratcatcher",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.SPEED],
        "majors": [SkillsType.SPEAR, SkillsType.LIGHT_ARMOR, SkillsType.ALCHEMY, SkillsType.SNEAK, SkillsType.BLOCK],
        "minors": [SkillsType.SHORT_BLADE, SkillsType.SECURITY, SkillsType.UNARMORED, SkillsType.ACROBATICS, SkillsType.HAND_TO_HAND]
    },
    "Sailor": {
        "name": "Sailor",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.AGILITY],
        "majors": [SkillsType.ATHLETICS, SkillsType.HAND_TO_HAND, SkillsType.LIGHT_ARMOR, SkillsType.LONG_BLADE, SkillsType.UNARMORED],
        "minors": [SkillsType.ACROBATICS, SkillsType.SHORT_BLADE, SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.AXE]
    },
    "Scribe": {
        "name": "Scribe",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.ENDURANCE],
        "majors": [SkillsType.SPEECHCRAFT, SkillsType.UNARMORED, SkillsType.ALCHEMY, SkillsType.MERCANTILE, SkillsType.RESTORATION],
        "minors": [SkillsType.SECURITY, SkillsType.AXE, SkillsType.SPEAR, SkillsType.ATHLETICS, SkillsType.ENCHANT]
    },
    "Cat-catcher": {
        "name": "Cat-catcher",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.AGILITY, AttributesType.PERSONALITY],
        "majors": [SkillsType.BLUNT_WEAPON, SkillsType.HAND_TO_HAND, SkillsType.ATHLETICS, SkillsType.SPEECHCRAFT, SkillsType.SNEAK],
        "minors": [SkillsType.SECURITY, SkillsType.ACROBATICS, SkillsType.LIGHT_ARMOR, SkillsType.MARKSMAN, SkillsType.RESTORATION]
    },
    "Therionaut": {
        "name": "Therionaut",
        "specialization": SpecializationType.STEALTH,
        "attributes": [AttributesType.INTELLIGENCE, AttributesType.PERSONALITY],
        "majors": [SkillsType.ACROBATICS, SkillsType.ATHLETICS, SkillsType.MERCANTILE, SkillsType.SECURITY, SkillsType.SPEECHCRAFT],
        "minors": [SkillsType.BLOCK, SkillsType.LIGHT_ARMOR, SkillsType.UNARMORED, SkillsType.HAND_TO_HAND, SkillsType.BLUNT_WEAPON]
    },
    "Clever-Man": {
        "name": "Clever-Man",
        "specialization": SpecializationType.MAGIC,
        "attributes": [AttributesType.WILLPOWER, AttributesType.INTELLIGENCE],
        "majors": [SkillsType.DESTRUCTION, SkillsType.RESTORATION, SkillsType.ALTERATION, SkillsType.ILLUSION, SkillsType.CONJURATION],
        "minors": [SkillsType.AXE, SkillsType.HEAVY_ARMOR, SkillsType.ENCHANT, SkillsType.MYSTICISM, SkillsType.BLOCK]
    }
})

const ConditionType = Object.freeze({
    HAS_SKILL: "hasSkill",
    HAS_RACE: "hasRace",
    HAS_BIRTHSIGN: "hasBirthsign",
    HAS_SPECIALIZATION: "hasSpecialization",
    HAS_OBJECTIVE: "hasObjective",
    HAS_STIPULATION: "hasStipulation",
    NOT_HAS_SKILL: "notHasSkill",
    NOT_HAS_RACE: "notHasRace",
    NOT_HAS_BIRTHSIGN: "notHasBirthsign",
    NOT_HAS_SPECIALIZATION: "notHasSpecialization",
    NOT_HAS_OBJECTIVE: "notHasObjective",
    NOT_HAS_STIPULATION: "notHasStipulation"
})

const ObjectivesType = Object.freeze({
    "Complete Vvardenfell Fighters Guild": {},
    "Complete Vvardenfell Mages Guild": {},
    "Complete Vvardenfell Thieves Guild": {},
    "Complete Vvardenfell Morag Tong": {},
    "Complete Vvardenfell Imperial Legion": {},
    "Complete Vvardenfell Imperial Cult": {},
    "Complete Vvardenfell Temple": {},
    "Complete Vvardenfell House Redoran": {},
    "Complete Vvardenfell House Hlaalu": {},
    "Complete Vvardenfell House Telvanni": {},
    "Complete Main Quest": {},
    "Complete Mainland Fighters Guild": {},
    "Complete Mainland Mages Guild": {},
    "Complete Mainland Thieves Guild": {},
    "Complete Mainland Morag Tong": {},
    "Complete Mainland Imperial Legion": {},
    "Complete Mainland Imperial Cult": {},
    "Complete Mainland Temple": {},
    "Complete Mainland House Redoran": {},
    "Complete Mainland House Hlaalu": {},
    "Complete Mainland House Telvanni": {},
    "Complete House Indoril": {},
    "Complete Ordinators": {},
    "Complete East Empire Company": {},
    "Complete Ja'Natta Syndicate": {},
    /*    "Complete Cyrodiil + Skyrim Fighters Guild": {},
    "Complete Cyrodiil + Skyrim Mages Guild": {},
    "Complete Cyrodiil + Skyrim Thieves Guild": {},
    "Complete Kingdom of Anvil": {},
    "Complete the Abecette Fight Pit, Narsis Arena, and Dragonstar Arena": {},
    "Complete Itinerant Priests": {},
    "Complete all bounties in Morrowind, Cyrodiil, and Skyrim": {}, */
    "Fully explore Kemel-Ze": {},
    "Fully explore Mora Ancestral Tomb": {},
    "Create a custom CE enchant on every equipment slot": {[ConditionType.HAS_SKILL]:[SkillsType.ENCHANT]},
    "Collect all artifacts mentioned in Yagrum Bagarn's book '<a href='https://en.uesp.net/wiki/Morrowind:Tamrielic_Lore'>Tamrielic Lore</a>'": {},
    "Master the Alteration skill and learn all standard Alteration spells": {[ConditionType.HAS_SKILL]:[SkillsType.ALTERATION], [ConditionType.HAS_RACE]:[RacesType.BRETON, RacesType.HIGH_ELF, RacesType.AYLEID, RacesType.NAGA, RacesType.REACHMAN, RacesType.SEA_ELF]},
    "Master the Conjuration skill and learn all standard Conjuration spells": {[ConditionType.HAS_SKILL]:[SkillsType.CONJURATION], [ConditionType.HAS_RACE]:[RacesType.BRETON, RacesType.HIGH_ELF, RacesType.AYLEID, RacesType.CHIMERI_QUEY, RacesType.REACHMAN]},
    "Master the Destruction skill and learn all standard Destruction spells": {[ConditionType.HAS_SKILL]:[SkillsType.DESTRUCTION], [ConditionType.HAS_RACE]:[RacesType.HIGH_ELF, RacesType.DARK_ELF, RacesType.AYLEID, RacesType.DAGI_RAHT, RacesType.REACHMAN, RacesType.SEA_ELF]},
    "Master the Illusion skill and learn all standard Illusion spells": {[ConditionType.HAS_SKILL]:[SkillsType.ILLUSION], [ConditionType.HAS_RACE]:[RacesType.ARGONIAN, RacesType.BRETON, RacesType.HIGH_ELF, RacesType.AYLEID, RacesType.DAGI_RAHT, RacesType.OHMES_RAHT, RacesType.SEA_ELF, RacesType.YNESAI]},
    "Master the Mysticism skill and learn all standard Mysticism spells": {[ConditionType.HAS_SKILL]:[SkillsType.MYSTICISM], [ConditionType.HAS_RACE]:[RacesType.BRETON, RacesType.ARGONIAN, RacesType.DARK_ELF, RacesType.CHIMERI_QUEY, RacesType.DUADRI]},
    "Master the Restoration skill and learn all standard Restoration spells": {[ConditionType.HAS_SKILL]:[SkillsType.RESTORATION], [ConditionType.HAS_RACE]:[RacesType.BRETON, RacesType.NAGA, RacesType.TOJAY]},
    "Collect all tiers of alchemy apparatus": {[ConditionType.HAS_SKILL]:[SkillsType.ALCHEMY], [ConditionType.HAS_RACE]:[RacesType.HIGH_ELF, RacesType.ARGONIAN, RacesType.BRETON, RacesType.WOOD_ELF, RacesType.REACHMAN, RacesType.TOJAY]},
    "Collect all propylon indexes on Vvardenfell": {},
    "Reach Level 20 whilst remaining within Bitter Coast + Ascadian Isles": {},
    "Reach Level 20 whilst remaining within West Gash + Sheogorad": {},
    "Reach Level 20 whilst remaining within Grazelands + Molag Amur": {},
    "Reach Level 20 whilst remaining within Azura's Coast": {},
    "Reach Level 20 whilst remaining within The Ashlands + Red Mountain": {},
    "Reach Level 20 whilst remaining within Tamriel Rebuilt Map 1": {},
    "Reach Level 20 whilst remaining within Tamriel Rebuilt Map 2": {},
    "Reach Level 20 whilst remaining within Tamriel Rebuilt Map 3": {},
    "Reach Level 20 whilst remaining within Tamriel Rebuilt Map 4": {},
    "Reach Level 20 whilst remaining within Tamriel Rebuilt Map 5": {},
/*    "Reach Level 20 whilst remaining within Cyrodiil": {},
    "Reach Level 20 whilst remaining within Skyrim": {}, */
});

/* Commenting these out because BOH didn't like them
const UnfilteredCollectionObjectivesType = Object.freeze({
    "Visit every settlement": {},
    "Collect all 36 Lessons of Vivec": {},
    "Collect all Daedric Weapons and Armor": {},
    "Collect all House Dagoth Souls": {},
    "Collect all unique enchanted Robes": {},
    "Collect all unique enchanted Shirts": {},
    "Collect all unique enchanted Pants": {},
    "Collect all ring artifacts": {},
    "Collect all amulet artifacts": {},
    "Collect all unique enchanted Shoes": {[ConditionType.NOT_HAS_RACE]:[RacesType.KHAJIIT, RacesType.ARGONIAN, RacesType.CATHAY_RAHT, RacesType.DAGI_RAHT, RacesType.IMGA, RacesType.NAGA, RacesType.TOJAY]},
});

const CollectionObjectivesType = Object.freeze({
    "Collect all unique Axes": {[ConditionType.HAS_SKILL]:[SkillsType.AXE],[ConditionType.HAS_RACE]:[RacesType.ORC, RacesType.NORD, RacesType.REDGUARD, RacesType.MALAHK_ORC, RacesType.CHIMERI_QUEY]},
    "Collect all unique Bows and Crossbows": {[ConditionType.HAS_SKILL]:[SkillsType.MARKSMAN], [ConditionType.HAS_RACE]:[RacesType.WOOD_ELF, RacesType.DARK_ELF, RacesType.YNESAI, RacesType.RIVERFOLK]},
    "Collect all unique Blunt Weapons": {[ConditionType.HAS_SKILL]:[SkillsType.BLUNT_WEAPON], [ConditionType.HAS_RACE]:[RacesType.NORD, RacesType.IMPERIAL, RacesType.REDGUARD, RacesType.KEPTU_QUEY, RacesType.TOJAY, RacesType.NAGA]},
    "Collect all unique Long Blades": {[ConditionType.HAS_SKILL]:[SkillsType.LONG_BLADE], [ConditionType.HAS_RACE]:[RacesType.REDGUARD, RacesType.IMPERIAL, RacesType.DARK_ELF, RacesType.NORD, RacesType.CATHAY_RAHT, RacesType.CATHAY, RacesType.RIVERFOLK]},
    "Collect all unique Short Blades": {[ConditionType.HAS_SKILL]:[SkillsType.SHORT_BLADE], [ConditionType.HAS_RACE]:[RacesType.DARK_ELF, RacesType.KHAJIIT, RacesType.REDGUARD, RacesType.YNESAI, RacesType.CATHAY, RacesType.CATHAY_RAHT, RacesType.OHMES, RacesType.SUTHAY]},
    "Collect all unique Spears": {[ConditionType.HAS_SKILL]:[SkillsType.SPEAR], [ConditionType.HAS_RACE]:[RacesType.ARGONIAN, RacesType.NORD, RacesType.AYLEID, RacesType.SEA_ELF, RacesType.CATHAY, RacesType.DUADRI]},
    "Collect all unique Shields": {[ConditionType.HAS_SKILL]:[SkillsType.BLOCK], [ConditionType.HAS_RACE]:[RacesType.ORC, RacesType.KEPTU_QUEY, RacesType.RIVERFOLK, RacesType.BRETON]},
    "Collect all Heavy Armor artifacts": {[ConditionType.HAS_SKILL]:[SkillsType.HEAVY_ARMOR], [ConditionType.HAS_RACE]:[RacesType.NORD, RacesType.ORC, RacesType.REDGUARD, RacesType.KEPTU_QUEY, RacesType.MALAHK_ORC]},
    "Collect all Medium Armor artifacts": {[ConditionType.HAS_SKILL]:[SkillsType.MEDIUM_ARMOR], [ConditionType.HAS_RACE]:[RacesType.ARGONIAN, RacesType.NORD, RacesType.ORC, RacesType.REDGUARD, RacesType.MALAHK_ORC]},
    "Collect all Light Armor artifacts": {[ConditionType.HAS_SKILL]:[SkillsType.LIGHT_ARMOR], [ConditionType.HAS_RACE]:[RacesType.KHAJIIT, RacesType.WOOD_ELF, RacesType.DARK_ELF, RacesType.IMPERIAL, RacesType.CATHAY, RacesType.CATHAY_RAHT, RacesType.DUADRI, RacesType.OHMES, RacesType.OHMES_RAHT, RacesType.SUTHAY]},
});
*/

const MercantileStipulationsType = Object.freeze({
    "Can't sell things for more than 1000 gold": {[ConditionType.NOT_HAS_STIPULATION]:["Can't sell"]},
    "Can't sell things worth more than 1000 gold": {[ConditionType.NOT_HAS_STIPULATION]:["Can't sell"]},
    "Can't sell things worth less than 1000 gold": {[ConditionType.NOT_HAS_STIPULATION]:["Can't sell"]},
    "All sales final": {},
    "Can't use the same merchant twice": {},
    "Can't sell drugs": {[ConditionType.NOT_HAS_OBJECTIVE]:["Ja'Natta Syndicate", "Thieves Guild"]},
    "Can't sell stolen goods": {[ConditionType.NOT_HAS_OBJECTIVE]:["Ja'Natta Syndicate", "Thieves Guild"]},
});

const GeographicStipulationsType = Object.freeze({
    "Start in Gnaar Mok": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Hla Oad": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Gnisis": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Urshilaku Camp": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Erabenimsun Camp": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Dagon Fel": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Tel Fyr": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Molag Mar": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Sadrith Mora": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Nivalis": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Firewatch": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Port Telvannis": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Helnim": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Marog": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Gorne": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Darvonis": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Sailen": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Nan Iban": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Bosmora": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Dreynim Spa": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Bisandryon": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Othrenis": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Nanaav": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Ald Iuval": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Sadrathim": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Narsis": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Bal Foyen": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Almas Thirr": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Bodrum": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Stormgate Pass": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Septim's Gate Pass": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Gan-Ettu Camp": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Yandaran": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Ishanuran Camp": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
/*    "Start in Anvil": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Brina Cross": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Charach": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Salthearth": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Archad": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Gosha Inn": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Garlas Agea": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Santaral Osi's House": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"], [ConditionType.HAS_SKILL]:[SkillType.ALTERATION]},
    "Start in Dragonstar": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Karthgad": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
    "Start in Karthwasten": {[ConditionType.NOT_HAS_STIPULATION]:["Start in","No Seyda Neen"]},
*/
});

const LevellingStipulationsType = Object.freeze({
    "No buying training + No training spells": {[ConditionType.NOT_HAS_OBJECTIVE]:["Alteration", "Conjuration", "Destruction", "Illusion", "Mysticism", "Restoration"]},
    "Only train 5 times per character level": {},
    "Level 10 cap": {[ConditionType.NOT_HAS_STIPULATION]:["Level 15 cap"]},
    "Level 15 cap": {[ConditionType.NOT_HAS_STIPULATION]:["Level 10 cap"]},
    "Must level up when able": {},
    "Throw all your gold on the ground when levelling up": {},
});

const SkillsStipulationsType = Object.freeze({
    "Only use major skills from class": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect","Master"],[ConditionType.NOT_HAS_STIPULATION]:["skills from class", "No buying training", "cycle between weapon types", "Can't use weapons"]},
    "Only use skills from class": {[ConditionType.NOT_HAS_STIPULATION]:["skills from class", "No buying training", "cycle between weapon types", "Can't use weapons"]},
    "Cannot use skills from class": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect","Master"], [ConditionType.NOT_HAS_STIPULATION]:["skills from class", "No buying training", "cycle between weapon types", "Can't use weapons"]},
    "Skills must be at least 20 to be used": {[ConditionType.NOT_HAS_STIPULATION]:["skills from class"]},
    "Must haggle every transaction": {[ConditionType.NOT_HAS_STIPULATION]:["skills from class"]},
    "Can only heal from self-made potions": {[ConditionType.HAS_SKILL]:[SkillsType.ALCHEMY], [ConditionType.NOT_HAS_STIPULATION]:["skills from class"]},
    "Try to sneak attack every enemy": {[ConditionType.HAS_SKILL]:[SkillsType.SNEAK], [ConditionType.NOT_HAS_STIPULATION]:["skills from class"]},
    "Must use NPCs to repair": {[ConditionType.NOT_HAS_SKILL]:["Armorer"]},
    "Must cast detect key before unlocking": {[ConditionType.HAS_SKILL]:[SkillsType.MYSTICISM],[ConditionType.NOT_HAS_STIPULATION]:["skills from class"]}
});

const CrimeStipulationsType = Object.freeze({
    "No tresspassing": {[ConditionType.NOT_HAS_OBJECTIVE]:["Thieves Guild", "Ja-Natta Syndicate", "House Hlaalu", "Morag Tong", "House Telvanni"]},
    "No stealing": {[ConditionType.NOT_HAS_SKILL]:[SkillsType.SNEAK],[ConditionType.NOT_HAS_OBJECTIVE]:["Thieves Guild", "Ja-Natta Syndicate", "House Hlaalu"]},
    "No murdering": {[ConditionType.NOT_HAS_OBJECTIVE]:["Morag Tong", "Ja-Natta Syndicate", "House Hlaalu", "House Telvanni", "Ordinators"]},
    "No bribing": {[ConditionType.NOT_HAS_SKILL]:[SkillsType.MERCANTILE], [ConditionType.NOT_HAS_OBJECTIVE]:["Thieves Guild", "Ja-Natta Syndicate", "House Hlaalu", "East Empire Company"]},
    "Ethical actions only": {[ConditionType.HAS_OBJECTIVE]:["Imperial Cult", "Temple", "Imperial Legion", "House Redoran"]},
    "No opening locks (unless required to satisfy objective)": {[ConditionType.NOT_HAS_SKILL]:[SkillsType.SECURITY]},
});

const GearStipulationsType = Object.freeze({
    "No meta knowledge (i.e. don't go somewhere just to get gear)": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect"]},
    "Can only use gear you bought": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect"],[ConditionType.NOT_HAS_STIPULATION]:["Can only use gear", "Can only use custom enchantments"]},
    "Can only use gear you were given in a quest": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect"],[ConditionType.NOT_HAS_STIPULATION]:["Can only use gear", "Can only use custom enchantments"]},
    "Can't use weapons": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect"],[ConditionType.NOT_HAS_STIPULATION]:["skills from class", "cycle between weapon types"]},
    "Must cycle between weapon types every kill": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect"],[ConditionType.NOT_HAS_STIPULATION]:["skills from class", "Can't use weapons"]},
    "Can't use Daedric, Glass, or Ebony gear": {[ConditionType.NOT_HAS_OBJECTIVE]:["Daedric"]},
    "Must use throwing weapons": {[ConditionType.NOT_HAS_OBJECTIVE]:["Collect"],[ConditionType.NOT_HAS_STIPULATION]:["Can't use weapons","skills from class"],[ConditionType.HAS_SKILL]:[SkillsType.MARKSMAN]},
    "Cannot go above 50% encumbrance": {},
    "Can't carry money when outside of town": {},
});

const MagicStipulationsType = Object.freeze({
    "No casting spells (scrolls and enchantments are allowed)": {[ConditionType.NOT_HAS_SPECIALIZATION]:[SpecializationType.MAGIC], [ConditionType.NOT_HAS_OBJECTIVE]:["Alteration", "Conjuration", "Destruction", "Illusion", "Mysticism", "Restoration"], [ConditionType.NOT_HAS_STIPULATION]:["enchantments", "scrolls"]},
    "No pre-made potions": {},
    "No self-made potions": {[ConditionType.NOT_HAS_SKILL]:[SkillsType.ALCHEMY]},
    "No scrolls": {},
    "No cast-when-used enchantments": {[ConditionType.NOT_HAS_STIPULATION]:["enchantments"]},
    "No cast-on-strike enchantments": {[ConditionType.NOT_HAS_STIPULATION]:["enchantments"]},
    "No constant effect enchantments": {[ConditionType.NOT_HAS_OBJECTIVE]:["Create a custom CE enchant"], [ConditionType.NOT_HAS_STIPULATION]:["enchantments"]},
    "Can only use custom enchantments": {},
    "No summons from enchantments": {[ConditionType.NOT_HAS_STIPULATION]:["No summons", "Cannot summon"]},
    "No summons": {[ConditionType.NOT_HAS_SKILL]:[SkillsType.CONJURATION],[ConditionType.NOT_HAS_STIPULATION]:["No summons", "Cannot summon"]},
    "No spellmaking": {[ConditionType.NOT_HAS_STIPULATION]:["No casting spells"]},
});

const MiscellaneousStipulationsType = Object.freeze({
    "Must intimidate to persuade": {},
    "No bribing": {[ConditionType.NOT_HAS_SKILL]:[SkillsType.MERCANTILE]},
    "No taunting": {},
    "No fast travel services": {[ConditionType.NOT_HAS_STIPULATION]:["No teleportation magic"]},
    "No teleportation magic": {[ConditionType.NOT_HAS_SKILL]:[SkillsType.MYSTICISM], [ConditionType.NOT_HAS_STIPULATION]:["No fast travel services"]},
    "No Seyda Neen": {[ConditionType.NOT_HAS_STIPULATION]:["Start in"]},
    "No cancelling Dark Brotherhood attacks": {},
    "No waiting to restore health/magicka (Fatigue in cities is OK)": {},
    "Must attempt to calm every hostile NPC/creature": {[ConditionType.HAS_SKILL]:["Illusion"],[ConditionType.NOT_HAS_STIPULATION]:["skills from class"]},
    "Must get a blessing from every shrine you see": {},
    "Must rest in a bed when in town at night": {},
    "Must consume food before starting a quest": {},
    "Cannot use your powers": {[ConditionType.HAS_RACE]:[RacesType.REDGUARD, RacesType.DARK_ELF, RacesType.ORC, RacesType.DUADRI, RacesType.MALAHK_ORC, RacesType.SEA_ELF]},
    "Cannot summon Ancestor Ghost": {[ConditionType.HAS_BIRTHSIGN]:[BirthsignType.ATRONACH], [ConditionType.NOT_HAS_STIPULATION]:["No summons"]},
    "Cannot join factions (unless required to meet objective)": {},
    "Where's you uniform? Dress like you belong in any faction you join.": {},
});

const PresetCharacters = Object.freeze([
    {
        RACE: RacesType.IMPERIAL,
        CLASS: {
            "name": "Spymaster",
            "specialization": SpecializationType.STEALTH,
            "attributes": [AttributesType.STRENGTH, AttributesType.SPEED],
            "majors": [SkillsType.UNARMORED, SkillsType.HAND_TO_HAND, SkillsType.SPEECHCRAFT, SkillsType.MERCANTILE, SkillsType.MYSTICISM],
            "minors": [SkillsType.RESTORATION, SkillsType.ATHLETICS, SkillsType.ACROBATICS, SkillsType.SECURITY, SkillsType.ALCHEMY]
        },
        BIRTHSIGN: BirthsignType.LOVER,
        OBJECTIVE: "Complete Main Quest (Back Path)",
        STIPULATIONS: ["Play as Caius Cosades", "Use the custom Spymaster class provided", "Start in Balmora", "Must be bare-chested", "Must consume one piece of moon sugar per day", "Imperial factions only"]
    },
    {
        RACE: RacesType.ARGONIAN,
        CLASS: {
            "name": "Killer",
            "specialization": SpecializationType.COMBAT,
            "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
            "majors": [SkillsType.LONG_BLADE, SkillsType.LIGHT_ARMOR, SkillsType.HEAVY_ARMOR, SkillsType.ATHLETICS, SkillsType.ENCHANT],
            "minors": [SkillsType.SPEAR, SkillsType.UNARMORED, SkillsType.SECURITY, SkillsType.MERCANTILE, SkillsType.ACROBATICS]
        },
        BIRTHSIGN: BirthsignType.STEED,
        OBJECTIVE: "Become Archmagister of House Telvanni (Vvardenfell and Mainland)",
        STIPULATIONS: ["Play as Smokeskin-Killer", "Use the custom Killer class provided", "Start in Tel Vos", "Free all Argonian slaves you encounter"]
    },
    {
        RACE: RacesType.IMPERIAL,
        CLASS: {
            "name": "Outlaw",
            "specialization": SpecializationType.MAGIC,
            "attributes": [AttributesType.INTELLIGENCE, AttributesType.WILLPOWER],
            "majors": [SkillsType.CONJURATION, SkillsType.AXE, SkillsType.HEAVY_ARMOR, SkillsType.DESTRUCTION, SkillsType.SPEAR],
            "minors": [SkillsType.LIGHT_ARMOR, SkillsType.UNARMORED, SkillsType.ALTERATION, SkillsType.MERCANTILE, SkillsType.ALCHEMY]
        },
        BIRTHSIGN: BirthsignType.ATRONACH,
        OBJECTIVE: "Complete the Ja'Natta Syndicate",
        STIPULATIONS: ["Play as Snowy Granius", "Use the custom Outlaw class provided", "Unethical quests only"]
    },
    {
        RACE: RacesType.WOOD_ELF,
        CLASS: {
            "name": "Enchanter",
            "specialization": SpecializationType.MAGIC,
            "attributes": [AttributesType.INTELLIGENCE, AttributesType.WILLPOWER],
            "majors": [SkillsType.ENCHANT, SkillsType.BLUNT_WEAPON, SkillsType.ALCHEMY, SkillsType.DESTRUCTION, SkillsType.UNARMORED],
            "minors": [SkillsType.ALTERATION, SkillsType.ILLUSION, SkillsType.CONJURATION, SkillsType.MYSTICISM, SkillsType.RESTORATION]
        },
        BIRTHSIGN: BirthsignType.APPRENTICE,
        OBJECTIVE: "Collect 50 different souls",
        STIPULATIONS: ["Play as <a href='https://en.uesp.net/wiki/Tamriel_Rebuilt:Tynachos'>Tynachos</a>", "Start in Almas Thirr"]
    }
])

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function validateConditions(conditions) {
    // Whitelist
    if (ConditionType.HAS_SKILL in conditions &&
        !conditions.hasSkill.some(skill => globalClassSkills.includes(skill))) {
        console.log("Failed condition hasSkill");
        return false;
    }
    if (ConditionType.HAS_RACE in conditions &&
        !conditions.hasRace.includes(globalRace)) {
        console.log("Failed condition hasRace");
        return false;
    }
    if (ConditionType.HAS_BIRTHSIGN in conditions &&
        !conditions.hasBirthsign.includes(globalBirthsign)) {
        console.log("Failed condition hasBirthsign");
        return false;
    }
    if (ConditionType.HAS_SPECIALIZATION in conditions &&
        !conditions.hasSpecialization.includes(globalClassSpecialization)) {
        console.log("Failed condition hasSpecialization");
        return false;
    }
    if (ConditionType.HAS_OBJECTIVE in conditions &&
        !conditions.hasObjective.some(allowedObjective =>
            globalObjective.includes(allowedObjective))) {
        console.log("Failed condition hasObjective");
        return false;
    }
    if (ConditionType.HAS_STIPULATION in conditions &&
        !conditions.hasStipulation.some(allowed =>
            globalStipulations.some(stipulation =>
                stipulation.toLowerCase().includes(allowed.toLowerCase())))) {
        console.log("Failed condition hasStipulation");
        return false;
    }

    // Blacklist
    if (ConditionType.NOT_HAS_SKILL in conditions &&
        conditions.notHasSkill.some(skill => globalClassSkills.includes(skill))) {
        console.log("Failed condition notHasSkill");
        return false;
    }
    if (ConditionType.NOT_HAS_RACE in conditions &&
        conditions.notHasRace.includes(globalRace)) {
        console.log("Failed condition notHasRace");
        return false;
    }
    if (ConditionType.NOT_HAS_BIRTHSIGN in conditions &&
        conditions.notHasBirthsign.includes(globalBirthsign)) {
        console.log("Failed condition notHasBirthsign");
        return false;
    }
    if (ConditionType.NOT_HAS_SPECIALIZATION in conditions &&
        conditions.notHasSpecialization.includes(globalClassSpecialization)) {
        console.log("Failed condition notHasSpecialization");
        return false;
    }
    if (ConditionType.NOT_HAS_OBJECTIVE in conditions &&
        conditions.notHasObjective.some(disallowedObjective =>
            globalObjective.includes(disallowedObjective))) {
        console.log("Failed condition notHasObjective");
        return false;
    }
    if (ConditionType.NOT_HAS_STIPULATION in conditions &&
        conditions.notHasStipulation.some(disallowed =>
            globalStipulations.some(stipulation =>
                stipulation.toLowerCase().includes(disallowed.toLowerCase())))) {
        console.log("Failed condition notHasStipulation");
        return false;
    }
    return true;
}

function addLiChildren(node, list) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    list.forEach((element) => {
        let newNode = document.createElement("li");
        newNode.innerHTML = element;
        node.appendChild(newNode);
    });
}

function displayRace() {
    document.getElementById("race").textContent = globalRace;
}

function displayClass() {
    document.getElementById("class-name").textContent = globalClassName;
    document.getElementById("class-specialization").textContent = globalClassSpecialization;
    addLiChildren(document.getElementById("class-attributes"), globalClassAttributes);
    addLiChildren(document.getElementById("class-major-skills"), globalClassSkills.slice(0,5));
    addLiChildren(document.getElementById("class-minor-skills"), globalClassSkills.slice(5));
}

function displayBirthsign() {
    document.getElementById("birthsign").textContent = globalBirthsign;
}

function displayObjective() {
    document.getElementById("objective").textContent = globalObjective;

}

function displayStipulations() {
    addLiChildren(document.getElementById("stipulations"), globalStipulations);
}

function cleanup() {
    globalIsPremade = false;
    globalRace = "";
    globalBirthsign = "";
    globalClassName = "";
    globalClassSpecialization = "";
    globalClassAttributes = [];
    globalClassSkills = [];
    globalObjective = "";
    globalStipulations = [];
    displayRace();
    displayClass();
    displayBirthsign();
    displayObjective();
    displayStipulations();
}

function randomizePremade() {
    random = getRandomInt(PresetCharacters.length);
    preset = PresetCharacters[random];

    globalIsPremade = true;
    globalRace = preset.RACE;
    globalBirthsign = preset.BIRTHSIGN;
    globalClassName = preset.CLASS.name;
    globalClassSpecialization = preset.CLASS.specialization;
    globalClassAttributes = preset.CLASS.attributes;
    globalClassSkills = preset.CLASS.majors.concat(preset.CLASS.minors);
    globalObjective = preset.OBJECTIVE;
    globalStipulations = preset.STIPULATIONS;
}

function randomizeRace() {
    // Cleanup previous rolls
    cleanup();

    let random = getRandomInt(100);
    if (random <= 2){
        // Roll one of the iconic characters instead
        randomizePremade();
    }
    else
    {
        // Roll a genuinely random character
        let races = Object.values(RacesType);
        random = getRandomInt(races.length);
        // Set the globals
        globalRace = races[random]
    }

    displayRace();
}

function randomizeClass() {
    if (!globalIsPremade) {
        let classes = Object.values(ClassesType);
        let random = getRandomInt(classes.length);
        let myclass = classes[random];

        // Set the globals
        globalClassName = myclass.name;
        globalClassSpecialization = myclass.specialization;
        globalClassAttributes = myclass.attributes;
        globalClassSkills = myclass.majors.concat(myclass.minors)
    }
    displayClass();
}

function randomizeBirthsign() {
    if (!globalIsPremade) {
        let birthsigns = Object.values(BirthsignType);
        let random = getRandomInt(birthsigns.length);
        globalBirthsign = birthsigns[random];
    }
    displayBirthsign();
}

function randomizeObjective() {
    if (!globalIsPremade) {
        let random = getRandomInt(100);
        let validObjectives = [];
        let keys = Object.keys(ObjectivesType);
        for(var i = 0; i < keys.length; i++){
            let thisObj = keys[i];
            console.log("Evaluating objective " + thisObj);
            if( validateConditions(ObjectivesType[thisObj]) )
            {
                validObjectives.push(thisObj);
            }
        }
        random = getRandomInt(validObjectives.length);
        globalObjective = validObjectives[random];
    }
    displayObjective();
}

function getStipulation() {
    let random = getRandomInt(100);
    let stipulationType;
    if (random >= 90) {
        stipulationType = MercantileStipulationsType;
    } else if (random >= 80) {
        stipulationType = GeographicStipulationsType;
    } else if (random >= 70) {
        stipulationType = LevellingStipulationsType;
    } else if (random >= 60) {
        stipulationType = SkillsStipulationsType;
    } else if (random >= 50) {
        stipulationType = CrimeStipulationsType;
    } else if (random >= 35) {
        stipulationType = GearStipulationsType;
    } else if (random >= 15) {
        stipulationType = MiscellaneousStipulationsType;
        
    } else {
        stipulationType = MagicStipulationsType;
    }
    let validStipulations = [];
    let keys = Object.keys(stipulationType);
    for(var i = 0; i < keys.length; i++){
        thisStip = keys[i];
        console.log("Evaluating stipulation " + thisStip);
        if( validateConditions(stipulationType[thisStip]) )
        {
            validStipulations.push(thisStip);
        }
    }
    random = getRandomInt(validStipulations.length);
    return validStipulations[random];
}

function randomizeStipulations() {
    if (!globalIsPremade) {
        globalStipulations = [];
        let targetNumStipulations = 2 + getRandomInt(3); 
        let actualStipulations = 0;
        while( actualStipulations < targetNumStipulations ) {
            thisStip = getStipulation();
            console.log("Selected stipulation " + thisStip);
            if(thisStip && !globalStipulations.includes(thisStip)){
                globalStipulations.push(thisStip);
                actualStipulations++;
            }
        }
    }
    displayStipulations();
}

function init() {
    console.log("init");
    document.querySelector("#race-wrapper input").addEventListener("click", randomizeRace);
    document.querySelector("#class-wrapper input").addEventListener("click", randomizeClass);
    document.querySelector("#birthsign-wrapper input").addEventListener("click", randomizeBirthsign);
    document.querySelector("#objective-wrapper input").addEventListener("click", randomizeObjective);
    document.querySelector("#stipulations-wrapper input").addEventListener("click", randomizeStipulations);
}

document.addEventListener("DOMContentLoaded", () => {
    init();
});