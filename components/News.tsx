"use client";

import { news } from "@/data/news";
import { useLang } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

export default function News() {
  const { lang, t } = useLang();

  if (news.length === 0) return null;

  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          title={lang === "en" ? "News" : "最新动态"}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {news.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="whitespace-nowrap py-3 pr-6 align-top font-medium text-gray-500">
                    {item.date}
                  </td>
                  <td className="py-3 text-gray-700">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-primary-300 hover:text-primary-600"
                      >
                        {t(item.content)}
                      </a>
                    ) : (
                      t(item.content)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
