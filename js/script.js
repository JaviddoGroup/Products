if (!window.videos) {
    const videos = ["../media/video/1.mp4", "../media/video/2.mp4", "../media/video/3.mp4", "../media/video/4.mp4", "../media/video/5.mp4", "../media/video/6.mp4", "../media/video/7.mp4"]; // Пути к вашим видео
}
const videoElement = document.getElementById("background-video");

let currentVideoIndex = 0;

videoElement.addEventListener("ended", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();
});