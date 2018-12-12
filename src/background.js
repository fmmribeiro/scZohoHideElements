console.log('sss');



/**
 * Create a context menu which will only show up for images.
 */
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let msg = {
		text: "hello"
	}
	chrome.tabs.sendMessage(tab.id, msg);
}
