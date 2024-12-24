// Referencias a los elementos
const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const rewindBtn = document.getElementById('rewindBtn');

// Reproducir o pausar el video
playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Volver al inicio del video
backBtn.addEventListener('click', () => {
    video.currentTime = 0;
});

// Avanzar 10 segundos
forwardBtn.addEventListener('click', () => {
    video.currentTime += 10;
});

// Retroceder 10 segundos
rewindBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});
