document.addEventListener("DOMContentLoaded", () => {
    // Animate nav bar entrance
    const navs = document.querySelectorAll("nav");
    navs.forEach(nav => {
        nav.style.opacity = "0";
        nav.style.transform = "translateY(-30px)";
        nav.style.transition = "all 0.8s ease-out";
    });

    setTimeout(() => {
        navs.forEach(nav => {
            nav.style.opacity = "1";
            nav.style.transform = "translateY(0)";
        });
    }, 200);

    window.addEventListener('load', () => {
        const background = document.querySelector('.background');
        const bodyHeight = document.body.scrollHeight;
        background.style.minHeight = bodyHeight + 'px';
      });
      

          // Click animation on nav links
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            link.style.transition = "transform 0.1s ease";
            link.style.transform = "scale(0.95)";
            setTimeout(() => link.style.transform = "scale(1)", 150);
        });
    });

    // Smooth scroll for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});