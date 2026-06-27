import { useEffect, useRef } from "react";

/**
 * Attach this ref to a container element.
 * All child elements with class "reveal" will animate in
 * when the container enters the viewport.
 */
export default function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
