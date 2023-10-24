window.onload = () => {
    if (window.VANTA) window.VANTA.NET({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    });

    let video = document.getElementById('video');
    let listener = () => {
        video.play();
    };
    document.getElementById('starter').addEventListener('click', () => {
        video.classList.add('play');
        video.play();
        document.body.classList.add('waiting');
        video.addEventListener('pause', listener);
    });
    video.addEventListener('ended', () => {
        video.classList.remove('play');
        document.body.classList.remove('waiting');
        video.removeEventListener('pause', listener);
        video.pause();
    });

    var supposedCurrentTime = 0;
    video.addEventListener('timeupdate', function() {
        if (!video.seeking) {
            supposedCurrentTime = video.currentTime;
        }
    });
    video.addEventListener('seeking', function() {
        let delta = video.currentTime - supposedCurrentTime;
        if (Math.abs(delta) > 0.01) {
            supposedCurrentTime = 0;
            video.currentTime = supposedCurrentTime;
        }
    });
};