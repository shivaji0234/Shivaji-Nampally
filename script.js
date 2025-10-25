
const navBarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navBarToggle.addEventListener('click', () => {
    navBarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

const textarea = document.querySelector('textarea');
const minHeight = 20; 

textarea.addEventListener('input', () => {
    textarea.style.height = minHeight + 'px';      
    textarea.style.height = textarea.scrollHeight + 'px'; 
});

function loadPage(page, event) {
  event.preventDefault();
  fetch(page + '.html')
    .then(response => response.text())
    .then(html => {
      const main = document.getElementById('main-content');
      if (main) main.innerHTML = html;
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const logoName = document.querySelector(".logo-name");
    const logoAbout = document.querySelector(".logo-about");

    logoName.addEventListener("click", () => {
      logoName.classList.toggle("active");
      logoAbout.classList.toggle("deactivate");
    });
  });

const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
  logo.classList.add('active');

  setTimeout(() => {
    logo.classList.remove('active');
  }, 1000);
});
