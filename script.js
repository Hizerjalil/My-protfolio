new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  loop: true
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
