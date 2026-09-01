
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
})

const SpecializationType = Object.freeze({
    COMBAT: "Combat",
    MAGIC: "Magic",
    STEALTH: "Stealth"
})

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
})

const ClassesType = Object.freeze({
    "Dummy": {
        "name": "Dummy",
        "specialization": SpecializationType.COMBAT,
        "attributes": [AttributesType.AGILITY, AttributesType.AGILITY],
        "majors": [SkillsType.ACROBATICS, SkillsType.ACROBATICS, SkillsType.ACROBATICS, SkillsType.ACROBATICS, SkillsType.ACROBATICS],
        "minors": [SkillsType.ACROBATICS, SkillsType.ACROBATICS, SkillsType.ACROBATICS, SkillsType.ACROBATICS, SkillsType.ACROBATICS],
    },
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
})

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
    let numClasses = classes.length;
    // Whilst we still have the dummy in there...
    numClasses -= 1;
    let random = getRandomInt(numClasses);
    // Whilst we still have the dummy in there...
    random += 1;
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