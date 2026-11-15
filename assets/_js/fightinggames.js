// Global variables
var globalShowTitle = true; 
var globalContenderNames = ["", ""];
var globalContenderImages = [null, null];
var globalContenderHealth = [0, 0, 0, 0, 0];
var globalContendersVisible = false;

const GamesType = Object.freeze([
  "Aggressors of Dark Combat",
  "Art of Fighting",
  "Art of Fighting 2",
  "Art of Fighting 3",
  "Asura Blade: Sword of Dynasty",
  "Avatar Legends: The Fighting Game",
  "Battle Arena Toshinden",
  "Battle Arena Toshinden 2",
  "Battle Arena Toshinden 3",
  "Battle Arena Toshinden 4",
  "Battle Fantasia",
  "Blade Strangers",
  "BlazBlue: Central Fiction",
  "BlazBlue Cross Tag Battle",
  "Blazing Strike",
  "Bloody Roar 2",
  "Bloody Roar 3",
  "Bloody Roar 4",
  "Bloody Roar: Hyper Beast Duel",
  "Bloody Roar: Primal Fury",
  "Breakers Revenge",
  "Buriki One",
  "Bushido Blade",
  "Bushido Blade 2",
  "Capcom Fighting All Stars",
  "Capcom Fighting Evolution",
  "Capcom vs SNK",
  "Capcom vs SNK 2",
  "Capcom vs SNK Pro",
  "Castlevania Judgement",
  "Chaos Breaker (Dark Awake)",
  "Chaos Code",
  "Cyberbots: Full Metal Madness",
  "Daraku Tenshi - The Fallen Angels",
  "Darkstalkers 2",
  "Darkstalkers: The Night Warriors",
  "Dead or Alive",
  "Dead or Alive 2: Hardcore",
  "Dead or Alive 3",
  "Dead or Alive 4",
  "Dead or Alive 5 Last Round",
  "DNF Duel",
  "Double Dragon",
  "Dragon Ball Fighterz",
  "Dragon Ball Z Budokai 3",
  "Dynasty Warriors 1",
  "Ehrgeiz: God Bless The Ring",
  "Fatal Fury",
  "Fatal Fury 2",
  "Fatal Fury 3",
  "Fatal Fury: Wild Ambition",
  "Fate/Unlimited Codes",
  "Fighters History",
  "Fighters History Dynamite",
  "Fighters Megamix",
  "Fighting EX Layer",
  "Fighting Layer",
  "Fighting Vipers",
  "Fighting Vipers 2",
  "Final Fight: Revenge",
  "Galaxy Fight: Universal Warriors",
  "Garou: Mark of the Wolves",
  "Golden Axe: The Duel",
  "Groove on Fight",
  "Guilty Gear",
  "Guilty Gear Strive",
  "Guilty Gear Xrd Rev 2",
  "Guilty Gear XX Accent Core Plus R",
  "Hokuto No Ken",
  "Injustice",
  "Injustice 2",
  "International Karate",
  "JoJo's Bizarre Adventure: All-Star Battle",
  "JoJo's Bizarre Adventure: All-Star Battle R",
  "JoJo's Bizarre Adventure: Heritage for the Future",
  "Justice League: Task Force",
  "Kaiser Knuckle",
  "Kenichi",
  "Killer Instinct 2013",
  "Killer Instinct",
  "Killer Instinct 2",
  "Killer Instinct Gold",
  "Kizuna Encounter: Super Tag Battle",
  "Last Bronx",
  "Mace: The Dark Age",
  "Martial Champion",
  "Martial Masters",
  "Marvel Super Heroes",
  "Marvel Super Heroes Vs. Street Fighter",
  "Marvel Tōkon: Fighting Souls",
  "Marvel Vs Capcom",
  "Marvel Vs. Capcom 2: New Age of Heroes",
  "Marvel Vs Capcom Infinite",
  "Mortal Kombat",
  "Mortal Kombat 11",
  "Mortal Kombat 2",
  "Mortal Kombat 4",
  "Mortal Kombat 9",
  "Mortal Kombat Armageddon",
  "Mortal Kombat Deadly Alliance",
  "Mortal Kombat Deception",
  "Mortal Kombat Trilogy",
  "Mortal Kombat Vs DC Universe",
  "Naruto Clash of Ninja 4",
  "NeoGeo Battle Coliseum",
  "Ninja Master's: Hao Ninpo Cho",
  "Persona 4 Arena",
  "Persona 4 Arena: Ultimax",
  "Plasma Sword",
  "Pokemon Close Combat",
  "Power Instinct",
  "Power Instinct 2",
  "Power Stone",
  "Power Stone 2",
  "Primal Rage",
  "Project Justice: Rival Schools 2",
  "Rage of the Dragons",
  "Real Bout Fatal Fury",
  "Real Bout Fatal Fury 2: The Newcomers",
  "Real Bout Fatal Fury Special",
  "Red Earth",
  "Rival Schools United By Fate",
  "Samurai Shodown",
  "Samurai Shodown 2",
  "Samurai Shodown 2019",
  "Samurai Shodown 3",
  "Samurai Shodown 4",
  "Samurai Shodown 5 Perfect",
  "Saturday Night Slam Masters",
  "Savage Reign",
  "Sengoku Basara X Cross",
  "SNK Vs. Capcom: Card Fighters' Clash",
  "SNK Vs. Capcom: Card Fighters Clash 2",
  "SNK vs Capcom: Chaos",
  "Soul Calibur",
  "Soul Calibur 2",
  "Soul Calibur 3",
  "Soul Edge",
  "Star Gladiator Episode: I Final Crusade",
  "Star Wars: Masters of Teräs Käsi",
  "Street Fighter",
  "Street Fighter 2 Turbo",
  "Street Fighter 4",
  "Street Fighter 5",
  "Street Fighter 6",
  "Street Fighter Alpha Warriors' Dreams",
  "Street Fighter Alpha 2",
  "Street Fighter Alpha 3",
  "Street Fighter EX",
  "Street Fighter EX 2",
  "Street Fighter EX 3",
  "Street Fighter III: 3rd Strike",
  "Street Fighter x Tekken",
  "Street Smart",
  "Super Smash Bros",
  "Super Smash Bros Melee",
  "Tatsunoko Vs. Capcom: Cross Generation of Heroes",
  "Tatsunoko Fight",
  "Teenage Mutant Ninja Turtles: Tournament Fighters",
  "Tekken",
  "Tekken 2",
  "Tekken 3",
  "Tekken 4",
  "Tekken 5",
  "Tekken 6",
  "Tekken 7",
  "Tekken 8",
  "Tekken Tag Tournament",
  "Tekken Tag Tournament 2",
  "The King of Fighters 2002: Unlimited Match",
  "The King of Fighters '94: Re-bout",
  "The King of Fighters '95",
  "The King of Fighters '98: The Slugfest",
  "The King of Fighters '98: Ultimate Match",
  "The King Of Fighters: Maximum Impact 2",
  "The King of Fighters XI",
  "The King of Fighters XIII",
  "The Last Blade",
  "The Last Blade 2",
  "The Rumble Fish",
  "The Rumble Fish 2",
  "Tobal 2",
  "Tobal No. 1",
  "Ultimate Marvel Vs. Capcom 3",
  "Ultimate Mortal Kombat 3",
  "Under Night In-Birth",
  "Urban Reign",
  "Vampire Savior",
  "Virtua Fighter",
  "Virtua Fighter 2",
  "Virtua Fighter 3",
  "Virtua Fighter 4 Evolution",
  "Virtua Fighter 5: R.E.V.O. World Stage",
  "Waku Waku 7",
  "Weaponlord",
  "World Heroes",
  "World Heroes 2",
  "X-Men: Children of the Atom",
  "X-Men Vs. Street Fighter"
]);

// Generate an int between lower (inclusive) and upper (exclusive)
function getRandomIntBetween(lower, upper){
	return Math.floor(Math.random()*((upper-1)-lower+1)+lower);
}

// Generate an int between 0 (inclusive) and upper (exclusive)
function getRandomInt(upper) {
  return Math.floor(Math.random() * upper);
}

function getImageUrl(name) {
  imagename = name.toLowerCase().replaceAll(' ', '_').replace(/\W/g, '').replace(/_+/g,'_');
  url = "/assets/images/fightinggames/" + imagename + ".png";
  return url;
}

function createImage(url) {
  let image = document.createElement("img");
  image.src = url;
  return image;
}

function hit() {
  let which = getRandomInt(2);
  let isHitLeft = (which == 0);
  let gameOuter = document.querySelectorAll(".game-outer")[which];
  let healthbar = document.querySelectorAll(".healthbar-container")[which];

  // Randomize some force to the new hit
  let forceX = getRandomIntBetween(5, 15);
  let forceY = getRandomIntBetween(-5, 5);

  // We use the x force as the number of hitpoints to knock off.
  let health = globalContenderHealth[which];
  health = Math.max(0, health - forceX);
  globalContenderHealth[which] = health;
  healthbar.querySelector(".healthbar-current").style.width = health + "%";
  healthbar.querySelector(".healthbar-shock").style.width = health + "%";
  if( health == 0 ) {
    gameOuter.querySelector(".game-dead").classList.remove("hidden");
  }

  // To render the animations properly, we make hits to the left game have negative direction force
  if(isHitLeft) {
    forceX *= -1;
  }

  let position = hitGame(gameOuter.querySelector(".game-inner"), forceX, forceX);
  let radiusX = gameOuter.offsetWidth / 2;
  let radiusY = gameOuter.offsetHeight / 2;
  let midX = position[0] + radiusX;
  let midY = position[1] + radiusY;
  createSparks(gameOuter.querySelector(".sparks"), midX, midY, radiusX, radiusY, forceX, forceY)
}

function hitGame(container, forceX, forceY) {
  // Cancel old animation but capture offset to use as a starting point for the new hit
  let currentTransform = new DOMMatrix(getComputedStyle(container).transform);
  container.getAnimations().forEach(animation => animation.cancel());
  let currentX = currentTransform.m41;
  let currentY = currentTransform.m42;

  // Start a new animation that starts from where we cancelled the old one
  let endX = currentX + (2 * forceX);
  let endY = currentY + forceY;

  container.animate([
      { transform: 'translate(' + currentX + 'px, ' + currentY + 'px)' },
      { transform: 'translate(' + endX + 'px, ' + endY + 'px)' },
      { transform: 'translate(0px, 0px)' }
  ], {
      duration: 300,
      easing: 'ease-out',
      fill: 'none'
  });

  // We need the current position for generating the sparks
  return [currentX, currentY];
}

function createSparks(container, midX, midY, radiusX, radiusY, forceX, forceY) {
  let count = getRandomIntBetween(8, 12);

  // This is the rough origin for the shower of sparks.
  // The individual sparks get their own individual x and ys by css
  let originX = midX + (0.8*getRandomIntBetween(-radiusX,radiusX));
  let originY = midY + (0.8*getRandomIntBetween(-radiusY,radiusY));

  // Select the properties of the hit;
  let distanceX = forceX * 5;
  let bezierPointY = forceY * 0.05;

  for (let i = 0; i < count; i++) {
    let spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.setProperty('--origin-x', originX + 'px');
    spark.style.setProperty('--origin-y', originY + 'px');
    spark.style.setProperty('--distance-x', distanceX + 'px');
    spark.style.setProperty('--bezier-y', bezierPointY);

    spark.addEventListener('animationend', () => {
      spark.remove();
    }, { once: true });

    container.appendChild(spark);
  }
}

function interact() {
  if( globalShowTitle ) {
    // Show the fighting game section
    document.getElementById("titlescreen").classList.add("hidden");
    document.getElementById("fighting-game").classList.remove("hidden");
    globalShowTitle = false;
  } else if( !globalContendersVisible ) {
    // Populate the fighters from the contenders we set up earlier
    let contendersHtml = document.querySelectorAll(".game-outer");
    let healthbarsHtml = document.querySelectorAll(".healthbar-container");
    for( let i = 0; i < globalContenderNames.length; i++ ) {
      let contender = contendersHtml[i];
      contender.classList.remove("hidden");

      // Set the image
      let imageContainer = contender.querySelector(".game-image");
      imageContainer.removeChild(imageContainer.lastChild);
      imageContainer.appendChild(globalContenderImages[i]);

      // Set the name
      let nameContainer = contender.querySelector(".game-name");
      nameContainer.textContent = globalContenderNames[i];
      nameContainer.style.width = imageContainer.lastChild.offsetWidth + 'px';

      // Set the healthbars
      healthbarsHtml[i].querySelector(".game-name").textContent = globalContenderNames[i];
      healthbarsHtml[i].querySelector(".healthbar-decorator").classList.add("expanded");
    }
    globalContendersVisible = true;
  } else {
    if( ( globalContenderHealth[0] > 0 ) && ( globalContenderHealth[1] > 0 ) )
    {
      hit();
    }
  }
}

function setup() {
  globalContenderHealth = [100, 100];
  globalContendersVisible = false;

  let firstContenderName = GamesType[getRandomInt(GamesType.length)];
  globalContenderNames[0] = firstContenderName;
  globalContenderImages[0] = createImage(getImageUrl(firstContenderName));

  // Exclude the first contender from the second selection
  let remainingContenders = GamesType.filter(name => name !== firstContenderName);

  let secondContenderName = remainingContenders[getRandomInt(remainingContenders.length)];
  globalContenderNames[1] = secondContenderName;
  globalContenderImages[1] = createImage(getImageUrl(secondContenderName));
}

document.addEventListener("DOMContentLoaded", () => {
  // We randomize the two contenders in advance so that we can create the img element early and pre-load the images
  setup();

  document.addEventListener("click", function(event) {
    if (event.target.closest("a")) {
      return;
    }
    interact();
  });
  document.addEventListener("keydown", interact);
});