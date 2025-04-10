     
      // Theme Toggle
      const themeToggle = document.getElementById("theme-toggle");
      const body = document.body;
      const icon = themeToggle.querySelector("i");

      // Check for saved theme preference or use preferred color scheme
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        body.classList.add("dark-mode");
        icon.classList.replace("fa-moon", "fa-sun");
      }

      themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
          icon.classList.replace("fa-moon", "fa-sun");
          localStorage.setItem("theme", "dark");
        } else {
          icon.classList.replace("fa-sun", "fa-moon");
          localStorage.setItem("theme", "light");
        }
      });

      // Mobile Menu Toggle
      const menuToggle = document.getElementById("menu-toggle");
      const navLinks = document.querySelector(".nav-links");

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.querySelector("i").classList.toggle("fa-times");
      });

      // Close mobile menu when clicking a link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
          menuToggle.querySelector("i").classList.remove("fa-times");
        });
      });

      // Sticky Header on Scroll
      window.addEventListener("scroll", () => {
        // header.classList.toggle("sticky", window.scrollY > 0);
      });

      // Active link highlighting
      const sections = document.querySelectorAll("section");
      const navItems = document.querySelectorAll(".nav-links a");

      window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute("id");
          }
        });

        navItems.forEach((item) => {
          item.classList.remove("active");
          if (item.getAttribute("href") === `#${current}`) {
            item.classList.add("active");
          }
        });
      });

      // Scroll Animation
      const animateElements = document.querySelectorAll(
        ".about h2, .about-img, .about-text, .services h2, .service-card, .portfolio h2, .portfolio-item, .contact h2, .contact-info, .contact-form"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      animateElements.forEach((element) => {
        observer.observe(element);
      });

      // Smooth Scrolling for Anchor Links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });