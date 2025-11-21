"use client";

import { useEffect } from "react";

export default function InitScripts() {
  useEffect(() => {
    const run = () => {
      try {
        if (window.AOS) window.AOS.init();
        if (window.GLightbox) window.GLightbox();
        if (window.imagesLoaded) window.imagesLoaded();
        if (window.Isotope) {
          const grid = document.querySelector(".isotope-layout");
          if (grid) new window.Isotope(grid, { itemSelector: ".isotope-item" });
        }
        if (window.Swiper) new window.Swiper(".swiper", {});
      } catch (err) {
        console.error("Script init error:", err);
      }
    };

    // wait until everything is loaded
    if (document.readyState === "complete") run();
    else window.addEventListener("load", run);

    return () => window.removeEventListener("load", run);
  }, []);

  return null;
}
