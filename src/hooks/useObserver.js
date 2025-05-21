import { useEffect } from "react";

export default function useObserver(target, new_class) {
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        entry[0].target.classList.add(new_class);
      }
    });

    const hiddenElements = document.querySelectorAll(target);
    hiddenElements.forEach((element) => observer.observe(element));
  });
}
