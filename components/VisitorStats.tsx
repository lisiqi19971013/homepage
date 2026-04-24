"use client";

import { useEffect, useState } from "react";
import { goatcounterBase } from "@/data/analytics";
import { useLang } from "@/contexts/LanguageContext";

type CounterResponse = {
  count?: string;
};

export default function VisitorStats() {
  const { lang } = useLang();
  const [totalVisitors, setTotalVisitors] = useState<string | null>(null);

  useEffect(() => {
    if (!goatcounterBase) return;

    const controller = new AbortController();

    fetch(`${goatcounterBase}/counter/TOTAL.json?no_branding=1`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: CounterResponse | null) => {
        if (data?.count) setTotalVisitors(data.count);
      })
      .catch(() => {
        // Ignore analytics fetch failures; the site should remain fully usable.
      });

    return () => controller.abort();
  }, []);

  if (!goatcounterBase) return null;

  return (
    <div className="mt-2 space-y-1 text-[11px] text-gray-400">
      <p>
        {lang === "en" ? "Total visitors:" : "累计访问："}{" "}
        <span className="font-medium text-gray-500">
          {totalVisitors ?? (lang === "en" ? "Loading..." : "加载中...")}
        </span>
      </p>
      <p>
        {lang === "en"
          ? "Region breakdown is available in the analytics dashboard."
          : "地区分布请在统计后台查看。"}
      </p>
    </div>
  );
}
