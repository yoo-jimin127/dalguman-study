// Get Elements
const player = document.querySelector('.player');
const video = document.querySelector('.video');

const toggleBtn = document.querySelector('#togglePlay');
const progressBar = document.querySelector('.progress_bar');

const ranges = document.querySelectorAll('.range');
const skipBtns = document.querySelectorAll('.skip');

// Build functions 
function togglePlay(){
    video.paused ? video.play() : video.pause();
    //video[video.paused ? 'play' : 'pause']();
    // 재생 여부에 따라  아이콘 바꾸기
}

function skipPlay () {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange(){
    if(this.name === 'volume'){
        video.volume = this.value;
    } else if (this.name === 'playbackRate') {
        video.playbackRate = this.value;
    }
}

function updateProgress () {
    progressBar.style.width = (video.currentTime / video.duration) *100 +"%";
}


// Hook up the event listeners
video.addEventListener('timeupdate',updateProgress)

toggleBtn.addEventListener('click',togglePlay);
skipBtns.forEach(btn=>{
    btn.addEventListener('click',skipPlay);
})
ranges.forEach(range=>{
    range.addEventListener('change',handleRange);
    range.addEventListener('mousemove',handleRange);
})

