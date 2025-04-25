
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');
const btn = document.querySelector('.btn');

document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        
        navbarCollapse.classList.remove('show'); 
    
        navbarToggler.setAttribute('aria-expanded', 'false'); 
      }
    });
  });
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      
      if (entry.isIntersecting) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, {
    threshold: 0.5
  });

  
  sections.forEach(section => {
    observer.observe(section);
  });

  btn.addEventListener('click', function() {
    alert("Thank You for visiting my portfolio")
  })
    
});

 