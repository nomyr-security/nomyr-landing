"use client";

import { useEffect } from "react";

const revealSelector = [
  ".sec-head",
  ".stat",
  ".term",
  ".oss-point",
  ".panel",
  ".cmp-card",
  ".mode",
  ".wall-cell",
  "#integrations > .wrap > .cap",
  ".final .wrap",
  ".foot-brand",
  ".foot-col",
  ".foot-bottom",
].join(",");

export function MotionController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) return;

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );
    const motionRegions = Array.from(
      document.querySelectorAll<HTMLElement>(".motion-region"),
    );

    document.documentElement.classList.add("motion-enabled");

    revealItems.forEach((item) => {
      item.classList.add("motion-reveal");
      const siblings = Array.from(item.parentElement?.children ?? []).filter(
        (sibling) => sibling.matches(revealSelector),
      );
      const order = Math.min(siblings.indexOf(item), 4);
      item.style.setProperty("--reveal-delay", `${Math.max(order, 0) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    const regionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const region = entry.target as HTMLElement;
          const svg = region.querySelector<SVGSVGElement>("svg");
          region.classList.toggle("is-inview", entry.isIntersecting);

          if (!svg) return;
          if (entry.isIntersecting) svg.unpauseAnimations?.();
          else svg.pauseAnimations?.();
        });
      },
      { rootMargin: "120px 0px", threshold: 0 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    motionRegions.forEach((region) => regionObserver.observe(region));

    return () => {
      revealObserver.disconnect();
      regionObserver.disconnect();
      document.documentElement.classList.remove("motion-enabled");
      revealItems.forEach((item) => {
        item.classList.remove("motion-reveal", "is-revealed");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return null;
}
