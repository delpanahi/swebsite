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
      

          
      
      
    // Target only <p> elements inside <div>
    const animatedParagraphs = Array.from(document.querySelectorAll("div > p"));

    animatedParagraphs.forEach((p, index) => {
        p.style.opacity = 0;
        p.style.transform = "translateY(20px)";
        p.style.transition = `opacity 0.8s ease-out ${index * 150}ms, transform 0.8s ease-out ${index * 150}ms`;
    });

    const fadeInOnScroll = () => {
        animatedParagraphs.forEach(p => {
            const rect = p.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100 && !p.classList.contains("visible")) {
                p.classList.add("visible");
                p.style.opacity = 1;
                p.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger once on load

    // Hover animations
    const hoverScaleElements = document.querySelectorAll("img, .menu a, .meetBoard nav");

    hoverScaleElements.forEach(el => {
        el.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

        el.addEventListener("mouseenter", () => {
            el.style.transform = "scale(1.03)";
            el.style.boxShadow = "0 8px 16px rgba(255, 205, 0, 0.3)";
        });

        el.addEventListener("mouseleave", () => {
            el.style.transform = "scale(1)";
            el.style.boxShadow = "none";
        });
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
