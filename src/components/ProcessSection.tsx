import React from "react";
import { STUDIO_INFO } from "@/data/projects";
import { CheckCircle, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export default function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  return (
    <section id="process" className="py-24 sm:py-32 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] text-amber-400 uppercase block mb-2">
            DESIGN JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-white">
            투명하고 체계적인 건축 5단계 여정
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            건축은 평생에 한 번뿐인 소중한 프로젝트입니다.
            노랑달 건축사사무소는 대지 분석부터 준공 감리까지 모든 과정을 정직하고 투명하게 함께합니다.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
          {STUDIO_INFO.processSteps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-amber-500/90">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                </div>

                <h3 className="text-base font-serif font-medium text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 text-[10px] tracking-widest text-neutral-500 font-mono">
                PHASE 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-neutral-800/60 border border-neutral-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-serif font-medium text-white">
              소유하신 대지의 법적 건폐율과 용적률이 궁금하신가요?
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1">
              토지 지번(주소)을 남겨주시면 대표 건축사가 법적 조례와 건축 가능 규모를 사전 검토해 드립니다.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold tracking-widest uppercase transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>대지 사전 검토 신청하기</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
