import adapter from 'webrtc-adapter';

const gotStream = screenStream => {
    const videoElement = document.getElementById("video");
    videoElement.src = URL.createObjectURL(screenStream);
    videoElement.onplay();
};

const onFail = err => {
    comsole.log(err);
};

window.addEventListener("message", event => {
    const streamId = event.data.streamId;

    if (streamId) {
        navigator.mediaDevices
        .getUserMedia({
            audio: false, //or true
            video: {
                mandatory: {
                    chromeMediaSourceId: streamId,
                    chromeMediaSource: "desktop",
                    maxWidth: window.screen.width,
                    maxHeight: window.screen.height
                }
            }
        })
        .then(gotStream)
        .catch(onFail);
    } else {
        // stream Id 가져오기 실패한 경우
    }
});