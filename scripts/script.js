function setActiveNavLink() {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".navigation-list__item a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (
      linkPath === currentLocation ||
      (linkPath === "/" && currentLocation === "./")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveNavLink();

window.addEventListener("popstate", setActiveNavLink);

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(
    ".hero-content .avatar, .hero-content .wrapper h1, .hero-content .wrapper p, .hero-content .wrapper button",
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.inOut",
    }
  );
});
