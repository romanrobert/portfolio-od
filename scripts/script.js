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
