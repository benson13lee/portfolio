      
const mobilePrevBtn = document.querySelector(".mobile-prev-btn");
const mobileNextBtn = document.querySelector(".mobile-next-btn");

const sections = ["home", "about", "works", "contact"];

function getCurrentSectionIndex() {
  let currentIndex = 0;

  sections.forEach((sectionId, index) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 120) {
      currentIndex = index;
    }
  });

  return currentIndex;
}

function updateMobileArrowButtons() {
  if (!mobilePrevBtn || !mobileNextBtn) return;

  const currentIndex = getCurrentSectionIndex();

  const prevIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  if (prevIndex < 0) {
    mobilePrevBtn.href = "#home";
    mobilePrevBtn.classList.add("is-disabled");
  } else {
    mobilePrevBtn.href = `#${sections[prevIndex]}`;
    mobilePrevBtn.classList.remove("is-disabled");
  }

  if (nextIndex >= sections.length) {
    mobileNextBtn.href = "#contact";
    mobileNextBtn.classList.add("is-disabled");
  } else {
    mobileNextBtn.href = `#${sections[nextIndex]}`;
    mobileNextBtn.classList.remove("is-disabled");
  }
}

window.addEventListener("scroll", updateMobileArrowButtons);
window.addEventListener("load", updateMobileArrowButtons);      
      
      
const isMobile = window.innerWidth <= 480;

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("is-visible");

      }

    });

  },

  {

    threshold: isMobile ? 0.01 : 0.1,

    rootMargin: isMobile ? "0px 0px 160px 0px" : "0px 0px 80px 0px",

  },

);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));