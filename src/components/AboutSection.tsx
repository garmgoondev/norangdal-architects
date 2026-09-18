import React from "react";
import { STUDIO_INFO } from "@/data/projects";
import { CheckCircle2, Award, ShieldCheck, UserCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] text-amber-800 uppercase block mb-2">
            PHILOSOPHY & PRINCIPAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight">
            도시의 결을 읽고,
            <br />
            빛과 온기를 채우는 건축
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-serif italic">
            &ldquo;{STUDIO_INFO.statement}&rdquo;
          </p>
        </div>

        {/* 2-Column Grid: Architect Profile & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Credentials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative aspect-3/4 overflow-hidden rounded-xs bg-neutral-100 border border-neutral-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt={`${STUDIO_INFO.founder} 대표 건축사`}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent p-6 text-white">
                <span className="text-xs font-mono tracking-wider text-amber-400 block mb-1">
                  PRINCIPAL ARCHITECT
                </span>
                <h3 className="text-2xl font-serif font-normal">{STUDIO_INFO.founder}</h3>
                <p className="text-xs text-neutral-300 font-light mt-1">{STUDIO_INFO.license}</p>
                <p className="text-[10px] text-amber-200/80 font-mono mt-2 pt-2 border-t border-white/10">
                  ※ 대표 건축사 프로필 시안 컷 (추후 실제 프로필 사진 반영)
                </p>
              </div>
            </div>

            {/* Credential Tags */}
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xs space-y-3">
              <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800" />
                <span>공인 자격 및 주요 이력</span>
              </h4>
              {STUDIO_INFO.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Studio Manifesto & Story (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
              {STUDIO_INFO.philosophy.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
              <div className="p-5 bg-neutral-50 border border-neutral-200/80">
                <div className="text-amber-800 font-mono text-xs font-bold mb-1">01. CONTEXT</div>
                <h5 className="font-serif font-medium text-neutral-900 text-sm mb-2">장소와 맥락</h5>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  주변 환경과 일조, 바람길을 분석하여 대지가 지닌 잠재력을 극대화합니다.
                </p>
              </div>

              <div className="p-5 bg-neutral-50 border border-neutral-200/80">
                <div className="text-amber-800 font-mono text-xs font-bold mb-1">02. FUNCTION</div>
                <h5 className="font-serif font-medium text-neutral-900 text-sm mb-2">삶과 쓰임새</h5>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  겉만 화려한 조형이 아닌, 거주자의 일상 동선과 유지관리를 세심하게 배려합니다.
                </p>
              </div>

              <div className="p-5 bg-neutral-50 border border-neutral-200/80">
                <div className="text-amber-800 font-mono text-xs font-bold mb-1">03. INTEGRITY</div>
                <h5 className="font-serif font-medium text-neutral-900 text-sm mb-2">책임 감리</h5>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  도면의 한 줄 선이 현장에서 오차 없이 실현되도록 대표 건축사가 직접 감리합니다.
                </p>
              </div>
            </div>

            {/* Highlight Banner */}
            <div className="p-6 bg-amber-900/5 border border-amber-900/20 rounded-xs flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-amber-800 font-bold block mb-1">
                  2024 PUBLIC COMPETITION PRIZE WINNER
                </span>
                <p className="text-sm font-serif font-normal text-neutral-900">
                  양주시 남면 실내체육시설 건립공사 설계공모 입상 아틀리에
                </p>
              </div>
              <a
                href="#works"
                className="text-xs font-semibold text-amber-800 hover:text-amber-900 underline underline-offset-4"
              >
                입상작 도면 및 개요 보기 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
