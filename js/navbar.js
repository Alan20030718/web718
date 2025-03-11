// Fetch and inject the navbar
fetch('/components/navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
  })
  .catch(error => console.error('Error loading navbar:', error));