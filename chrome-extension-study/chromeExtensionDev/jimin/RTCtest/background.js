chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "fron the extension"); //contentscript에서 받은 이벤트 listening로 들음

    if (request.action == "FINISH")
        sendResponse({farewell: "goodbye"});
});