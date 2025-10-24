
const navBarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navBarToggle.addEventListener('click', () => {
    navBarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const textarea = document.querySelector('textarea');
const minHeight = 20; // set your initial min-height in px

textarea.addEventListener('input', () => {
    textarea.style.height = minHeight + 'px';      // reset to min height
    textarea.style.height = textarea.scrollHeight + 'px'; // grow to fit content
});

function loadPage(page) {
      fetch(page + '.html')
        .then(response => response.text())
        .then(html => {
          document.getElementById('main-content').innerHTML = html;
        });
    }
    window.onload = () => loadPage('home');
