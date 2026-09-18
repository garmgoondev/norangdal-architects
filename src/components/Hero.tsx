"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onSelectProject: (project: Project) => void;
}

export default function Hero({ onSelectProject }: HeroProps) {
  const featured = PROJECTS.slice(0, 3);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % featured.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const activeProject = featured[currentIdx];

  return (
    <section className="relative w-full h-[88vh] min-h-[580px] max-h-[920px] overflow-hidden bg-neutral-950 text-white select-none">
      {/* Background Slides (Pure Photographic Focus) */}
      {featured.map((p, idx) => (
        <div
          key={p.id}
          onClick={() => onSelectProject(p)}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
            idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          } transition-transform duration-7000`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.thumbnail}
            alt={p.titleKo}
            className="w-full h-full object-cover brightness-[0.88] hover:scale-102 transition-transform duration-1000"
          />
          {/* Subtle bottom vignette only */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-neutral-950/40 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Minimal Bottom Caption Bar */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          {/* Left: Minimal Project Identity & Click to View */}
          <div className="pointer-events-auto">
            <button
              onClick={() => onSelectProject(activeProject)}
              className="group text-left cursor-pointer flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono tracking-widest text-neutral-300 uppercase">
                  {activeProject.categoryLabel}
                </span>
                {activeProject.spec.awardOrStatus && (
                  <span className="px-2 py-0.5 bg-amber-500/90 text-neutral-950 text-[10px] font-semibold tracking-wider uppercase rounded-xs">
                    {activeProject.spec.awardOrStatus}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white tracking-tight drop-shadow-md group-hover:text-amber-300 transition-colors flex items-center gap-2">
                <span>{activeProject.titleKo}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 font-light font-serif italic mt-1 tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                {activeProject.titleEn}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider text-white/90 bg-neutral-900/60 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/20 group-hover:bg-white group-hover:text-neutral-950 transition-all">
                  <span>프로젝트 개요 & 도면 보기</span>
                  <span className="text-[10px]">→</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-mono tracking-wide">
                  ※ 시안용 연출 이미지 (실데이터 반영 가능)
                </span>
              </div>
            </button>
          </div>

          {/* Right: Counter & Navigation Controls */}
          <div className="pointer-events-auto flex items-center justify-between sm:justify-end gap-6">
            {/* Slide Index Counter */}
            <div className="text-xs font-mono tracking-widest text-neutral-300">
              <span className="text-white font-bold text-sm">0{currentIdx + 1}</span>
              <span className="text-neutral-500 mx-1.5">/</span>
              <span className="text-neutral-400">0{featured.length}</span>
            </div>

            {/* Minimal Nav Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() =>
                  setCurrentIdx((prev) => (prev === 0 ? featured.length - 1 : prev - 1))
                }
                className="p-2.5 rounded-full bg-neutral-900/50 hover:bg-neutral-900/80 backdrop-blur-xs text-white border border-white/20 transition-all cursor-pointer"
                aria-label="이전 사진"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIdx((prev) => (prev + 1) % featured.length)}
                className="p-2.5 rounded-full bg-neutral-900/50 hover:bg-neutral-900/80 backdrop-blur-xs text-white border border-white/20 transition-all cursor-pointer"
                aria-label="다음 사진"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Progress Bar at the Very Top */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-white/10 z-30">
        <div
          className="h-full bg-amber-500 transition-all duration-7000 ease-linear"
          style={{ width: `${((currentIdx + 1) / featured.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
