document.addEventListener("DOMContentLoaded", () => {
  // Function buat menyembunyikan halaman utama dengan loading screen
  function hideLoadingScreen() {
      const loadingScreen = document.getElementById("loading-screen");
      const mainContent = document.getElementById("main-content");

      loadingScreen.style.display = "none"; // hide tampilan loading
      mainContent.style.display = "block"; // nampilin 
  }

  // Simulate a delay for loading screen
  setTimeout(hideLoadingScreen, 2000); 

  // Intersection Observer for fade-in effect
  const fadeElements = document.querySelectorAll(".fade-in");
  const observerOptions = { threshold: 0.5 }; // Adjust threshold as needed

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Stop observing after animation is applied
          }
      });
  }, observerOptions);

  fadeElements.forEach((element) => {
      observer.observe(element);
  });

  // Header background change on scroll
  const header = document.querySelector("header");
  const scrollThreshold = 50; // Adjust this value to determine when the background should appear

  window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > scrollThreshold);
  });

  // Toggle Navbar and Icon Animation on Menu Icon Click
  const menuIcon = document.getElementById("menuIcon");
  const navList = document.querySelector(".navlist");

  menuIcon.addEventListener("click", () => {
      navList.classList.toggle("active");
      menuIcon.classList.toggle("open"); // Toggle class for animation
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
      if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
          navList.classList.remove("active");
          menuIcon.classList.remove("open");
      }
  });
});

const texts = ["Web Developer", "Business Enthusiast", "Investor"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 100;
const delayBetweenTexts = 300;

function typeEffect() {
  const typingText = document.getElementById("typing-text");

  if (isDeleting) {
    typingText.textContent = texts[index].substring(0, charIndex--);
  } else {
    typingText.textContent = texts[index].substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === texts[index].length) {
    setTimeout(() => isDeleting = true, delayBetweenTexts);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeEffect, speed);
}

typeEffect();

document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.item');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.2 });

  projectItems.forEach((item, index) => {
      // Tambahkan kelas animasi bergantian berdasarkan indeks
      if (index % 2 === 0) {
          item.classList.add('slide-in-left'); // Proyek ganjil: slide dari kiri
      } else {
          item.classList.add('slide-in-right'); // Proyek genap: slide dari kanan
      }
      observer.observe(item);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active'); // Tambahkan kelas 'active' saat elemen masuk ke viewport
          } else {
              entry.target.classList.remove('active'); // Hapus kelas 'active' saat elemen keluar dari viewport
          }
      });
  }, {
      threshold: 0.1, // Trigger animasi ketika 20% elemen masuk ke viewport
  });

  // Target semua elemen dengan kelas 'reveal'
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((element) => {
      observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Observer untuk animasi slide-in-left dan slide-in-right
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active'); // Tambahkan kelas 'active' saat elemen masuk ke viewport
          } else {
              entry.target.classList.remove('active'); // Hapus kelas 'active' saat elemen keluar dari viewport
          }
      });
  }, {
      threshold: 0.2, // Trigger animasi ketika 20% elemen masuk ke viewport
  });

  // Target semua elemen dengan kelas animasi slide-in-left atau slide-in-right
  const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
  animatedElements.forEach((element) => {
      observer.observe(element);
  });
});