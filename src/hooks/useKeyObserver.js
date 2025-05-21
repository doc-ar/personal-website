import { useEffect } from "react";

export default function useKeyObserver(target, setKey) {
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setKey((prev) => {
          prev + 1;
        });
      }
    });

    const hiddenElements = document.querySelectorAll(target);
    hiddenElements.forEach((element) => observer.observe(element));
  });
}
