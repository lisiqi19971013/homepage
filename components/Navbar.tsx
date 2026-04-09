"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { profile } from "@/data/profile";
import { useLang } from "@/contexts/LanguageContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = {
  en: [
    { label: "About", href: "/" },
    { label: "Publications", href: "/publications" },
    { label: "Honors & Awards", href: "/awards" },
    { label: "Services", href: "/services" },
  ],
  zh: [
    { label: "简介", href: "/" },
    { label: "论文发表", href: "/publications" },
    { label: "获奖荣誉", href: "/awards" },
    { label: "学术服务", href: "/services" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();
  const pathname = usePathname();
  const links = navLinks[lang];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          {t(profile.name)}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                isActive(link.href)
                  ? "font-medium text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="ml-1 text-xs text-gray-400">(current)</span>
              )}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-3">
            <a
              href={`${BASE}/cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {lang === "en" ? "CV" : "简历"}
            </a>
            <button
              onClick={toggleLang}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
              title={lang === "en" ? "切换到中文" : "Switch to English"}
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-6 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${
                isActive(link.href)
                  ? "font-medium text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <a
              href={`${BASE}/cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-primary-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-primary-700"
            >
              {lang === "en" ? "CV" : "简历"}
            </a>
            <button
              onClick={toggleLang}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              {lang === "en" ? "中文" : "EN"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
