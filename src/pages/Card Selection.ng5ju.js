// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import { explainJavaScriptCode} from 'backend/ai';
import wixStorage from 'wix-storage';

const charList = ['Panda', "Darth Vader", 'Spider-Man'];
const powerList = ['Armed with a lightsaber', 'That can shoot flames from hand', 'Has magical powers'];
const whiteCardText1 = $w('#wcText1');
const whiteCardText2 = $w('#wcText2');
const whiteCardText3 = $w('#wcText3');

const blackCardText1 = $w('#bcText1');
const blackCardText2 = $w('#bcText2');
const blackCardText3 = $w('#bcText3');

let whiteCard = "";
let blackCard = "";

let selectedChar = "";
let selectedPower = "";

let player1Choice = "";

$w.onReady(() => {
    displayCardData();
    $w('#nextPageBtn').hide();
});

const displayCardData = () => {
	whiteCardText1.text = charList[0];
    whiteCardText2.text = charList[1];
    whiteCardText3.text = charList[2];
    blackCardText1.text = powerList[0];
    blackCardText2.text = powerList[1];
    blackCardText3.text = powerList[2];
}

export function whiteCardClicked(event) {
    if (event.target == $w('#whiteCard1')) {
		selectedChar = charList[0];
        console.log(`Selected Char is: ${selectedChar}`);
    } else if (event.target == $w('#whiteCard2')) {
        selectedChar = charList[1];
        console.log(`Selected Char is: ${selectedChar}`);
    } else {
        selectedChar = charList[2];
        console.log(`Selected Char is: ${selectedChar}`);
    }
}

export function blackCardClicked(event) {
    if (event.target == $w('#blackCard1')) {
		selectedPower = powerList[0];
        console.log(`Selected Char is: ${selectedPower}`);
    } else if (event.target == $w('#blackCard2')) {
        selectedPower = powerList[1];
        console.log(`Selected Char is: ${selectedPower}`);
    } else {
        selectedPower = powerList[2];
        console.log(`Selected Char is: ${selectedPower}`);
    }
}

export async function handleSubmit(event) {
    const code = `An anime style painting of ${selectedChar} ${selectedPower}`;
	const res = await explainJavaScriptCode(code);
    player1Choice = res;
    console.log(`Player 1 URL: ${res}`);
    $w('#button1').hide();
    $w('#nextPageBtn').show();
    wixStorage.session.setItem('player1Choice', player1Choice);
    
}