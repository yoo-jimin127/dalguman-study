// background 스크립트에서만 동작 가능한 액션을 처리해주기 위해 contentscript에서 이벤트 발생 (alert로)
chrome.runtime.sendMessage({action: "FINISH"}, function(response) {
    alert(response); //contentscript에서 이벤트 발생한 뒤 background에서 listening 진행
});

// 런타임 환경이 아닌 익스텐션에서 메시지 주고받을 때 chrome.extension.onMessage.addListener 사용
chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "START") { /*조건 충족 시 처리부 추후 구현*/ }
});