const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.image-container h1, .image-container p, .image-container button').forEach(el => {
  if (el) observer.observe(el);
});

document.querySelectorAll('.image-container button').forEach(button => {
  if (button) {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
    });

    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  }
});

// Optional: Prevent scroll if used in full screen
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';
