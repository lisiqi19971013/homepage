"use client";

import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-xs text-gray-400">
        <p>
          &copy; {year} {profile.name.en} | {profile.name.zh}
        </p>
      </div>
    </footer>
  );
}
