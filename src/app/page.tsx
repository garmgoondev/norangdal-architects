"use client";

import React, { useState } from "react";
import { Project } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenConsultation = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-amber-800 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero with Featured Projects */}
        <Hero onSelectProject={(p) => setSelectedProject(p)} />

        {/* 2. Architectural Works Grid with Filters */}
        <WorksSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 3. About Principal Architect & Studio Philosophy */}
        <AboutSection />

        {/* 4. 5-Step Architectural Journey */}
        <ProcessSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Land Pre-Review & Consultation Intake */}
        <ConsultationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Project Modal (Photos, Drawings & Spec Tables) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={handleOpenConsultation}
      />
    </div>
  );
}
