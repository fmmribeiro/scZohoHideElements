/*
Original Code in
https: //github.com/harshjv/github-repo-size"

Code to test
document.getElementById('Accounts_fldRow_TICKERSYMBOL');
*/

/* global fetch, Request, Headers */

const API = 'https://api.github.com/repos/'

function isTree(uri) {
	var repoURI = uri.split('/')
	return repoURI.length === 2 || repoURI[2] === 'tree'
}

function getRepoInfoURI(uri) {
	var repoURI = uri.split('/')
	return repoURI[0] + '/' + repoURI[1]
}

function getFileName(text) {
	return text.trim().split('/')[0]
}

function checkForRepoPage() {
	var repoURI = window.location.pathname.substring(1)

	var elementsToHide = ['Accounts_fldRow_TICKERSYMBOL'];
	var arrayLength = elementsToHide.length;

	for (var i = 0; i < arrayLength; i++) {
		console.log(elementsToHide[i]);
		var elemToHide = document.getElementById(elementsToHide[i]);

		if (elemToHide) {
			console.log('FOUND ' + elementsToHide[i]);
			elemToHide.style.display = 'none';
		}
	}
}


document.addEventListener('pjax:end', checkForRepoPage, false)

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, senderRequest) {
	console.log(message.text);
	if (message.text) {
		checkForRepoPage();
	}
}
