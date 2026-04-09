"use client";

import { publications, type AuthorRole } from "@/data/publications";
import { useLang } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

const roleBadge: Record<AuthorRole, { en: string; zh: string; className: string } | null> = {
  first: {
    en: "First Author",
    zh: "第一作者",
    className: "bg-primary-50 text-primary-700 ring-primary-200",
  },
  corresponding: {
    en: "Corresponding",
    zh: "通讯作者",
    className: "bg-amber-50 text-amber-700 ring-amber-200",
  },
  "co-first": {
    en: "Co-first Author",
    zh: "共同一作",
    className: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  "co-author": null,
};

const typeBadgeClass = {
  journal: "bg-blue-50 text-blue-700 ring-blue-200",
  conference: "bg-violet-50 text-violet-700 ring-violet-200",
};

export default function Publications() {
  const { lang } = useLang();

  if (publications.length === 0) return null;

  const isHighlight = (role: AuthorRole) =>
    role === "first" || role === "corresponding" || role === "co-first";

  const totalCount = publications.length;
  const highlightCount = publications.filter((p) => isHighlight(p.role)).length;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title={lang === "en" ? "Selected Publications" : "部分论文"}
          subtitle={
            lang === "en"
              ? `${highlightCount} as first/corresponding author`
              : `第一/通讯作者 ${highlightCount} 篇`
          }
        />

        <ol className="space-y-4">
          {publications.map((pub, idx) => {
            const badge = roleBadge[pub.role];
            const highlight = isHighlight(pub.role);
            return (
              <li
                key={idx}
                className={`relative rounded-lg border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
                  highlight ? "border-primary-100" : "border-gray-100"
                }`}
              >
                {highlight && (
                  <span className="absolute -left-px inset-y-0 w-1 rounded-l-lg bg-primary-500" />
                )}

                {/* Index number */}
                <span className="absolute right-4 top-4 text-xs font-medium text-gray-300">
                  [{idx + 1}]
                </span>

                {/* Title */}
                <p className="pr-10 font-medium leading-snug text-gray-900">
                  {pub.title}
                </p>

                {/* Authors */}
                <p
                  className="mt-1.5 text-sm text-gray-600"
                  dangerouslySetInnerHTML={{ __html: pub.authors }}
                />

                {/* Venue + pages */}
                <p className="mt-1 text-sm italic text-gray-500">
                  {pub.venue}
                  {pub.pages && `, ${pub.pages}`}
                </p>

                {/* Badges row */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${typeBadgeClass[pub.type]}`}
                  >
                    {pub.venueShort}
                  </span>

                  <span className="text-[11px] text-gray-400">
                    {pub.type === "journal"
                      ? lang === "en" ? "Journal" : "期刊"
                      : lang === "en" ? "Conference" : "会议"}
                    {" \u00B7 "}
                    {pub.year}
                  </span>

                  {badge && (
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${badge.className}`}
                    >
                      {lang === "en" ? badge.en : badge.zh}
                    </span>
                  )}

                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-primary-600 hover:text-primary-700"
                    >
                      [DOI]
                    </a>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-primary-600 hover:text-primary-700"
                    >
                      [PDF]
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
