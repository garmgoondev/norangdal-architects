import React from "react";
import { STUDIO_INFO } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Statement (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <span className="font-serif text-lg text-white font-medium block">
              {STUDIO_INFO.nameKo}
            </span>
            <span className="text-[11px] tracking-widest uppercase text-neutral-500 font-mono block">
              {STUDIO_INFO.nameEn}
            </span>
            <p className="text-neutral-400 max-w-md leading-relaxed mt-2">
              {STUDIO_INFO.statement}
            </p>
          </div>

          {/* Col 2: Studio Information (4 cols) */}
          <div className="md:col-span-4 space-y-1.5 leading-relaxed">
            <div>
              <strong className="text-neutral-300 font-normal">대표 건축사:</strong>{" "}
              {STUDIO_INFO.founder} ({STUDIO_INFO.license})
            </div>
            <div>
              <strong className="text-neutral-300 font-normal">주소:</strong> {STUDIO_INFO.address}
            </div>
            <div>
              <strong className="text-neutral-300 font-normal">대표 전화:</strong>{" "}
              <a href={`tel:${STUDIO_INFO.tel}`} className="hover:text-white transition-colors">
                {STUDIO_INFO.tel}
              </a>{" "}
              |{" "}
              <strong className="text-neutral-300 font-normal">직통:</strong>{" "}
              <a href={`tel:${STUDIO_INFO.mobile}`} className="hover:text-white transition-colors">
                {STUDIO_INFO.mobile}
              </a>
            </div>
            <div>
              <strong className="text-neutral-300 font-normal">이메일:</strong>{" "}
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="hover:text-white transition-colors font-mono"
              >
                {STUDIO_INFO.email}
              </a>
            </div>
          </div>

          {/* Col 3: Channels (2 cols) */}
          <div className="md:col-span-2 space-y-2">
            <span className="text-[10px] tracking-widest text-neutral-500 uppercase block font-mono">
              CHANNELS
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={STUDIO_INFO.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <span>네이버 블로그</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <span>인스타그램</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-neutral-500 text-[11px] gap-4">
          <p>© {new Date().getFullYear()} NORANGDAL ARCHITECTS. All rights reserved.</p>
          <p className="font-mono text-[10px]">
            Designed for Architectural Excellence & Fast Mobile Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
