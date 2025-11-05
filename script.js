document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const subtitle = document.querySelector('.subtitle');
  const title = document.querySelector('h1');
  const video = document.getElementById('bg-video');
  const socialLinks = document.getElementById('social-links');

  startBtn.addEventListener('click', () => {
    // Play the video with sound
    video.muted = false;
    video.play();

    // Animate title + subtitle to glitch downward
    title.classList.add('glitch-down');
    subtitle.classList.add('glitch-down');

    // Hide Start button
    startBtn.style.display = 'none';

    // Show social links after a short delay
    setTimeout(() => {
      socialLinks.style.opacity = 1;
      socialLinks.classList.add('show-links');
      const links = socialLinks.querySelectorAll('a');
      links.forEach((link, i) => {
      });
    }, 500); // delay slightly to let glitch animation finish
  });
});
