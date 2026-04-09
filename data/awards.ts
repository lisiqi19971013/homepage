import type { I18nText } from "@/contexts/LanguageContext";

export interface Award {
  title: I18nText;
  organization: I18nText;
  year: number;
}

export const awards: Award[] = [
  {
    title: {
      zh: "清华大学水木学者",
      en: 'Tsinghua University "Shuimu Scholar"',
    },
    organization: { zh: "清华大学", en: "Tsinghua University" },
    year: 2024,
  },
  {
    title: {
      zh: "博士后国家资助计划C档",
      en: "China Postdoctoral Science Foundation (Category C)",
    },
    organization: {
      zh: "中国博士后科学基金会",
      en: "China Postdoctoral Science Foundation",
    },
    year: 2025,
  },
];
