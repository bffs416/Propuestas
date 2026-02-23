'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LandingPageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll Reveal Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // We can unobserve after it has been revealed
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.reveal');
    elementsToObserve.forEach((el) => {
      observer.observe(el);
    });

    // Background Motion Sensitivity (Subtle)
    const handleMouseMove = (e: MouseEvent) => {
      const blobs = document.querySelectorAll('.dynamic-blob');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      blobs.forEach((blob, index) => {
        const shift = (index + 1) * 20;
        if (blob instanceof HTMLElement) {
            blob.style.transform = `translate(${x * shift}px, ${y * shift}px)`;
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      elementsToObserve.forEach((el) => {
        observer.unobserve(el);
      });
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [pathname]);

  return null;
}
