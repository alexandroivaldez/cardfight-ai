// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { explainJavaScriptCode} from 'backend/ai';
import wixStorage from 'wix-storage';

const charList = [
    "Abraham Lincoln",
    "Barack Obama",
    "George Washington",
    "Donald Trump",
    "John F. Kennedy",
    "Superman",
    "Batman",
    "Spider-Man",
    "Wonder Woman",
    "Hulk",
    "Iron Man",
    "Black Widow",
    "Captain America",
    "Thor",
    "Black Panther",
    "Goku",
    "Naruto Uzumaki",
    "Monkey D. Luffy",
    "Sailor Moon",
    "Saitama",
    "Walter White",
    "Daenerys Targaryen",
    "Sherlock Holmes",
    "Jon Snow",
    "Michael Scott",
    "Lion",
    "Tiger",
    "Eagle",
    "Gorilla",
    "Elephant",
    "Franklin D. Roosevelt",
    "Thomas Jefferson",
    "Ronald Reagan",
    "George H. W. Bush",
    "Bill Clinton",
    "Captain Marvel",
    "Wolverine",
    "Green Lantern",
    "Catwoman",
    "Aquaman",
    "Spider-Woman",
    "Flash",
    "Doctor Strange",
    "Storm",
    "Deadpool",
    "Vegeta",
    "Sasuke Uchiha",
    "Edward Elric",
    "Mikasa Ackerman",
    "Light Yagami",
    "Tyrion Lannister",
    "Rick Grimes",
    "Hannah Baker",
    "Don Draper",
    "Fiona Gallagher",
    "Jaguar",
    "Panther",
    "Wolf",
    "Grizzly Bear",
    "Great White Shark",
    "Theodore Roosevelt",
    "Woodrow Wilson",
    "Harry S. Truman",
    "Jimmy Carter",
    "Dwight D. Eisenhower",
    "Harley Quinn",
    "Green Arrow",
    "Rogue",
    "Lex Luthor",
    "Doctor Doom",
    "Hawkeye",
    "Supergirl",
    "Black Canary",
    "Ant-Man",
    "Jean Grey",
    "Gon Freecss",
    "Eren Yeager",
    "Gintoki Sakata",
    "Kaneki Ken",
    "Lelouch Lamperouge",
    "Tony Stark",
    "Jon Snow",
    "Michael Scott",
    "Rick Sanchez",
    "Eleven",
    "Cheetah",
    "Giraffe"
  ];
const powerList = [
    "That has Flight",
    "That has Superhuman Strength",
    "That has Telekinesis",
    "That has Invisibility",
    "That has Teleportation",
    "Armed with a Sword",
    "Armed with a Shield",
    "Armed with a Bow and Arrow",
    "Armed with a Laser Gun",
    "Armed with a Staff",
    "That has Telepathy",
    "That has Time Manipulation",
    "That has Healing Factor",
    "That has Fire Manipulation",
    "That has Ice Powers",
    "Armed with a Hammer",
    "Armed with a Dagger",
    "Armed with a Lightsaber",
    "Armed with a Grappling Hook",
    "Armed with an Energy Blaster",
    "That has Super Speed",
    "That has Shape-Shifting",
    "That has Electrokinesis",
    "That has Mind Control",
    "That has Force Field Generation",
    "Armed with a Katana",
    "Armed with a Pistol",
    "Armed with a Crossbow",
    "Armed with a Grenade Launcher",
    "Armed with a Sniper Rifle",
    "That has Weather Control",
    "That has X-ray Vision",
    "That has Energy Absorption",
    "That has Elasticity",
    "That has Sonar Sense",
    "Armed with a Chainsaw",
    "Armed with a Rocket Launcher",
    "Armed with a Boomerang",
    "Armed with Nunchaku",
    "Armed with a Machete",
    "That has Pyrokinesis",
    "That has Hydrokinesis",
    "That has Super Durability",
    "That has Precognition",
    "Armed with a Mace",
    "Armed with a Whip",
    "Armed with a Net",
    "Armed with Brass Knuckles",
    "That has Energy Projection",
    "That has Animal Communication",
    "That has Size Manipulation",
    "That has Regeneration",
    "Armed with Sai",
    "Armed with a Flamethrower",
    "Armed with a Bo Staff",
    "Armed with a Battle Axe",
    "That has Gravity Manipulation",
    "That has Phasing",
    "That has Technopathy",
    "That has Poison Manipulation",
    "Armed with a Morningstar",
    "Armed with a Chainsaw Sword",
    "Armed with Throwing Knives",
    "Armed with a Whistle",
    "That has Night Vision",
    "That has Illusion Manipulation",
    "That has Sound Manipulation",
    "That has Acid Manipulation",
    "Armed with a Trident",
    "Armed with a Flamethrower Gauntlet",
    "Armed with a Slingshot",
    "Armed with a Cane",
    "That has Probability Manipulation",
    "That has Hypnosis",
    "That has Earth Manipulation",
    "That has Laser Vision",
    "Armed with a Whip Sword",
    "Armed with a Throwing Axe",
    "Armed with a Taser",
    "Armed with Brass Knuckles",
    "That has Reality Warping",
    "That has Sonic Scream",
    "That has Plant Manipulation",
    "That has Magnetic Manipulation",
    "Armed with a Trident",
    "Armed with a Bo Staff",
    "Armed with a Bola",
    "Armed with a Blow"
]

const whiteCardText1 = $w('#wcText1');
const whiteCardText2 = $w('#wcText2');
const whiteCardText3 = $w('#wcText3');

const blackCardText1 = $w('#bcText1');
const blackCardText2 = $w('#bcText2');
const blackCardText3 = $w('#bcText3');

const powerSelectedText = $w('#powerSelectedText');
const charSelectedText = $w('#charSelectedText');

let whiteCard = "";
let blackCard = "";

let selectedChar = "";
let selectedPower = "";

let player1Choice = "";

let wCard1Num = 0;
let wCard2Num = 0;
let wCard3Num = 0;
let bCard1Num = 0;
let bCard2Num = 0;
let bCard3Num = 0;

const generateUniqueNumbers = () => {
    var numbers = [];
  
    while (numbers.length < 3) {
      var randomNumber = Math.floor(Math.random() * 87);
  
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    wCard1Num = numbers[0];
    wCard2Num = numbers[1];
    wCard3Num = numbers[2];
    bCard1Num = numbers[0];
    bCard2Num = numbers[1];
    bCard3Num = numbers[2];

    console.log(numbers);
}

$w.onReady(() => {
    generateUniqueNumbers();
    displayCardData();
    $w('#nextPageBtn').hide();
});


const displayCardData = () => {
	whiteCardText1.text = charList[wCard1Num];
    whiteCardText2.text = charList[wCard2Num];
    whiteCardText3.text = charList[wCard3Num];
    blackCardText1.text = powerList[bCard1Num];
    blackCardText2.text = powerList[bCard2Num];
    blackCardText3.text = powerList[bCard3Num];
}

export function whiteCardClicked(event) {
    if (event.target == $w('#whiteCard1')) {
		selectedChar = charList[wCard1Num];
        console.log(`Selected Char is: ${selectedChar}`);
    } else if (event.target == $w('#whiteCard2')) {
        selectedChar = charList[wCard2Num];
        console.log(`Selected Char is: ${selectedChar}`);
    } else {
        selectedChar = charList[wCard3Num];
        console.log(`Selected Char is: ${selectedChar}`);
    }

    charSelectedText.text = `Character Selected: ${selectedChar}`;
}

export function blackCardClicked(event) {
    if (event.target == $w('#blackCard1')) {
		selectedPower = powerList[bCard1Num];
        console.log(`Selected Char is: ${selectedPower}`);
    } else if (event.target == $w('#blackCard2')) {
        selectedPower = powerList[bCard2Num];
        console.log(`Selected Char is: ${selectedPower}`);
    } else {
        selectedPower = powerList[bCard3Num];
        console.log(`Selected Char is: ${selectedPower}`);
    }

    powerSelectedText.text = `Power Selected: ${selectedPower}`;
}

export async function handleSubmit(event) {
    if(selectedChar == "" || selectedPower == ""){
        console.log("Please complete your card selection.");
    } else {
        $w('#button1').disable();
        $w('#button1').label = "Generating hero...";
        const code = `${selectedChar} ${selectedPower}, high-detail, dramatic lighting, digital art`;
        const res = await explainJavaScriptCode(code);
        player1Choice = res;
        console.log(`Player 1 URL: ${res}`);
        $w('#button1').hide();
        $w('#nextPageBtn').show();
        wixStorage.session.setItem('player1Choice', player1Choice);
        wixStorage.session.setItem('finalP1Choice', `${selectedChar} ${selectedPower}`);
    }
    
}