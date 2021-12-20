// 실제 Extension API - chrome.desktopCapture 사용 파일
import adapter from 'webrtc-adapter';

chrome.runtime.onConnect.addListener(port => {
    // 임의 메시지 정의
    port.onMessage.addListener(msg => {
        if (msg.type === "REQUEST_SCREEN_STREAM_ID") {
            requestScreenStreamId(port, msg);
            // port 통해 content-script와 통신할 수 있도록 메시지 송/수신 준비
        }
    });
});

// 메시지 수신될 경우 chrome.desktopCapture.chooseDesktopMedia API 호출
function requestScreenStreamId(port, msg) {
    const sendMessage = {}; 
    const tab = port.sender.tab;
    tab.url = msg.url;

    chrome.desktopCapture.chooseDesktopMedia (
        ["screen", "window", "tab"],
        tab,
        streamId => {
            if (streamId) {
                // streamId 가져오는 것 성공한 경우 sendMessage.streamId 설정
                sendMessage.streamId = streamId;
            }

            else {
                // streamId 가져오는 것 실패한 경우

            }
        }
    );

    port.postMessage(sendMessage);
}