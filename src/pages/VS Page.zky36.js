import wixStorage from 'wix-storage';

$w.onReady(function () {

	const variable1 = wixStorage.session.getItem('player1Choice');
	const variable2 = wixStorage.session.getItem('player2Choice');
	console.log(variable1);
	console.log(variable2);

	$w('#imageOne').src = `${variable1}`;
	$w('#imageTwo').src = `${variable2}`;
});