// Fetch and inject the navbar
fetch('/components/navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
    setupHamburgerMenu();
    checkNavbarOverflow();

    window.addEventListener('pageshow', () => {
        checkNavbarOverflow(); // Re-check on page load
        window.addEventListener('resize', () => {
          setTimeout(checkNavbarOverflow, 100);
        });
      });
  })
  .catch(error => console.error('Error loading navbar:', error));

  function checkNavbarOverflow() {
    const navbar = document.querySelector('.navbar');
    const desktopLinks  = document.querySelector('.desktop-links');
    const navLinksContainer  = document.querySelector('.nav-links');
  
    if (!desktopLinks || !navLinksContainer) return;
  
    // Check if links overflow their container
    const isOverflowing = desktopLinks.scrollWidth > navLinksContainer.offsetWidth;
    navbar.classList.toggle('overflowing', isOverflowing);
    console.log('Is overflowing?', isOverflowing);
    
  }

    window.addEventListener('resize', () => {
    // Throttle to avoid performance issues
    setTimeout(checkNavbarOverflow, 100);
  });



function setupHamburgerMenu(){
    const hamburger = document.querySelector('.hamburger');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-right')) {
      hamburger.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    }
  });
}





















