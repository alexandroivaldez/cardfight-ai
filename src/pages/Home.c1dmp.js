// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixStorage from 'wix-storage';

$w.onReady(function () {
    wixStorage.session.setItem('player1Choice', "");
	wixStorage.session.setItem('player2Choice', "");
});