"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { ChevronLeft, ChevronRight, Award, ArrowDown } from "lucide-react";

interface HeroProps {
  onSelectProject: (project: Project) => void;
}

export default function Hero({ onSelectProject }: HeroProps) {
  const featured = PROJECTS.slice(0, 3);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const activeProject = featured[currentIdx];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-neutral-950 text-white">
      {/* Background Slides */}
      {featured.map((p, idx) => (
        <div
          key={p.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          } transition-transform duration-10000`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.thumbnail}
            alt={p.titleKo}
            className="w-full h-full object-cover brightness-[0.72]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-900/40" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-8 flex flex-col justify-end pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          {activeProject.spec.awardOrStatus && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/90 text-neutral-950 text-[11px] font-semibold tracking-wider uppercase mb-4 rounded-xs">
              <Award className="w-3.5 h-3.5" />
              <span>{activeProject.spec.awardOrStatus}</span>
            </div>
          )}

          {/* Category & Location */}
          <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-neutral-300 font-sans uppercase mb-2">
            <span>{activeProject.categoryLabel}</span>
            <span className="text-neutral-500">•</span>
            <span>{activeProject.location}</span>
            <span className="text-neutral-500">•</span>
            <span>{activeProject.year}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight leading-tight text-white mb-4">
            {activeProject.titleKo}
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 font-light line-clamp-2 max-w-2xl mb-6">
            {activeProject.summary}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectProject(activeProject)}
              className="px-6 py-3 bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer"
            >
              프로젝트 도면 & 개요 보기
            </button>
            <a
              href="#works"
              className="px-5 py-3 border border-white/40 text-white hover:bg-white/10 text-xs font-medium tracking-widest uppercase transition-colors"
            >
              전체 작품 둘러보기
            </a>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-10 border-t border-white/20 mt-12">
          {/* Indicators */}
          <div className="flex items-center gap-3">
            {featured.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setCurrentIdx(idx)}
                className={`transition-all duration-300 ${
                  idx === currentIdx
                    ? "w-10 h-[2px] bg-white"
                    : "w-4 h-[2px] bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentIdx((prev) => (prev === 0 ? featured.length - 1 : prev - 1))}
              className="p-2 border border-white/30 text-white hover:bg-white/20 transition-colors"
              aria-label="이전 프로젝트"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentIdx((prev) => (prev + 1) % featured.length)}
              className="p-2 border border-white/30 text-white hover:bg-white/20 transition-colors"
              aria-label="다음 프로젝트"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down */}
      <a
        href="#works"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors hidden sm:flex items-center gap-1 text-[10px] tracking-widest uppercase"
      >
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3 h-3 animate-bounce" />
      </a>
    </section>
  );
}
