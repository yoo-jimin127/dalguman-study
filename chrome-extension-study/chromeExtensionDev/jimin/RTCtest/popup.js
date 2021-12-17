document.getElementById("start".onclick = function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "START"}, /*callback 위치*/ );
        //popup.js에서 특정 탭에 이벤트 보내기 위해 tab의 id 반드시 포함해 넘김
    });
});