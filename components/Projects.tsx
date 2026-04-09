"use client";

import { projects } from "@/data/projects";
import { useLang } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const { lang, t } = useLang();

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title={lang === "en" ? "Research Projects" : "研究项目"}
          subtitle={lang === "en" ? "Funded Research" : "Research Projects"}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900">{t(project.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {t(project.description)}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {t(project.role)}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.period}
                </span>
                {project.funding && (
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {t(project.funding)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
