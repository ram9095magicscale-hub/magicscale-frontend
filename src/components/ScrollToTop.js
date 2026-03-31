import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash === "") {
      window.scrollTo(0, 0);
    } else {
      // Find the element with the hash ID
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // If element not found, default to top
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
