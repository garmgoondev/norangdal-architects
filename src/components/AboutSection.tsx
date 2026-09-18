import React from "react";
import { STUDIO_INFO } from "@/data/projects";
import { CheckCircle2, ShieldCheck, Award, Users, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] text-amber-800 uppercase block mb-2 font-semibold">
            ABOUT NORANGDAL ARCHITECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight">
            옐로우페이퍼 위에 소원을 그리는
            <br />
            <span className="font-normal text-amber-900">남매 건축가</span>의 아틀리에
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-serif italic">
            &ldquo;{STUDIO_INFO.statement}&rdquo;
          </p>
        </div>

        {/* Brand Origin & Narrative Banner */}
        <div className="mb-20 p-8 sm:p-10 bg-neutral-50 border border-neutral-200/90 rounded-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-bold">
            <BookOpen className="w-4 h-4" />
            <span>노랑달의 시작 (The Story of Norangdal)</span>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-4xl">
            {STUDIO_INFO.philosophy.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-200 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500">
            <span>• 15년+ 실무 경력</span>
            <span>• 공공건축 현상설계 당선</span>
            <span>• 인허가 및 공사감리 직영 총괄</span>
          </div>
        </div>

        {/* Two Principals Profile Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Users className="w-5 h-5 text-amber-800" />
            <h3 className="text-xl sm:text-2xl font-serif font-light text-neutral-900">
              두 건축가의 전문성과 실무 경험
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {STUDIO_INFO.principals.map((principal, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xs overflow-hidden flex flex-col hover:border-neutral-400 transition-colors shadow-xs"
              >
                {/* Photo & Role Banner */}
                <div className="relative aspect-16/10 sm:aspect-16/9 bg-neutral-900 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={principal.photo}
                    alt={principal.nameKo}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />
                  
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 block uppercase">
                      {principal.role}
                    </span>
                    <h4 className="text-2xl font-serif font-normal mt-0.5">
                      {principal.nameKo}{" "}
                      <span className="text-sm font-sans font-light text-neutral-300">
                        {principal.nameEn}
                      </span>
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 font-light">
                      {principal.education} · {principal.license}
                    </p>
                    <p className="text-[9px] text-amber-200/80 font-mono mt-1">
                      {principal.photoNotice}
                    </p>
                  </div>
                </div>

                {/* Body: Career & Affiliations */}
                <div className="p-6 sm:p-8 space-y-6 grow flex flex-col justify-between">
                  {/* Major Career History */}
                  <div>
                    <h5 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-800" />
                      <span>주요 경력 및 대표 실적</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-neutral-700 font-light leading-relaxed">
                      {principal.careerHighlights.map((career, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-amber-800 font-bold shrink-0">•</span>
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Public Appointments / Affiliations */}
                  <div className="pt-4 border-t border-neutral-100">
                    <h5 className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-600" />
                      <span>위촉 및 공공 활동</span>
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {principal.affiliations.map((aff, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 bg-neutral-100 text-neutral-700 text-[11px] rounded-xs font-light"
                        >
                          {aff}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-neutral-200">
          <div className="p-6 bg-neutral-50 border border-neutral-200/80">
            <div className="text-amber-800 font-mono text-xs font-bold mb-1">01. STORY & USER</div>
            <h5 className="font-serif font-medium text-neutral-900 text-sm mb-2">사용자의 이야기</h5>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              사용자에 대한 깊은 이해를 바탕으로 공간을 사용하는 사람의 삶과 스토리가 오롯이 담기도록 설계합니다.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 border border-neutral-200/80">
            <div className="text-amber-800 font-mono text-xs font-bold mb-1">02. DIALOGUE & PROCESS</div>
            <h5 className="font-serif font-medium text-neutral-900 text-sm mb-2">과정의 즐거움과 소통</h5>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              건축주 및 다양한 생각과의 만남을 소중히 여기며, 투명하고 긴밀한 대화를 통해 기분 좋은 과정을 만듭니다.
            </p>
          </div>

          <div className="p-6 bg-neutral-50 border border-neutral-200/80">
            <div className="text-amber-800 font-mono text-xs font-bold mb-1">03. 15 YEARS RIGOR</div>
            <h5 className="font-serif font-medium text-neutral-900 text-sm mb-2">15년 이상의 정밀 감리</h5>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              기획부터 인허가, 실시설계와 시공 감리까지 다수의 풍부한 실무 경험으로 현장 오차 없는 완성을 보장합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
