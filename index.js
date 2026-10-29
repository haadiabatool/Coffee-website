document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburgerToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle Hamburger Menu Open/Close
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close Menu When a Navigation Link is Clicked (Mobile UX)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const viewMenuBtn = document.getElementById('viewMenuBtn');
  const hiddenItems = document.querySelectorAll('.drink-card.hidden-item');

  if (viewMenuBtn) {
    viewMenuBtn.addEventListener('click', () => {
      hiddenItems.forEach(item => {
        item.style.display = 'flex'; // Show hidden cards
      });
      viewMenuBtn.style.display = 'none'; // Hide button after opening all items
    });
  }
});