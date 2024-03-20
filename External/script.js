let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header ul li a');
window.onscroll = () => {
      navLinks.forEach(link => {
            link.classList.remove('active');
      });
      sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                  document.querySelector(`header ul li a[href="#${id}"]`).classList.add('active');
            }
      });
      let header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
};