import wixStorage from 'wix-storage';

$w.onReady(function () {
	const text1 = $w('#finalP1Choice');
	const text2 = $w('#finalP2Choice');

	const text1Val = wixStorage.session.getItem('finalP1Choice');
	const text2Val = wixStorage.session.getItem('finalP2Choice');

	text1.text = text1Val;
	text2.text = text2Val;

	const variable1 = wixStorage.session.getItem('player1Choice');
	const variable2 = wixStorage.session.getItem('player2Choice');
	$w('#imageOne').src = `${variable1}`;
	$w('#imageTwo').src = `${variable2}`;
});