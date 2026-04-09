"use client";

import { services } from "@/data/services";
import { useLang } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

export default function Services() {
  const { lang, t } = useLang();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title={lang === "en" ? "Services" : "学术服务"}
        />

        <div className="space-y-8">
          {services.map((category, idx) => (
            <div key={idx}>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                {t(category.title)}
              </h3>
              <ul className="list-inside list-disc space-y-1.5 text-sm text-gray-600">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
