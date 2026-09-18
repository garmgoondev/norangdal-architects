"use client";

import React, { useState, useEffect } from "react";
import { Project } from "@/data/projects";
import { X, Award, ChevronLeft, ChevronRight, FileText, Compass, Layers } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onOpenConsultation,
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"photos" | "drawings" | "spec">("photos");
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-full sm:h-[92vh] bg-white sm:rounded-sm overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-neutral-900 text-white flex items-center justify-between border-b border-neutral-800 shrink-0">
          <div>
            <span className="text-[10px] tracking-[0.2em] text-neutral-400 font-mono uppercase block">
              {project.categoryLabel} • {project.year}
            </span>
            <h3 className="text-base sm:text-lg font-serif font-light text-white truncate max-w-xl">
              {project.titleKo}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-200 bg-neutral-100 text-xs font-medium tracking-wider text-neutral-600 shrink-0">
          <button
            onClick={() => setActiveTab("photos")}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "photos"
                ? "border-neutral-900 bg-white text-neutral-900 font-bold"
                : "border-transparent hover:bg-neutral-50"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>준공 및 투시도 사진 ({project.images.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("drawings")}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "drawings"
                ? "border-neutral-900 bg-white text-neutral-900 font-bold"
                : "border-transparent hover:bg-neutral-50"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>건축 도면 & 다이어그램 ({project.drawings.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("spec")}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer ${
              activeTab === "spec"
                ? "border-neutral-900 bg-white text-neutral-900 font-bold"
                : "border-transparent hover:bg-neutral-50"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>건축개요 & 사양표</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="grow overflow-y-auto p-6 sm:p-8 space-y-8 bg-neutral-50">
          {/* TAB 1: PHOTOS */}
          {activeTab === "photos" && (
            <div className="space-y-6">
              {/* Main Photo View */}
              <div className="relative aspect-16/10 bg-neutral-900 overflow-hidden rounded-xs flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images[currentPhotoIdx]}
                  alt={`${project.titleKo} ${currentPhotoIdx + 1}`}
                  className="w-full h-full object-contain"
                />

                {/* Photo Slider Controls */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentPhotoIdx((prev) =>
                          prev === 0 ? project.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-neutral-900/60 hover:bg-neutral-900 text-white rounded-full transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentPhotoIdx((prev) => (prev + 1) % project.images.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-neutral-900/60 hover:bg-neutral-900 text-white rounded-full transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 px-3 py-1 bg-neutral-950/70 text-white text-[11px] font-mono rounded-xs">
                  {currentPhotoIdx + 1} / {project.images.length}
                </div>
              </div>

              {/* Photo Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPhotoIdx(idx)}
                    className={`relative w-24 h-16 shrink-0 rounded-xs overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === currentPhotoIdx
                        ? "border-neutral-900 opacity-100 scale-95"
                        : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Narrative Summary */}
              <div className="bg-white p-6 rounded-xs border border-neutral-200">
                <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
                  DESIGN CONCEPT & NARRATIVE
                </h4>
                <div className="space-y-3 text-sm text-neutral-700 leading-relaxed font-light">
                  {project.description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DRAWINGS */}
          {activeTab === "drawings" && (
            <div className="space-y-8">
              <div className="bg-amber-50/80 border-l-4 border-amber-600 p-4 text-xs text-amber-900">
                <strong>건축가 지적 자산 안내</strong>: 본 도면은 노랑달 건축사사무소의 공식 실시설계 및 공모 출품 자료이며, 건축주의 프라이버시 및 저작권 보호를 위해 축척과 상세 치수가 보호 처리되어 있습니다.
              </div>

              {project.drawings.map((drawing, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 p-6 rounded-xs space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                    <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-800" />
                      <span>{drawing.title}</span>
                    </h4>
                    <span className="text-xs text-neutral-400 font-mono">
                      DRAWING 0{idx + 1}
                    </span>
                  </div>

                  <div className="bg-neutral-100 border border-neutral-200 p-2 rounded-xs overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={drawing.url}
                      alt={drawing.title}
                      className="w-full max-h-[500px] object-contain mx-auto mix-blend-multiply"
                    />
                  </div>

                  <p className="text-xs text-neutral-500 font-light italic">
                    • {drawing.caption}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: SPECIFICATION TABLE */}
          {activeTab === "spec" && (
            <div className="space-y-6">
              {/* Award Banner if any */}
              {project.spec.awardOrStatus && (
                <div className="flex items-center gap-2 p-4 bg-amber-500/10 border border-amber-500/30 text-amber-900 rounded-xs text-sm">
                  <Award className="w-5 h-5 text-amber-700" />
                  <span className="font-semibold">{project.spec.awardOrStatus}</span>
                </div>
              )}

              {/* SPEC TABLE A: Architectural Overview */}
              <div className="bg-white border border-neutral-200 rounded-xs overflow-hidden">
                <div className="px-6 py-4 bg-neutral-900 text-white font-serif text-sm tracking-wide">
                  A. 건축 개요 (Architectural Overview)
                </div>
                <table className="w-full text-xs text-left border-collapse">
                  <tbody className="divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50 w-1/3">
                        대지 위치 (Location)
                      </th>
                      <td className="py-3 px-6 text-neutral-900">{project.spec.location}</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        대지 면적 (Site Area)
                      </th>
                      <td className="py-3 px-6 text-neutral-900 font-mono">
                        {project.spec.siteArea}
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        건축 면적 (Building Area)
                      </th>
                      <td className="py-3 px-6 text-neutral-900 font-mono">
                        {project.spec.buildingArea}
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        연면적 (Gross Area)
                      </th>
                      <td className="py-3 px-6 text-neutral-900 font-mono">
                        {project.spec.grossArea}
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        건폐율 / 용적률 (FAR)
                      </th>
                      <td className="py-3 px-6 text-neutral-900 font-mono">
                        건폐율 {project.spec.coverageRatio} / 용적률 {project.spec.floorAreaRatio}
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        건물 규모 (Scale)
                      </th>
                      <td className="py-3 px-6 text-neutral-900">{project.spec.scale}</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        구조 공법 (Structure)
                      </th>
                      <td className="py-3 px-6 text-neutral-900">{project.spec.structure}</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        외벽 마감재 (Exterior Finish)
                      </th>
                      <td className="py-3 px-6 text-neutral-900">
                        {project.spec.exteriorFinish}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SPEC TABLE B: Credits */}
              <div className="bg-white border border-neutral-200 rounded-xs overflow-hidden">
                <div className="px-6 py-4 bg-neutral-800 text-white font-serif text-sm tracking-wide">
                  B. 설계 크레딧 (Project Credits)
                </div>
                <table className="w-full text-xs text-left border-collapse">
                  <tbody className="divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50 w-1/3">
                        설계 총괄 (Principal)
                      </th>
                      <td className="py-3 px-6 text-neutral-900 font-medium">
                        {project.spec.principalArchitect}
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        설계팀 (Design Team)
                      </th>
                      <td className="py-3 px-6 text-neutral-900">{project.spec.team}</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <th className="py-3 px-6 font-medium text-neutral-500 bg-neutral-50/50">
                        저작권 (Copyright)
                      </th>
                      <td className="py-3 px-6 text-neutral-500 font-mono">
                        © NORANGDAL ARCHITECTS. All rights reserved.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 bg-white border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-neutral-500">
            <span className="font-medium text-neutral-900">노랑달 건축사사무소</span>와 이와
            유사한 프로젝트 설계를 상담하시겠습니까?
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-neutral-300 text-neutral-700 text-xs font-medium tracking-wider hover:bg-neutral-50 cursor-pointer"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-5 py-2 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold tracking-wider transition-colors cursor-pointer"
            >
              대지 사전 검토 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
