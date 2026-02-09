"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { WORK_EXPERIENCE } from "@/lib/about";
import { ChevronUp } from "lucide-react";

export default function WorkExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const onScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const isPast = rect.top < -100;
    setShowScrollTop(isPast);
  }, []);

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section
      ref={sectionRef}
      id="work-experience"
      className="container-custom section-padding relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left: Sticky title (giống Projects) */}
        <div className="lg:col-span-5 self-stretch">
          <div className="lg:sticky lg:top-[120px] h-fit flex flex-col gap-8">
            <h2 className="text-[12vw] lg:text-[7vw] font-bold leading-[0.9] tracking-tighter text-foreground">
              Work
              <br />
              experience.
            </h2>
          </div>
        </div>

        {/* Right: Danh sách kinh nghiệm (full height → section đủ cao, không đè lên Skills/Tools) */}
        <div className="lg:col-span-7 relative">
          <div className="pr-2">
            {WORK_EXPERIENCE.map((job, index) => (
              <div
                key={job.id}
                className={`pt-8 ${index === 0 ? "pt-0" : ""} pb-8 border-t border-muted/20`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {job.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base mt-0.5">
                      at{" "}
                      <span className="font-semibold text-foreground">
                        {job.company}
                      </span>
                    </p>
                  </div>
                  <p className="text-muted text-sm shrink-0 sm:text-right">
                    {job.dateRange}
                  </p>
                </div>
                <p className="text-muted text-sm md:text-base leading-relaxed mt-4">
                  {job.description}
                </p>
              </div>
            ))}
          </div>

          {/* Nút scroll to top - hiện khi user đã scroll qua section */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-8 lg:right-12 flex items-center justify-center w-12 h-12 rounded-full border border-muted/20 bg-card text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 shadow-lg z-20 ${
              showScrollTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
