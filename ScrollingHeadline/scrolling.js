// Get a reference to the marquee container element
const container = document.querySelector('#marqueeContainer');

// Adjust text size based on container height
function adjustTextSize() {
  const containerHeight = window.innerHeight;
  const fontSize = containerHeight * 0.9;
  container.style.setProperty('--dynamic-font-size', `${fontSize}px`);
}

// Generate and append multiple text elements
for (let i = 0; i < 18; i++) {
  const text = document.createElement('p');
  text.classList.add('marquee-text');
  text.textContent = ' ● Our Journey Begins Today '; // Customize this line
  container.appendChild(text);
}

// Initial adjustment and resize handling
adjustTextSize();
window.addEventListener('resize', adjustTextSize);
