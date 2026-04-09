"use client";

import { awards } from "@/data/awards";
import { useLang } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

export default function Awards() {
  const { lang, t } = useLang();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title={lang === "en" ? "Honors & Awards" : "获奖与荣誉"}
        />

        <ul className="space-y-3">
          {awards.map((award, idx) => (
            <li
              key={idx}
              className="flex items-baseline gap-4 rounded-md px-4 py-3 transition-colors hover:bg-gray-50"
            >
              <span className="flex-shrink-0 text-sm font-semibold text-primary-600">
                {award.year}
              </span>
              <div>
                <span className="font-medium text-gray-900">
                  {t(award.title)}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  — {t(award.organization)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
