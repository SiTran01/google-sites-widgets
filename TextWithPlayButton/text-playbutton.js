const video = document.getElementById('video-player');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const pipButton = document.getElementById('pip-button');

pipButton.addEventListener('click', async () => {
  if (video.paused) {
    try {
      await video.play();
      if (document.pictureInPictureEnabled && !document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      }
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } catch (err) {
      console.error('Không thể bật Picture-in-Picture:', err);
    }
  } else {
    video.pause();
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }
});

video.addEventListener('leavepictureinpicture', () => {
  video.pause();
  playIcon.style.display = 'block';
  pauseIcon.style.display = 'none';
});
