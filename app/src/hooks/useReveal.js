import { useEffect } from 'react';

export function useReveal(selector = '[data-reveal]', options = {}) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector));
    if (!nodes.length) return undefined;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) {
      nodes.forEach((node) => node.setAttribute('data-shown', 'true'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-shown', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold, selector]);
}
