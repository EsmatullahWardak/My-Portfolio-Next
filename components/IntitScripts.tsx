"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure the AOS styles are loaded!

export default function InitScripts() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false, // Set to true if you only want it to animate once
      mirror: true,
    });

    // This "refreshes" AOS to find all components after they load
    AOS.refresh();
  }, []);

  return null;
}