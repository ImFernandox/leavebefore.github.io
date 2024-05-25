
const audio = document.getElementById('myAudio');

function playAudio() {
    audio.play();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function setVolume(value) {
    audio.volume = value;
}
audio.addEventListener('volumechange', function() {
    document.querySelector('input[type="range"]').value = audio.volume;
});
