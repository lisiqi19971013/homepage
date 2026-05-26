import type { I18nText } from "@/contexts/LanguageContext";

export interface NewsItem {
  date: string;
  content: I18nText;
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-05",
    content: {
      zh: "一篇论文 ColorPCR++ 被 IEEE TPAMI 录用。",
      en: "Our paper ColorPCR++ has been accepted by IEEE TPAMI.",
    },
  },
  {
    date: "2026-04",
    content: {
      zh: "我们的工作 SoftHGNN 被 IJCV (International Journal of Computer Vision) 录用。",
      en: "Our work SoftHGNN has been accepted by IJCV (International Journal of Computer Vision).",
    },
  },
];
