/*!
 * main.js - Interacciones para landing page Servicio Técnico Lavarropas
 * -------------------------------------------------
 * 1. Header sticky + shadow on scroll
 * 2. Mobile navigation toggle
 * 3. FAQ accordion behavior
 * 4. Reveal on scroll with IntersectionObserver
 * 5. Contact form → WhatsApp
 * 6. Year en footer
 * -------------------------------------------------*/
(() => {
  "use strict";

  // Helper: add .js class (already done in HTML)
  // Reveal on scroll
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.1,
      }
    );
    revealObserver.observe(revealElements);
  }

  // Mobile navigation
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    let isMenuOpen = false;
    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
      navToggle.setAttribute("aria-expanded", isMenuOpen);
      navLinks.setAttribute("aria-expanded", isMenuOpen);
      if (isMenuOpen) {
        navToggle.classList.add("active");
        navLinks.classList.add("nav-open");
        document.body.style.overflow = "hidden"; // prevent scroll behind modal
      } else {
        navToggle.classList.remove("active");
        navLinks.classList.remove("nav-open");
        document.body.style.overflow = "";
      }
    };
    navToggle.addEventListener("click", toggleMenu);

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu();
      });
    });
  }

  // FAQ: close others when one opens
  const faqSummaries = document.querySelectorAll(".faq__summary");
  if (faqSummaries.length) {
    faqSummaries.forEach((summary) => {
      summary.addEventListener("click", (e) => {
        const details = summary.parentElement;
        // If this one is already open, close it
        if (details.hasAttribute("open")) {
          details.removeAttribute("open");
        } else {
          // Close all others
          faqSummaries.forEach((other) => {
            const otherDetails = other.parentElement;
            if (otherDetails.hasAttribute("open") && otherDetails !== details) {
              otherDetails.removeAttribute("open");
            }
          });
          // Open this one
          details.setAttribute("open", "");
        }
      });
    });
  }

  // Contact form → WhatsApp
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      // Basic validation
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      // Build WhatsApp message
      const nombre = form.elements["nombre"].value.trim();
      const telefono = form.elements["telefono"].value.trim();
      const marca = form.elements["marca"].value.trim() || "Otra";
      const falla = form.elements["falla"].value.trim();
      const waText = `Hola! Solicito presupuesto para reparación de lavarropa. Nombre: ${nombre}. Teléfono: ${telefono}. Marca: ${marca}. Falla: ${falla}`;
      const waUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
      // Reset form
      form.reset();
      form.classList.remove("was-validated");
    });
  }

  // Header shadow on scroll
  const header = document.querySelector(".header");
  if (header) {
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down
        header.classList.add("scrolled");
      } else {
        // Scroll up
        header.classList.remove("scrolled");
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    });
  }

  // Year en footer
  const yearElement = document.querySelector(".footer__copyright span");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
})();