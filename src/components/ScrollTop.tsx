"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-[#445D3B] text-white p-3 rounded-full shadow-lg hover:bg-[#445D3B]/90 transition-all duration-300 z-[999999] sm:flex items-center gap-2 group"
        >
          <ArrowUp className="h-6 w-6" />
          <span className="hidden sm:inline text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      )}
    </>
  );
}
