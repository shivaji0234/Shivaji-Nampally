
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
