"use client";

import React, { useState, useEffect } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroProps {
  onSelectProject: (project: Project) => void;
}

export default function Hero({ onSelectProject }: HeroProps) {
  const featured = PROJECTS;
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % featured.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [featured.length]);

  const activeProject = featured[currentIdx];

  return (
    <section className="relative w-full h-[90vh] min-h-[580px] max-h-[960px] overflow-hidden bg-neutral-950 text-white select-none">
      {/* Background Slides (100% Photographic Immersion with Authentic Project Renders) */}
      {featured.map((p, idx) => (
        <div
          key={p.id}
          onClick={() => onSelectProject(p)}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
            idx === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-102 pointer-events-none"
          } transition-transform duration-6500`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.thumbnail}
            alt={p.titleKo}
            className="w-full h-full object-cover brightness-[0.95] hover:scale-101 transition-transform duration-1000"
          />
          {/* Minimal bottom shadow vignette only for subtle text readability */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent pointer-events-none" />
        </div>
      ))}

      {/* Top Slide Progress Bar */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-white/15 z-30 pointer-events-none">
        <div
          key={currentIdx}
          className="h-full bg-amber-400"
          style={{
            animation: "growProgress 6.5s linear infinite"
          }}
        />
      </div>

      {/* Bottom-Left Minimal Slide Counter & Nav */}
      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-20 flex items-center gap-4 text-xs font-mono tracking-widest text-white/70">
        <div className="flex items-center gap-1">
          <span className="text-white font-bold">0{currentIdx + 1}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/50">0{featured.length}</span>
        </div>
        <div className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <button
            onClick={() =>
              setCurrentIdx((prev) => (prev === 0 ? featured.length - 1 : prev - 1))
            }
            className="p-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="이전 사진"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentIdx((prev) => (prev + 1) % featured.length)}
            className="p-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="다음 사진"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* UTAA-Style Minimal Bottom-Right Caption */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 pointer-events-auto">
        <button
          onClick={() => onSelectProject(activeProject)}
          className="group text-right cursor-pointer flex flex-col items-end"
        >
          <div className="text-xs sm:text-sm font-sans font-light tracking-wide text-white/95 drop-shadow-md group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
            <span>{activeProject.titleKo}, {activeProject.year}</span>
            <span className="text-[10px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
              →
            </span>
          </div>
          <span className="text-[10px] text-amber-300/80 font-mono tracking-wider mt-0.5">
            공식 프로젝트 실데이터
          </span>
        </button>
      </div>

      <style jsx>{`
        @keyframes growProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
