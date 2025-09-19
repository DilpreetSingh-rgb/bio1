// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
});

