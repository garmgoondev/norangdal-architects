"use client";

import React, { useState } from "react";
import { STUDIO_INFO } from "@/data/projects";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ConsultationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    program: "단독주택 / 상가주택 (Residence / Commercial)",
    timeline: "6개월 이내 (Within 6 months)",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location) {
      alert("성함, 연락처, 대지 위치를 입력해 주세요.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Contact & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-sans tracking-[0.25em] text-amber-800 uppercase block mb-2 font-semibold">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-neutral-900 tracking-tight leading-tight">
                설계 의뢰 및<br />대지 사전 검토 신청
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                설계에 대한 고민이 있으시다면 언제든 편안하게 문의해 주세요.
                토지 지번을 알려주시면 건축 인허가 가능 여부와 대략적인 건축 규모를 15년 이상 경력의 대표 건축사가 직접 검토해 드립니다.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-neutral-200 text-xs">
              <a
                href={`tel:${STUDIO_INFO.mobile}`}
                className="p-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xs flex items-center gap-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-800/10 text-amber-800 flex items-center justify-center shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-mono">대표 건축사 직통 번호</div>
                  <div className="text-sm font-serif font-medium text-neutral-900">
                    {STUDIO_INFO.mobile}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="p-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xs flex items-center gap-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-900/10 text-neutral-900 flex items-center justify-center shrink-0 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-mono">대표 이메일</div>
                  <div className="text-sm font-mono text-neutral-900">{STUDIO_INFO.email}</div>
                </div>
              </a>

              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-neutral-900/10 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 font-mono">사무소 위치</div>
                  <div className="text-xs font-serif font-medium text-neutral-900 leading-snug">
                    {STUDIO_INFO.address}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1">
                    (방이동 송암빌딩 3층 / 올림픽공원 인접)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 p-8 sm:p-10 rounded-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-neutral-900 font-normal">
                  사전 검토 신청이 접수되었습니다
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                  남겨주신 대지 정보({formData.location})를 바탕으로 이슬기 대표 건축사가
                  토지이용계획 및 법적 용적률을 사전 검토한 후, <strong>직접 연락</strong>을 드리겠습니다.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        location: "",
                        program: "단독주택 / 상가주택 (Residence / Commercial)",
                        timeline: "6개월 이내 (Within 6 months)",
                        notes: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-neutral-900 text-white text-xs tracking-wider cursor-pointer"
                  >
                    추가 문의 작성
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-serif font-medium text-neutral-900 mb-1">
                    프로젝트 사전 검토 양식
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    * 표시된 항목은 원활한 검토를 위해 필수 입력 사항입니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      성함 / 회사명 *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="예: 홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-900"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      연락처 (휴대전화) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="예: 010-1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-900"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                    대지 위치 (주소 또는 지번) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 서울특별시 송파구 방이동 00-0번지 (또는 경기도/지방 지번)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Program */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      희망 건축 용도
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-900"
                    >
                      <option>단독주택 / 상가주택 (Residence / Commercial)</option>
                      <option>다가구 · 다세대주택 (Multi-Family / Multi-Unit)</option>
                      <option>주상복합 / 근린생활시설 (Mixed-Use & Commercial)</option>
                      <option>공공건축물 / 현상설계 제안 (Public Architecture)</option>
                      <option>업무시설 / 오피스 사옥 (Office)</option>
                      <option>대수선 · 공간 환경개선 (Renovation)</option>
                      <option>토지 매입 전 사업성 검토 기획설계 (Feasibility)</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                      희망 착공 시기
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-900"
                    >
                      <option>3개월 이내 (즉시 협의 필요)</option>
                      <option>6개월 이내 (Within 6 months)</option>
                      <option>1년 이내 (Within 1 year)</option>
                      <option>토지 매입 전 사전 검토 단계</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                    추가 문의 및 희망 사항 (선택)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="원하시는 공간 콘셉트나 특별히 고려해야 할 가족 구성원, 일정 등을 편안하게 적어주세요."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-neutral-300 rounded-xs focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-neutral-900 hover:bg-amber-800 text-white text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>사전 대지 검토 및 상담 신청하기</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
