// Extension App 사용으로 웹 페이지 주입 위한 파일 - Extension App과 웹 페이지 간 통신

// background script와 통신 가능하도록 port 사용해 메시지 송수신
const post = chrome.runtime.connect(chrome.runtime.id);
prompt.onMessage.addListener(msg => {
    // Background Script에서 받은 메시지 웹 페이지에 전달
    window.postMessage(msg, "*");
});

window.addEventListener("message", event => {
    const type = event.data.type;
    
    if (type === "REQUEST_SCREEN_STREAM_ID") {
        // 웹페이지에서 받은 메시지 background script에 전달
        prompt.postMessage(event.data);
    }
});