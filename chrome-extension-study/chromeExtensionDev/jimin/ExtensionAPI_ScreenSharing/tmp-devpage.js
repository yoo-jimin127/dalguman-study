<script src="https://cdn.webRtc-Experiment.com/getScreenId.js"></script>

getScreenId((error, sourceId, screenConstraints) => {
    if (error === "not-installed") return alert("The extension is not installed.");
    if (error === "permission-denied") return alert("Permission is denied.");
    if (error === "not-chrome") return alert("Please use chrome.");

    navigator.mediaDevices
        .getUserMedia(screenConstraints)
        .then(stream => {
            const video = document.querySelector("video");
            video.src = URL.createObjectURL(stream);
            video.autoplay = true;
            video.controls = true;
            video.play();
        })
        .catch(err => {
            console.log(err);
        });
});