
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
    "Ore Miner": {
        "name": "Ore Miner",
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
    "Miner": {
        "name": "Miner",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.STRENGTH, AttributesType.ENDURANCE],
        "majors": [SkillsType.ARMORER, SkillsType.BLOCK, SkillsType.AXE, SkillsType.BLUNT_WEAPON, SkillsType.UNARMORED],
        "minors": [SkillsType.LONG_BLADE, SkillsType.SPEAR, SkillsType.LIGHT_ARMOR, SkillsType.HAND_TO_HAND, SkillsType.HEAVY_ARMOR]
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

const ObjectivesType = Object.freeze({
    "Complete all miscellaneous quests and dungeons in Bitter Coast + Ascadian Isles": {},
    "Complete all miscellaneous quests and dungeons in West Gash + Sheogorad": {},
    "Complete all miscellaneous quests and dungeons in Grazelands + Molag Amur": {},
    "Complete all miscellaneous quests and dungeons in Azura's Coast": {},
    "Complete all miscellaneous quests and dungeons in Ashlands + Red Mountain": {},
    "Complete all miscellaneous quests and dungeons in Cyrodiil": {},
    "Complete all miscellaneous quests and dungeons in Skyrim": {},
    "Complete all miscellaneous quests and dungeons in Tamriel Rebuilt Map 1": {},
    "Complete all miscellaneous quests and dungeons in Tamriel Rebuilt Map 2": {},
    "Complete all miscellaneous quests and dungeons in Tamriel Rebuilt Map 3": {},
    "Complete all miscellaneous quests and dungeons in Tamriel Rebuilt Map 4": {},
    "Complete all miscellaneous quests and dungeons in Tamriel Rebuilt Map 5": {},
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
    "Complete Cyrodiil + Skyrim Fighters Guild": {},
    "Complete Cyrodiil + Skyrim Mages Guild": {},
    "Complete Cyrodiil + Skyrim Thieves Guild": {},
    "Complete Kingdom of Anvil": {},
    "Complete the Abecette Fight Pit, Narsis Arena, and Dragonstar Arena": {},
    "Complete ${faction}": {},
    "Collect all artifacts mentioned in the book 'Tamrielic Lore'.": {},
    "Collect all unique Axes": {"hasSkill":[SkillsType.AXE]},
    "Collect all unique Bows and Crossbows": {"hasSkill":[SkillsType.MARKSMAN]},
    "Collect all unique Blunt Weapons": {"hasSkill":[SkillsType.SPEAR]},
    "Collect all unique Long Blades": {"hasSkill":[SkillsType.LONG_BLADE]},
    "Collect all unique Short Blades": {"hasSkill":[SkillsType.SHORT_BLADE]},
    "Collect all unique Spears": {"hasSkill":[SkillsType.SPEAR]},
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomizeRace() {
    let races = Object.values(RacesType);
    let random = getRandomInt(races.length);
    document.getElementById("race").textContent = races[random];
}

function addLiChildren(node, list) {
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
    list.forEach((element) => {
        let newNode = document.createElement("li");
        newNode.textContent = element;
        node.appendChild(newNode);
    });
}

function randomizeClass() {
    let classes = Object.values(ClassesType);
    let random = getRandomInt(classes.length);
    let myclass = classes[random];

    document.getElementById("class-name").textContent = myclass.name;
    document.getElementById("class-specialization").textContent = myclass.specialization;
    addLiChildren(document.getElementById("class-attributes"), myclass.attributes);
    addLiChildren(document.getElementById("class-major-skills"), myclass.majors);
    addLiChildren(document.getElementById("class-minor-skills"), myclass.minors);
}

function randomizeBirthsign() {
    let birthsigns = Object.values(BirthsignType);
    let random = getRandomInt(birthsigns.length);
    document.getElementById("birthsign").textContent = birthsigns[random];
}

function randomizeObjective() {

}

function randomizeStipulations() {

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