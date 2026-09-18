"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/projects";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

type CategoryType = "ALL" | "PUBLIC" | "COMMERCIAL" | "RENOVATION";

export default function WorksSection({ onSelectProject }: WorksSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("ALL");

  const categories: { key: CategoryType; label: string }[] = [
    { key: "ALL", label: "전체 작품 (ALL 9)" },
    { key: "PUBLIC", label: "공공 · 문화 · 복지 (PUBLIC)" },
    { key: "COMMERCIAL", label: "업무 · 코워킹 (COMMERCIAL)" },
    { key: "RENOVATION", label: "공간 환경개선 (RENOVATION)" },
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="works" className="py-24 sm:py-32 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-300">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-neutral-500 uppercase block mb-2 font-semibold">
              NORANGDAL ARCHITECTURAL WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-neutral-900 tracking-tight">
              주요 프로젝트 아카이브
            </h2>
          </div>
          <div className="mt-3 md:mt-0 max-w-md">
            <p className="text-xs sm:text-sm text-neutral-500 font-light">
              복합커뮤니티센터, 공공도서관, 코워킹스페이스부터 민속예술관과 환경개선까지
              사용자의 이야기를 바탕으로 구현된 노랑달건축사사무소의 주요 설계 프로젝트 아카이브입니다.
            </p>
            <p className="text-[10px] font-mono text-neutral-400 mt-1 font-light">
              ※ 현재 등록된 조감도는 시안용 이미지이며, 추후 고화질 원본 이미지 및 추가 도면 데이터로 업데이트가 가능합니다.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 text-xs tracking-wider transition-all rounded-xs cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-neutral-900 text-white font-medium shadow-xs"
                  : "bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-white border border-neutral-200/80 hover:border-neutral-900/40 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container with Authentic Project Renders */}
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.thumbnail}
                  alt={project.titleKo}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-300" />

                {/* Status Badge */}
                {project.spec.awardOrStatus && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-neutral-900/85 backdrop-blur-xs text-amber-300 text-[10px] font-mono tracking-wider rounded-xs flex items-center gap-1 shadow-xs border border-white/10">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{project.spec.use}</span>
                  </div>
                )}

                {/* Concept/Virtual Image Badge (only when isMockupImage is true) */}
                {project.isMockupImage && (
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-neutral-950/75 backdrop-blur-xs text-white/80 text-[9px] font-mono tracking-wider rounded-xs pointer-events-none border border-white/10">
                    가상 이미지
                  </div>
                )}

                {/* Quick Action Overlay Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono mb-2">
                    <span className="text-amber-800 font-medium tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-lg font-serif font-normal text-neutral-900 group-hover:text-amber-800 transition-colors mb-1.5 leading-snug">
                    {project.titleKo}
                  </h3>

                  {project.conceptTitle && (
                    <p className="text-xs font-serif text-amber-950/80 font-normal italic mb-2">
                      &ldquo;{project.conceptTitle}&rdquo;
                    </p>
                  )}

                  <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed font-light mb-4">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 font-light">
                  <span className="truncate max-w-[180px]">{project.location.split(" ")[0]} {project.location.split(" ")[1] || ""}</span>
                  <span className="text-neutral-900 group-hover:translate-x-0.5 transition-transform font-medium shrink-0">
                    상세 및 도면 확인 →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
