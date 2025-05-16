const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navMenu = document.querySelector(".brand-2");
const dropdowns = document.querySelectorAll(".Dropdown");
const subDropdowns = document.querySelectorAll(".sub-dropdown");

// Toggle mobile nav
menuBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// Toggle dropdowns on mobile
dropdowns.forEach((drop) => {
  drop.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      drop.classList.toggle("open");
    }
  });
});

subDropdowns.forEach((sub) => {
  sub.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      sub.classList.toggle("open");
    }
  });
});

window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });


  $(document).ready(function () {                  //Testimonial
  $(".testimonials-carousel2").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });
});

 document.querySelector('.current-year').textContent = new Date().getFullYear(); // Footer