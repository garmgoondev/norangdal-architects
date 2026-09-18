"use client";

import React, { useState, useEffect } from "react";
import { STUDIO_INFO } from "@/data/projects";
import { Menu, X, Phone, ExternalLink, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORKS", href: "#works" },
    { name: "ABOUT", href: "#about" },
    { name: "PROCESS", href: "#process" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-neutral-200/80 shadow-xs"
          : "bg-white/80 backdrop-blur-xs py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex flex-col">
          <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
            {STUDIO_INFO.nameKo}
          </span>
          <span className="text-[10px] tracking-[0.25em] text-neutral-500 font-sans uppercase">
            {STUDIO_INFO.nameEn}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neutral-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-neutral-900 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* External Links */}
          <div className="flex items-center gap-4 pl-4 border-l border-neutral-200 text-neutral-400">
            <a
              href={STUDIO_INFO.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 transition-colors text-[11px] flex items-center gap-1"
              title="네이버 블로그"
            >
              <span>BLOG</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-600 transition-colors text-[11px] flex items-center gap-1"
              title="인스타그램"
            >
              <span>INSTA</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Consultation CTA */}
          <button
            onClick={onOpenConsultation}
            className="ml-2 px-4 py-2 text-xs tracking-wider bg-neutral-900 text-white hover:bg-amber-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>대지 검토 의뢰</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Action Buttons */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href={`tel:${STUDIO_INFO.mobile}`}
            className="p-2 text-neutral-700 hover:text-amber-800"
            title="대표 건축가 전화연결"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-800 focus:outline-hidden"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-neutral-700 border-b border-neutral-100 hover:text-amber-800"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-6 py-2 text-xs text-neutral-500">
              <a
                href={STUDIO_INFO.blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 flex items-center gap-1"
              >
                <span>네이버 블로그</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-600 flex items-center gap-1"
              >
                <span>인스타그램</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-2 w-full py-3 bg-neutral-900 text-white text-xs tracking-widest uppercase hover:bg-amber-800 transition-colors text-center"
            >
              대지 분석 및 설계 상담 신청
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
